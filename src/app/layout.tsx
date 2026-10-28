import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Majestic Estates Maroc • Immobilier de Prestige, Villas & Riads',
  description: "L'excellence immobilière au Maroc : Tanger, Marrakech, Casablanca, Rabat. Villas contemporaines vue mer, Riads historiques d'exception et penthouses de prestige.",
};

import Providers from '@/components/Providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/kesh.css?v=2.2" />
      </head>
      <body>
        <Providers>
          {/* SVG Flag Sprites */}
          <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
            <symbol id="flag-en" viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice">
              <clipPath id="flag-en-t"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath>
              <path d="M0 0h60v30H0z" fill="#012169"/>
              <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
              <path d="M0 0l60 30m0-30L0 30" clipPath="url(#flag-en-t)" stroke="#C8102E" strokeWidth="4"/>
              <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
              <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
            </symbol>
            <symbol id="flag-fr" viewBox="0 0 3 2" preserveAspectRatio="xMidYMid slice"><path fill="#002654" d="M0 0h1v2H0z"/><path fill="#fff" d="M1 0h1v2H1z"/><path fill="#CE1126" d="M2 0h1v2H2z"/></symbol>
            <symbol id="flag-es" viewBox="0 0 750 500" preserveAspectRatio="xMidYMid slice"><path fill="#AA151B" d="M0 0h750v500H0z"/><path fill="#F1BF00" d="M0 125h750v250H0z"/></symbol>
            <symbol id="flag-de" viewBox="0 0 5 3" preserveAspectRatio="xMidYMid slice"><path fill="#000" d="M0 0h5v1H0z"/><path fill="#DD0000" d="M0 1h5v1H0z"/><path fill="#FFCE00" d="M0 2h5v1H0z"/></symbol>
            <symbol id="flag-ma" viewBox="0 0 90 60" preserveAspectRatio="xMidYMid slice"><path fill="#C1272D" d="M0 0h90v60H0z"/><path fill="none" stroke="#006233" strokeWidth="2.6" strokeLinejoin="round" d="M45 17.5 52.64 41.02 32.64 26.48h24.72L37.36 41.02Z"/></symbol>
            <symbol id="flag-eu" viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice"><path fill="#039" d="M0 0h30v20H0z"/><g fill="#FC0"><circle cx="15.00" cy="4.00" r="1"/><circle cx="18.00" cy="4.80" r="1"/><circle cx="20.20" cy="7.00" r="1"/><circle cx="21.00" cy="10.00" r="1"/><circle cx="20.20" cy="13.00" r="1"/><circle cx="18.00" cy="15.20" r="1"/><circle cx="15.00" cy="16.00" r="1"/><circle cx="12.00" cy="15.20" r="1"/><circle cx="9.80" cy="13.00" r="1"/><circle cx="9.00" cy="10.00" r="1"/><circle cx="9.80" cy="7.00" r="1"/><circle cx="12.00" cy="4.80" r="1"/></g></symbol>
            <symbol id="flag-us" viewBox="0 0 38 20" preserveAspectRatio="xMidYMid slice"><path fill="#fff" d="M0 0h38v20H0z"/><g fill="#B22234"><path d="M0 0.000h38v1.538H0z"/><path d="M0 3.077h38v1.538H0z"/><path d="M0 6.154h38v1.538H0z"/><path d="M0 9.231h38v1.538H0z"/><path d="M0 12.308h38v1.538H0z"/><path d="M0 15.385h38v1.538H0z"/><path d="M0 18.462h38v1.538H0z"/></g><path fill="#3C3B6E" d="M0 0h15.2v10.77H0z"/></symbol>
            <symbol id="flag-nl" viewBox="0 0 9 6" preserveAspectRatio="xMidYMid slice"><path fill="#21468B" d="M0 0h9v6H0z"/><path fill="#FFF" d="M0 0h9v4H0z"/><path fill="#AE1C28" d="M0 0h9v2H0z"/></symbol>
            <symbol id="flag-it" viewBox="0 0 3 2" preserveAspectRatio="xMidYMid slice"><path fill="#009246" d="M0 0h1v2H0z"/><path fill="#FFF" d="M1 0h1v2H1z"/><path fill="#CE2B37" d="M2 0h1v2H2z"/></symbol>
            <symbol id="flag-ch" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid slice"><path fill="#D52B1E" d="M0 0h32v32H0z"/><path fill="#FFF" d="M13 6h6v20h-6zM6 13h20v6H6z"/></symbol>
          </svg>

          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
