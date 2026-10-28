import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Drawer,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { formatPrice, formatVolume, itemWord, scrollToId, whatsappLink } from '../lib/format';
import { useOrder } from '../lib/order';
import { palette } from '../theme';
import { QtyStepper } from './QtyStepper';

const choiceSx = {
  mx: 0,
  my: 0.25,
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: '100%',
  '& .MuiRadio-root': { py: 0.25 },
  '& .MuiFormControlLabel-label': { pt: '7px', minWidth: 0, lineHeight: 1.45 },
} as const;

export default function OrderDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lines, total, contact, setContact, setQty, remove, clear, message } = useOrder();
  const [tried, setTried] = useState(false);
  const [sentFor, setSentFor] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<'idle' | 'done' | 'manual'>('idle');
  const [confirmClear, setConfirmClear] = useState(false);
  const placeRef = useRef<HTMLInputElement>(null);
  const orderKey = lines.map((line) => `${line.id}:${line.qty}`).join('|');
  const sent = sentFor === orderKey;

  const placeMissing = contact.method === 'pakomats' && contact.place.trim().length === 0;

  function blockForPlace() {
    setTried(true);
    placeRef.current?.focus();
    placeRef.current?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  function send() {
    if (lines.length === 0) return;
    if (placeMissing) {
      blockForPlace();
      return;
    }
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
    setSentFor(orderKey);
  }

  async function copy() {
    if (placeMissing) {
      blockForPlace();
      return;
    }
    try {
      await navigator.clipboard.writeText(message);
      setCopyState('done');
    } catch {
      setCopyState('manual');
    }
  }

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: { xs: '100%', sm: 440 },
            maxWidth: '100%',
            height: '100%',
            bgcolor: palette.cream,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          },
        },
      }}
    >
      <Box
        sx={{
          px: 2.5,
          py: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          flexShrink: 0,
          minWidth: 0,
          bgcolor: palette.cream,
          borderBottom: '1px solid',
          borderColor: palette.line,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography component="h2" variant="h3" sx={{ fontSize: 32, minWidth: 0 }}>
          Pasūtījums
        </Typography>
        <IconButton aria-label="Aizvērt pasūtījumu" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {lines.length === 0 ? (
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
          <Typography sx={{ fontSize: 17, lineHeight: 1.6 }}>
            Grozs ir tukšs. Izvēlies produktus katalogā — pasūtījums aizies kā viena WhatsApp ziņa.
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              onClose();
              scrollToId('katalogs');
            }}
          >
            Uz katalogu
          </Button>
        </Box>
      ) : (
        <>
          <Box sx={{ overflowX: 'hidden', overflowY: 'auto', overscrollBehavior: 'contain', px: 2.5, py: 2, flex: '1 1 auto', minHeight: 0, minWidth: 0 }}>
            <Typography sx={{ mb: 2, color: 'text.secondary', fontSize: 14.5, lineHeight: 1.55 }}>
              Saturs aizies kā WhatsApp ziņa. Maksājumu un laiku saskaņojam sarunā. Tiešsaistes maksājuma te nav.
            </Typography>
            {lines.map((line) => {
              const volume = formatVolume(line.item.volume);
              return (
                <Box key={line.id} sx={{ display: 'grid', gridTemplateColumns: '64px minmax(0, 1fr)', gap: 1.5, py: 1.5, borderTop: '1px solid', borderColor: palette.line, minWidth: 0 }}>
                  <Box component="img" src={line.item.image} alt="" sx={{ width: 64, height: 80, objectFit: 'cover', borderRadius: 1.5, bgcolor: palette.creamDeep }} />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontWeight: 700, lineHeight: 1.3, overflowWrap: 'anywhere' }}>{line.item.name}</Typography>
                    <Typography sx={{ fontSize: 13.5, color: 'text.secondary', mt: 0.25 }}>
                      {volume ? `${volume} · ` : ''}
                      {formatPrice(line.item.price)}
                    </Typography>
                    <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                      <QtyStepper value={line.qty} onChange={(qty) => setQty(line.id, qty)} label={`Daudzums: ${line.item.name}`} />
                      <Button variant="text" size="small" onClick={() => remove(line.id)} sx={{ minHeight: 36 }}>
                        Noņemt
                      </Button>
                    </Box>
                  </Box>
                </Box>
              );
            })}

            <Divider sx={{ my: 2 }} />
            <Typography sx={{ fontWeight: 700, mb: 0.5 }}>Saņemšana</Typography>
            <Typography sx={{ mb: 1.5, fontSize: 14, color: 'text.secondary' }}>
              Vārds un piezīme nav obligāti. Ja izvēlies pakomātu, ieraksti, kurš tas ir.
            </Typography>
            <RadioGroup
              aria-label="Saņemšanas veids"
              value={contact.method}
              onChange={(event) => setContact({ method: event.target.value as 'ramava' | 'pakomats' })}
              sx={{ width: '100%', minWidth: 0 }}
            >
              <FormControlLabel
                value="ramava"
                control={<Radio />}
                sx={choiceSx}
                label={
                  <>
                    Klātienē Rāmavā, darba dienās <Box component="span" sx={{ whiteSpace: 'nowrap' }}>10:00–18:00</Box>
                  </>
                }
              />
              <FormControlLabel value="pakomats" control={<Radio />} sx={choiceSx} label="Pakomāts — Omniva, DPD, Latvijas Pasts, Venipak" />
            </RadioGroup>
            <Box sx={{ display: 'grid', gap: 1.5, mt: 1, minWidth: 0 }}>
              <TextField label="Vārds" value={contact.name} autoComplete="name" onChange={(event) => setContact({ name: event.target.value })} fullWidth sx={{ minWidth: 0 }} />
              {contact.method === 'pakomats' ? (
                <TextField
                  label="Pakomāts"
                  required
                  value={contact.place}
                  error={tried && placeMissing}
                  helperText={tried && placeMissing ? 'Ieraksti pakomātu, lai zinām, kur sūtīt.' : 'Pilsēta un pakomāts, piemēram, Omniva Rīga — Centrs.'}
                  onChange={(event) => setContact({ place: event.target.value })}
                  fullWidth
                  inputRef={placeRef}
                  sx={{ minWidth: 0 }}
                />
              ) : null}
              <TextField
                label="Piezīme"
                value={contact.note}
                onChange={(event) => setContact({ note: event.target.value })}
                fullWidth
                multiline
                minRows={2}
                sx={{ minWidth: 0 }}
              />
            </Box>
            {copyState === 'manual' ? (
              <TextField label="Pasūtījuma teksts" value={message} fullWidth multiline minRows={4} sx={{ mt: 2, minWidth: 0 }} slotProps={{ htmlInput: { readOnly: true } }} />
            ) : null}
            {copyState === 'done' ? (
              <Typography role="status" sx={{ mt: 1.5, fontWeight: 700, color: palette.moss }}>
                Teksts nokopēts. Vari ielīmēt to īsziņā.
              </Typography>
            ) : null}
            {sent ? (
              <Typography sx={{ mt: 1.5, fontSize: 14.5, color: 'text.secondary' }}>
                Ja ziņa atvērās WhatsApp, otro reizi sūtīt nevajag. Grozs paliek, līdz to notīri.
              </Typography>
            ) : null}
          </Box>

          <Box
            sx={{
              px: 2.5,
              pt: 2,
              pb: 'max(16px, env(safe-area-inset-bottom))',
              borderTop: '1px solid',
              borderColor: palette.line,
              bgcolor: palette.paper,
              flexShrink: 0,
              minWidth: 0,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 1.5 }}>
              <Typography sx={{ color: 'text.secondary' }}>{itemWord(lines.reduce((sum, line) => sum + line.qty, 0))}</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 22 }}>Kopā {formatPrice(total)}</Typography>
            </Box>
            <Button variant="contained" fullWidth onClick={send}>
              Nosūtīt WhatsApp
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mt: 1, flexWrap: 'wrap' }}>
              <Button variant="text" onClick={copy}>
                {copyState === 'done' ? 'Nokopēts' : 'Kopēt tekstu'}
              </Button>
              {confirmClear ? (
                <Button
                  variant="text"
                  color="error"
                  onClick={() => {
                    clear();
                    setConfirmClear(false);
                    setSentFor(null);
                  }}
                >
                  Tiešām notīrīt
                </Button>
              ) : (
                <Button variant="text" color="error" onClick={() => setConfirmClear(true)}>
                  Notīrīt
                </Button>
              )}
            </Box>
          </Box>
        </>
      )}
    </Drawer>
  );
}

export function MobileOrderDock({ hidden, onOpen }: { hidden: boolean; onOpen: () => void }) {
  const { count, total } = useOrder();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (hidden || count === 0 || !show) return null;
  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'fixed',
        left: 16,
        right: 16,
        bottom: 'calc(16px + env(safe-area-inset-bottom))',
        zIndex: 25,
        justifyContent: 'center',
      }}
    >
      <Button
        variant="contained"
        onClick={onOpen}
        aria-label={`Atvērt pasūtījumu, ${itemWord(count)}, kopā ${formatPrice(total)}`}
        sx={{ width: '100%', maxWidth: 420, borderRadius: 999, boxShadow: '0 12px 30px rgba(18,32,24,0.28)' }}
      >
        Pasūtījums · {count} · {formatPrice(total)}
      </Button>
    </Box>
  );
}
