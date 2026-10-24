import { Box, Container } from '@mui/material';
import type { Product } from '../data/products';
import { Badge, CatalogPill } from './ui';

/** Full-bleed photo background with the category title and a grid of links to each product. */
export default function CategoryIndex({
  id,
  title,
  background,
  products,
  columns = 3,
  serif,
}: {
  id: string;
  title: string;
  background: string;
  products: Product[];
  columns?: 2 | 3;
  serif?: boolean;
}) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        position: 'relative',
        backgroundImage: `url(${background})`,
        backgroundColor: '#3c5141',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Badge serif={serif}>{title}</Badge>
        <Box
          sx={{
            mt: 4,
            display: 'grid',
            gap: { xs: 1.5, md: 2.5 },
            columnGap: { md: 6 },
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: `repeat(${columns}, 1fr)` },
            gridAutoFlow: { md: 'column' },
            gridTemplateRows: { md: `repeat(${Math.ceil(products.length / columns)}, auto)` },
          }}
        >
          {products.map((p) => (
            <Box
              key={p.id}
              component="a"
              href={`#${p.id}`}
              sx={{
                display: 'block',
                py: 1,
                px: 2,
                bgcolor: 'rgba(28,43,31,0.95)',
                color: '#fff',
                fontSize: 14,
                textDecoration: 'underline',
                textUnderlineOffset: 3,
                transition: 'background-color .15s',
                '&:hover': { bgcolor: '#314134' },
              }}
            >
              {p.name}
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CatalogPill width={170} />
        </Box>
      </Container>
    </Box>
  );
}
