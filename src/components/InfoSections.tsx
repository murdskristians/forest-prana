import { Box, Container, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { WHATSAPP_URL } from '../data/products';
import { CtaRow } from './ui';

function Info({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <Box id={id} component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Typography component="h2" sx={{ textAlign: 'center', fontSize: { xs: 26, md: 32 }, mb: 5 }}>
          {title}
        </Typography>
        <Box
          sx={{
            fontSize: 14.5,
            lineHeight: 1.7,
            color: 'text.secondary',
            '& h3': { color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'underline', mt: 3.5, mb: 1 },
            '& p': { m: 0, mb: 1.5 },
            '& a': { color: '#fff' },
          }}
        >
          {children}
        </Box>
        <CtaRow />
      </Container>
    </Box>
  );
}

export function Terms() {
  return (
    <Info id="noteikumi" title="LIETOŠANAS NOTEIKUMI">
      <h3>Pasūtīšanas process un piegāde</h3>
      <p>
        Kad atbilstošo produktu izvēle ir veikta un vēlaties tos pasūtīt, iesniedziet savu pasūtījumu, rakstot man{' '}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Whatsapp</a> vai īsziņā. Tad mēs vienosimies par
        saņemšanas veidu – vai klātienē vai ar kādu no pakomātiem.
      </p>
      <h3>Maksājumu metodes apstiprināšana</h3>
      <p>Maksājumus varat veikt uz manu kontu vai skaidrā naudā klātienē.</p>
      <h3>Preču atgriešana</h3>
      <p>
        Ja preču piegādes laikā radusies kļūda: sūtījuma saturs neatbilst pasūtījumam, vai tam ir fiziski bojājumi,
        lūdzu informējiet par to 24h laikā pēc pasūtījuma saņemšanas, rakstot man. Mēs vienosimies par produkta nomaiņu
        vai naudas atgriešanu.
      </p>
      <h3>Pasūtījuma piegāde</h3>
      <p>
        Pasūtījuma piegāde tiek veikta 3 - 5 darba dienu laikā atkarībā no izvēlētā piegādes veida un pakalpojumu
        veicēja. Atgādinām, ka pakalpojuma piegādes var kavēties svētku laikā lielās pakalpojumu noslodzes dēļ.
      </p>
    </Info>
  );
}

export function Delivery() {
  return (
    <Info id="piegade" title="PIEGĀDE">
      <h3>Piegādes veidi:</h3>
      <p>
        Visus pasūtījumus iespējams saņemt Rāmavā.
        <br />
        Pasūtījumu saņemšanas laiki: Darba dienās no 10:00 līdz 18:00.
      </p>
      <p>Piegāde tiek nodrošināta ar Omniva, DPD, Latvijas pasts, Venipak u.c. - produktus varat saņemt pakomātos.</p>
      <h3>Piegādes laiks:</h3>
      <p>
        Pasūtījumu piegādes laiks ir 3–5 darba dienas. Ziemassvētku un citā aktīvās tirdzniecības laikā noformēto
        pasūtījumu piegāde var aizņemt mazliet vairāk laika nekā parasti.
      </p>
      <h3>Lūdzu, ņemiet vērā:</h3>
      <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
        <li>Norādiet saņemšanas vietu un ar kuru pakalpojuma sniedzēju veikt piegādi.</li>
        <li>Noteikti jānorāda pareizs tālruņa numurs.</li>
      </Box>
    </Info>
  );
}
