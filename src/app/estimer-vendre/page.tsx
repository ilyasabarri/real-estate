'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  Award, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  MessageCircle
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Consultation Initiale Confidentielle',
    description: 'Un directeur régional vous contacte sous 2 heures pour recueillir les caractéristiques de votre bien et vos objectifs de cession ou de location.'
  },
  {
    number: '02',
    title: 'Visite d\'Expertise & Évaluation',
    description: 'Sur rendez-vous en agence ou sur site, notre expert certifié analyse les atouts de votre propriété et compare les transactions récentes du marché local.'
  },
  {
    number: '03',
    title: 'Rapport d\'Estimation Détaillé',
    description: 'Vous recevez un rapport de valorisation sous 48 heures avec fourchette de prix justifiée, stratégie de mise en marché et délai de vente estimé.'
  },
  {
    number: '04',
    title: 'Mise en Commercialisation Exclusive',
    description: 'Diffusion multicanal premium (portails nationaux, réseaux MRE & internationaux, base clients qualifiés), reportage photo HDR et visite virtuelle 3D.'
  }
];

const advantages = [
  { icon: Shield, title: 'Discrétion Absolue', description: 'Vente off-market confidentielle disponible pour préserver votre vie privée.' },
  { icon: TrendingUp, title: 'Prix Optimisé Garanti', description: 'Nos statistiques internes montrent +12% vs estimation initiale en moyenne.' },
  { icon: Clock, title: 'Délai de Vente Réduit', description: 'Délai moyen de 42 jours sur notre portefeuille de biens de prestige.' },
  { icon: Award, title: 'Réseau Acheteurs Qualifiés', description: '+2 000 clients MRE, expatriés et investisseurs institutionnels actifs.' }
];

