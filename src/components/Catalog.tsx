import { Box, Button, ButtonBase, Chip, Container, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {
  catalog,
  categoryById,
  categoryMeta,
  matchesQuery,
  vinegarBenefits,
  type CatalogItem,
  type CategoryFilter,
} from '../lib/catalog';
import { formatPrice, formatVolume, productWord } from '../lib/format';
import { useOrder } from '../lib/order';
import { headerHeight, palette, sectionOffset } from '../theme';
import { SectionHeading } from './SectionHeading';

export default function Catalog({
  filter,
  query,
  onFilter,
  onQuery,
  onOpen,
}: {
  filter: CategoryFilter;
  query: string;
  onFilter: (filter: CategoryFilter) => void;
  onQuery: (query: string) => void;
  onOpen: (id: string) => void;
}) {
  const visible = catalog.filter((item) => (filter === 'all' || item.category === filter) && matchesQuery(item, query));
  const active = filter === 'all' ? undefined : categoryById(filter);

  return (
    <Box component="section" id="katalogs" aria-labelledby="katalogs-title" sx={{ ...sectionOffset, pt: { xs: 5, md: 7 }, pb: { xs: 8, md: 12 } }}>
      <Container>
        <SectionHeading eyebrow="Veikals" title="Katalogs" titleId="katalogs-title">
          Izvēlies produktus un nosūti pasūtījumu vienā WhatsApp ziņā. Maksājums pārskaitījumā vai skaidrā naudā, kad vienojamies par saņemšanu.
        </SectionHeading>

        <TextField
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="Meklēt pēc nosaukuma vai sastāva"
          fullWidth
          sx={{ mb: 2, maxWidth: 520 }}
          slotProps={{
            htmlInput: { 'aria-label': 'Meklēt produktus', autoComplete: 'off' },
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: query ? (
                <InputAdornment position="end">
                  <IconButton aria-label="Notīrīt meklēšanu" size="small" onClick={() => onQuery('')}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ) : undefined,
            },
          }}
        />

        <Box
          role="group"
          aria-label="Kategorijas"
          sx={{
            position: 'sticky',
            top: headerHeight,
            zIndex: 15,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            py: 1.25,
            mb: 2,
            mx: { xs: -2, sm: -3 },
            px: { xs: 2, sm: 3 },
            bgcolor: 'rgba(243, 238, 230, 0.94)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid',
            borderColor: palette.line,
          }}
        >
          <FilterChip label="Visi" count={catalog.filter((item) => matchesQuery(item, query)).length} selected={filter === 'all'} onClick={() => onFilter('all')} />
          {categoryMeta.map((category) => (
            <FilterChip
              key={category.id}
              label={category.label}
              count={catalog.filter((item) => item.category === category.id && matchesQuery(item, query)).length}
              selected={filter === category.id}
              onClick={() => onFilter(category.id)}
            />
          ))}
        </Box>

        <Typography role="status" sx={{ mb: 3, fontSize: 14, color: 'text.secondary' }}>
          {productWord(visible.length)}
        </Typography>

        {active && !query ? (
          <Typography sx={{ mb: 3, maxWidth: 640, color: 'text.secondary', fontSize: 16, lineHeight: 1.6 }}>{active.blurb}</Typography>
        ) : null}

        {filter === 'etiki' && !query ? (
          <Box sx={{ mb: 4, p: { xs: 2.5, md: 3 }, bgcolor: palette.paper, borderRadius: 3, border: '1px solid', borderColor: palette.line }}>
            <Typography sx={{ fontWeight: 700, mb: 1.5 }}>Augļu etiķu labvēlīgā ietekme</Typography>
            <Box
              component="ul"
              sx={{
                m: 0,
                pl: 2.5,
                columns: { sm: 2 },
                columnGap: 4,
                '& li': { mb: 1, breakInside: 'avoid', color: 'text.secondary', fontSize: 15, lineHeight: 1.5 },
              }}
            >
              {vinegarBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </Box>
          </Box>
        ) : null}

        {visible.length === 0 ? (
          <Box sx={{ py: 6, textAlign: 'center' }}>
            <Typography sx={{ fontSize: 18, mb: 2 }}>Nekas neatbilst meklējumam «{query}».</Typography>
            <Button
              variant="outlined"
              onClick={() => {
                onQuery('');
                onFilter('all');
              }}
            >
              Rādīt visus produktus
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' } }}>
            {visible.map((item) => (
              <ProductTile key={item.id} item={item} onOpen={onOpen} />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}

function FilterChip({ label, count, selected, onClick }: { label: string; count: number; selected: boolean; onClick: () => void }) {
  return (
    <Chip
      label={`${label} ${count}`}
      onClick={onClick}
      variant={selected ? 'filled' : 'outlined'}
      color={selected ? 'primary' : 'default'}
      aria-pressed={selected}
      sx={{ minHeight: 40 }}
    />
  );
}

function ProductTile({ item, onOpen }: { item: CatalogItem; onOpen: (id: string) => void }) {
  const { lines, add } = useOrder();
  const inOrder = lines.find((line) => line.id === item.id)?.qty ?? 0;
  const volume = formatVolume(item.volume);
  const category = categoryById(item.category).label;

  return (
    <Box
      component="article"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minWidth: 0,
        bgcolor: palette.paper,
        border: '1px solid',
        borderColor: palette.line,
        borderRadius: 4,
        overflow: 'hidden',
        transition: 'border-color .2s, transform .2s',
        '& img': { transition: 'transform .45s ease' },
        '&:hover': { borderColor: 'rgba(23,33,27,0.28)', transform: 'translateY(-2px)' },
        '&:hover img': { transform: 'scale(1.035)' },
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
          '& img': { transition: 'none' },
          '&:hover': { transform: 'none' },
          '&:hover img': { transform: 'none' },
        },
      }}
    >
      <ButtonBase
        aria-label={`Atvērt ${item.name}`}
        onClick={() => onOpen(item.id)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          textAlign: 'left',
          width: '100%',
          flex: 1,
          '&.Mui-focusVisible': { boxShadow: `inset 0 0 0 2px ${palette.focus}` },
        }}
      >
        <Box sx={{ position: 'relative', aspectRatio: '1 / 1', bgcolor: palette.creamDeep }}>
          <Box
            component="img"
            src={item.image}
            alt=""
            loading="lazy"
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: item.soldOut ? 0.72 : 1 }}
          />
          {item.soldOut ? (
            <Box
              sx={{
                position: 'absolute',
                top: 12,
                left: 12,
                bgcolor: palette.danger,
                color: '#fff',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                px: 1.25,
                py: 0.5,
                borderRadius: 999,
              }}
            >
              Pārdots
            </Box>
          ) : null}
        </Box>
        <Box sx={{ p: 2, pb: 0 }}>
          <Typography component="p" sx={{ m: 0, fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: palette.honeyDeep }}>
            {category}
            {volume ? (
              <Box component="span" sx={{ textTransform: 'none', letterSpacing: 0, fontWeight: 600, color: 'text.secondary' }}>
                {` · ${volume}`}
              </Box>
            ) : null}
          </Typography>
          <Typography component="h3" variant="h3" sx={{ mt: 0.75, fontSize: 28, color: palette.ink }}>
            {item.name}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: 'text.secondary',
              fontSize: 14.5,
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {item.excerpt}
          </Typography>
        </Box>
      </ButtonBase>

      {inOrder > 0 ? (
        <Typography sx={{ px: 2, pt: 1.25, fontSize: 13, fontWeight: 700, color: palette.moss }}>Pasūtījumā: {inOrder}</Typography>
      ) : null}

      <Box sx={{ px: 2, pb: 2, pt: inOrder > 0 ? 1 : 2, mt: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, flexWrap: 'wrap', minWidth: 0 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 18 }}>{formatPrice(item.price)}</Typography>
        <Button variant="contained" size="small" disabled={Boolean(item.soldOut)} onClick={() => add(item.id)} sx={{ minHeight: 40 }}>
          {item.soldOut ? 'Pārdots' : 'Pievienot'}
        </Button>
      </Box>
    </Box>
  );
}
