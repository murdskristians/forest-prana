import { createTheme } from '@mui/material/styles';

export const colors = {
  bg: '#1c2b1f',
  card: '#314134',
  cardDark: '#0f1a12',
  text: '#ffffff',
  muted: 'rgba(255,255,255,0.85)',
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#5d8a63' },
    background: { default: colors.bg, paper: colors.card },
    text: { primary: colors.text, secondary: colors.muted },
  },
  typography: {
    fontFamily: '"Open Sans", system-ui, sans-serif',
    h1: { fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 600 },
    h2: { fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { backgroundColor: colors.bg },
        img: { display: 'block', maxWidth: '100%' },
      },
    },
  },
});
