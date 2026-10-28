import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Snackbar } from '@mui/material';
import { catalogById, type CatalogItem } from './catalog';
import { formatPrice, formatVolume } from './format';

const STORAGE_KEY = 'forest-prana-order-v1';

export type ContactDraft = {
  name: string;
  method: '' | 'ramava' | 'pakomats';
  place: string;
  note: string;
};

type Line = { id: string; qty: number };

export type OrderLine = Line & { item: CatalogItem };

type Notice = { text: string; id: number };

type OrderContextValue = {
  lines: OrderLine[];
  count: number;
  total: number;
  contact: ContactDraft;
  setContact: (patch: Partial<ContactDraft>) => void;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  message: string;
};

const emptyContact: ContactDraft = { name: '', method: '', place: '', note: '' };

function asString(value: unknown, max: number) {
  return typeof value === 'string' ? value.slice(0, max) : '';
}

function clampContact(value: Partial<ContactDraft> | undefined): ContactDraft {
  const method = value?.method === 'ramava' || value?.method === 'pakomats' ? value.method : '';
  return {
    name: asString(value?.name, 80),
    method,
    place: asString(value?.place, 120),
    note: asString(value?.note, 500),
  };
}

function loadState(): { lines: Line[]; contact: ContactDraft } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { lines: [], contact: emptyContact };
    const data = JSON.parse(raw) as { lines?: unknown; contact?: Partial<ContactDraft> };
    const lines = Array.isArray(data.lines)
      ? data.lines.flatMap((entry) => {
          if (!entry || typeof entry !== 'object') return [];
          const line = entry as { id?: unknown; qty?: unknown };
          if (typeof line.id !== 'string' || !catalogById.has(line.id)) return [];
          if (catalogById.get(line.id)?.soldOut) return [];
          const qty = Math.floor(Number(line.qty));
          if (!Number.isFinite(qty) || qty < 1) return [];
          return [{ id: line.id, qty: Math.min(20, qty) }];
        })
      : [];
    return { lines, contact: clampContact(data.contact) };
  } catch {
    return { lines: [], contact: emptyContact };
  }
}

function buildOrderMessage(lines: OrderLine[], contact: ContactDraft) {
  const rows = lines.map(({ qty, item }) => {
    const volume = formatVolume(item.volume);
    const detail = volume ? `, ${volume}` : '';
    return `• ${item.name}${detail} × ${qty} — ${formatPrice(item.price * qty)}`;
  });
  const total = lines.reduce((sum, line) => sum + line.item.price * line.qty, 0);
  const method =
    contact.method === 'ramava'
      ? 'Klātienē Rāmavā'
      : contact.method === 'pakomats'
        ? `Pakomāts${contact.place.trim() ? ` — ${contact.place.trim()}` : ''}`
        : 'Jāvienojas';

  const parts = ['Sveiki! Vēlos pasūtīt no Forest Prana.', '', ...rows, '', `Kopā: ${formatPrice(total)}`, '', `Saņemšana: ${method}`];
  if (contact.name.trim()) parts.push(`Vārds: ${contact.name.trim()}`);
  if (contact.note.trim()) parts.push(`Piezīme: ${contact.note.trim()}`);
  return parts.join('\n');
}

const OrderContext = createContext<OrderContextValue | null>(null);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [{ lines, contact }, setState] = useState(loadState);
  const [notice, setNotice] = useState<Notice | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ lines, contact }));
  }, [lines, contact]);

  const detailed = useMemo<OrderLine[]>(
    () =>
      lines.flatMap((line) => {
        const item = catalogById.get(line.id);
        return item ? [{ ...line, item }] : [];
      }),
    [lines],
  );

  const setContact = useCallback((patch: Partial<ContactDraft>) => {
    setState((prev) => ({ ...prev, contact: clampContact({ ...prev.contact, ...patch }) }));
  }, []);

  const add = useCallback((id: string, qty = 1) => {
    const item = catalogById.get(id);
    const amount = Math.floor(qty);
    if (!item || item.soldOut || amount < 1) return;
    setState((prev) => {
      const existing = prev.lines.find((line) => line.id === id);
      const nextLines = existing
        ? prev.lines.map((line) => (line.id === id ? { ...line, qty: Math.min(20, line.qty + amount) } : line))
        : [...prev.lines, { id, qty: Math.min(20, amount) }];
      return { ...prev, lines: nextLines };
    });
    setNotice({ text: `${item.name} pievienots pasūtījumam`, id: Date.now() });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    const next = Math.floor(qty);
    setState((prev) => ({
      ...prev,
      lines:
        next < 1
          ? prev.lines.filter((line) => line.id !== id)
          : prev.lines.map((line) => (line.id === id ? { ...line, qty: Math.min(20, next) } : line)),
    }));
  }, []);

  const remove = useCallback((id: string) => {
    setState((prev) => ({ ...prev, lines: prev.lines.filter((line) => line.id !== id) }));
  }, []);

  const clear = useCallback(() => {
    setState((prev) => ({ ...prev, lines: [] }));
  }, []);

  const count = detailed.reduce((sum, line) => sum + line.qty, 0);
  const total = detailed.reduce((sum, line) => sum + line.qty * line.item.price, 0);
  const message = useMemo(() => buildOrderMessage(detailed, contact), [detailed, contact]);

  const value = useMemo<OrderContextValue>(
    () => ({ lines: detailed, count, total, contact, setContact, add, setQty, remove, clear, message }),
    [detailed, count, total, contact, setContact, add, setQty, remove, clear, message],
  );

  return (
    <OrderContext.Provider value={value}>
      {children}
      <Snackbar
        key={notice?.id}
        open={Boolean(notice)}
        autoHideDuration={2800}
        onClose={() => setNotice(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message={notice?.text ?? ''}
        sx={{ top: { xs: 80, sm: 84 } }}
      />
    </OrderContext.Provider>
  );
}

// Hook shares this module with the provider that owns the order state.
// oxlint-disable-next-line react/only-export-components
export function useOrder() {
  const value = useContext(OrderContext);
  if (!value) throw new Error('useOrder must be used within OrderProvider');
  return value;
}
