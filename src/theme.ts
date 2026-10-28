import { createTheme } from '@mui/material/styles';

export const palette = {
  forest: '#122018',
  forestRaised: '#1c3024',
  moss: '#1f4d34',
  mossSoft: '#e5f0e7',
  honey: '#a68445',
  honeyDeep: '#7a5b28',
  cream: '#f3eee6',
  creamDeep: '#e6dfd2',
  paper: '#fffcf7',
  ink: '#17211b',
  muted: '#445046',
  line: 'rgba(23, 33, 27, 0.12)',
  danger: '#7c2f2a',
  dangerSoft: '#f8ebe7',
  focus: '#a68445',
} as const;

export const headerHeight = 72;

export const sectionOffset = { scrollMarginTop: `${headerHeight + 12}px` };

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: palette.forest, contrastText: palette.cream },
    secondary: { main: palette.honeyDeep, contrastText: '#fff' },
    error: { main: palette.danger },
    background: { default: palette.cream, paper: palette.paper },
    text: { primary: palette.ink, secondary: palette.muted },
    divider: palette.line,
  },
  typography: {
    fontFamily: '"Open Sans", system-ui, sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontStyle: 'italic',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 0.95,
    },
    h2: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontStyle: 'italic',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1,
    },
    h3: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.15,
    },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: 0 },
    body1: { fontSize: 16, lineHeight: 1.65 },
    body2: { fontSize: 14.5, lineHeight: 1.6 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth', scrollPaddingTop: headerHeight + 12 },
        'a:focus-visible': { outline: `2px solid ${palette.focus}`, outlineOffset: 3 },
        body: { backgroundColor: palette.cream, color: palette.ink },
        img: { display: 'block', maxWidth: '100%' },
        '::selection': { backgroundColor: '#e7d7b1', color: palette.ink },
        '@media (prefers-reduced-motion: reduce)': {
          html: { scrollBehavior: 'auto' },
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 10,
          minHeight: 44,
          paddingInline: 18,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: { root: { borderRadius: 10 } },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600, borderRadius: 999 },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: palette.paper,
          borderRadius: 12,
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: palette.forest },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: palette.forest, borderWidth: 1.5 },
        },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
  },
});
