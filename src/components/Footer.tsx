'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <Link className="site-footer__logo" href="/" aria-label="Majestic Estates Maroc, accueil">
          <img 
            src="/images/logo-me-footer.svg" 
            alt="Majestic Estates Maroc, Immobilier de Prestige" 
            width={340} 
            height={190} 
            loading="lazy" 
          />
        </Link>

        <ul className="site-footer__social" role="list">
          <li>
            <a 
              className="ficon" 
              href="https://wa.me/212605319642" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp"
            >
              <svg className="fi fi--fill" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </li>
          <li>
            <a 
              className="ficon" 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Localisation Agence"
            >
              <svg className="fi" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
          </li>
          <li>
            <a 
              className="ficon" 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
            >
              <svg className="fi" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>
              </svg>
            </a>
          </li>
        </ul>

        <nav className="site-footer__nav" aria-label="Footer">
          <Link href="/">{t.navHome}</Link>
          <Link href="/biens">{t.navProperties}</Link>
          <Link href="/projets-neufs">{t.navNewProjects}</Link>
          <Link href="/estimer-vendre">{t.navValuation}</Link>
          <Link href="/contact">{t.navContact}</Link>
        </nav>

        <div className="site-footer__cols">
          <div>
            <span className="ficon ficon--static">
              <svg className="fi fi--fill" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </span>
            <h3>Conseillers Dédiés</h3>
            <ul role="list">
              <li><a href="https://wa.me/212605319642">Direction · +212 (0) 0 6 05 31 96 42</a></li>
              <li><a href="https://wa.me/212693840937">Bureau Marrakech · +212 (0) 0 6 93 84 09 37</a></li>
              <li><a href="https://wa.me/212524200580">Siège Tanger · +212 (0) 0 5 24 20 05 80</a></li>
            </ul>
          </div>
          <div>
            <span className="ficon ficon--static">
              <svg className="fi" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <h3>Bureaux Privés</h3>
            <address>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                Boulevard Mohamed VI, Guéliz, Marrakech<br />
                Baie de Tanger, Cap Malabata, Maroc
              </a>
            </address>
          </div>
          <div>
            <span className="ficon ficon--static">
              <svg className="fi" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <h3>Permanence VIP</h3>
            <ul role="list">
              <li>Disponible 7j/7, sur rendez-vous privé</li>
              <li>Audits notariaux &amp; Titres de propriété</li>
            </ul>
          </div>
        </div>

        <div className="site-footer__legal">
          <p>© 2026 Majestic Estates Maroc</p>
          <p>
            <Link href="/contact">Mentions Légales</Link> · <Link href="/contact">Politique de Confidentialité</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
