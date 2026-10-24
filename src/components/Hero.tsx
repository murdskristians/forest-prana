import { Box, Stack, Typography } from '@mui/material';
import { images, PHONE, WHATSAPP_URL } from '../data/products';
import { Pill } from './ui';

export default function Hero() {
  return (
    <Box
      component="header"
      sx={{
        minHeight: { xs: 640, md: 780 },
        backgroundImage: `url(${images.hero})`,
        backgroundColor: '#55705a',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 4,
        pb: 6,
        px: 2,
      }}
    >
      <Box component="img" src={images.logo} alt="Forest Prana logo" sx={{ width: { xs: 100, md: 110 }, height: 'auto' }} />
      <Typography
        variant="h1"
        sx={{
          mt: 2,
          px: 4,
          py: 1,
          borderRadius: 3,
          bgcolor: 'rgba(255,255,255,0.72)',
          color: '#1c2b1f',
          fontSize: { xs: 40, md: 56 },
          letterSpacing: 1,
        }}
      >
        Forest Prana
      </Typography>

      <Stack component="nav" spacing={1.75} sx={{ mt: { xs: 8, md: 14 }, width: 260, maxWidth: '100%' }}>
        <Pill icon={images.iconCatalog} label={<>Produktu<br />katalogs</>} href="#katalogs" />
        <Pill icon={images.iconAbout} label="Par mani" href="#par-mani" />
        <Pill icon={images.iconPhone} label={PHONE} href={WHATSAPP_URL} />
        <Pill icon={images.iconDelivery} label="Piegāde" href="#piegade" />
        <Pill icon={images.iconTerms} label="Noteikumi" href="#noteikumi" />
      </Stack>
    </Box>
  );
}
