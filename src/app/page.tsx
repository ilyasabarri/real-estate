'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PROPERTIES } from '@/data/properties';
import { useLocale } from '@/context/LocaleContext';

export default function HomePage() {
  const router = useRouter();
  const { t } = useLocale();
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedTransaction, setSelectedTransaction] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [selectedBedrooms, setSelectedBedrooms] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedCity !== 'all') params.append('city', selectedCity);
    if (selectedTransaction !== 'all') params.append('transaction', selectedTransaction);
    if (selectedType !== 'all') params.append('type', selectedType);
    router.push(`/biens?${params.toString()}`);
  };

  const featured = PROPERTIES.slice(0, 6);

  return (
    <>
      {/* =========================================================================
          HERO SECTION (Matching Kesh Majestic structure 1:1)
          ========================================================================= */}
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero__media media">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85" 
            alt="Majestic Estates Maroc - Demeure de prestige" 
            fetchPriority="high" 
          />
        </div>

        <div className="hero__content wrap">
          <p className="hero__chip">
            <b>DISPONIBLE 7J/7</b>
            {t.heroChip}
          </p>
          <h1 id="hero-title" className="display hero__title">
            {t.heroTitle} <em>{t.heroTitleAccent}</em> Demeure.
          </h1>
        </div>

        {/* Booker Search Bar (Identical markup to Kesh Majestic) */}
        <div className="hero__booking wrap" id="booking">
          <form className="booker" onSubmit={handleSearch} noValidate>
            <div className="booker__tabs" role="radiogroup" aria-label="Catégories">
              <label>
                <input 
                  type="radio" 
                  name="category" 
                  value="villas" 
                  defaultChecked 
                  onChange={() => setSelectedType('villa')}
                />
                <span>
                  <svg className="booker__tab-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 20v-5h4v5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Villas de Maître
                </span>
              </label>

              <label>
                <input 
                  type="radio" 
                  name="category" 
                  value="riads" 
                  onChange={() => setSelectedType('riad')}
                />
                <span>
                  <svg className="booker__tab-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2.5 19.5 9 10l4 5.5 2.5-3 6 7Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17" cy="6" r="2.2" fill="currentColor"/>
                  </svg>
                  Riads Médina
                </span>
              </label>

              <label>
                <input 
                  type="radio" 
                  name="category" 
                  value="penthouses" 
                  onChange={() => setSelectedType('penthouse')}
                />
                <span>
                  <svg className="booker__tab-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5V4l-6 2.5Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 4v13M15 6.5v13" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Penthouses Vue Mer
                </span>
              </label>

              <label>
                <input 
                  type="radio" 
                  name="category" 
                  value="neuf" 
                  onChange={() => router.push('/projets-neufs')}
                />
                <span>
                  <svg className="booker__tab-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="13.5" r="7.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 10v3.5l2.5 1.6M10 2.5h4M12 2.5V6M18.5 6.5l1.4-1.4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Programmes Neufs
                </span>
              </label>

              <Link className="booker__events" href="/contact">
                Biens Off-Market &amp; Confidentiels · Accès VIP
              </Link>
            </div>

            <div className="booker__fields">
              <label className="field field--route">
                <span className="field__label">
                  <svg className="field__icon field__icon--place" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Ville au Maroc
                </span>
                <select 
                  value={selectedCity} 
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="all">Toutes les Villes</option>
                  <option value="Tanger">Tanger (Baie &amp; Malabata)</option>
                  <option value="Marrakech">Marrakech (Palmeraie &amp; Médina)</option>
                  <option value="Casablanca">Casablanca (Anfa &amp; Racine)</option>
                  <option value="Rabat">Rabat (Souissi &amp; Ambassades)</option>
                  <option value="Taghazout">Taghazout Bay</option>
                </select>
              </label>

              <label className="field field--trip">
                <span className="field__label">
                  <svg className="field__icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 8h14M14.5 4.5 18 8l-3.5 3.5M20 16H6M9.5 12.5 6 16l3.5 3.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Transaction
                </span>
                <select 
                  value={selectedTransaction} 
                  onChange={(e) => setSelectedTransaction(e.target.value)}
                >
                  <option value="all">Acheter ou Louer</option>
                  <option value="vente">Vente définitive</option>
                  <option value="location">Location Longue Durée</option>
                  <option value="saisonniere">Location Saisonnière VIP</option>
                </select>
              </label>

              <label className="field field--route">
                <span className="field__label">
                  <svg className="field__icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Typologie
                </span>
                <select 
                  value={selectedType} 
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">Tous les Types</option>
                  <option value="villa">Villas Contemporaines</option>
                  <option value="riad">Riads de la Médina</option>
                  <option value="penthouse">Penthouses &amp; Duplex</option>
                  <option value="appartement">Appartements de Maître</option>
                </select>
              </label>

              <label className="field field--date">
                <span className="field__label">
                  <svg className="field__icon" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Budget Indicatif
                </span>
                <select 
                  value={selectedBudget} 
                  onChange={(e) => setSelectedBudget(e.target.value)}
                >
                  <option value="all">Budget Illimité</option>
                  <option value="5-10">5M à 10M MAD</option>
                  <option value="10-25">10M à 25M MAD</option>
                  <option value="25+">25M MAD et plus</option>
                </select>
              </label>

              <div className="field field--pax">
                <span className="field__label">
                  <svg className="field__icon" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="9" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Chambres
                </span>
                <select 
                  value={selectedBedrooms} 
                  onChange={(e) => setSelectedBedrooms(e.target.value)}
                  style={{ width: '100%', border: 'none', background: 'transparent', color: 'var(--ivory)', font: 'inherit', outline: 'none' }}
                >
                  <option value="all">Toutes</option>
                  <option value="3">3+ Chambres</option>
                  <option value="4">4+ Chambres</option>
                  <option value="5">5+ Suites</option>
                </select>
              </div>

              <div className="booker__quote">
                <button className="btn btn--gold header-cta" type="submit">
                  {t.searchBtn}
                </button>
              </div>
            </div>
          </form>

          {/* Trust points strip */}
          <ul className="trust" role="list">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="m8.5 12 2.5 2.5 4.5-5" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              {t.trustFoncier}
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              {t.trustNotary}
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M3.6 9h16.8M3.6 15h16.8" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              {t.trustMre}
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              {t.trustVisits}
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              {t.trustVip}
            </li>
          </ul>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: POPULAR JOURNEYS / DEMEURES D'EXCEPTION (Using .route cards)
          ========================================================================= */}
      <section className="journeys wrap" id="day-trips" aria-labelledby="journeys-title" style={{ marginTop: '60px' }}>
        <div className="journeys__head">
          <h2 id="journeys-title" className="display">
            Demeures <em>d'exception</em>
          </h2>
          <p>
            Prix certifiés conformes au marché, titres fonciers non hypothéqués, audit technique complet et visites privées avec nos directeurs régionaux.
          </p>
        </div>

        <ul className="journeys__grid" role="list">
          {featured.map((prop) => (
            <li key={prop.id} className="reveal">
              <article className="route" onClick={() => router.push(`/biens/${prop.slug}`)}>
                <img 
                  src={prop.images[0]} 
                  alt={prop.title} 
                  loading="lazy" 
                />

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
                  <span>{prop.city}</span>
                  <span>{prop.district}</span>
                </h3>

                <ul className="route__chips" role="list">
                  <li>
                    <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px' }} aria-hidden="true">
                      <path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{prop.surfaceM2} m²</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px' }} aria-hidden="true">
                      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{prop.bedrooms} Chambres</span>
                  </li>
                </ul>

                <div className="route__ways" role="radiogroup" aria-label="Transaction">
                  <button type="button" role="radio" aria-checked={prop.transaction === 'vente'}>
                    Vente définitive
                  </button>
                  <button type="button" role="radio" aria-checked={prop.transaction === 'location'}>
                    Meublé Standing
                  </button>
                </div>

                <div className="route__foot">
                  <div>
                    <p className="route__from">Prix demandé</p>
                    <p className="route__price">
                      <strong>≈ {prop.priceMAD.toLocaleString('fr-FR')} MAD</strong>
                      <span>Titre certifié</span>
                    </p>
                  </div>

                  <Link 
                    className="route__book" 
                    href={`/biens/${prop.slug}`} 
                    onClick={(e) => e.stopPropagation()}
                  >
                    Explorer →
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="journeys__more" style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link className="btn btn--outline" href="/biens">
            Consulter tout le catalogue de prestige ({PROPERTIES.length} biens)
          </Link>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR PREMIUM FLEET / NOTRE COLLECTION SIGNATURE (.pfleet & .pcar)
          ========================================================================= */}
      <section className="pfleet wrap" id="fleet" aria-labelledby="fleet-title" style={{ marginTop: '80px' }}>
        <div className="pfleet__head">
          <h2 id="fleet-title" className="display">
            Notre collection <em>signature</em>
          </h2>
          <p>
            Deux univers de prestige, audités et certifiés par nos directeurs régionaux. Choisissez l'art de vivre qui vous ressemble.
          </p>
        </div>

        <div className="pfleet__grid">
          <article className="pcar reveal">
            <figure className="pcar__media media">
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85" 
                alt="Villas Contemporaines & Domaines Privés" 
                loading="lazy" 
              />
            </figure>
            <div className="pcar__body">
              <h3 className="pcar__name">Villas Contemporaines &amp; Domaines Privés</h3>
              <p className="pcar__lead">
                Demeures d'architectes sur la baie de Tanger, front de mer à Taghazout et domaines à la Palmeraie de Marrakech.
              </p>
              <ul className="pcar__specs" role="list">
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Vue panoramique mer &amp; golf
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Piscine à débordement &amp; spa
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Domotique &amp; sécurité 24/7
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Surfaces de 450 m² à 2 500 m²
                </li>
              </ul>
              <div style={{ marginTop: '24px' }}>
                <Link className="btn btn--outline" href="/biens?type=villa" style={{ width: '100%' }}>
                  Explorer la collection Villas
                </Link>
              </div>
            </div>
          </article>

          <article className="pcar reveal">
            <figure className="pcar__media media">
              <img 
                src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85" 
                alt="Riads Historiques & Palais Médina" 
                loading="lazy" 
              />
            </figure>
            <div className="pcar__body">
              <h3 className="pcar__name">Riads Historiques &amp; Palais Médina</h3>
              <p className="pcar__lead">
                Demeures d'époque restaurées dans le respect du patrimoine arabo-andalou au cœur des Médinas de Marrakech et Fès.
              </p>
              <ul className="pcar__specs" role="list">
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2.5 19.5 9 10l4 5.5 2.5-3 6 7Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17" cy="6" r="2.2" fill="currentColor"/>
                  </svg>
                  Patio arboré avec fontaine en zellige
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Rooftop vue Koutoubia &amp; Atlas
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Titre foncier Melkia assaini
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Autorisation maison d'hôtes disponible
                </li>
              </ul>
              <div style={{ marginTop: '24px' }}>
                <Link className="btn btn--outline" href="/biens?type=riad" style={{ width: '100%' }}>
                  Explorer la collection Riads
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: INTRO QUOTE WITH GOLD VERTICAL LINE (.intro)
          ========================================================================= */}
      <section className="intro" aria-labelledby="intro-title" style={{ marginTop: '100px' }}>
        <span className="intro__line" aria-hidden="true"></span>
        <p className="intro__kicker">Majestic Estates Maroc</p>
        <h2 id="intro-title" className="display intro__title">
          Nous ne vendons pas seulement des demeures.<br />
          <em>Nous façonnons votre art de vivre.</em>
        </h2>
        <p className="intro__lead">
          Immobilier de prestige à travers le Royaume du Maroc, alliant intégrité notariale, discrétion absolue, excellence architecturale et hospitalité sur mesure.
        </p>
      </section>

      {/* =========================================================================
          SECTION 5: SPLIT SECTION (.split)
          ========================================================================= */}
      <section className="split wrap" aria-labelledby="split-title" style={{ marginTop: '80px' }}>
        <div className="split__text">
          <h2 id="split-title" className="display split__title">
            Plus qu'une transaction. <em>L'hospitalité marocaine,</em> au sommet du prestige.
          </h2>
          <p>
            De la présentation minutieuse des dossiers fonciers jusqu'à la signature notariée en toute conformité avec l'Office des Changes marocain, chaque détail reflète les exigences de Majestic Estates.
          </p>
          <Link className="btn btn--outline" href="/contact">
            Consulter nos directeurs privés
          </Link>
        </div>

        <figure className="split__media split__media--square media">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85" 
            alt="Direction Majestic Estates Maroc" 
            loading="lazy" 
          />
        </figure>

        <ul className="promises" role="list">
          <li className="promise">
            <span className="promise__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}>
                <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <h3>Conseil Exclusif</h3>
            <p>Un interlocuteur dédié membre de la direction pour chaque mandat, garantissant une confidentialité totale.</p>
          </li>

          <li className="promise">
            <span className="promise__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}>
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <h3>Audits Rigoureux</h3>
            <p>Tous les titres fonciers (Conservation Foncière), permis d'habiter et certificats de conformité sont validés en amont.</p>
          </li>

          <li className="promise">
            <span className="promise__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}>
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M3.6 9h16.8M3.6 15h16.8" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <h3>Accompagnement MRE</h3>
            <p>Prise en charge complète des transferts de devises, fiscalité marocaine, comptes convertibles et conventions bilatérales.</p>
          </li>
        </ul>
      </section>

      {/* =========================================================================
          SECTION 6: HOW BOOKING WORKS (.steps)
          ========================================================================= */}
      <section className="steps wrap" id="how-it-works" aria-labelledby="steps-title" style={{ marginTop: '100px' }}>
        <div className="steps__head">
          <p className="intro__kicker">Quatre étapes simples</p>
          <h2 id="steps-title" className="display">
            Comment se déroule <em>votre acquisition</em>
          </h2>
        </div>

        <ol className="steps__list" role="list">
          <li className="step">
            <span className="step__icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="6" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="18" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 18h6.5a3.5 3.5 0 0 0 0-7h-5a3.5 3.5 0 0 1 0-7H16" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <div className="step__text">
              <h3>1. Sélection personnalisée</h3>
              <p>Échange confidentiel sur vos critères (villas, riads, investissement locatif ou résidence principale).</p>
            </div>
          </li>

          <li className="step">
            <span className="step__icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 10h18M8 3v4M16 3v4" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <div className="step__text">
              <h3>2. Visites privées avec chauffeur</h3>
              <p>Prise en charge à votre hôtel ou aéroport pour des visites privées sous discrétion absolue.</p>
            </div>
          </li>

          <li className="step">
            <span className="step__icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="m8.5 12 2.5 2.5 4.5-5" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <div className="step__text">
              <h3>3. Audit notarial &amp; Offre</h3>
              <p>Validation du statut juridique, négociation au juste prix et rédaction du compromis notarié.</p>
            </div>
          </li>

          <li className="step">
            <span className="step__icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <div className="step__text">
              <h3>4. Remise des clés &amp; Conciergerie</h3>
              <p>Signature de l'acte authentique, inscription foncière et mise en service complète de votre propriété.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* =========================================================================
          SECTION 7: FAQ (.faq)
          ========================================================================= */}
      <section className="faq wrap" id="faq" aria-labelledby="faq-title" style={{ marginTop: '100px' }}>
        <div className="faq__head">
          <h2 id="faq-title" className="display">
            Bon à <em>savoir</em>
          </h2>
          <p>
            Les questions les plus fréquemment posées par nos acquéreurs et investisseurs. Nos directeurs sont joignables à tout moment.
          </p>
          <a 
            className="btn btn--outline btn--wa" 
            href="https://wa.me/212605319642" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }} aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871-.031.512-.226 1.558-.636 1.78-1.251.223-.615.223-1.141.157-1.251-.066-.11-.24-.176-.537-.325z" fill="currentColor"/>
            </svg>
            Poser une question sur WhatsApp
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            {
              q: "Un étranger ou non-résident peut-il acheter un bien immobilier au Maroc ?",
              a: "Oui, sans aucune restriction pour les biens situés en zone urbaine (villas, riads, appartements et terrains titrés). Seules les terres agricoles nécessitent une VNA (Vocation Non Agricole)."
            },
            {
              q: "Quels sont les frais de notaire et d'enregistrement au Maroc ?",
              a: "Les frais d'acquisition s'élèvent environ à 6 % à 7 % du montant de la vente (droits d'enregistrement 4 %, conservation foncière 1,5 %, honoraires de notaire 1 % HT + débours)."
            },
            {
              q: "Comment fonctionne la garantie de rapatriement des fonds (devises) ?",
              a: "En ouvrant un compte en dirhams convertibles auprès d'une banque marocaine pour financer votre achat, l'Office des Changes garantit le rapatriement total du capital et des plus-values en cas de revente."
            },
            {
              q: "Quelle est la procédure pour estimer et confier un bien en vente confidentielle ?",
              a: "Nos directeurs effectuent une analyse comparative du marché sous 24h. Votre bien peut être commercialisé en circuit 'Off-Market' privé pour préserver votre anonymat et la valeur du bien."
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                padding: '20px 24px',
                cursor: 'pointer',
                transition: 'border-color 0.2s'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--ivory)', margin: 0 }}>
                  {item.q}
                </h3>
                <span style={{ color: 'var(--gold)', fontSize: '20px', fontWeight: 600, marginLeft: '16px' }}>
                  {openFaq === idx ? '−' : '+'}
                </span>
              </div>
              {openFaq === idx && (
                <p style={{ marginTop: '14px', color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6, margin: '14px 0 0 0' }}>
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PRIVATE ENQUIRY / CONTACT SECTION (.enquiry)
          ========================================================================= */}
      <section className="enquiry" id="contact" aria-labelledby="enquiry-title" style={{ marginTop: '100px' }}>
        <div className="enquiry__bg media">
          <img src="/images/contact.jpg" alt="Majestic Estates Contact" loading="lazy" />
        </div>

        <div className="enquiry__inner wrap">
          <div className="enquiry__intro">
            <h2 id="enquiry-title" className="display">
              Demande de <em>mandat privé</em>
            </h2>
            <p>
              Confiez-nous votre recherche ou la vente exclusive de votre bien. Notre comité de direction vous répond sous 24h avec une étude personnalisée et confidentielle.
            </p>

            <dl className="enquiry__details">
              <div>
                <dt>
                  <svg className="enquiry__icon enquiry__icon--fill" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871-.031.512-.226 1.558-.636 1.78-1.251.223-.615.223-1.141.157-1.251-.066-.11-.24-.176-.537-.325z" fill="currentColor"/>
                  </svg>
                  WhatsApp Direct
                </dt>
                <dd><a href="https://wa.me/212605319642">+212 (0) 0 6 05 31 96 42</a></dd>
              </div>

              <div>
                <dt>
                  <svg className="enquiry__icon" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Disponibilité
                </dt>
                <dd>Permanence 7j/7 pour clients VIP &amp; mandats exclusifs</dd>
              </div>
            </dl>
          </div>

          <form 
            className="qform" 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Votre demande a été transmise avec succès à la Direction de Majestic Estates. Un conseiller privé vous contactera sous 24h.");
            }}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: '12px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px'
            }}
          >
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--gold)', marginBottom: '6px', fontWeight: 500 }}>
                Nom et Prénom
              </label>
              <input 
                type="text" 
                required 
                placeholder="Votre nom complet" 
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--char)',
                  border: '1px solid var(--line)',
                  borderRadius: '6px',
                  color: 'var(--ivory)',
                  fontSize: '15px',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--gold)', marginBottom: '6px', fontWeight: 500 }}>
                  Téléphone / WhatsApp
                </label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+212 (0) 0 6 00 00 00 00" 
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--char)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    color: 'var(--ivory)',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--gold)', marginBottom: '6px', fontWeight: 500 }}>
                  Email
                </label>
                <input 
                  type="email" 
                  required 
                  placeholder="contact@exemple.com" 
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--char)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    color: 'var(--ivory)',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--gold)', marginBottom: '6px', fontWeight: 500 }}>
                Objet de votre demande
              </label>
              <select 
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--char)',
                  border: '1px solid var(--line)',
                  borderRadius: '6px',
                  color: 'var(--ivory)',
                  fontSize: '15px',
                  outline: 'none'
                }}
              >
                <option>Acquisition d'une villa ou riad de prestige</option>
                <option>Mise en vente confidentielle (Mandat exclusif)</option>
                <option>Investissement Programme Neuf VEFA</option>
                <option>Demande d'accès aux biens Off-Market</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--gold)', marginBottom: '6px', fontWeight: 500 }}>
                Détails de votre projet
              </label>
              <textarea 
                rows={3} 
                placeholder="Précisez la ville souhaitée, budget indicatif ou caractéristiques de votre propriété..." 
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--char)',
                  border: '1px solid var(--line)',
                  borderRadius: '6px',
                  color: 'var(--ivory)',
                  fontSize: '15px',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            <button className="btn btn--gold" type="submit" style={{ marginTop: '8px' }}>
              Transmettre ma demande confidentielle
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
