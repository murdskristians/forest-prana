import { WHATSAPP_URL } from '../data/products';

export function formatPrice(value: number) {
  return `${value}\u00a0€`;
}

export function formatVolume(volume?: string) {
  if (!volume) return undefined;
  return volume.replace(/(\d+)\s*(gab\.|ml)\b/gi, (_, amount: string, unit: string) => `${amount} ${unit.toLowerCase()}`);
}

export function formatPhone(digits: string) {
  const numbers = digits.replace(/\D/g, '');
  if (numbers.length === 8) return `+371 ${numbers.slice(0, 2)} ${numbers.slice(2, 5)} ${numbers.slice(5)}`;
  if (numbers.length === 11 && numbers.startsWith('371')) {
    return `+371 ${numbers.slice(3, 5)} ${numbers.slice(5, 8)} ${numbers.slice(8)}`;
  }
  return digits;
}

export function productWord(count: number) {
  const word = count % 10 === 1 && count % 100 !== 11 ? 'produkts' : 'produkti';
  return `${count} ${word}`;
}

export function itemWord(count: number) {
  const word = count % 10 === 1 && count % 100 !== 11 ? 'prece' : 'preces';
  return `${count} ${word}`;
}

export function whatsappLink(text: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}

export function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  element.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}
