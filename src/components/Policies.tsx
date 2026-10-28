import { useEffect, useState, type ReactNode } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { WHATSAPP_URL } from '../data/products';
import { palette, sectionOffset } from '../theme';
import { SectionHeading } from './SectionHeading';

const cards = [
  { title: 'Rāmavā', text: 'Visus pasūtījumus var saņemt klātienē. Darba dienās no 10:00 līdz 18:00.' },
  { title: 'Pakomāts', text: 'Omniva, DPD, Latvijas Pasts, Venipak un citi. Parasti 3–5 darba dienas. Svētkos var aizņemt ilgāk.' },
  { title: 'Maksājums', text: 'Pārskaitījums uz kontu vai skaidra nauda klātienē. Maksā pēc vienošanās.' },
  { title: 'Ja kaut kas nav kārtībā', text: 'Par bojājumu vai neatbilstību raksti 24 stundu laikā. Vienosimies par nomaiņu vai naudas atgriešanu.' },
];

export default function Policies() {
  const [termsOpen, setTermsOpen] = useState(() => window.location.hash === '#noteikumi');
  const [deliveryOpen, setDeliveryOpen] = useState(() => window.location.hash === '#piegade');

  useEffect(() => {
    const sync = () => {
      if (window.location.hash === '#noteikumi') setTermsOpen(true);
      if (window.location.hash === '#piegade') setDeliveryOpen(true);
    };
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('popstate', sync);
    };
  }, []);

  return (
    <Box component="section" id="piegade" aria-labelledby="piegade-title" sx={{ ...sectionOffset, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="Praktiski" title="Piegāde un noteikumi" titleId="piegade-title">
          Pasūtījumu sūti WhatsApp vai īsziņā. Tad vienojamies, vai saņemsi Rāmavā vai pakomātā.
        </SectionHeading>

        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' }, mb: 2 }}>
          {cards.map((card) => (
            <Box key={card.title} sx={{ p: 2.5, bgcolor: palette.paper, border: '1px solid', borderColor: palette.line, borderRadius: 3 }}>
              <Typography sx={{ fontWeight: 700, mb: 1 }}>{card.title}</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: 15, lineHeight: 1.55 }}>{card.text}</Typography>
            </Box>
          ))}
        </Box>

        <PolicyAccordion id="noteikumi" title="Lietošanas noteikumi" expanded={termsOpen} onChange={setTermsOpen}>
          <h3>Pasūtīšanas process un piegāde</h3>
          <p>
            Kad atbilstošo produktu izvēle ir veikta un vēlaties tos pasūtīt, iesniedziet savu pasūtījumu, rakstot man{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>{' '}
            vai īsziņā. Tad mēs vienosimies par saņemšanas veidu – vai klātienē vai ar kādu no pakomātiem.
          </p>
          <h3>Maksājumu metodes apstiprināšana</h3>
          <p>Maksājumus varat veikt uz manu kontu vai skaidrā naudā klātienē.</p>
          <h3>Preču atgriešana</h3>
          <p>
            Ja preču piegādes laikā radusies kļūda: sūtījuma saturs neatbilst pasūtījumam, vai tam ir fiziski bojājumi, lūdzu
            informējiet par to 24h laikā pēc pasūtījuma saņemšanas, rakstot man. Mēs vienosimies par produkta nomaiņu vai naudas
            atgriešanu.
          </p>
          <h3>Pasūtījuma piegāde</h3>
          <p>
            Pasūtījuma piegāde tiek veikta 3 - 5 darba dienu laikā atkarībā no izvēlētā piegādes veida un pakalpojumu veicēja.
            Atgādinām, ka pakalpojuma piegādes var kavēties svētku laikā lielās pakalpojumu noslodzes dēļ.
          </p>
        </PolicyAccordion>

        <PolicyAccordion title="Piegādes detaļas" expanded={deliveryOpen} onChange={setDeliveryOpen}>
          <h3>Piegādes veidi:</h3>
          <p>
            Visus pasūtījumus iespējams saņemt Rāmavā.
            <br />
            Pasūtījumu saņemšanas laiki: Darba dienās no 10:00 līdz 18:00.
          </p>
          <p>Piegāde tiek nodrošināta ar Omniva, DPD, Latvijas pasts, Venipak u.c. - produktus varat saņemt pakomātos.</p>
          <h3>Piegādes laiks:</h3>
          <p>
            Pasūtījumu piegādes laiks ir 3–5 darba dienas. Ziemassvētku un citā aktīvās tirdzniecības laikā noformēto pasūtījumu
            piegāde var aizņemt mazliet vairāk laika nekā parasti.
          </p>
          <h3>Lūdzu, ņemiet vērā:</h3>
          <ul>
            <li>Norādiet saņemšanas vietu un ar kuru pakalpojuma sniedzēju veikt piegādi.</li>
            <li>Tālruni rakstīt nevajag — tas redzams no WhatsApp ziņas. Pakomātam obligāti norādi, kurš tas ir.</li>
          </ul>
        </PolicyAccordion>
      </Container>
    </Box>
  );
}

function PolicyAccordion({
  id,
  title,
  expanded,
  onChange,
  children,
}: {
  id?: string;
  title: string;
  expanded: boolean;
  onChange: (open: boolean) => void;
  children: ReactNode;
}) {
  return (
    <Accordion
      id={id}
      disableGutters
      elevation={0}
      expanded={expanded}
      onChange={(_, open) => onChange(open)}
      sx={{
        ...sectionOffset,
        bgcolor: 'transparent',
        borderTop: '1px solid',
        borderColor: palette.line,
        '&:before': { display: 'none' },
        borderRadius: '0 !important',
        '& h3': { fontFamily: '"Open Sans", sans-serif', fontStyle: 'normal', fontSize: 15, fontWeight: 700, mt: 2.5, mb: 1, color: palette.ink },
        '& p, & li': { m: 0, mb: 1.25, color: 'text.secondary', fontSize: 16, lineHeight: 1.7 },
        '& a': { color: palette.moss, fontWeight: 700 },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 0, minHeight: 64 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 17 }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0, pb: 3 }}>{children}</AccordionDetails>
    </Accordion>
  );
}
