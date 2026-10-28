'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fr' | 'ar' | 'en' | 'nl' | 'es' | 'it' | 'de';
export type Currency = 'MAD' | 'EUR' | 'USD' | 'GBP' | 'CHF';

export interface LanguageInfo {
  code: Language;
  label: string;
  nativeLabel: string;
  flagId: string;
  region: string;
  isRtl?: boolean;
}

export interface CurrencyInfo {
  code: Currency;
  label: string;
  flagId: string;
  rateToMAD: number; // 1 Currency = X MAD
  symbol: string;
}

export const LANGUAGES: LanguageInfo[] = [
  { code: 'fr', label: 'Français', nativeLabel: 'Français', flagId: 'flag-fr', region: 'France, Belgique, Suisse' },
  { code: 'ar', label: 'العربية', nativeLabel: 'العربية', flagId: 'flag-ma', region: 'المغرب والعالم العربي', isRtl: true },
  { code: 'en', label: 'English', nativeLabel: 'English', flagId: 'flag-en', region: 'UK, USA & Global' },
  { code: 'nl', label: 'Nederlands', nativeLabel: 'Nederlands', flagId: 'flag-nl', region: 'Nederland & België' },
  { code: 'es', label: 'Español', nativeLabel: 'Español', flagId: 'flag-es', region: 'España & América' },
  { code: 'it', label: 'Italiano', nativeLabel: 'Italiano', flagId: 'flag-it', region: 'Italia & Svizzera' },
  { code: 'de', label: 'Deutsch', nativeLabel: 'Deutsch', flagId: 'flag-de', region: 'Deutschland, Schweiz' },
];

export const CURRENCIES: CurrencyInfo[] = [
  { code: 'MAD', label: 'Dirham Marocain', flagId: 'flag-ma', rateToMAD: 1, symbol: 'MAD' },
  { code: 'EUR', label: 'Euro', flagId: 'flag-eu', rateToMAD: 1 / 10.85, symbol: '€' },
  { code: 'USD', label: 'US Dollar', flagId: 'flag-us', rateToMAD: 1 / 10.05, symbol: '$' },
  { code: 'GBP', label: 'British Pound', flagId: 'flag-en', rateToMAD: 1 / 13.02, symbol: '£' },
  { code: 'CHF', label: 'Franc Suisse', flagId: 'flag-ch', rateToMAD: 1 / 11.60, symbol: 'CHF' },
];

export interface Translations {
  navHome: string;
  navProperties: string;
  navNewProjects: string;
  navValuation: string;
  navContact: string;
  navSubmitCta: string;
  langTitle: string;
  curTitle: string;
  heroChip: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroDesc: string;
  searchCity: string;
  searchTransaction: string;
  searchType: string;
  searchBudget: string;
  searchRooms: string;
  searchBtn: string;
  trustFoncier: string;
  trustNotary: string;
  trustMre: string;
  trustVisits: string;
  trustVip: string;
}

