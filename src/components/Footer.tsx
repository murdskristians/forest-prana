import { Box, Container, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import type { SvgIconComponent } from '@mui/icons-material';
import { FACEBOOK_URL, INSTAGRAM_URL, PHONE, WHATSAPP_URL } from '../data/products';
import { formatPhone } from '../lib/format';
import { useOrder } from '../lib/order';
import { palette, sectionOffset } from '../theme';

const socials: { label: string; href: string; Icon: SvgIconComponent }[] = [
  { label: 'WhatsApp', href: WHATSAPP_URL, Icon: WhatsAppIcon },
  { label: 'Instagram', href: INSTAGRAM_URL, Icon: InstagramIcon },
  { label: 'Facebook', href: FACEBOOK_URL, Icon: FacebookIcon },
];

const nav = [
  { href: '#katalogs', label: 'Katalogs' },
  { href: '#oximeli', label: 'Oximeļi' },
  { href: '#etiki', label: 'Etiķi' },
  { href: '#ziedes', label: 'Ziedes' },
  { href: '#citi', label: 'Citi produkti' },
  { href: '#par-mani', label: 'Par mani' },
  { href: '#piegade', label: 'Piegāde' },
  { href: '#noteikumi', label: 'Noteikumi' },
];

const year = new Date().getFullYear();

export default function Footer() {
  const { count } = useOrder();
  const phone = formatPhone(PHONE);

  return (
    <Box
      component="footer"
      id="kontakti"
      sx={{
        ...sectionOffset,
        bgcolor: palette.forest,
        color: palette.cream,
        pt: { xs: 6, md: 8 },
        pb: { xs: count > 0 ? 14 : 4, md: 4 },
      }}
    >
      <Container sx={{ display: 'grid', gap: 4, gridTemplateColumns: { md: 'minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr)' } }}>
        <Box>
          <Typography sx={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: 36, lineHeight: 1 }}>
            Forest Prana
          </Typography>
          <Typography sx={{ mt: 1.5, maxWidth: 360, color: '#d5cec3', lineHeight: 1.6 }}>
            Rokām darināti oximeļi, etiķi un ziedes. Rāmava, Latvija.
          </Typography>
        </Box>

        <Box component="nav" aria-label="Kājene">
          <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#e7d7b1', mb: 1.5 }}>
            Lapā
          </Typography>
          <Box sx={{ display: 'grid', gap: 0.5 }}>
            {nav.map((link) => (
              <Box
                key={link.href}
                component="a"
                href={link.href}
                sx={{ color: 'inherit', textDecoration: 'none', minHeight: 36, display: 'flex', alignItems: 'center', '&:hover': { textDecoration: 'underline' } }}
              >
                {link.label}
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#e7d7b1', mb: 1.5 }}>
            Kontakti
          </Typography>
          <Box sx={{ display: 'grid', gap: 0.5 }}>
            {socials.map((item) => (
              <Box
                key={item.label}
                component="a"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'inherit', textDecoration: 'none', minHeight: 44, display: 'flex', alignItems: 'center', gap: 1.25, '&:hover': { textDecoration: 'underline' } }}
              >
                <item.Icon fontSize="small" aria-hidden />
                {item.label}
              </Box>
            ))}
            <Box component="a" href={`tel:+371${PHONE.replace(/\D/g, '')}`} sx={{ color: 'inherit', textDecoration: 'none', minHeight: 44, display: 'flex', alignItems: 'center', '&:hover': { textDecoration: 'underline' } }}>
              Īsziņa {phone}
            </Box>
          </Box>
          <Typography sx={{ mt: 1, color: '#d5cec3', fontSize: 14.5, lineHeight: 1.5 }}>
            Saņemšana Rāmavā darba dienās 10:00–18:00.
          </Typography>
        </Box>
      </Container>
      <Container sx={{ mt: 5, pt: 2, borderTop: '1px solid rgba(243,238,230,0.12)' }}>
        <Typography sx={{ color: '#d5cec3', fontSize: 13 }}>© {year} Forest Prana · Rāmava, Latvija</Typography>
      </Container>
    </Box>
  );
}
