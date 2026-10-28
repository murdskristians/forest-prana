import { useCallback, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { catalogById, isCategoryId, type CategoryFilter } from './lib/catalog';
import { scrollToId } from './lib/format';
import About from './components/About';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import Hero from './components/Hero';
import OrderDrawer, { MobileOrderDock } from './components/OrderDrawer';
import Policies from './components/Policies';
import ProductDialog from './components/ProductDialog';
import SiteHeader from './components/SiteHeader';
import { palette } from './theme';

export default function App() {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [query, setQuery] = useState('');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [orderOpen, setOrderOpen] = useState(false);

  useEffect(() => {
    const apply = () => {
      const id = window.location.hash.replace(/^#/, '');
      if (isCategoryId(id)) {
        setFilter(id);
        setQuery('');
        scrollToId('katalogs');
      }
      setActiveId(catalogById.has(id) ? id : null);
    };
    window.addEventListener('hashchange', apply);
    window.addEventListener('popstate', apply);
    apply();
    return () => {
      window.removeEventListener('hashchange', apply);
      window.removeEventListener('popstate', apply);
    };
  }, []);

  const openOrder = useCallback(() => {
    setOrderOpen(true);
    setActiveId(null);
    const id = window.location.hash.replace(/^#/, '');
    if (catalogById.has(id)) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#katalogs`);
    }
  }, []);

  const openProduct = useCallback((id: string) => {
    setOrderOpen(false);
    setActiveId(id);
    const nextHash = `#${id}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState({ product: id }, '', `${window.location.pathname}${window.location.search}${nextHash}`);
    }
  }, []);

  const closeProduct = useCallback(() => {
    setActiveId(null);
    const id = window.location.hash.replace(/^#/, '');
    if (catalogById.has(id)) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#katalogs`);
    }
  }, []);

  return (
    <>
      <Box
        component="a"
        href="#saturs"
        sx={{
          position: 'absolute',
          left: 8,
          top: -48,
          zIndex: 40,
          bgcolor: palette.cream,
          color: palette.ink,
          px: 2,
          py: 1,
          borderRadius: 1,
          '&:focus': { top: 8 },
        }}
      >
        Uz saturu
      </Box>
      <SiteHeader onOpenOrder={openOrder} />
      <Box component="main" id="saturs" tabIndex={-1} sx={{ outline: 'none' }}>
        <Hero />
        <Catalog filter={filter} query={query} onFilter={setFilter} onQuery={setQuery} onOpen={openProduct} />
        <About />
        <Policies />
      </Box>
      <Footer />
      <ProductDialog productId={activeId} onClose={closeProduct} onOpenOrder={openOrder} />
      <OrderDrawer open={orderOpen} onClose={() => setOrderOpen(false)} />
      <MobileOrderDock hidden={Boolean(activeId) || orderOpen} onOpen={openOrder} />
    </>
  );
}
