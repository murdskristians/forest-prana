import { Box, ButtonBase, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { colors } from '../theme';
import { images, PHONE, WHATSAPP_URL } from '../data/products';

/** Dark rounded "pill" with a round icon on the left – used for nav + CTA buttons. */
export function Pill({
  icon,
  label,
  href,
  width = 260,
}: {
  icon: string;
  label: ReactNode;
  href: string;
  width?: number | string;
}) {
  const external = href.startsWith('http');
  return (
    <ButtonBase
      component="a"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      sx={{
        width,
        maxWidth: '100%',
        height: 52,
        borderRadius: 3,
        bgcolor: 'rgba(28,43,31,0.92)',
        color: '#fff',
        justifyContent: 'flex-start',
        pl: 0.75,
        pr: 2,
        gap: 1.5,
        transition: 'transform .15s, background-color .15s',
        '&:hover': { bgcolor: colors.card, transform: 'translateY(-1px)' },
      }}
    >
      <Box
        component="img"
        src={icon}
        alt=""
        sx={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, bgcolor: '#fff' }}
      />
      <Typography
        component="span"
        sx={{ flex: 1, textAlign: 'center', fontWeight: 700, fontSize: 14, lineHeight: 1.15, textDecoration: 'underline' }}
      >
        {label}
      </Typography>
    </ButtonBase>
  );
}

export const CatalogPill = (p: { width?: number | string }) => (
  <Pill icon={images.iconCatalog} label={<>Produktu<br />katalogs</>} href="#katalogs" width={p.width ?? 190} />
);

export const PhonePill = (p: { width?: number | string }) => (
  <Pill icon={images.iconPhone} label={PHONE} href={WHATSAPP_URL} width={p.width ?? 190} />
);

export function CtaRow({ phone = true }: { phone?: boolean }) {
  return (
    <Box sx={{ display: 'flex', gap: { xs: 2, md: 6 }, justifyContent: 'center', flexWrap: 'wrap', mt: 4 }}>
      <CatalogPill />
      {phone && <PhonePill />}
    </Box>
  );
}

/** Rounded dark heading badge, e.g. "OXIMEĻI" over a photo background. */
export function Badge({ children, serif }: { children: ReactNode; serif?: boolean }) {
  return (
    <Box
      component="h2"
      sx={{
        m: 0,
        display: 'inline-block',
        px: { xs: 3, md: 5 },
        py: 1.5,
        borderRadius: 4,
        bgcolor: colors.bg,
        color: '#fff',
        fontSize: { xs: 28, md: 40 },
        fontWeight: 700,
        letterSpacing: serif ? 0 : 1,
        fontFamily: serif ? '"Open Sans", sans-serif' : undefined,
      }}
    >
      {children}
    </Box>
  );
}

export function SoldOut() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        bgcolor: 'rgba(230,120,110,0.92)',
        color: '#fff',
        fontWeight: 700,
        px: 3,
        py: 1,
        borderRadius: 2,
        fontSize: 18,
        pointerEvents: 'none',
      }}
    >
      Pārdots
    </Box>
  );
}
