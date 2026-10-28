import { useState, type ReactNode } from 'react';
import { Box, Button, Dialog, IconButton, Typography, useMediaQuery } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import { catalogById, categoryById } from '../lib/catalog';
import { formatPrice, formatVolume, whatsappLink } from '../lib/format';
import { useOrder } from '../lib/order';
import { palette } from '../theme';
import { QtyStepper } from './QtyStepper';

export default function ProductDialog({
  productId,
  onClose,
  onOpenOrder,
}: {
  productId: string | null;
  onClose: () => void;
  onOpenOrder: () => void;
}) {
  const fullScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const item = productId ? catalogById.get(productId) : undefined;
  const [cached, setCached] = useState(item);
  if (item && item.id !== cached?.id) setCached(item);
  const shown = item ?? cached;
  const [qty, setQty] = useState(1);
  const [qtyFor, setQtyFor] = useState(shown?.id);
  const { lines, add } = useOrder();

  if (shown && qtyFor !== shown.id) {
    setQtyFor(shown.id);
    setQty(1);
  }

  if (!shown) return null;

  const volume = formatVolume(shown.volume);
  const inOrder = lines.find((line) => line.id === shown.id)?.qty ?? 0;
  const ask = whatsappLink(`Sveiki! Man ir jautājums par produktu «${shown.name}».`);

  return (
    <Dialog
      open={Boolean(item)}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      aria-labelledby="product-dialog-title"
      slotProps={{
        paper: {
          sx: {
            bgcolor: palette.paper,
            backgroundImage: 'none',
            borderRadius: fullScreen ? 0 : 4,
            overflow: 'hidden',
            height: fullScreen ? '100%' : 'min(88vh, 840px)',
            maxHeight: fullScreen ? '100%' : 'min(88vh, 840px)',
          },
        },
      }}
    >
      <Box sx={{ position: 'relative', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100%', minHeight: 0, minWidth: 0 }}>
        <Box sx={{ position: 'relative', flex: { md: '0 0 42%' }, height: { xs: '38vh', md: 'auto' }, bgcolor: palette.creamDeep }}>
          <Box
            component="img"
            src={shown.image}
            alt={shown.name}
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: shown.soldOut ? 0.8 : 1 }}
          />
        </Box>

        <Box sx={{ flex: 1, minWidth: 0, minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <Box sx={{ overflowX: 'hidden', overflowY: 'auto', px: { xs: 2.5, md: 4 }, pt: { xs: 2.5, md: 4 }, pb: 3, flex: 1, minHeight: 0, minWidth: 0 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: palette.honeyDeep }}>
              {categoryById(shown.category).label}
              {volume ? (
                <Box component="span" sx={{ textTransform: 'none', letterSpacing: 0, fontWeight: 600, color: 'text.secondary' }}>
                  {` · ${volume}`}
                </Box>
              ) : null}
            </Typography>
            <Typography id="product-dialog-title" component="h2" variant="h3" sx={{ mt: 1, pr: 5, fontSize: { xs: 34, md: 42 } }}>
              {shown.name}
            </Typography>
            <Box sx={{ mt: 1.5, display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
              <Typography sx={{ fontWeight: 700, fontSize: 22 }}>{formatPrice(shown.price)}</Typography>
              <Box
                component="span"
                sx={{
                  px: 1.25,
                  py: 0.4,
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: shown.soldOut ? palette.danger : palette.moss,
                  bgcolor: shown.soldOut ? palette.dangerSoft : palette.mossSoft,
                }}
              >
                {shown.soldOut ? 'Pārdots' : 'Pieejams'}
              </Box>
            </Box>

            {shown.parsed.composition ? <DetailBlock title="Sastāvs">{shown.parsed.composition}</DetailBlock> : null}
            {shown.parsed.usage.length > 0 ? <DetailBlock title="Kā lietot">{shown.parsed.usage.join('\n\n')}</DetailBlock> : null}
            {shown.parsed.cautions.length > 0 ? (
              <DetailBlock title="Pirms lietošanas" tone="caution">
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                  <WarningAmberOutlinedIcon sx={{ color: palette.danger, mt: 0.25 }} aria-hidden />
                  <span>{shown.parsed.cautions.join('\n\n')}</span>
                </Box>
              </DetailBlock>
            ) : null}
            {shown.benefits ? (
              <DetailBlock title="Kopīgi visiem etiķiem">
                <Box component="ul" sx={{ m: 0, pl: 2.5, '& li': { mb: 0.75 } }}>
                  {shown.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </Box>
              </DetailBlock>
            ) : null}
            {shown.parsed.paragraphs.map((paragraph, index) => (
              <Typography key={index} sx={{ mt: index === 0 ? 3 : 2, fontSize: 16, lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                {paragraph}
              </Typography>
            ))}

            {!shown.soldOut ? (
              <Button component="a" href={ask} target="_blank" rel="noopener noreferrer" variant="text" sx={{ mt: 2, px: 0, minHeight: 44 }}>
                Uzdot jautājumu WhatsApp
              </Button>
            ) : null}
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1.5,
              alignItems: 'center',
              justifyContent: 'space-between',
              px: { xs: 2.5, md: 4 },
              py: 2,
              borderTop: '1px solid',
              borderColor: palette.line,
              bgcolor: palette.paper,
              flexShrink: 0,
            }}
          >
            {shown.soldOut ? (
              <>
                <Typography sx={{ fontWeight: 700, color: palette.danger }}>Šobrīd pārdots</Typography>
                <Button component="a" href={ask} target="_blank" rel="noopener noreferrer" variant="outlined">
                  Pajautāt, kad būs
                </Button>
              </>
            ) : (
              <>
                <QtyStepper value={qty} onChange={setQty} max={10} label={`Daudzums: ${shown.name}`} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center', gap: 1, flex: 1 }}>
                  {inOrder > 0 ? (
                    <Button variant="text" onClick={onOpenOrder} sx={{ minHeight: 40 }}>
                      Pasūtījumā: {inOrder}
                    </Button>
                  ) : null}
                  <Button variant="contained" onClick={() => add(shown.id, qty)}>
                    Pievienot · {formatPrice(shown.price * qty)}
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Box>

        <IconButton
          aria-label="Aizvērt"
          onClick={onClose}
          sx={{ position: 'absolute', top: 12, right: 12, bgcolor: 'rgba(255,252,247,0.94)', '&:hover': { bgcolor: '#fff' } }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Dialog>
  );
}

function DetailBlock({ title, children, tone = 'default' }: { title: string; children: ReactNode; tone?: 'default' | 'caution' }) {
  return (
    <Box
      sx={{
        mt: 3,
        p: 2,
        borderRadius: 2,
        bgcolor: tone === 'caution' ? palette.dangerSoft : palette.cream,
        border: '1px solid',
        borderColor: tone === 'caution' ? 'rgba(124,47,42,0.22)' : palette.line,
      }}
    >
      <Typography
        component="h3"
        sx={{
          fontFamily: '"Open Sans", sans-serif',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: tone === 'caution' ? palette.danger : palette.honeyDeep,
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Box sx={{ fontSize: 15.5, lineHeight: 1.65, whiteSpace: 'pre-line', overflowWrap: 'anywhere' }}>{children}</Box>
    </Box>
  );
}
