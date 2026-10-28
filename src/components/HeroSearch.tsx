'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Home, Wallet, Search } from 'lucide-react';

const TABS = [
  { id: 'vente', label: 'Acheter' },
  { id: 'location', label: 'Louer' },
  { id: 'projets', label: '✦ Projets Neufs' },
];

const CITIES = ['Toutes les Villes', 'Tanger', 'Marrakech', 'Casablanca', 'Rabat', 'Agadir'];
const TYPES  = ['Tous les Types', 'villa', 'riad', 'appartement', 'penthouse', 'bureau'];
const TYPE_LABELS: Record<string, string> = { villa: 'Villa / Maison', riad: 'Riad / Dar', appartement: 'Appartement', penthouse: 'Penthouse / Duplex', bureau: 'Bureau' };
const BUDGETS = [
  { label: 'Tous les Budgets', value: '' },
  { label: '< 3 M MAD', value: '3000000' },
  { label: '< 5 M MAD', value: '5000000' },
  { label: '< 10 M MAD', value: '10000000' },
  { label: '< 20 M MAD', value: '20000000' },
  { label: '20 M MAD +', value: '99999999' },
];

export default function HeroSearch() {
  const router = useRouter();
  const [tab, setTab] = useState('vente');
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = () => {
    if (tab === 'projets') { router.push('/projets-neufs'); return; }
    const params = new URLSearchParams();
    params.set('transaction', tab);
    if (city) params.set('city', city);
    if (type) params.set('type', type);
    if (budget) params.set('maxPrice', budget);
    router.push(`/biens?${params.toString()}`);
  };

  const selStyle: React.CSSProperties = {
    width: '100%',
    background: '#181822',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '12px',
    padding: '0.7rem 0.875rem',
    fontSize: '0.82rem',
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.35rem', marginBottom: '0.75rem', justifyContent: 'center' }}>
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: '0.45rem 1.25rem', borderRadius: '12px', fontSize: '0.72rem',
              cursor: 'pointer',
              background: tab === t.id ? 'linear-gradient(135deg,#dfba73,#9e7a36)' : 'rgba(18,18,23,0.92)',
              color: tab === t.id ? '#000' : '#94a3b8',
              transition: 'all 0.2s',
              border: tab === t.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)',
            } as React.CSSProperties}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Form */}
      <div style={{
        background: 'rgba(10,10,15,0.88)', border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '20px', padding: '1.5rem', backdropFilter: 'blur(16px)',
      }}>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
          {/* City */}
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.66rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
              <MapPin size={10} /> Ville au Maroc
            </label>
            <select style={selStyle} value={city} onChange={e => setCity(e.target.value)}>
              {CITIES.map(c => <option key={c} value={c === 'Toutes les Villes' ? '' : c}>{c}</option>)}
            </select>
          </div>

          {/* Type */}
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.66rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
              <Home size={10} /> Type de Propriété
            </label>
            <select style={selStyle} value={type} onChange={e => setType(e.target.value)}>
              {TYPES.map(t => <option key={t} value={t === 'Tous les Types' ? '' : t}>{t === 'Tous les Types' ? t : TYPE_LABELS[t] ?? t}</option>)}
            </select>
          </div>

          {/* Budget */}
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.66rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
              <Wallet size={10} /> Budget Max (MAD)
            </label>
            <select style={selStyle} value={budget} onChange={e => setBudget(e.target.value)}>
              {BUDGETS.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
            </select>
          </div>

          {/* Button */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <label style={{ fontSize: '0.66rem', fontWeight: 700, color: 'transparent', marginBottom: '0.4rem' }}>_</label>
            <button
              onClick={handleSearch}
              className="search-btn"
            >
              <Search size={15} /> Rechercher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
