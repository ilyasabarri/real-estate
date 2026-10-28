'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NEW_PROJECTS } from '@/data/properties';
import { useCurrency } from '@/context/CurrencyContext';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  FileText, 
  MessageCircle, 
  Sparkles, 
  Shield, 
  Download,
  X
} from 'lucide-react';

export default function ProjetsNeufsPage() {
  const { formatPrice } = useCurrency();
  const [selectedProjectForBrochure, setSelectedProjectForBrochure] = useState<string | null>(null);
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochureSuccess, setBrochureSuccess] = useState(false);

  const handleBrochureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBrochureSuccess(true);
    setTimeout(() => {
      setBrochureSuccess(false);
      setSelectedProjectForBrochure(null);
      setBrochureEmail('');
    }, 3000);
  };

  return (
    <div className="subpage-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '140px 1.25rem 5rem' }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', padding: '0.35rem 1rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--gold-border)' }}>
          <Sparkles size={13} color="var(--gold-light)" />
          <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-light)' }}>
            Programmes Neufs & VEFA Maroc
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.2 }}>
          Investir dans l'Immobilier Neuf de Haute Signature
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }}>
          Accédez en avant-première aux résidences de villas et appartements de standing supérieur avec garantie d'achèvement bancaire (Loi VEFA 107-12) et frais de notaire optimisés.
        </p>
      </div>

      {/* Projects List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {NEW_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="luxury-glass-heavy"
            style={{ borderRadius: '24px', padding: '2rem', border: '1px solid var(--gold-border)' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              {/* Image & Gallery Left */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ position: 'relative', width: '100%', height: '360px', borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                    <span className="gold-gradient-bg" style={{ padding: '0.3rem 0.85rem', borderRadius: '9999px', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Garantie VEFA Bancaire
                    </span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(8px)', padding: '0.4rem 0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.72rem', color: '#fff' }}>
                    Livraison : <span style={{ color: 'var(--gold-light)', fontWeight: 700 }}>{project.deliveryDate}</span>
                  </div>
                </div>

                {/* Sub-gallery */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))', gap: '0.75rem' }}>
                  {project.gallery.map((g, gIdx) => (
                    <div key={gIdx} style={{ position: 'relative', height: '80px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <Image
                        src={g}
                        alt={`${project.title} ${gIdx + 1}`}
                        fill
                        sizes="150px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Info Right */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--gold-light)', fontWeight: 600, marginBottom: '0.4rem' }}>
                    <MapPin size={14} color="var(--gold-primary)" />
                    <span>{project.district}, {project.city}</span>
                  </div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                    {project.title}
                  </h2>
                  <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.7, marginTop: '0.75rem' }}>
                    {project.description}
                  </p>
                </div>

                {/* Typologies badges */}
                <div>
                  <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', display: 'block', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                    Typologies Disponibles :
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.typologies.map((t, i) => (
                      <span key={i} className="badge-dark">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  {project.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#e2e8f0' }}>
                      <CheckCircle2 size={15} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', display: 'block' }}>Prix direct promoteur</span>
                    <p className="gold-gradient-text" style={{ fontSize: '1.6rem', fontWeight: 900, lineHeight: 1.1 }}>
                      dès {formatPrice(project.startingPriceMAD)}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button
                      onClick={() => setSelectedProjectForBrochure(project.title)}
                      className="gold-outline-btn"
                      style={{ padding: '0.6rem 1.1rem', borderRadius: '12px', fontSize: '0.75rem', gap: '0.4rem', cursor: 'pointer' }}
                    >
                      <Download size={14} />
                      <span>Plaquette PDF</span>
                    </button>

                    <a
                      href={`https://wa.me/212661234567?text=${encodeURIComponent(`Bonjour, je souhaite des informations sur le programme neuf "${project.title}" à ${project.city}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wa"
                      style={{ width: '2.5rem', height: '2.5rem', padding: 0 }}
                      title="Contacter sur WhatsApp"
                    >
                      <MessageCircle size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Brochure Request Modal */}
      {selectedProjectForBrochure && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem' }}>
          <div className="luxury-glass-heavy" style={{ maxWidth: '480px', width: '100%', padding: '2rem', borderRadius: '24px', border: '1px solid var(--gold-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>
                Recevoir la Plaquette Commerciale
              </h3>
              <button onClick={() => setSelectedProjectForBrochure(null)} style={{ color: '#94a3b8', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>
            
            <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Recevez les plans d'architecte, grille de prix et dossier fiscal complet du programme <span style={{ color: 'var(--gold-light)', fontWeight: 700 }}>{selectedProjectForBrochure}</span>.
            </p>

            {brochureSuccess ? (
              <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', color: '#4ade80', fontSize: '0.8rem', textAlign: 'center' }}>
                ✓ Plaquette transmise avec succès sur votre adresse email.
              </div>
            ) : (
              <form onSubmit={handleBrochureSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <input
                  type="email"
                  required
                  value={brochureEmail}
                  onChange={(e) => setBrochureEmail(e.target.value)}
                  placeholder="Votre adresse email professionnelle"
                  className="form-input"
                />
                <button
                  type="submit"
                  className="gold-gradient-bg"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer' }}
                >
                  Télécharger le Dossier Complet
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
