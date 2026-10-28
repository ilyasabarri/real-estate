'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PROPERTIES } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';
import { 
  Search, 
  RotateCcw, 
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';

function CatalogContent() {
  const searchParams = useSearchParams();

  // Read initial params
  const initialTransaction = searchParams.get('transaction') || '';
  const initialCity = searchParams.get('city') || '';
  const initialType = searchParams.get('type') || '';
  const initialMaxPrice = searchParams.get('maxPrice') || '';

  // Filter States
  const [transaction, setTransaction] = useState<string>(initialTransaction);
  const [city, setCity] = useState<string>(initialCity);
  const [propertyType, setPropertyType] = useState<string>(initialType);
  const [maxPrice, setMaxPrice] = useState<string>(initialMaxPrice);
  const [bedrooms, setBedrooms] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Filter Logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      // Transaction
      if (transaction && p.transaction !== transaction) return false;
      // City
      if (city && p.city.toLowerCase() !== city.toLowerCase()) return false;
      // Type
      if (propertyType && p.type.toLowerCase() !== propertyType.toLowerCase()) return false;
      // Max Price
      if (maxPrice && p.priceMAD > parseInt(maxPrice, 10)) return false;
      // Bedrooms
      if (bedrooms && p.bedrooms < parseInt(bedrooms, 10)) return false;
      // Search text query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesDistrict = p.district.toLowerCase().includes(query);
        const matchesRef = p.reference.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDistrict && !matchesRef && !matchesDesc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceMAD - b.priceMAD;
      if (sortBy === 'price-desc') return b.priceMAD - a.priceMAD;
      if (sortBy === 'surface-desc') return b.surfaceM2 - a.surfaceM2;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [transaction, city, propertyType, maxPrice, bedrooms, searchQuery, sortBy]);

  const resetFilters = () => {
    setTransaction('');
    setCity('');
    setPropertyType('');
    setMaxPrice('');
    setBedrooms('');
    setSearchQuery('');
    setSortBy('featured');
  };

  const hasActiveFilters = Boolean(
    transaction || city || propertyType || maxPrice || bedrooms || searchQuery
  );

  return (
    <div className="subpage-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '140px 1.25rem 5rem' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', padding: '0.3rem 0.85rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--gold-border)' }}>
          <Sparkles size={12} color="var(--gold-light)" />
          <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-light)' }}>
            Catalogue Officiel • Immobilier de Prestige Maroc
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
          Nos Biens Immobiliers d'Exception
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '650px', lineHeight: 1.6 }}>
          Découvrez notre collection exclusive de villas côtières, riads historiques, penthouses modernes et propriétés d'investissement à Tanger, Marrakech, Casablanca et Rabat.
        </p>
      </div>

      {/* Interactive Filter Bar */}
      <div className="luxury-glass" style={{ padding: '1.5rem', borderRadius: '20px', marginBottom: '2.5rem' }}>
        {/* Top Search & Transaction Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '1.25rem' }}>
          {/* Transaction Tabs */}
          <div style={{ display: 'flex', background: '#121218', padding: '3px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', gap: '4px' }}>
            {[
              { id: '', label: 'Tous les biens' },
              { id: 'vente', label: 'Vente' },
              { id: 'location', label: 'Location' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setTransaction(tab.id)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '9px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  border: 'none',
                  background: transaction === tab.id ? 'linear-gradient(135deg,#dfba73,#9e7a36)' : 'transparent',
                  color: transaction === tab.id ? '#000' : '#94a3b8',
                  transition: 'all 0.2s'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Keyword Search Input */}
          <div style={{ position: 'relative', minWidth: '260px', flex: '1', maxWidth: '400px' }}>
            <Search size={15} color="#64748b" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Réf, quartier (ex: Malabata, Guéliz, Anfa)..."
              className="form-input"
              style={{ paddingLeft: '2.4rem' }}
            />
          </div>
        </div>

        {/* Filters Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
          {/* City */}
          <div>
            <label style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
              Ville
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-input"
              style={{ cursor: 'pointer' }}
            >
              <option value="">Toutes les Villes</option>
              <option value="Tanger">Tanger</option>
              <option value="Marrakech">Marrakech</option>
              <option value="Casablanca">Casablanca</option>
              <option value="Rabat">Rabat</option>
              <option value="Agadir">Agadir</option>
            </select>
          </div>

          {/* Property Type */}
          <div>
            <label style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
              Type de Propriété
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="form-input"
              style={{ cursor: 'pointer' }}
            >
              <option value="">Tous les Types</option>
              <option value="villa">Villa de Prestige</option>
              <option value="riad">Riad Historique</option>
              <option value="appartement">Appartement Standing</option>
              <option value="penthouse">Penthouse Vue Mer</option>
              <option value="bureau">Bureau / Siège Prestige</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div>
            <label style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
              Chambres
            </label>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="form-input"
              style={{ cursor: 'pointer' }}
            >
              <option value="">Indifférent</option>
              <option value="2">2+ Chambres</option>
              <option value="3">3+ Chambres</option>
              <option value="4">4+ Chambres</option>
              <option value="5">5+ Chambres</option>
            </select>
          </div>

          {/* Max Price */}
          <div>
            <label style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
              Budget Max
            </label>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="form-input"
              style={{ cursor: 'pointer' }}
            >
              <option value="">Budget Illimité</option>
              <option value="5000000">5 000 000 MAD</option>
              <option value="10000000">10 000 000 MAD</option>
              <option value="15000000">15 000 000 MAD</option>
              <option value="25000000">25 000 000 MAD</option>
            </select>
          </div>
        </div>

        {/* Bottom Filter Controls Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.5rem', fontSize: '0.75rem' }}>
          <div style={{ color: '#94a3b8' }}>
            <span style={{ color: '#fff', fontWeight: 700, fontFamily: 'monospace' }}>{filteredProperties.length}</span> propriétés trouvées
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ background: '#181822', color: '#fff', fontSize: '0.72rem', padding: '0.4rem 0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', outline: 'none' }}
            >
              <option value="featured">Sélection Prestige</option>
              <option value="price-asc">Prix Croissant</option>
              <option value="price-desc">Prix Décroissant</option>
              <option value="surface-desc">Plus Grandes Surfaces</option>
            </select>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--gold-light)', background: 'none', border: 'none', fontSize: '0.75rem', cursor: 'pointer' }}
              >
                <RotateCcw size={13} />
                <span>Réinitialiser</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Property Cards Grid */}
      {filteredProperties.length > 0 ? (
        <ul className="journeys__grid" role="list" style={{ marginTop: '30px', listStyle: 'none', padding: 0 }}>
          {filteredProperties.map((property) => (
            <li key={property.id} className="reveal">
              <PropertyCard property={property} />
            </li>
          ))}
        </ul>
      ) : (
        /* Empty State */
        <div className="luxury-card" style={{ textAlign: 'center', padding: '4rem 2rem', borderRadius: '20px' }}>
          <SlidersHorizontal size={36} color="var(--gold-primary)" style={{ margin: '0 auto 1.25rem' }} />
          <p style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700, marginBottom: '0.5rem' }}>
            Aucun bien ne correspond à ces critères
          </p>
          <p style={{ fontSize: '0.82rem', color: '#94a3b8', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
            Nous disposons de nombreuses opportunités en portefeuille confidentiel <span style={{ color: 'var(--gold-light)' }}>off-market</span> non publiées en ligne.
          </p>
          <button
            onClick={resetFilters}
            className="gold-gradient-bg"
            style={{ padding: '0.65rem 1.5rem', borderRadius: '10px', fontSize: '0.75rem', cursor: 'pointer' }}
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
}

export default function BiensPage() {
  return (
    <Suspense fallback={
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.25rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
        Chargement du catalogue immobilier...
      </div>
    }>
      <CatalogContent />
    </Suspense>
  );
}