export const DICTIONARY: Record<Language, Translations> = {
  fr: {
    navHome: 'Accueil',
    navProperties: 'Propriétés',
    navNewProjects: 'Programmes Neufs',
    navValuation: 'Estimer & Vendre',
    navContact: 'Agences & Contact',
    navSubmitCta: 'Déposer un Bien',
    langTitle: 'Langue',
    curTitle: 'Devise',
    heroChip: 'Majestic Estates • Immobilier de Prestige • Tanger, Marrakech & tout le Maroc',
    heroTitle: "L'Excellence dans",
    heroTitleAccent: 'Chaque',
    heroDesc: "Acquérir ou céder une demeure d'exception au Maroc avec la rigueur des plus grandes maisons privées internationales.",
    searchCity: 'Toutes les Villes',
    searchTransaction: 'Acheter ou Louer',
    searchType: 'Tous les Types',
    searchBudget: 'Budget Illimité',
    searchRooms: 'Toutes',
    searchBtn: 'Rechercher',
    trustFoncier: 'Titres fonciers vérifiés',
    trustNotary: 'Accompagnement notarié',
    trustMre: 'Conseil MRE & devises',
    trustVisits: 'Visites privées 24/48h',
    trustVip: 'Conciergerie VIP 7j/7',
  },
  ar: {
    navHome: 'الرئيسية',
    navProperties: 'العقارات',
    navNewProjects: 'مشاريع جديدة',
    navValuation: 'تقييم وبيع',
    navContact: 'الوكالات والاتصال',
    navSubmitCta: 'أضف عقارك',
    langTitle: 'اللغة',
    curTitle: 'العملة',
    heroChip: 'ماجستيك إستيتس • عقارات فاخرة • طنجة، مراكش وجميع أنحاء المغرب',
    heroTitle: 'التميز في',
    heroTitleAccent: 'كل',
    heroDesc: 'شراء أو بيع إقامة استثنائية في المغرب مع أرفع معايير السرية والمصداقية القانونية.',
    searchCity: 'جميع المدن',
    searchTransaction: 'شراء أو كراء',
    searchType: 'جميع الأصناف',
    searchBudget: 'ميزانية مفتوحة',
    searchRooms: 'الكل',
    searchBtn: 'بحث',
    trustFoncier: 'رسوم عقارية محفظة ومؤكدة',
    trustNotary: 'مواكبة وتوثيق عدلي معتمد',
    trustMre: 'استشارات مغاربة العالم والعملات',
    trustVisits: 'زيارات خاصة خلال 24/48 ساعة',
    trustVip: 'خدمات كونسيرج VIP على مدار الساعة',
  },
  en: {
    navHome: 'Home',
    navProperties: 'Properties',
    navNewProjects: 'New Developments',
    navValuation: 'Valuation & Sell',
    navContact: 'Agencies & Contact',
    navSubmitCta: 'List a Property',
    langTitle: 'Language',
    curTitle: 'Currency',
    heroChip: 'Majestic Estates • Prime Moroccan Real Estate • Tangier, Marrakech & Nationwide',
    heroTitle: 'Excellence in',
    heroTitleAccent: 'Every',
    heroDesc: 'Acquire or sell exceptional residences across the Kingdom of Morocco with private wealth-grade discretion and legal rigor.',
    searchCity: 'All Moroccan Cities',
    searchTransaction: 'Buy or Rent',
    searchType: 'All Property Types',
    searchBudget: 'Unlimited Budget',
    searchRooms: 'All Bedrooms',
    searchBtn: 'Search Properties',
    trustFoncier: 'Verified Land Titles',
    trustNotary: 'Certified Notary Support',
    trustMre: 'Diaspora & Forex Advisory',
    trustVisits: 'Private Visits 24/48h',
    trustVip: 'VIP Concierge 7d/7',
  },
  nl: {
    navHome: 'Home',
    navProperties: 'Woningen',
    navNewProjects: 'Nieuwbouwprojecten',
    navValuation: 'Schatting & Verkoop',
    navContact: 'Kantoren & Contact',
    navSubmitCta: 'Woning Aanmelden',
    langTitle: 'Taal',
    curTitle: 'Valuta',
    heroChip: 'Majestic Estates • Exclusief Vastgoed Marokko • Tanger, Marrakech & heel Marokko',
    heroTitle: 'Perfectie in',
    heroTitleAccent: 'Elke',
    heroDesc: 'Koop of verkoop een luxe villa of historisch riad in Marokko met deskundige notariële begeleiding voor Nederland en België.',
    searchCity: 'Alle Steden',
    searchTransaction: 'Kopen of Huren',
    searchType: 'Alle Typen',
    searchBudget: 'Onbeperkt Budget',
    searchRooms: 'Alle Kamers',
    searchBtn: 'Zoeken',
    trustFoncier: 'Geverifieerde Eigendomstitels',
    trustNotary: 'Notariële Begeleiding',
    trustMre: 'MRE & Valuta Advies',
    trustVisits: 'Privébezichtiging 24/48u',
    trustVip: 'VIP Conciërge 7d/7',
  },
  es: {
    navHome: 'Inicio',
    navProperties: 'Propiedades',
    navNewProjects: 'Proyectos Nuevos',
    navValuation: 'Tasación & Venta',
    navContact: 'Agencias & Contacto',
    navSubmitCta: 'Publicar Inmueble',
    langTitle: 'Idioma',
    curTitle: 'Moneda',
    heroChip: 'Majestic Estates • Inmuebles de Prestigio en Marruecos • Tánger, Marrakech y todo Marruecos',
    heroTitle: 'La Excelencia en',
    heroTitleAccent: 'Cada',
    heroDesc: 'Compre o venda residencias de alto nivel en Marruecos con la garantía jurídica y discreción de los mejores despachos privados.',
    searchCity: 'Todas las Ciudades',
    searchTransaction: 'Comprar o Alquilar',
    searchType: 'Todos los Tipos',
    searchBudget: 'Presupuesto Ilimitado',
    searchRooms: 'Todas las Habitaciones',
    searchBtn: 'Buscar',
    trustFoncier: 'Títulos de propiedad certificados',
    trustNotary: 'Acompañamiento notarial integral',
    trustMre: 'Asesoría MRE & divisas',
    trustVisits: 'Visitas privadas 24/48h',
    trustVip: 'Conserjería VIP 7d/7',
  },
  it: {
    navHome: 'Home',
    navProperties: 'Immobili',
    navNewProjects: 'Nuove Costruzioni',
    navValuation: 'Valutazione & Vendita',
    navContact: 'Agenzie & Contatti',
    navSubmitCta: 'Inserisci Immobile',
    langTitle: 'Lingua',
    curTitle: 'Valuta',
    heroChip: 'Majestic Estates • Immobili di Prestigio in Marocco • Tangeri, Marrakech e tutto il Marocco',
    heroTitle: "L'Eccellenza in",
    heroTitleAccent: 'Ogni',
    heroDesc: 'Acquistare o vendere dimore storiche e ville contemporanee in Marocco con massima riservatezza e conformità notarile.',
    searchCity: 'Tutte le Città',
    searchTransaction: 'Comprare o Affittare',
    searchType: 'Tutte le Tipologie',
    searchBudget: 'Budget Illimitato',
    searchRooms: 'Tutte le Camere',
    searchBtn: 'Cerca Immobili',
    trustFoncier: 'Titoli di proprietà certificati',
    trustNotary: 'Assistenza notarile completa',
    trustMre: 'Consulenza MRE & cambi valuta',
    trustVisits: 'Visite private 24/48h',
    trustVip: 'Concierge VIP 7g/7',
  },
  de: {
    navHome: 'Startseite',
    navProperties: 'Immobilien',
    navNewProjects: 'Neubauprojekte',
    navValuation: 'Bewertung & Verkauf',
    navContact: 'Agenturen & Kontakt',
    navSubmitCta: 'Objekt Inserieren',
    langTitle: 'Sprache',
    curTitle: 'Währung',
    heroChip: 'Majestic Estates • Luxusimmobilien Marokko • Tanger, Marrakesch & landesweit',
    heroTitle: 'Exzellenz in',
    heroTitleAccent: 'Jedem',
    heroDesc: 'Erwerben oder veräußern Sie außergewöhnliche Anwesen in Marokko mit höchster notarieller Präzision und Diskretion.',
    searchCity: 'Alle Städte',
    searchTransaction: 'Kaufen oder Mieten',
    searchType: 'Alle Objekttypen',
    searchBudget: 'Unbegrenztes Budget',
    searchRooms: 'Alle Zimmer',
    searchBtn: 'Suchen',
    trustFoncier: 'Geprüfte Eigentumstitel',
    trustNotary: 'Notarielle Rundumbetreuung',
    trustMre: 'MRE & Devisenberatung',
    trustVisits: 'Private Besichtigungen 24/48h',
    trustVip: 'VIP-Concierge 7T/7',
  },
};

