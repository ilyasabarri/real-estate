'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PROPERTIES } from '@/data/properties';
import { useCurrency } from '@/context/CurrencyContext';
import PropertyCard from '@/components/PropertyCard';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Mail, 
  Calculator, 
  ArrowLeft
} from 'lucide-react';

export default function PropertyDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { formatPrice } = useCurrency();

  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) {
    return notFound();
  }

  // Gallery active index state
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Financing Simulator States
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanYears, setLoanYears] = useState<number>(20);
  const interestRateAnnual = 0.0475; // 4.75%

  // Calculation
  const propertyPrice = property.priceMAD;
  const downPaymentMAD = (propertyPrice * downPaymentPercent) / 100;
  const loanAmountMAD = propertyPrice - downPaymentMAD;
  const numberOfMonths = loanYears * 12;
  const monthlyRate = interestRateAnnual / 12;

  const monthlyPaymentMAD = Math.round(
    (loanAmountMAD * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
    (Math.pow(1 + monthlyRate, numberOfMonths) - 1)
  );

  const whatsappMessage = encodeURIComponent(
    `Bonjour ${property.agent.name}, je suis intéressé(e) par la propriété [Réf: ${property.reference}] - "${property.title}" sur Majestic Estates Maroc. Est-elle disponible pour une visite privée ?`
  );

  const similarProperties = PROPERTIES
    .filter((p) => p.id !== property.id && (p.city === property.city || p.type === property.type))
    .slice(0, 3);

  return (
    <div className="subpage-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '140px 1.25rem 4rem' }}>
      {/* Back Button & Breadcrumbs */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
        <Link
          href="/biens"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', textDecoration: 'none' }}
        >
          <ArrowLeft size={14} color="var(--gold-light)" />
          <span>Retour au catalogue</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace', fontSize: '0.7rem' }}>
          <span>{property.city}</span>
          <span style={{ color: '#475569' }}>/</span>
          <span>{property.district}</span>
          <span style={{ color: '#475569' }}>/</span>
          <span style={{ color: 'var(--gold-light)', fontWeight: 700 }}>{property.reference}</span>
        </div>
      </div>

      {/* Property Title & Header Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.25rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '1.5rem' }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              background: property.transaction === 'vente' ? 'linear-gradient(135deg, #dfba73, #9e7a36)' : '#059669',
              color: property.transaction === 'vente' ? '#000' : '#fff'
            }}>
              {property.transaction === 'vente' ? 'Vente' : 'Location'}
            </span>
            {property.isFurnished && (
              <span className="badge-dark">Meublé</span>
            )}
            <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'monospace' }}>
              Réf : {property.reference}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.25, letterSpacing: '-0.02em', marginBottom: '0.6rem' }}>
            {property.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--gold-light)' }}>
            <MapPin size={15} color="var(--gold-primary)" />
            <span>{property.district}, {property.city} (Maroc)</span>
          </div>
        </div>

        {/* Price Box */}
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.25rem' }}>
            {property.transaction === 'vente' ? 'Prix Demandé' : 'Loyer Mensuel'}
          </span>
          <p className="gold-gradient-text" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, lineHeight: 1 }}>
            {formatPrice(property.priceMAD, property.period)}
          </p>
        </div>
      </div>

      {/* PHOTO GALLERY */}
      <div style={{ marginBottom: '2.5rem' }}>
        {/* Main Big Photo */}
        <div style={{ position: 'relative', width: '100%', height: '520px', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--gold-border)', background: '#121218', marginBottom: '1rem' }}>
          <Image
            src={property.images[activeImageIndex]}
            alt={property.title}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            style={{ objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem', background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(10px)', padding: '0.35rem 0.85rem', borderRadius: '10px', fontSize: '0.72rem', color: '#fff', border: '1px solid rgba(255,255,255,0.12)', fontFamily: 'monospace' }}>
            Photo {activeImageIndex + 1} / {property.images.length}
          </div>
        </div>

        {/* Thumbnail Selector */}
        {property.images.length > 1 && (
          <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                style={{
                  position: 'relative',
                  width: '120px',
                  height: '75px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: activeImageIndex === idx ? '2px solid var(--gold-primary)' : '1px solid rgba(255,255,255,0.1)',
                  opacity: activeImageIndex === idx ? 1 : 0.6,
                  transform: activeImageIndex === idx ? 'scale(1.03)' : 'scale(1)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                <Image
                  src={img}
                  alt={`Vue ${idx + 1}`}
                  fill
                  sizes="120px"
                  style={{ objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* TWO COLUMNS: DETAILS + STICKY BROKER */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
        {/* Left Column: Specs, Desc, Amenities, Mortgage Calc */}
        <div style={{ flex: '2', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Key Specs Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '16px',
            background: '#121218',
            border: '1px solid rgba(255,255,255,0.06)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Maximize2 size={18} color="var(--gold-primary)" />
              </div>
              <div>
                <span style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>Surface</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{property.surfaceM2} m²</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bed size={18} color="var(--gold-primary)" />
              </div>
              <div>
                <span style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>Chambres</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{property.bedrooms > 0 ? property.bedrooms : 'Plateau'}</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bath size={18} color="var(--gold-primary)" />
              </div>
              <div>
                <span style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>Salles d'eau</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{property.bathrooms}</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Calendar size={18} color="var(--gold-primary)" />
              </div>
              <div>
                <span style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>Année</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{property.yearBuilt || 'Récente'}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
              Description de la Propriété
            </h2>
            <div style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <p>{property.description}</p>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>
                Visites privées sur rendez-vous 7j/7. Dossier technique complet (titre foncier foncier non hypothéqué, plans d'architecte, certificat de conformité) remis lors de la rencontre avec notre directeur régional.
              </p>
            </div>
          </div>

          {/* Amenities & Prestations */}
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
              Prestations & Équipements de Haut Standing
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {property.amenities.map((amenity, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', fontSize: '0.8rem', color: '#f1f5f9' }}>
                  <CheckCircle2 size={16} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Financing Simulator (Vente only) */}
          {property.transaction === 'vente' && (
            <div className="luxury-glass" style={{ padding: '2rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '2.2rem', height: '2.2rem', borderRadius: '8px', background: 'rgba(197,160,89,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Calculator size={18} color="var(--gold-primary)" />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>
                    Simulateur de Crédit Immobilier Maroc
                  </h3>
                </div>
                <span style={{ fontSize: '0.7rem', color: 'var(--gold-light)', background: 'rgba(255,255,255,0.04)', padding: '0.3rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace' }}>
                  Taux bancaire indicatif : 4.75%
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                {/* Apport Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#94a3b8' }}>Apport personnel ({downPaymentPercent}%) :</span>
                    <span style={{ color: '#fff', fontWeight: 700, fontFamily: 'monospace' }}>{formatPrice(downPaymentMAD)}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--gold-primary)', cursor: 'pointer' }}
                  />
                </div>

                {/* Duration Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#94a3b8' }}>Durée du prêt :</span>
                    <span style={{ color: '#fff', fontWeight: 700, fontFamily: 'monospace' }}>{loanYears} ans ({numberOfMonths} mois)</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="25"
                    step="5"
                    value={loanYears}
                    onChange={(e) => setLoanYears(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--gold-primary)', cursor: 'pointer' }}
                  />
                </div>
              </div>

              {/* Monthly Result Box */}
              <div style={{ padding: '1.25rem 1.5rem', borderRadius: '14px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'block', marginBottom: '0.2rem' }}>Mensualité estimée :</span>
                  <p className="gold-gradient-text" style={{ fontSize: '1.75rem', fontWeight: 900, lineHeight: 1 }}>
                    {formatPrice(monthlyPaymentMAD)} <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 400 }}>/ mois</span>
                  </p>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', textAlign: 'right' }}>
                  Montant financé : <span style={{ color: '#fff', fontWeight: 700, fontFamily: 'monospace' }}>{formatPrice(loanAmountMAD)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Sticky Broker & Lead Capture Card */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div className="luxury-glass-heavy" style={{ padding: '1.75rem', borderRadius: '20px', position: 'sticky', top: '6rem' }}>
            {/* Agent Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.25rem' }}>
              <div style={{ position: 'relative', width: '3.75rem', height: '3.75rem', borderRadius: '9999px', overflow: 'hidden', border: '2px solid var(--gold-primary)', flexShrink: 0 }}>
                <Image
                  src={property.agent.photo}
                  alt={property.agent.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.2rem' }}>{property.agent.name}</h4>
                <p style={{ fontSize: '0.72rem', color: 'var(--gold-light)', marginBottom: '0.25rem' }}>{property.agent.role}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.68rem', color: '#4ade80' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: '#4ade80' }}></span>
                  Disponible aujourd'hui
                </span>
              </div>
            </div>

            {/* Quick CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${property.agent.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: '#fff',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(16,185,129,0.3)',
                  transition: 'filter 0.2s'
                }}
              >
                <MessageCircle size={16} />
                <span>Discuter sur WhatsApp</span>
              </a>

              {/* Direct Phone Call Button */}
              <a
                href={`tel:${property.agent.phone}`}
                className="gold-outline-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1rem',
                  borderRadius: '12px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <Phone size={15} color="var(--gold-primary)" />
                <span>{property.agent.phone}</span>
              </a>
            </div>

            {/* Inquiry Form */}
            <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fff', display: 'block', marginBottom: '0.75rem' }}>
                Planifier une Visite Privée
              </span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Votre demande de visite privée a été enregistrée avec succès. Notre directeur régional vous contactera sous 2 heures.');
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}
              >
                <input
                  type="text"
                  required
                  placeholder="Votre Nom & Prénom"
                  className="form-input"
                />
                <input
                  type="tel"
                  required
                  placeholder="Téléphone / WhatsApp (+212 (0) 0 6 00 00 00 00)"
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Adresse Email"
                  className="form-input"
                />
                <button
                  type="submit"
                  className="gold-gradient-bg"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    marginTop: '0.35rem'
                  }}
                >
                  Confirmer la Demande
                </button>
              </form>
            </div>

            {/* Trust badge */}
            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.7rem', color: '#64748b' }}>
              <ShieldCheck size={14} color="var(--gold-primary)" />
              <span>Confidentialité et discrétion absolues</span>
            </div>
          </div>
        </div>
      </div>

      {/* SIMILAR PROPERTIES ROW */}
      {similarProperties.length > 0 && (
        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-eyebrow"><span className="line" />Suggestions Sélectionnées</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>
                Propriétés Similaires à Découvrir
              </h3>
            </div>
            <Link
              href={`/biens?city=${property.city}`}
              style={{ fontSize: '0.78rem', color: 'var(--gold-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <span>Voir d'autres biens à {property.city}</span>
              <span style={{ fontSize: '1rem' }}>→</span>
            </Link>
          </div>

          <div className="journeys__grid">
            {similarProperties.map((sim) => (
              <PropertyCard key={sim.id} property={sim} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
