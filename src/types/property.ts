export type TransactionType = 'vente' | 'location';
export type PropertyType = 'villa' | 'appartement' | 'riad' | 'penthouse' | 'bureau' | 'terrain';
export type City = 'Tanger' | 'Marrakech' | 'Casablanca' | 'Rabat' | 'Agadir';

export interface Property {
  id: string;
  reference: string;
  title: string;
  slug: string;
  transaction: TransactionType;
  type: PropertyType;
  city: City;
  district: string; // e.g. Malabata, Guéliz, Anfa Supérieur, Hay Riad
  priceMAD: number;
  period?: 'mois' | 'jour'; // for rentals
  surfaceM2: number;
  bedrooms: number;
  bathrooms: number;
  featured: boolean;
  isNewDevelopment?: boolean;
  isFurnished?: boolean;
  images: string[];
  description: string;
  amenities: string[];
  yearBuilt?: number;
  energyRating?: string;
  agent: {
    name: string;
    phone: string;
    whatsapp: string;
    email: string;
    photo: string;
    role: string;
  };
}

export interface NewProject {
  id: string;
  title: string;
  slug: string;
  city: City;
  district: string;
  startingPriceMAD: number;
  deliveryDate: string;
  totalUnits: number;
  availableUnits: number;
  typologies: string[]; // e.g. ["2 à 4 Chambres", "Duplex", "Penthouses"]
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
}