interface LocaleContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (cur: Currency) => void;
  formatPrice: (priceMAD: number, period?: string) => string;
  t: Translations;
  currentLangInfo: LanguageInfo;
  currentCurInfo: CurrencyInfo;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [currency, setCurrency] = useState<Currency>('MAD');

  const currentLangInfo = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];
  const currentCurInfo = CURRENCIES.find((c) => c.code === currency) || CURRENCIES[0];
  const t = DICTIONARY[language] || DICTIONARY.fr;

  const formatPrice = (priceMAD: number, period?: string): string => {
    const converted = Math.round(priceMAD * currentCurInfo.rateToMAD);

    let formatted = '';
    if (currency === 'MAD') {
      formatted = `${converted.toLocaleString('fr-MA')} MAD`;
    } else if (currency === 'EUR') {
      formatted = `${converted.toLocaleString('fr-FR')} €`;
    } else if (currency === 'USD') {
      formatted = `$${converted.toLocaleString('en-US')}`;
    } else if (currency === 'GBP') {
      formatted = `£${converted.toLocaleString('en-GB')}`;
    } else if (currency === 'CHF') {
      formatted = `${converted.toLocaleString('de-CH')} CHF`;
    } else {
      formatted = `${converted.toLocaleString()} ${currency}`;
    }

    if (period) {
      formatted += ` / ${period}`;
    }

    return formatted;
  };

  return (
    <LocaleContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        formatPrice,
        t,
        currentLangInfo,
        currentCurInfo,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
