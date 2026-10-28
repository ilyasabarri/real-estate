import { Property, NewProject } from '@/types/property';
export type { Property, NewProject };

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    reference: 'MEM-TG-101',
    title: 'Villa Contemporaine d’Exception • Vue Mer Panoramique',
    slug: 'villa-contemporaine-vue-mer-tanger-malabata',
    transaction: 'vente',
    type: 'villa',
    city: 'Tanger',
    district: 'Cap Malabata',
    priceMAD: 14500000,
    surfaceM2: 680,
    bedrooms: 5,
    bathrooms: 6,
    featured: true,
    isFurnished: true,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Baignée de lumière sur les collines prisées de Malabata, cette sublime propriété d’architecte offre une vue imprenable sur le détroit de Gibraltar. Finitions en marbre d’Italie, domotique intégrale, piscine à débordement chauffée, salon marocain contemporain et suites privatives avec dressing sur mesure.',
    amenities: [
      'Vue Mer Imprenable',
      'Piscine à débordement chauffée',
      'Jardin paysager méditerranéen',
      'Salon Marocain de Prestige',
      'Domotique intégrale',
      'Garage fermé (4 véhicules)',
      'Hammam traditionnel privé',
      'Sécurité 24/7 & Vidéosurveillance'
    ],
    yearBuilt: 2024,
    energyRating: 'A+',
    agent: {
      name: 'Youssef El Amrani',
      phone: '+212 (0) 0 6 61 23 45 67',
      whatsapp: '212661234567',
      email: 'y.elamrani@majestic-maroc.com',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      role: 'Directeur Département Prestige Nord'
    }
  },
  {
    id: 'prop-2',
    reference: 'MEM-KE-204',
    title: 'Riad Historique Rénové avec Patio Végétalisé & Piscine',
    slug: 'riad-historique-piscine-marrakech-medina',
    transaction: 'vente',
    type: 'riad',
    city: 'Marrakech',
    district: 'Médina • Dar El Bacha',
    priceMAD: 8900000,
    surfaceM2: 420,
    bedrooms: 6,
    bathrooms: 6,
    featured: true,
    isFurnished: true,
    images: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Une véritable pépite d’architecture arabo-andalouse située dans le quartier le plus aristocratique de la Médina. Zelliges faits main de Fès, plafonds en cèdre sculpté (zouaké), bassin chauffé dans le patio central et rooftop avec vue directe sur les cimes enneigées de l’Atlas. Idéal pour résidence privée ou exploitation en maison d’hôtes de luxe autorisée.',
    amenities: [
      'Bassin chauffé dans patio',
      'Rooftop avec vue Atlas',
      'Zellige de Fès & Plafonds sculptés',
      'Hammam et salle de massage',
      '6 Suites climatisées',
      'Accès voiture proche',
      'Cuisine professionnelle équipée',
      'Titre foncier en règle'
    ],
    yearBuilt: 2022,
    agent: {
      name: 'Salma Benjelloun',
      phone: '+212 (0) 0 6 62 89 12 34',
      whatsapp: '212662891234',
      email: 's.benjelloun@majestic-maroc.com',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      role: 'Responsable Biens Historiques & Riads'
    }
  },
  {
    id: 'prop-3',
    reference: 'MEM-CA-309',
    title: 'Penthouse d’Exception en Duplex • Anfa Supérieur',
    slug: 'penthouse-duplex-anfa-superieur-casablanca',
    transaction: 'vente',
    type: 'penthouse',
    city: 'Casablanca',
    district: 'Anfa Supérieur',
    priceMAD: 9800000,
    surfaceM2: 340,
    bedrooms: 4,
    bathrooms: 4,
    featured: true,
    isFurnished: false,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Au dernier étage d’une résidence ultra-sécurisée d’Anfa Supérieur, ce penthouse en duplex offre une terrasse panoramique de 110 m² avec jacuzzi et vue à 360° sur Casablanca et l’Océan Atlantique. Ascenseur privatif à code, cheminée au bioéthanol, parquets massifs et suite de maître de 60 m².',
    amenities: [
      'Terrasse panoramique 110 m²',
      'Jacuzzi extérieur privé',
      'Ascenseur privatif sécurisé',
      'Double salon de réception',
      'Cuisine italienne Boffi',
      '3 Places de parking titrées',
      'Box de rangement 20 m²',
      'Conciergerie 24/7'
    ],
    yearBuilt: 2023,
    agent: {
      name: 'Mehdi Chraibi',
      phone: '+212 (0) 0 6 63 45 78 90',
      whatsapp: '212663457890',
      email: 'm.chraibi@majestic-maroc.com',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      role: 'Directeur Casablanca Finance & Prestige'
    }
  },
  {
    id: 'prop-4',
    reference: 'MEM-TG-LOC-05',
    title: 'Appartement Haut Standing Front de Mer • Meublé de Prestige',
    slug: 'appartement-haut-standing-front-mer-tanger',
    transaction: 'location',
    type: 'appartement',
    city: 'Tanger',
    district: 'Boulevard Pasteur / Baie de Tanger',
    priceMAD: 22000,
    period: 'mois',
    surfaceM2: 175,
    bedrooms: 3,
    bathrooms: 2,
    featured: false,
    isFurnished: true,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'En plein cœur du Tanger moderne avec vue directe sur la baie et la Marina. Mobilier contemporain haut de gamme importé d’Italie, double vitrage acoustique haute performance, climatisation réversible gainée et service de conciergerie.',
    amenities: [
      'Vue frontale sur la Marina',
      'Mobilier italien haut de gamme',
      'Fibre optique haut débit',
      'Place de parking au sous-sol',
      'Sécurité et gardiennage 24/7',
      'Proximité immédiate TGV'
    ],
    agent: {
      name: 'Youssef El Amrani',
      phone: '+212 (0) 0 6 61 23 45 67',
      whatsapp: '212661234567',
      email: 'y.elamrani@majestic-maroc.com',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      role: 'Directeur Département Prestige Nord'
    }
  },
  {
    id: 'prop-5',
    reference: 'MEM-KE-112',
    title: 'Villa de Luxe Style Californie • Palmeraie Marrakech',
    slug: 'villa-palmeraie-piscine-marrakech',
    transaction: 'vente',
    type: 'villa',
    city: 'Marrakech',
    district: 'Palmeraie Triangle d’Or',
    priceMAD: 18500000,
    surfaceM2: 850,
    bedrooms: 6,
    bathrooms: 7,
    featured: true,
    isFurnished: true,
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Érigée sur un parc arboré d’un hectare planté d’oliviers centenaires et de palmiers, cette villa allie l’épure moderne aux matériaux nobles marocains (marbre noir de Khénifra, tadelakt artisanal, bois de cèdre). Bassin de nage semi-olympique de 25m, court de padel privé et pavillon invités indépendant.',
    amenities: [
      'Parc paysager de 10 000 m²',
      'Piscine semi-olympique 25m',
      'Court de padel privé',
      'Pavillon d’invités séparé',
      'Espace bien-être & Spa',
      'Forage et arrosage automatique',
      'Logement pour personnel de maison'
    ],
    yearBuilt: 2023,
    agent: {
      name: 'Salma Benjelloun',
      phone: '+212 (0) 0 6 62 89 12 34',
      whatsapp: '212662891234',
      email: 's.benjelloun@majestic-maroc.com',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      role: 'Responsable Biens Historiques & Riads'
    }
  },
  {
    id: 'prop-6',
    reference: 'MEM-RB-402',
    title: 'Hôtel Particulier Contemporain • Rabat Souissi',
    slug: 'hotel-particulier-contemporain-rabat-souissi',
    transaction: 'vente',
    type: 'villa',
    city: 'Rabat',
    district: 'Souissi Ambassades',
    priceMAD: 24000000,
    surfaceM2: 920,
    bedrooms: 6,
    bathrooms: 8,
    featured: true,
    isFurnished: false,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Dans le quartier diplomatique le plus calme et sécurisé du Royaume, somptueuse demeure aux volumes majestueux. Hauteurs sous plafond de 4,20 m, triple réception avec vue sur le parc, salon d’honneur marocain et espace de sécurité conforme aux standards consulaires.',
    amenities: [
      'Quartier résidentiel diplomatique',
      'Sécurité maximale certifiée',
      'Grand salon d’honneur marocain',
      'Piscine couverte chauffée',
      'Groupe électrogène autonome',
      'Sous-sol aménagé avec salle de cinéma',
      'Garage fermé 6 véhicules'
    ],
    yearBuilt: 2024,
    agent: {
      name: 'Mehdi Chraibi',
      phone: '+212 (0) 0 6 63 45 78 90',
      whatsapp: '212663457890',
      email: 'm.chraibi@majestic-maroc.com',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      role: 'Directeur Casablanca & Rabat'
    }
  },
  {
    id: 'prop-7',
    reference: 'MEM-CA-LOC-18',
    title: 'Plateau de Bureaux Modernes • Casablanca Finance City (CFC)',
    slug: 'bureaux-haut-standing-casablanca-finance-city',
    transaction: 'location',
    type: 'bureau',
    city: 'Casablanca',
    district: 'CFC • Tour Casa Business Hub',
    priceMAD: 45000,
    period: 'mois',
    surfaceM2: 240,
    bedrooms: 0,
    bathrooms: 3,
    featured: false,
    isFurnished: false,
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Plateau aménagé au sein d’une tour certifiée LEED Gold à CFC. Éligible aux avantages fiscaux du statut CFC. Câblage RJ45 catégorie 6A, climatisation centralisée par zone, contrôle d’accès biométrique et 4 places de parking en sous-sol.',
    amenities: [
      'Statut CFC éligible',
      'Certification écologique LEED Gold',
      'Fibre optique dédiée',
      'Salles de réunion mutualisées',
      '4 Places de parking sécurisées',
      'Accès direct Tramway'
    ],
    agent: {
      name: 'Mehdi Chraibi',
      phone: '+212 (0) 0 6 63 45 78 90',
      whatsapp: '212663457890',
      email: 'm.chraibi@majestic-maroc.com',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      role: 'Directeur Casablanca Finance & Prestige'
    }
  },
  {
    id: 'prop-8',
    reference: 'MEM-AG-501',
    title: 'Villa Balnéaire Contemporaine • Baie des Taghazout',
    slug: 'villa-balneaire-baie-taghazout-agadir',
    transaction: 'vente',
    type: 'villa',
    city: 'Agadir',
    district: 'Taghazout Bay Resort',
    priceMAD: 7900000,
    surfaceM2: 380,
    bedrooms: 4,
    bathrooms: 4,
    featured: false,
    isFurnished: true,
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Au cœur de l’éco-station balnéaire de Taghazout Bay avec accès direct au golf 18 trous Kyle Phillips et spot de surf de renommée mondiale. Architecture bioclimatique, piscine miroir à débordement et gestion locative premium disponible.',
    amenities: [
      'Accès direct Golf 18 trous & Plage',
      'Vue océan et couchers de soleil',
      'Piscine miroir chauffée',
      'Rendement locatif saisonnier élevé',
      'Sécurité Resort 24/7',
      'Prestations hôtelières à la carte'
    ],
    yearBuilt: 2023,
    agent: {
      name: 'Salma Benjelloun',
      phone: '+212 (0) 0 6 62 89 12 34',
      whatsapp: '212662891234',
      email: 's.benjelloun@majestic-maroc.com',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      role: 'Responsable Sud & Littoral'
    }
  }
];

