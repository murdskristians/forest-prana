import { Box, Container, Typography } from '@mui/material';
import { etiki, etikiBenefits } from '../data/products';
import { colors } from '../theme';
import { CtaRow, SoldOut } from './ui';

export default function Vinegars() {
  return (
    <Box id="etiki" component="section" sx={{ py: { xs: 6, md: 10 }, scrollMarginTop: 16 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 8 } }}>
        <Typography component="h2" sx={{ fontSize: { xs: 28, md: 34 }, fontWeight: 700, mb: 3 }}>
          Etiķi
        </Typography>
        <Box sx={{ display: 'grid', gap: { xs: 4, md: 6 }, gridTemplateColumns: { md: '1.3fr 1fr' } }}>
          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)' } }}>
            {etiki.map((v) => (
              <Box key={v.name} sx={{ textAlign: 'center' }}>
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src={v.image}
                    alt={v.name}
                    loading="lazy"
                    sx={{ width: '100%', aspectRatio: '3 / 4', objectFit: 'cover', bgcolor: colors.card }}
                  />
                  {v.soldOut && <SoldOut />}
                </Box>
                <Typography sx={{ mt: 1, fontSize: 14, fontWeight: 600 }}>
                  {v.name} {v.price}€
                </Typography>
              </Box>
            ))}
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700, textDecoration: 'underline', mb: 1.5, fontSize: 15 }}>
              Augļu etiķu labvēlīgā ietekme uz veselību:
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, columns: { sm: 2 }, columnGap: 4, '& li': { mb: 1.25, fontSize: 14, lineHeight: 1.55, breakInside: 'avoid', color: 'text.secondary' } }}>
              {etikiBenefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </Box>
          </Box>
        </Box>
        <CtaRow />
      </Container>
    </Box>
  );
}
