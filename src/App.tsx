import { Box, Divider, Typography } from '@mui/material';
import Hero from './components/Hero';
import About from './components/About';
import CatalogOverview from './components/CatalogOverview';
import CategoryIndex from './components/CategoryIndex';
import ProductCard from './components/ProductCard';
import Vinegars from './components/Vinegars';
import Contacts from './components/Contacts';
import { Delivery, Terms } from './components/InfoSections';
import { categories, citi, oximeli, ziedes, type Product } from './data/products';

const divider = <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mx: 'auto', maxWidth: 1100 }} />;

function ProductList({ products, alternate }: { products: Product[]; alternate?: boolean }) {
  return (
    <>
      {products.map((p, i) => (
        <Box key={p.id}>
          {i > 0 && divider}
          <ProductCard product={p} imageRight={alternate && i % 2 === 1} />
        </Box>
      ))}
    </>
  );
}

export default function App() {
  return (
    <Box component="main">
      <Hero />
      <About />
      <CatalogOverview />

      <CategoryIndex {...categories.oximeli} products={oximeli} columns={3} />
      <ProductList products={oximeli} />

      <CategoryIndex {...categories.ziedes} products={ziedes} columns={2} serif />
      <ProductList products={ziedes} />

      {divider}
      <Vinegars />

      <CategoryIndex {...categories.citi} products={citi} columns={2} serif />
      <ProductList products={citi} alternate />

      {divider}
      <Contacts />
      {divider}
      <Terms />
      {divider}
      <Delivery />

      <Box component="footer" sx={{ bgcolor: '#000', py: 1.5, textAlign: 'center' }}>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
          © {new Date().getFullYear()} Forest Prana · Rāmava, Latvija
        </Typography>
      </Box>
    </Box>
  );
}
