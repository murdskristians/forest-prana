import { Box, Container, Typography } from '@mui/material';
import { images } from '../data/products';
import { colors } from '../theme';
import { CtaRow } from './ui';

export default function About() {
  return (
    <Box id="par-mani" component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg" sx={{ display: 'grid', gap: { xs: 4, md: 6 }, gridTemplateColumns: { md: '1fr 1fr' }, alignItems: 'center' }}>
        <Box
          component="img"
          src={images.about}
          alt="Forest Prana saimniece"
          sx={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', objectPosition: 'center 30%', bgcolor: colors.card }}
        />
        <Box>
          <Typography
            variant="h2"
            sx={{ display: 'inline-block', px: 2.5, py: 1, borderRadius: 3, bgcolor: colors.card, fontSize: { xs: 30, md: 38 } }}
          >
            Laipni lūgti Forest Prana!
          </Typography>
          <Box sx={{ mt: 3, '& p': { mb: 2.5, lineHeight: 1.7, fontSize: 15 } }}>
            <p>
              Mana misija ir ienest dabas spēku Jūsu ikdienā, piedāvājot dabīgus un ilgtspējīgus produktus, kas
              palīdzēs Jums atjaunot enerģiju un harmoniju.
            </p>
            <p>
              Gatavoju ar rokām darinātus ekoloģiskus produktus, oximeļus, etiķus, ziedes un daudz ko citu, kas sniedz
              Jums dabisku un efektīvu veidu, kā rūpēties par savu veselību. Produktos apvienoju senču gudrības ar
              mūsdienu zinātnes sasniegumiem, lai nodrošinātu Jums vislabāko pieredzi.
            </p>
            <p>Mans mērķis ir palīdzēt cilvēkiem dzīvot veselīgāk, laimīgāk un saskanīgāk ar dabu.</p>
          </Box>
          <CtaRow />
        </Box>
      </Container>
    </Box>
  );
}
