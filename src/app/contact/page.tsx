'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Sparkles,
  Send,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

const offices = [
  {
    city: 'Tanger',
    address: '42 Boulevard Pasteur, Résidence le Détroit, 2ème étage',
    postalCode: '90000 Tanger',
    phone: '+212 (0) 0 5 39 33 00 22',
    mobile: '+212 (0) 0 6 61 23 45 67',
    whatsapp: '212661234567',
    email: 'tanger@majestic-estates-maroc.com',
    hours: 'Lun–Sam : 9h–19h / Dim sur RDV',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    director: 'Youssef El Amrani',
    directorRole: 'Directeur Régional Nord',
    directorPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    city: 'Marrakech',
    address: '18 Avenue Mohammed V, Immeuble Guéliz Plaza, 1er étage',
    postalCode: '40000 Marrakech',
    phone: '+212 (0) 0 5 24 43 11 00',
    mobile: '+212 (0) 0 6 62 89 12 34',
    whatsapp: '212662891234',
    email: 'marrakech@majestic-estates-maroc.com',
    hours: 'Lun–Sam : 9h–19h / Dim : 10h–14h',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    director: 'Salma Benjelloun',
    directorRole: 'Directrice Régionale Centre & Sud',
    directorPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  }
];

const faqs = [
  {
    q: 'Vos honoraires d\'agence sont-ils inclus dans le prix affiché ?',
    a: 'Nos honoraires sont exclus du prix affiché et sont à la charge de l\'acquéreur ou du locataire selon les conventions en vigueur au Maroc (2.5% HT pour la vente, 1 mois de loyer pour la location).'
  },
  {
    q: 'Travaillez-vous avec les MRE (Marocains Résidant à l\'Étranger) ?',
    a: 'Absolument. Nous disposons d\'un service dédié MRE & Investisseurs Internationaux : procuration notariée, rapatriement des devises (Art. 16 Circulaire Office des Changes), et gestion à distance complète du dossier jusqu\'à la signature.'
  },
  {
    q: 'Puis-je visiter un bien à distance via visio-conférence ?',
    a: 'Oui, nous proposons des visites virtuelles HDR 360° et des séances de visite live sur WhatsApp ou Zoom pour tous nos clients à distance.'
  },
  {
    q: 'Combien de temps dure votre processus d\'estimation ?',
    a: 'L\'estimation préliminaire est remise sous 48h après dépôt du formulaire. Une évaluation terrain complète avec rapport détaillé est disponible sous 5 jours ouvrés.'
  }
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="subpage-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '140px 1.25rem 5rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', padding: '0.35rem 1rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--gold-border)' }}>
          <Sparkles size={13} color="var(--gold-light)" />
          <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-light)' }}>
            Tanger • Marrakech • Casablanca • Rabat
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.2 }}>
          Nos Bureaux & Conseillers Privés
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto' }}>
          Prendre rendez-vous en agence, demander une visite de bien ou contacter directement l'un de nos directeurs régionaux.
        </p>
      </div>

      {/* Offices Grid */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
          <span style={{ width: '2rem', height: '1px', background: 'var(--gold-primary)', display: 'inline-block' }} />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
            Nos Agences Régionales
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {offices.map((office, i) => (
            <div key={i} className="luxury-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                <Image
                  src={office.image}
                  alt={`Agence ${office.city}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,13,0.95) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>Agence de {office.city}</h3>
                </div>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
                {/* Director */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ position: 'relative', width: '3rem', height: '3rem', borderRadius: '9999px', overflow: 'hidden', border: '2px solid var(--gold-primary)', flexShrink: 0 }}>
                    <Image
                      src={office.directorPhoto}
                      alt={office.director}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>{office.director}</p>
                    <p style={{ color: 'var(--gold-light)', fontSize: '0.72rem' }}>{office.directorRole}</p>
                  </div>
                </div>

                {/* Info list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.78rem', color: '#cbd5e1' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <MapPin size={15} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{office.address}, {office.postalCode}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Phone size={15} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                    <a href={`tel:${office.phone}`} style={{ color: '#fff', textDecoration: 'none' }}>{office.phone}</a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Mail size={15} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                    <a href={`mailto:${office.email}`} style={{ color: '#cbd5e1', textDecoration: 'none' }}>{office.email}</a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Clock size={15} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                    <span>{office.hours}</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', paddingTop: '0.75rem' }}>
                  <a
                    href={`https://wa.me/${office.whatsapp}?text=${encodeURIComponent(`Bonjour, je souhaite prendre rendez-vous avec l'agence de ${office.city}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1, padding: '0.65rem 1rem', borderRadius: '10px',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: '#fff', fontSize: '0.72rem', fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.06em', textDecoration: 'none',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem'
                    }}
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                  <a
                    href={`tel:${office.phone}`}
                    className="gold-outline-btn"
                    style={{ flex: 1, padding: '0.65rem 1rem', borderRadius: '10px', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', textDecoration: 'none', gap: '0.4rem' }}
                  >
                    <Phone size={13} color="var(--gold-primary)" /> Appeler
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two columns: Contact Form + FAQ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        {/* Form Column */}
        <div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.35rem' }}>
              Envoyer un Message à la Direction
            </h2>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              Réponse confidentielle assurée sous 2 heures ouvrées par votre conseiller dédié.
            </p>
          </div>

          {submitted ? (
            <div className="luxury-glass" style={{ padding: '3rem 2rem', borderRadius: '20px', textAlign: 'center' }}>
              <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '9999px', background: 'linear-gradient(135deg,#dfba73,#9e7a36)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <CheckCircle2 size={24} color="#000" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>Message transmis avec succès</h3>
              <p style={{ fontSize: '0.82rem', color: '#cbd5e1', maxWidth: '380px', margin: '0 auto', lineHeight: 1.6 }}>
                Votre conseiller privé prendra contact directement avec vous au <span style={{ color: 'var(--gold-light)', fontWeight: 700 }}>{formState.email || formState.phone}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="luxury-glass" style={{ padding: '2rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>Nom & Prénom *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Mohammed Alaoui"
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>Téléphone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+212 (0) 0 6 00 00 00 00"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>Agence souhaitée</label>
                  <select
                    name="city"
                    value={formState.city}
                    onChange={handleChange}
                    className="form-input"
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="">Indifférent</option>
                    <option value="Tanger">Agence Tanger</option>
                    <option value="Marrakech">Agence Marrakech</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>Objet de votre démarche *</label>
                <select
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className="form-input"
                  style={{ cursor: 'pointer' }}
                >
                  <option value="">Sélectionner un objet...</option>
                  <option value="visite">Demande de visite privée</option>
                  <option value="estimation">Estimation de mon bien</option>
                  <option value="investissement">Conseil investissement locatif / MRE</option>
                  <option value="projet">Renseignement Projets Neufs (VEFA)</option>
                  <option value="autre">Autre démarche confidentielle</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.35rem' }}>Message détaillé *</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet (type de bien, localisation souhaitée, budget)..."
                  className="form-input"
                  style={{ resize: 'none' }}
                />
              </div>

              <button
                type="submit"
                className="gold-gradient-bg"
                style={{ width: '100%', padding: '0.85rem', borderRadius: '12px', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer', gap: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.5rem' }}
              >
                <Send size={15} color="#000" />
                <span>Envoyer le Message</span>
              </button>
            </form>
          )}
        </div>

        {/* FAQ Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.35rem' }}>
              Questions Fréquentes
            </h2>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              Tout savoir sur nos mandats, nos honoraires et notre accompagnement MRE.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="luxury-card"
                style={{ padding: '1.25rem', cursor: 'pointer' }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>
                  <span>{faq.q}</span>
                  <span style={{ color: 'var(--gold-primary)', fontSize: '1.2rem', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>
                    +
                  </span>
                </div>
                {openFaq === i && (
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.7, marginTop: '0.85rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Quick WhatsApp Concierge banner */}
          <div style={{ padding: '1.5rem', borderRadius: '18px', background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(16,185,129,0.25)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4 style={{ color: '#fff', fontWeight: 800, fontSize: '0.95rem' }}>Conciergerie WhatsApp Instantanée</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.78rem', lineHeight: 1.6 }}>
              Besoin d'une réponse immédiate ? Nos directeurs sont joignables 7j/7 de 8h à 21h sur WhatsApp.
            </p>
            <a
              href="https://wa.me/212661234567?text=Bonjour%20Majestic%20Estates,%20j'ai%20une%20question%20immobili%C3%A8re."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                padding: '0.65rem 1rem', borderRadius: '10px',
                background: 'linear-gradient(135deg,#10b981,#059669)',
                color: '#fff', fontSize: '0.75rem', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.06em', textDecoration: 'none'
              }}
            >
              <MessageCircle size={15} />
              <span>Contacter sur WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
