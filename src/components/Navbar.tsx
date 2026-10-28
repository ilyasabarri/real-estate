'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, LANGUAGES, CURRENCIES } from '@/context/LocaleContext';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const localeRef = useRef<HTMLDivElement>(null);

  const {
    language,
    setLanguage,
    currency,
    setCurrency,
    t,
    currentLangInfo,
    currentCurInfo,
  } = useLocale();

  // Close locale menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (localeRef.current && !localeRef.current.contains(event.target as Node)) {
        setLocaleOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner wrap">
        {/* Brand with authentic Crown Monogram and Wordmark */}
        <Link className="brand" href="/" aria-label="Majestic Estates Maroc, accueil">
          <img 
            className="brand__mark" 
            src="/images/logo-me-monogram.svg" 
            alt="Majestic Estates Monogramme" 
            width={54} 
            height={60} 
          />
          <img 
            className="brand__word" 
            src="/images/logo-me-wordmark.svg" 
            alt="Majestic Estates Immobilier de Prestige" 
            width={280} 
            height={52} 
          />
        </Link>

        {/* Desktop Navigation Pill */}
        <nav className="nav" id="site-nav" aria-label="Navigation principale">
          <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>
            {t.navHome}
          </Link>
          <Link href="/biens" aria-current={pathname.startsWith('/biens') ? 'page' : undefined}>
            {t.navProperties}
          </Link>
          <Link href="/projets-neufs" aria-current={pathname.startsWith('/projets-neufs') ? 'page' : undefined}>
            {t.navNewProjects}
          </Link>
          <Link href="/estimer-vendre" aria-current={pathname.startsWith('/estimer-vendre') ? 'page' : undefined}>
            {t.navValuation}
          </Link>
          <Link href="/contact" aria-current={pathname.startsWith('/contact') ? 'page' : undefined}>
            {t.navContact}
          </Link>
        </nav>

        {/* Actions (Language & Currency switcher + CTA button) */}
        <div className="site-header__actions">
          <div className="locale" ref={localeRef}>
            <button 
              className="locale__btn" 
              type="button" 
              onClick={() => setLocaleOpen(!localeOpen)}
              aria-expanded={localeOpen}
              aria-haspopup="dialog"
              aria-label="Langue et devise"
            >
              <svg className="flag" aria-hidden="true">
                <use href={`#${currentLangInfo.flagId}`} />
              </svg>
              <span>{currentLangInfo.code.toUpperCase()}</span>
              <span className="locale__cur">
                <svg className="flag flag--sm" aria-hidden="true">
                  <use href={`#${currentCurInfo.flagId}`} />
                </svg>
                <span>{currency}</span>
              </span>
              <svg className="locale__chev" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Authentic Kesh Majestic Dual Language + Currency Dropdown */}
            {localeOpen && (
              <div 
                className="locale__menu" 
                id="locale-menu"
                style={{
                  width: '280px',
                  maxHeight: '440px',
                  overflowY: 'auto'
                }}
              >
                <p className="locale__title">{t.langTitle}</p>
                <div className="locale__opts" role="radiogroup" aria-label="Langues disponibles">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      role="radio"
                      aria-checked={language === lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLocaleOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        width: '100%'
                      }}
                    >
                      <svg className="flag" aria-hidden="true">
                        <use href={`#${lang.flagId}`} />
                      </svg>
                      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1.2 }}>
                        <span style={{ fontWeight: language === lang.code ? 700 : 500 }}>
                          {lang.nativeLabel}
                        </span>
                        <span style={{ fontSize: '10.5px', color: 'var(--muted)' }}>
                          {lang.region}
                        </span>
                      </div>
                      <span 
                        style={{ 
                          marginLeft: 'auto', 
                          fontSize: '11px', 
                          fontWeight: 700, 
                          color: language === lang.code ? 'var(--gold)' : 'var(--muted)',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          background: 'rgba(255,255,255,0.04)'
                        }}
                      >
                        {lang.code.toUpperCase()}
                      </span>
                    </button>
                  ))}
                </div>

                <p className="locale__title" style={{ marginTop: '14px' }}>{t.curTitle}</p>
                <div 
                  className="locale__opts locale__opts--cur" 
                  role="radiogroup" 
                  aria-label="Devises disponibles"
                  style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}
                >
                  {CURRENCIES.map((curr) => (
                    <button
                      key={curr.code}
                      type="button"
                      role="radio"
                      data-cur={curr.code}
                      aria-checked={currency === curr.code}
                      onClick={() => {
                        setCurrency(curr.code);
                        setLocaleOpen(false);
                      }}
                      title={curr.label}
                    >
                      {curr.code}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link className="btn btn--gold nav__cta" href="/estimer-vendre">
            {t.navSubmitCta}
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Menu"
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Drawer Navigation */}
    {mobileMenuOpen && (
      <div
        id="mobile-nav"
        style={{
          position: 'fixed',
          top: '68px',
          left: 0,
          right: 0,
          bottom: 0,
          background: '#0B0A08',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--line)',
            padding: '24px 20px 36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 999,
            overflowY: 'auto'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: pathname === '/' ? 'var(--gold)' : 'var(--ivory)',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 600,
                padding: '12px 14px',
                borderRadius: '8px',
                background: pathname === '/' ? 'rgba(201, 162, 74, 0.1)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{t.navHome}</span>
              {pathname === '/' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }} />}
            </Link>

            <Link 
              href="/biens" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: pathname.startsWith('/biens') ? 'var(--gold)' : 'var(--ivory)',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 600,
                padding: '12px 14px',
                borderRadius: '8px',
                background: pathname.startsWith('/biens') ? 'rgba(201, 162, 74, 0.1)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{t.navProperties}</span>
              {pathname.startsWith('/biens') && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }} />}
            </Link>

            <Link 
              href="/projets-neufs" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: pathname.startsWith('/projets-neufs') ? 'var(--gold)' : 'var(--ivory)',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 600,
                padding: '12px 14px',
                borderRadius: '8px',
                background: pathname.startsWith('/projets-neufs') ? 'rgba(201, 162, 74, 0.1)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{t.navNewProjects}</span>
              {pathname.startsWith('/projets-neufs') && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }} />}
            </Link>

            <Link 
              href="/estimer-vendre" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: pathname.startsWith('/estimer-vendre') ? 'var(--gold)' : 'var(--ivory)',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 600,
                padding: '12px 14px',
                borderRadius: '8px',
                background: pathname.startsWith('/estimer-vendre') ? 'rgba(201, 162, 74, 0.1)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{t.navValuation}</span>
              {pathname.startsWith('/estimer-vendre') && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }} />}
            </Link>

            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: pathname.startsWith('/contact') ? 'var(--gold)' : 'var(--ivory)',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 600,
                padding: '12px 14px',
                borderRadius: '8px',
                background: pathname.startsWith('/contact') ? 'rgba(201, 162, 74, 0.1)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{t.navContact}</span>
              {pathname.startsWith('/contact') && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }} />}
            </Link>
          </div>

          {/* Bottom Action Area: Prominent CTA & Direct Contacts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <Link 
              href="/estimer-vendre" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn--gold" 
              style={{
                width: '100%',
                minHeight: '48px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                borderRadius: '8px'
              }}
            >
              {t.navSubmitCta}
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <a
                href="https://wa.me/212605319642"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px',
                  borderRadius: '8px',
                  background: 'rgba(37, 211, 102, 0.12)',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  color: '#25D366',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <span>WhatsApp VIP</span>
              </a>

              <a
                href="tel:+212605319642"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px',
                  borderRadius: '8px',
                  background: 'rgba(201, 162, 74, 0.1)',
                  border: '1px solid var(--line)',
                  color: 'var(--gold)',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <span>Conseiller Dédié</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
