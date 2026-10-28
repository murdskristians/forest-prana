import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { palette } from '../theme';

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  children,
}: {
  eyebrow: string;
  title: string;
  titleId?: string;
  children?: ReactNode;
}) {
  return (
    <Box sx={{ mb: { xs: 3, md: 4 }, maxWidth: 680 }}>
      <Typography
        component="p"
        sx={{
          m: 0,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: palette.honeyDeep,
        }}
      >
        {eyebrow}
      </Typography>
      <Typography id={titleId} component="h2" variant="h2" sx={{ mt: 1, fontSize: { xs: 42, md: 60 }, color: palette.ink }}>
        {title}
      </Typography>
      {children ? (
        <Typography sx={{ mt: 2, fontSize: 17, lineHeight: 1.65, color: 'text.secondary' }}>{children}</Typography>
      ) : null}
    </Box>
  );
}
