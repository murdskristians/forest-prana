import { Box, Container, Typography } from '@mui/material';
import type { Product } from '../data/products';
import { colors } from '../theme';
import { CtaRow, SoldOut } from './ui';

/** One product "page": title + photo + price on the left, description on the right. */
export default function ProductCard({ product, imageRight }: { product: Product; imageRight?: boolean }) {
  return (
    <Box id={product.id} component="article" sx={{ py: { xs: 5, md: 7 }, scrollMarginTop: 16 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'grid',
          gap: { xs: 3, md: 8 },
          gridTemplateColumns: { md: '360px 1fr' },
          alignItems: 'start',
          px: { xs: 2, md: 8 },
        }}
      >
        <Box sx={{ order: { md: imageRight ? 2 : 0 } }}>
          <Typography component="h3" sx={{ fontSize: { xs: 26, md: 32 }, mb: 2.5, fontWeight: 400 }}>
            {product.name}
          </Typography>
          <Box sx={{ position: 'relative', width: '100%', maxWidth: 340 }}>
            <Box
              component="img"
              src={product.image}
              alt={product.name}
              loading="lazy"
              sx={{ width: '100%', aspectRatio: '3 / 4', objectFit: 'cover', bgcolor: colors.card, opacity: product.soldOut ? 0.7 : 1 }}
            />
            {product.soldOut && <SoldOut />}
          </Box>
          <Typography sx={{ mt: 2.5, maxWidth: 340, textAlign: 'center', fontSize: 18 }}>{product.price}€</Typography>
        </Box>

        <Box sx={{ pt: { md: 7 } }}>
          <Typography sx={{ whiteSpace: 'pre-line', fontSize: 14.5, lineHeight: 1.7, color: 'text.secondary' }}>
            {product.description}
          </Typography>
          {product.volume && (
            <Typography sx={{ mt: 1, fontSize: 14.5, color: 'text.secondary' }}>Tilpums: {product.volume}</Typography>
          )}
          <CtaRow />
        </Box>
      </Container>
    </Box>
  );
}
