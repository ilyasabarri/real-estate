'use client';

import { MessageCircle, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '1.75rem', right: '1.75rem', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
      {open && (
        <div style={{
          width: '300px', background: '#111118',
          border: '1px solid var(--gold-border)', borderRadius: '20px',
          overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.8)',
          animation: 'fadeIn 0.25s ease-out',
        }}>
          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg,#25d366,#128c7e)', padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '2.2rem', height: '2.2rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MessageCircle size={18} color="#fff" />
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#fff', fontSize: '0.85rem' }}>Conciergerie WhatsApp</p>
                <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span style={{ width: '6px', height: '6px', background: '#a7f3d0', borderRadius: '50%', display: 'inline-block' }} />
                  En ligne · Répond en quelques minutes
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '1.25rem' }}>
            <div style={{ background: '#1a1a24', borderRadius: '12px', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.78rem', color: '#e2e8f0', lineHeight: 1.6 }}>
                👋 Bonjour ! Je suis disponible pour toutes vos questions immobilières au Maroc — visites, estimations ou conseils investissement.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: '🏠 Demander une Visite Privée', msg: 'Bonjour, je souhaite organiser une visite privée.' },
                { label: '💰 Obtenir une Estimation Gratuite', msg: 'Bonjour, je souhaite estimer mon bien immobilier.' },
                { label: '🌍 Conseil MRE & Investissement', msg: 'Bonjour, je suis MRE et souhaite investir au Maroc.' },
              ].map(q => (
                <a
                  key={q.label}
                  href={`https://wa.me/212661234567?text=${encodeURIComponent(q.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-quick-btn"
                >
                  {q.label}
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/212661234567"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                marginTop: '1rem', padding: '0.75rem', borderRadius: '12px',
                background: 'linear-gradient(135deg,#25d366,#128c7e)', color: '#fff',
                fontWeight: 700, fontSize: '0.78rem', textDecoration: 'none',
              }}
            >
              <MessageCircle size={15} /> Ouvrir WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(v => !v)}
        className="wa-float-btn"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
        {!open && (
          <>
            <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '14px', height: '14px', background: '#4ade80', borderRadius: '50%', border: '2px solid #0a0a0d' }} />
            <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '14px', height: '14px', background: 'rgba(74,222,128,0.7)', borderRadius: '50%', animation: 'pingPulse 1.5s cubic-bezier(0,0,0.2,1) infinite' }} />
          </>
        )}
      </button>
    </div>
  );
}
