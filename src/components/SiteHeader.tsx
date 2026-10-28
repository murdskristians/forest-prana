import { useEffect, useState } from 'react';
import { Badge, Box, Button, Container, Drawer, IconButton, Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { images, WHATSAPP_URL } from '../data/products';
import { itemWord } from '../lib/format';
import { useOrder } from '../lib/order';
import { headerHeight, palette } from '../theme';

const links = [
  { href: '#katalogs', label: 'Katalogs' },
  { href: '#par-mani', label: 'Par mani' },
  { href: '#piegade', label: 'Piegāde' },
  { href: '#noteikumi', label: 'Noteikumi' },
];

export default function SiteHeader({ onOpenOrder }: { onOpenOrder: () => void }) {
  const { count } = useOrder();
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: headerHeight,
        zIndex: 1100,
        color: palette.cream,
        background: solid ? palette.forest : 'linear-gradient(180deg, rgba(18,32,24,0.55), rgba(18,32,24,0))',
        borderBottom: solid ? '1px solid rgba(243,238,230,0.08)' : '1px solid transparent',
        transition: 'background-color .2s, border-color .2s',
      }}
    >
      <Container sx={{ height: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
          component="a"
          href="#top"
          sx={{ display: 'flex', alignItems: 'center', gap: 1.25, color: 'inherit', textDecoration: 'none', flexShrink: 0 }}
        >
          <Box component="img" src={images.logo} alt="" sx={{ width: 42, height: 42, objectFit: 'contain' }} />
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 600,
              fontSize: 26,
              lineHeight: 1,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Forest Prana
          </Typography>
        </Box>

        <Stack component="nav" aria-label="Galvenā" direction="row" spacing={2.5} sx={{ display: { xs: 'none', md: 'flex' }, ml: 4 }}>
          {links.map((link) => (
            <Box
              key={link.href}
              component="a"
              href={link.href}
              sx={{
                color: 'inherit',
                textDecoration: 'underline',
                textDecorationColor: 'transparent',
                textUnderlineOffset: 6,
                fontSize: 15,
                fontWeight: 600,
                '&:hover': { textDecorationColor: 'currentColor' },
              }}
            >
              {link.label}
            </Box>
          ))}
        </Stack>

        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <IconButton
            component="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rakstīt WhatsApp"
            sx={{ display: { xs: 'inline-flex', sm: 'none' }, color: 'inherit' }}
          >
            <WhatsAppIcon />
          </IconButton>
          <Button
            component="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<WhatsAppIcon />}
            sx={{
              display: { xs: 'none', sm: 'inline-flex' },
              bgcolor: palette.cream,
              color: palette.forest,
              minHeight: 40,
              '&:hover': { bgcolor: '#fff' },
            }}
          >
            WhatsApp
          </Button>
          <IconButton color="inherit" aria-label={`Pasūtījums, ${itemWord(count)}`} onClick={onOpenOrder}>
            <Badge badgeContent={count} invisible={count === 0} color="secondary" overlap="circular">
              <ShoppingBagOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Atvērt izvēlni"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen(true)}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>

      <Drawer
        id="site-menu"
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 'min(100%, 360px)',
              maxWidth: '100%',
              overflowX: 'hidden',
              bgcolor: palette.forest,
              color: palette.cream,
              px: 3,
              py: 2,
              display: 'flex',
              flexDirection: 'column',
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography sx={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: 28 }}>
            Forest Prana
          </Typography>
          <IconButton aria-label="Aizvērt izvēlni" onClick={() => setMenuOpen(false)} sx={{ color: 'inherit' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Stack component="nav" aria-label="Mobilā">
          {links.map((link) => (
            <Button
              key={link.href}
              component="a"
              href={link.href}
              onClick={() => setMenuOpen(false)}
              sx={{ justifyContent: 'flex-start', color: 'inherit', fontSize: 18, minHeight: 48, px: 1 }}
            >
              {link.label}
            </Button>
          ))}
        </Stack>
        <Typography sx={{ mt: 'auto', pt: 4, color: '#d5cec3', fontSize: 14, lineHeight: 1.5 }}>
          Rāmava · darba dienās 10:00–18:00
        </Typography>
      </Drawer>
    </Box>
  );
}
