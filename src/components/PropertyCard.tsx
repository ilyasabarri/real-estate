'use client';

import React from 'react';
import Link from 'next/link';
import { Property } from '@/types/property';
import { useCurrency } from '@/context/CurrencyContext';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { formatPrice } = useCurrency();
  return (
    <article className="route">
      <img 
        src={property.images[0]} 
        alt={property.title} 
        loading="lazy" 
      />

      {/* Dotted Route Line with Arrow matching Kesh Majestic */}
      <div className="route__line" aria-hidden="true">
        <span className="route__dot"></span>
        <span className="route__arrow">
          <svg viewBox="0 0 24 18" aria-hidden="true">
            <path d="M1 1l22 8-22 8 5-8z" fill="var(--gold)"/>
          </svg>
        </span>
        <span className="route__dot route__dot--end"></span>
      </div>

      <h3 className="route__names">
        <span>{property.city}</span>
        <span>{property.district}</span>
      </h3>

      <ul className="route__chips" role="list">
        <li>
          <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px' }} aria-hidden="true">
            <path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span>{property.surfaceM2} m²</span>
        </li>
        <li>
          <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px' }} aria-hidden="true">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span>{property.bedrooms} Chambres</span>
        </li>
      </ul>

      <div className="route__ways" role="radiogroup" aria-label="Transaction">
        <button type="button" role="radio" aria-checked={property.transaction === 'vente'}>
          Vente définitive
        </button>
        <button type="button" role="radio" aria-checked={property.transaction === 'location'}>
          Meublé Standing
        </button>
      </div>

      <div className="route__foot">
        <div>
          <p className="route__from">{property.transaction === 'vente' ? 'Prix demandé' : 'Loyer mensuel'}</p>
          <p className="route__price">
            <strong>≈ {formatPrice(property.priceMAD, property.period)}</strong>
            <span>Titre foncier certifié</span>
          </p>
        </div>

        <Link className="route__book" href={`/biens/${property.slug}`}>
          Explorer →
        </Link>
      </div>
    </article>
  );
}
