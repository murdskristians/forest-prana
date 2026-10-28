import { Box, Container, Typography } from '@mui/material';
import { images } from '../data/products';
import { palette, sectionOffset } from '../theme';
import { SectionHeading } from './SectionHeading';

const paragraphs = [
  'Mana misija ir ienest dabas spēku Jūsu ikdienā, piedāvājot dabīgus un ilgtspējīgus produktus, kas palīdzēs Jums atjaunot enerģiju un harmoniju.',
  'Gatavoju ar rokām darinātus ekoloģiskus produktus, oximeļus, etiķus, ziedes un daudz ko citu, kas sniedz Jums dabisku un efektīvu veidu, kā rūpēties par savu veselību. Produktos apvienoju senču gudrības ar mūsdienu zinātnes sasniegumiem, lai nodrošinātu Jums vislabāko pieredzi.',
  'Mans mērķis ir palīdzēt cilvēkiem dzīvot veselīgāk, laimīgāk un saskanīgāk ar dabu.',
];

export default function About() {
  return (
    <Box component="section" id="par-mani" aria-labelledby="par-mani-title" sx={{ ...sectionOffset, bgcolor: palette.creamDeep, py: { xs: 8, md: 12 } }}>
      <Container sx={{ display: 'grid', gap: { xs: 4, md: 8 }, gridTemplateColumns: { md: 'minmax(0, 0.9fr) minmax(0, 1.1fr)' }, alignItems: 'center' }}>
        <Box component="figure" sx={{ m: 0 }}>
          <Box
            component="img"
            src={images.about}
            alt="Forest Prana saimniece"
            loading="lazy"
            sx={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', objectPosition: 'center 20%', borderRadius: 4, bgcolor: palette.paper }}
          />
        </Box>
        <Box>
          <SectionHeading eyebrow="Saimniece" title="Laipni lūgti Forest Prana" titleId="par-mani-title" />
          {paragraphs.map((paragraph) => (
            <Typography key={paragraph.slice(0, 24)} sx={{ mb: 2, fontSize: 17, lineHeight: 1.7, maxWidth: 620 }}>
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
