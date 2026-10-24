import { Box, ButtonBase, Container, Typography } from '@mui/material';
import { categories } from '../data/products';
import { colors } from '../theme';

const items = [categories.oximeli, categories.etiki, categories.ziedes, categories.citi];

export default function CatalogOverview() {
  return (
    <Box id="katalogs" component="section" sx={{ pb: { xs: 8, md: 12 }, pt: 2 }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography
          component="h2"
          sx={{ display: 'inline-block', px: 6, py: 2, borderRadius: 3, bgcolor: colors.card, fontWeight: 700, fontSize: { xs: 24, md: 32 } }}
        >
          PRODUKTU KATALOGS
        </Typography>
        <Box sx={{ mt: 8, display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' } }}>
          {items.map((c) => (
            <ButtonBase
              key={c.id}
              component="a"
              href={`#${c.id}`}
              sx={{ flexDirection: 'column', gap: 2, borderRadius: 3, '&:hover img': { transform: 'scale(1.04)' } }}
            >
              <Box sx={{ width: '100%', maxWidth: 200, aspectRatio: '1', overflow: 'hidden', bgcolor: colors.card }}>
                <Box component="img" src={c.thumb} alt={c.title} sx={{ width: 1, height: 1, objectFit: 'cover', transition: 'transform .3s' }} />
              </Box>
              <Box sx={{ width: '100%', maxWidth: 220, py: 1.25, borderRadius: 6, bgcolor: colors.card, fontWeight: 700, letterSpacing: 0.5 }}>
                {c.title.toUpperCase()}
              </Box>
            </ButtonBase>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