export default function EstimerVendrePage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    propertyType: '',
    transaction: '',
    city: '',
    district: '',
    surfaceM2: '',
    bedrooms: '',
    bathrooms: '',
    yearBuilt: '',
    furnished: '',
    estimatedPrice: '',
    name: '',
    phone: '',
    email: '',
    whatsapp: '',
    preferredContact: 'whatsapp',
    bestTime: '',
    additionalInfo: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="subpage-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '140px 1.25rem 5rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', padding: '0.35rem 1rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--gold-border)' }}>
          <Sparkles size={13} color="var(--gold-light)" />
          <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-light)' }}>
            Service Propriétaires & Investisseurs
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.2 }}>
          Estimer & Confier Votre Bien au Leader du Prestige Marocain
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }}>
          Bénéficiez d'une estimation immobilière gratuite, certifiée et sans engagement par l'un de nos directeurs régionaux.
        </p>
      </div>

      {/* Process Steps */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
          <span style={{ width: '2rem', height: '1px', background: 'var(--gold-primary)', display: 'inline-block' }} />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
            Comment se déroule notre accompagnement ?
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {steps.map((s, i) => (
            <div key={i} className="luxury-card" style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '4.5rem', fontWeight: 900, color: 'rgba(255,255,255,0.03)', userSelect: 'none', lineHeight: 1 }}>
                {s.number}
              </div>
              <span className="gold-gradient-text" style={{ fontSize: '2rem', fontWeight: 900, display: 'block', marginBottom: '0.5rem', lineHeight: 1 }}>
                {s.number}
              </span>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6 }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advantages Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '4.5rem' }}>
        {advantages.map((adv, i) => {
          const Icon = adv.icon;
          return (
            <div key={i} style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'rgba(197,160,89,0.12)', border: '1px solid var(--gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Icon size={18} color="var(--gold-primary)" />
              </div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>{adv.title}</h3>
              <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.6 }}>{adv.description}</p>
            </div>
          );
        })}
      </div>

      {/* Main Multi-Step Form */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="luxury-glass-heavy" style={{ padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--gold-border)' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.35rem' }}>
              Déposez votre Bien — Estimation Gratuite
            </h2>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              Formulaire 100% confidentiel. Réponse sous 2 heures ouvrées.
            </p>
          </div>

          {/* Step Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: step === 1 ? 'var(--gold-light)' : '#64748b' }}>
              <span style={{ width: '1.5rem', height: '1.5rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 800, background: step === 1 ? 'linear-gradient(135deg,#dfba73,#9e7a36)' : 'rgba(255,255,255,0.06)', color: step === 1 ? '#000' : '#94a3b8' }}>
                1
              </span>
              Votre Propriété
            </div>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: step === 2 ? 'var(--gold-light)' : '#64748b' }}>
              <span style={{ width: '1.5rem', height: '1.5rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 800, background: step === 2 ? 'linear-gradient(135deg,#dfba73,#9e7a36)' : 'rgba(255,255,255,0.06)', color: step === 2 ? '#000' : '#94a3b8' }}>
                2
              </span>
              Vos Coordonnées
            </div>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ width: '4rem', height: '4rem', borderRadius: '9999px', background: 'linear-gradient(135deg,#dfba73,#9e7a36)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <CheckCircle2 size={28} color="#000" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
                Demande d'estimation enregistrée !
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1', maxWidth: '440px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                Notre directeur régional vous contactera sur <span style={{ color: 'var(--gold-light)', fontWeight: 700 }}>{formData.phone || formData.email}</span> sous 2 heures ouvrées.
              </p>
              <a
                href={`https://wa.me/212661234567?text=${encodeURIComponent(`Bonjour, je viens de déposer une demande d'estimation pour mon bien immobilier à ${formData.city}. Je suis ${formData.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.75rem 1.5rem', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: '#fff', fontSize: '0.75rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.06em', textDecoration: 'none'
                }}
              >
                <MessageCircle size={15} />
                <span>Confirmer par WhatsApp</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* STEP 1 */}
              {step === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                        Type de transaction *
                      </label>
                      <select
                        name="transaction"
                        required
                        value={formData.transaction}
                        onChange={handleChange}
                        className="form-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">Je souhaite...</option>
                        <option value="vendre">Vendre ma propriété</option>
                        <option value="louer">Mettre en location</option>
                        <option value="estimer">Estimation uniquement</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                        Type de bien *
                      </label>
                      <select
                        name="propertyType"
                        required
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="form-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">Sélectionner...</option>
                        <option value="villa">Villa / Maison</option>
                        <option value="riad">Riad / Dar</option>
                        <option value="appartement">Appartement</option>
                        <option value="penthouse">Penthouse / Duplex</option>
                        <option value="bureau">Bureau / Local commercial</option>
                        <option value="terrain">Terrain</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                        Ville *
                      </label>
                      <select
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="form-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">Ville au Maroc...</option>
                        <option value="Tanger">Tanger</option>
                        <option value="Marrakech">Marrakech</option>
                        <option value="Casablanca">Casablanca</option>
                        <option value="Rabat">Rabat</option>
                        <option value="Agadir">Agadir</option>
                        <option value="Autre">Autre ville</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                        Quartier / Adresse
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        placeholder="Ex: Malabata, Guéliz, Anfa..."
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                        Surface (m²) *
                      </label>
                      <input
                        type="number"
                        name="surfaceM2"
                        required
                        value={formData.surfaceM2}
                        onChange={handleChange}
                        placeholder="ex: 280"
                        min="20"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                        Chambres
                      </label>
                      <select
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleChange}
                        className="form-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">—</option>
                        {[1,2,3,4,5,6].map(n => (
                          <option key={n} value={n}>{n}{n===6 ? '+' : ''}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                        Salles de bain
                      </label>
                      <select
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleChange}
                        className="form-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">—</option>
                        {[1,2,3,4,5].map(n => (
                          <option key={n} value={n}>{n}{n===5 ? '+' : ''}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                        Meublé ?
                      </label>
                      <select
                        name="furnished"
                        value={formData.furnished}
                        onChange={handleChange}
                        className="form-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">—</option>
                        <option value="oui">Oui, meublé</option>
                        <option value="non">Non, vide</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                      Votre estimation personnelle du prix (MAD)
                    </label>
                    <input
                      type="text"
                      name="estimatedPrice"
                      value={formData.estimatedPrice}
                      onChange={handleChange}
                      placeholder="Ex: 8 500 000 MAD (optionnel)"
                      className="form-input"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!formData.transaction || !formData.propertyType || !formData.city || !formData.surfaceM2}
                    className="gold-gradient-bg"
                    style={{
                      width: '100%', padding: '0.85rem', borderRadius: '12px',
                      fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em',
                      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      opacity: (!formData.transaction || !formData.propertyType || !formData.city || !formData.surfaceM2) ? 0.5 : 1,
                      marginTop: '0.5rem'
                    }}
                  >
                    <span>Continuer — Étape 2 / 2</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                        Votre Nom & Prénom *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="ex: Mohammed Alaoui"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                        Téléphone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+212 (0) 0 6 00 00 00 00"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="form-input"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                        Canal de contact préféré
                      </label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="form-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="whatsapp">WhatsApp</option>
                        <option value="telephone">Appel téléphonique</option>
                        <option value="email">Email uniquement</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                        Créneau de rappel souhaité
                      </label>
                      <select
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleChange}
                        className="form-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">Indifférent</option>
                        <option value="matin">Matin (9h–12h)</option>
                        <option value="aprem">Après-midi (14h–18h)</option>
                        <option value="soir">Soir (18h–20h)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>
                      Informations complémentaires
                    </label>
                    <textarea
                      name="additionalInfo"
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      placeholder="Titre foncier, vue mer, piscine, disponibilité pour visite d'expertise..."
                      className="form-input"
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="gold-outline-btn"
                      style={{ padding: '0.85rem 1.5rem', borderRadius: '12px', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer' }}
                    >
                      ← Retour
                    </button>
                    <button
                      type="submit"
                      className="gold-gradient-bg"
                      style={{ flex: 1, padding: '0.85rem', borderRadius: '12px', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer' }}
                    >
                      Transmettre ma Demande
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