export const NEW_PROJECTS: NewProject[] = [
  {
    id: 'proj-1',
    title: 'Le Domaine des Palmiers • Résidence de Villas d’Architecte',
    slug: 'domaine-des-palmiers-marrakech',
    city: 'Marrakech',
    district: 'Route d’Amizmiz',
    startingPriceMAD: 4800000,
    deliveryDate: '4ème Trimestre 2026',
    totalUnits: 28,
    availableUnits: 9,
    typologies: ['Villas plain-pied 3 ch.', 'Villas contemporaines 4-5 ch.'],
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Un ensemble exclusif de 28 villas de maître nichées dans une oliveraie préservée avec vue panoramique sur l’Atlas. Matériaux nobles, panneaux solaires intégrés, piscine individuelle de 14m et clubhouse privé.',
    highlights: [
      'Livraison fin 2026 en VEFA garantie bancaire',
      'Terrains privatifs de 1 200 m² à 2 500 m²',
      'Clubhouse avec spa, restaurant et court de padel',
      'Frais de notaire réduits en lancement exclusif'
    ]
  },
  {
    id: 'proj-2',
    title: 'Tanger Horizon Bay • Tour Résidentielle de Prestige',
    slug: 'tanger-horizon-bay-malabata',
    city: 'Tanger',
    district: 'Nouvelle Corniche • Malabata',
    startingPriceMAD: 2200000,
    deliveryDate: '2ème Trimestre 2026',
    totalUnits: 64,
    availableUnits: 17,
    typologies: ['Appartements 2 & 3 Chambres', 'Duplex Front de Mer', 'Penthouses'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Une signature architecturale iconique dominant la baie de Tanger. Façades de verre ondulées, terrasses filantes face à la mer, finitions marbre et conciergerie 5 étoiles.',
    highlights: [
      'Face à la plage de Malabata et Marina',
      'Piscine à débordement suspendue au 15ème étage',
      'Salle de sport privée et espace bien-être',
      'Éligibilité investissement locatif meublé haute rentabilité'
    ]
  }
];

export const AGENCY_SERVICES = [
  {
    icon: 'Building2',
    title: 'Vente & Acquisition Prestige',
    description: 'Accompagnement sur mesure pour l’achat ou la cession de biens d’exception (villas, penthouses, riads) dans les quartiers les plus convoités du Maroc.'
  },
  {
    icon: 'Key',
    title: 'Location Haut Standing',
    description: 'Sélection rigoureuse de biens meublés et vides pour une clientèle d’affaires, diplomatique et d’expatriés avec bail sécurisé.'
  },
  {
    icon: 'TrendingUp',
    title: 'Investissement & Rendement',
    description: 'Conseil stratégique pour MRE et investisseurs étrangers : analyse du rendement locatif, fiscalité marocaine avantageuse et conventions bilatérales.'
  },
  {
    icon: 'FileCheck2',
    title: 'Commercialisation VEFA & Projets Neufs',
    description: 'Partenaire de confiance des promoteurs de renom pour la commercialisation exclusive de programmes résidentiels d’envergure.'
  },
  {
    icon: 'Scale',
    title: 'Estimation & Expertise Certifiée',
    description: 'Valorisation juste et précise de votre patrimoine immobilier basée sur les transactions réelles du marché marocain.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Gestion Locative Privée',
    description: 'Gestion intégrale de votre bien en toute sérénité : encaissement, états des lieux, conciergerie et maintenance technique.'
  }
];

export const REVIEWS = [
  {
    name: 'Karim Tazi',
    location: 'Résident à Paris (MRE)',
    rating: 5,
    date: 'Octobre 2026',
    comment: 'En tant que MRE, acheter une villa à Tanger à distance semblait complexe. L’équipe de Majestic a géré l’ensemble du dossier avec une transparence absolue et m’a trouvé une propriété au Cap Malabata qui dépasse nos attentes.'
  },
  {
    name: 'Sophie & Marc Laurent',
    location: 'Investisseurs • Bruxelles',
    rating: 5,
    date: 'Septembre 2026',
    comment: 'Nous avons fait l’acquisition d’un riad à Marrakech pour une exploitation en maison d’hôtes. Un accompagnement VIP du premier jour jusqu’à la signature chez le notaire. Le professionnalisme marocain à son plus haut niveau.'
  },
  {
    name: 'Dr. Amine Berrada',
    location: 'Casablanca Anfa',
    rating: 5,
    date: 'Août 2026',
    comment: 'La vente de mon duplex à Anfa a été réalisée en moins de 45 jours au prix souhaité, dans une discrétion totale. Une agence qui comprend réellement les codes du luxe.'
  }
];
