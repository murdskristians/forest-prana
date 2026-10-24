import { Box, Container, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL } from '../data/products';
import { CatalogPill } from './ui';

const links = [
  { label: 'Raksti Forest Prana Whatsapp', href: WHATSAPP_URL, Icon: WhatsAppIcon, bg: '#25D366' },
  { label: 'Seko Forest Prana Instagram', href: INSTAGRAM_URL, Icon: InstagramIcon, bg: 'linear-gradient(45deg,#f9a825,#e1306c,#833ab4)' },
  { label: 'Seko Forest Prana Facebook', href: FACEBOOK_URL, Icon: FacebookIcon, bg: '#1877F2' },
];

export default function Contacts() {
  return (
    <Box id="kontakti" component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Typography component="h2" sx={{ textAlign: 'center', fontSize: { xs: 26, md: 32 }, mb: 6 }}>
          KONTAKTI
        </Typography>
        <Box sx={{ display: 'grid', gap: 4 }}>
          {links.map(({ label, href, Icon, bg }) => (
            <Box
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'flex', alignItems: 'center', gap: 3, color: '#fff', textDecoration: 'none', '&:hover span': { textDecoration: 'underline' } }}
            >
              <Box sx={{ width: 80, height: 80, borderRadius: 2, background: bg, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <Icon sx={{ fontSize: 50 }} />
              </Box>
              <KeyboardDoubleArrowLeftIcon sx={{ fontSize: 44 }} />
              <Typography component="span" sx={{ fontSize: { xs: 16, md: 18 } }}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <CatalogPill width={170} />
        </Box>
      </Container>
    </Box>
  );
}
