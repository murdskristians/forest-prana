import { citi, etiki, etikiBenefits, oximeli, ziedes, type Product } from '../data/products';

export type CategoryId = 'oximeli' | 'etiki' | 'ziedes' | 'citi';
export type CategoryFilter = CategoryId | 'all';

export type ParsedDescription = {
  composition?: string;
  usage: string[];
  cautions: string[];
  paragraphs: string[];
};

export type CatalogItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  volume?: string;
  soldOut?: boolean;
  category: CategoryId;
  benefits?: string[];
  parsed: ParsedDescription;
  excerpt: string;
};

export const categoryMeta: { id: CategoryId; label: string; blurb: string }[] = [
  {
    id: 'oximeli',
    label: 'Oximeļi',
    blurb: 'Oksimels ir sens dabīgs eliksīrs, ko gatavo no medus, dabīgā etiķa un ārstniecības augiem. Šo sastāvdaļu apvienojums ļauj iegūt aromātisku augu izvilkumu, ko var baudīt, atšķaidot ūdenī.',
  },
  {
    id: 'etiki',
    label: 'Etiķi',
    blurb: 'Augļu etiķi, visi 4 €. Labvēlīgā ietekme ir kopīga visiem — tā ir zem filtriem.',
  },
  {
    id: 'ziedes',
    label: 'Ziedes',
    blurb: 'Ar rokām vārītas ziedes ādas, vēnu un locītavu kopšanai. Tilpums 30 vai 50 ml.',
  },
  {
    id: 'citi',
    label: 'Citi produkti',
    blurb: 'Tinktūras, deguna pilieni un kapsulas. Tilpums un cena ir pie katra produkta.',
  },
];

const CAUTION = /brīdinājums|piesardzība|kontrindik|nedrīkst|nav ieteicam|nav piemērot|nelietot|indīg|grūtniec/i;
const USAGE = /^(lietošanas ieteikumi|oximeļa lietošana|lietošana|lieto\b|kā lietot|iekšķīgi|ārīgi)/i;

function stripHeading(text: string) {
  return text
    .replace(/^(lietošanas ieteikumi|oximeļa lietošana|lietošana|kā lietot|iekšķīgi|ārīgi)\s*[:\-–—]\s*/i, '')
    .replace(/^(brīdinājums|piesardzība(?: un kontrindikācijas)?)\s*[:\-–—]\s*/i, '')
    .trim();
}

export function parseDescription(description: string): ParsedDescription {
  const composition: string[] = [];
  const usage: string[] = [];
  const cautions: string[] = [];
  const paragraphs: string[] = [];

  const chunks = description
    .replace(/\r\n/g, '\n')
    .split(/\n{2,}/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  for (const chunk of chunks) {
    const rest = chunk
      .replace(/(?:^|\n)\s*Sastāvs:\s*([^\n]+)/gi, (_, part: string) => {
        composition.push(part.trim());
        return '\n';
      })
      .trim();
    if (!rest) continue;

    const text = stripHeading(rest);
    if (!text) continue;
    if (CAUTION.test(rest)) cautions.push(text);
    else if (USAGE.test(rest)) usage.push(text);
    else paragraphs.push(text);
  }

  return {
    composition: composition.length ? composition.join('; ') : undefined,
    usage,
    cautions,
    paragraphs,
  };
}

function excerptFrom(parsed: ParsedDescription, description: string) {
  const source = parsed.paragraphs[0] || description;
  const flat = source.replace(/\s+/g, ' ').trim();
  if (flat.length <= 150) return flat;
  const cut = flat.slice(0, 150);
  const space = cut.lastIndexOf(' ');
  return `${(space > 90 ? cut.slice(0, space) : cut).trim()}…`;
}

function fromProduct(product: Product, category: CategoryId): CatalogItem {
  const parsed = parseDescription(product.description);
  return { ...product, category, parsed, excerpt: excerptFrom(parsed, product.description) };
}

function slug(name: string) {
  const letters: Record<string, string> = {
    ā: 'a',
    č: 'c',
    ē: 'e',
    ģ: 'g',
    ī: 'i',
    ķ: 'k',
    ļ: 'l',
    ņ: 'n',
    š: 's',
    ū: 'u',
    ž: 'z',
  };
  return name
    .toLowerCase()
    .replace(/[āčēģīķļņšūž]/g, (letter) => letters[letter] ?? letter)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const vinegarNote = 'Augļu etiķis. Labvēlīgā ietekme visiem etiķiem ir kopīga.';

const vinegars: CatalogItem[] = etiki.map((vinegar) => {
  const parsed = parseDescription(vinegarNote);
  return {
    id: slug(vinegar.name),
    name: vinegar.name,
    price: vinegar.price,
    image: vinegar.image,
    description: vinegarNote,
    soldOut: vinegar.soldOut,
    category: 'etiki',
    benefits: etikiBenefits,
    parsed,
    excerpt: vinegarNote,
  };
});

export const catalog: CatalogItem[] = [
  ...oximeli.map((product) => fromProduct(product, 'oximeli')),
  ...vinegars,
  ...ziedes.map((product) => fromProduct(product, 'ziedes')),
  ...citi.map((product) => fromProduct(product, 'citi')),
];

export const catalogById = new Map(catalog.map((item) => [item.id, item]));

export function categoryById(id: CategoryId) {
  return categoryMeta.find((category) => category.id === id)!;
}

export function isCategoryId(id: string): id is CategoryId {
  return categoryMeta.some((category) => category.id === id);
}

export function foldSearch(value: string) {
  const letters: Record<string, string> = {
    ā: 'a',
    č: 'c',
    ē: 'e',
    ģ: 'g',
    ī: 'i',
    ķ: 'k',
    ļ: 'l',
    ņ: 'n',
    š: 's',
    ū: 'u',
    ž: 'z',
  };
  return value
    .toLowerCase()
    .replace(/[āčēģīķļņšūž]/g, (letter) => letters[letter] ?? letter);
}

export function matchesQuery(item: CatalogItem, query: string) {
  const needle = foldSearch(query.trim());
  if (!needle) return true;
  const haystack = foldSearch(
    [
      item.name,
      item.description,
      item.parsed.composition ?? '',
      item.parsed.paragraphs.join(' '),
      item.parsed.usage.join(' '),
      item.benefits?.join(' ') ?? '',
      categoryById(item.category).label,
    ].join(' '),
  );
  return haystack.includes(needle);
}

export { etikiBenefits as vinegarBenefits };
