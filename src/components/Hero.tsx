import { Box, Button, Container, Stack, Typography } from '@mui/material';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import type { SvgIconComponent } from '@mui/icons-material';
import { images, WHATSAPP_URL } from '../data/products';
import { palette } from '../theme';

const facts: { Icon: SvgIconComponent; title: string; text: string }[] = [
  { Icon: ParkOutlinedIcon, title: 'Ar rokām', text: 'Gatavots mazās partijās Rāmavā.' },
  { Icon: SpaOutlinedIcon, title: 'Dabas izejvielas', text: 'Medus, etiķis, ogas, skujas un augi.' },
  { Icon: StorefrontOutlinedIcon, title: 'Saņemšana Rāmavā', text: 'Darba dienās no 10:00 līdz 18:00.' },
  { Icon: LocalShippingOutlinedIcon, title: 'Pakomāts 3–5 dienās', text: 'Omniva, DPD, Latvijas Pasts, Venipak.' },
];

export default function Hero() {
  return (
    <>
      <Box component="section" id="top" aria-labelledby="hero-title" sx={{ position: 'relative', bgcolor: palette.forest, color: palette.cream }}>
        <Box
          component="img"
          src={images.hero}
          alt=""
          fetchPriority="high"
          sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(18,32,24,0.55) 0%, rgba(18,32,24,0.1) 32%, rgba(18,32,24,0.38) 58%, rgba(18,32,24,0.92) 100%)',
          }}
        />
        <Container
          sx={{
            position: 'relative',
            zIndex: 1,
            minHeight: { xs: '88svh', md: '92svh' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            pt: '88px',
            pb: { xs: 13, md: 16 },
          }}
        >
          <Typography sx={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#e7d7b1' }}>
            Rokām darināts · Rāmava
          </Typography>
          <Typography id="hero-title" component="h1" variant="h1" sx={{ mt: 1, maxWidth: '100%', fontSize: 'clamp(46px, 12vw, 92px)', color: palette.cream }}>
            Forest Prana
          </Typography>
          <Typography sx={{ mt: 2.5, maxWidth: 460, fontSize: { xs: 17, md: 19 }, lineHeight: 1.55, color: 'rgba(243,238,230,0.92)' }}>
            Dabīgi oximeļi, etiķi un ziedes. Senču receptes, gatavotas ar rokām.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4, width: '100%', maxWidth: 460 }}>
            <Button
              href="#katalogs"
              variant="contained"
              sx={{ bgcolor: palette.cream, color: palette.forest, width: { xs: '100%', sm: 'auto' }, '&:hover': { bgcolor: '#fff' } }}
            >
              Skatīt katalogu
            </Button>
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<WhatsAppIcon />}
              sx={{
                color: palette.cream,
                borderColor: 'rgba(243,238,230,0.55)',
                width: { xs: '100%', sm: 'auto' },
                '&:hover': { borderColor: palette.cream, bgcolor: 'rgba(255,255,255,0.06)' },
              }}
            >
              Rakstīt WhatsApp
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container sx={{ mt: { xs: -7, md: -8 }, mb: { xs: 2, md: 3 }, position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' },
            bgcolor: palette.paper,
            border: '1px solid',
            borderColor: palette.line,
            borderRadius: 4,
            boxShadow: '0 20px 50px rgba(18, 32, 24, 0.12)',
            overflow: 'hidden',
          }}
        >
          {facts.map((fact, index) => (
            <Box
              key={fact.title}
              sx={{
                p: { xs: 2, md: 2.5 },
                display: 'flex',
                gap: 1.5,
                alignItems: 'flex-start',
                borderColor: palette.line,
                borderStyle: 'solid',
                borderTopWidth: { xs: index > 1 ? 1 : 0, md: 0 },
                borderLeftWidth: { xs: index % 2 === 1 ? 1 : 0, md: index > 0 ? 1 : 0 },
                borderRightWidth: 0,
                borderBottomWidth: 0,
              }}
            >
              <fact.Icon sx={{ color: palette.moss, mt: 0.25 }} aria-hidden />
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 15, lineHeight: 1.3, overflowWrap: 'break-word' }}>{fact.title}</Typography>
                <Typography sx={{ mt: 0.5, fontSize: 13.5, lineHeight: 1.45, color: 'text.secondary' }}>{fact.text}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}
