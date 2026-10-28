import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { palette } from '../theme';

export function QtyStepper({
  value,
  onChange,
  min = 1,
  max = 20,
  label,
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
  label: string;
}) {
  return (
    <Box
      role="group"
      aria-label={label}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: palette.line,
        borderRadius: 999,
        bgcolor: palette.paper,
      }}
    >
      <IconButton aria-label="Samazināt daudzumu" size="small" disabled={value <= min} onClick={() => onChange(value - 1)} sx={{ width: 40, height: 40 }}>
        <RemoveIcon fontSize="small" />
      </IconButton>
      <Typography component="span" aria-live="polite" sx={{ minWidth: 28, textAlign: 'center', fontWeight: 700 }}>
        {value}
      </Typography>
      <IconButton aria-label="Palielināt daudzumu" size="small" disabled={value >= max} onClick={() => onChange(value + 1)} sx={{ width: 40, height: 40 }}>
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
