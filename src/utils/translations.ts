export type Language = 'en' | 'es' | 'fr' | 'id';

export interface Translations {
  appTitle: string;
  appDescription: string;
  nameLabel: string;
  namePlaceholder: string;
  skinToneLabel: string;
  undertoneLabel: string;
  regionLabel: string;
  findShadesButton: string;
  resultsTitle: string;
  resultsDescription: string;
  buyNow: string;
  tryAgain: string;
  findNewShades: string;
  popular: string;
  skinTones: {
    fair: { label: string; description: string };
    light: { label: string; description: string };
    medium: { label: string; description: string };
    deep: { label: string; description: string };
  };
  undertones: {
    cool: { label: string; description: string };
    warm: { label: string; description: string };
    neutral: { label: string; description: string };
  };
  regions: {
    'south-asia': string;
    'southeast-asia': string;
    'middle-east': string;
    europe: string;
    'north-america': string;
    africa: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    appTitle: 'Shade Seeker',
    appDescription: 'Find your perfect foundation and makeup shades with our AI-powered tool',
    nameLabel: "What's your name?",
    namePlaceholder: 'Enter your name',
    skinToneLabel: 'Select your skin tone',
    undertoneLabel: 'Select your undertone',
    regionLabel: 'Select your region',
    findShadesButton: 'Find My Perfect Shades',
    resultsTitle: 'Perfect Matches for',
    resultsDescription: 'Based on your {skinTone} skin tone with {undertone} undertones',
    buyNow: 'Buy Now',
    tryAgain: 'Want to try again?',
    findNewShades: 'Find New Shades',
    popular: 'Popular',
    skinTones: {
      fair: { 
        label: 'Fair', 
        description: 'Light skin with minimal melanin' 
      },
      light: { 
        label: 'Light', 
        description: 'Light to medium skin tone' 
      },
      medium: { 
        label: 'Medium', 
        description: 'Medium skin with moderate melanin' 
      },
      deep: { 
        label: 'Deep', 
        description: 'Rich, deep skin tone' 
      },
    },
    undertones: {
      cool: { 
        label: 'Cool', 
        description: 'Pink, red, or blue undertones' 
      },
      warm: { 
        label: 'Warm', 
        description: 'Yellow, peach, or golden undertones' 
      },
      neutral: { 
        label: 'Neutral', 
        description: 'Balanced mix of warm and cool' 
      },
    },
    regions: {
      'south-asia': 'South Asia',
      'southeast-asia': 'Southeast Asia',
      'middle-east': 'Middle East',
      europe: 'Europe',
      'north-america': 'North America',
      africa: 'Africa',
    },
  },
  es: {
    appTitle: 'Buscador de Tonos',
    appDescription: 'Encuentra tus tonos perfectos de base y maquillaje con nuestra herramienta de IA',
    nameLabel: '¿Cuál es tu nombre?',
    namePlaceholder: 'Ingresa tu nombre',
    skinToneLabel: 'Selecciona tu tono de piel',
    undertoneLabel: 'Selecciona tu subtono',
    regionLabel: 'Selecciona tu región',
    findShadesButton: 'Encontrar Mis Tonos Perfectos',
    resultsTitle: 'Coincidencias Perfectas para',
    resultsDescription: 'Basado en tu tono de piel {skinTone} con subtonos {undertone}',
    buyNow: 'Comprar Ahora',
    tryAgain: '¿Quieres intentar de nuevo?',
    findNewShades: 'Encontrar Nuevos Tonos',
    popular: 'Popular',
    skinTones: {
      fair: { label: 'Claro', description: 'Piel clara con melanina mínima' },
      light: { label: 'Ligero', description: 'Tono de piel ligero a medio' },
      medium: { label: 'Medio', description: 'Piel media con melanina moderada' },
      deep: { label: 'Profundo', description: 'Tono de piel rico y profundo' },
    },
    undertones: {
      cool: { label: 'Frío', description: 'Subtonos rosados, rojos o azules' },
      warm: { label: 'Cálido', description: 'Subtonos amarillos, durazno o dorados' },
      neutral: { label: 'Neutro', description: 'Mezcla equilibrada de cálido y frío' },
    },
    regions: {
      'south-asia': 'Asia del Sur',
      'southeast-asia': 'Sudeste Asiático',
      'middle-east': 'Medio Oriente',
      europe: 'Europa',
      'north-america': 'América del Norte',
      africa: 'África',
    },
  },
  fr: {
    appTitle: 'Chercheur de Teintes',
    appDescription: 'Trouvez vos teintes parfaites de fond de teint et de maquillage avec notre outil IA',
    nameLabel: 'Quel est votre nom ?',
    namePlaceholder: 'Entrez votre nom',
    skinToneLabel: 'Sélectionnez votre carnation',
    undertoneLabel: 'Sélectionnez votre sous-ton',
    regionLabel: 'Sélectionnez votre région',
    findShadesButton: 'Trouver Mes Teintes Parfaites',
    resultsTitle: 'Correspondances Parfaites pour',
    resultsDescription: 'Basé sur votre carnation {skinTone} avec des sous-tons {undertone}',
    buyNow: 'Acheter Maintenant',
    tryAgain: 'Voulez-vous réessayer ?',
    findNewShades: 'Trouver de Nouvelles Teintes',
    popular: 'Populaire',
    skinTones: {
      fair: { label: 'Claire', description: 'Peau claire avec mélanine minimale' },
      light: { label: 'Légère', description: 'Carnation légère à moyenne' },
      medium: { label: 'Moyenne', description: 'Peau moyenne avec mélanine modérée' },
      deep: { label: 'Profonde', description: 'Carnation riche et profonde' },
    },
    undertones: {
      cool: { label: 'Froid', description: 'Sous-tons roses, rouges ou bleus' },
      warm: { label: 'Chaud', description: 'Sous-tons jaunes, pêche ou dorés' },
      neutral: { label: 'Neutre', description: 'Mélange équilibré de chaud et froid' },
    },
    regions: {
      'south-asia': 'Asie du Sud',
      'southeast-asia': 'Asie du Sud-Est',
      'middle-east': 'Moyen-Orient',
      europe: 'Europe',
      'north-america': 'Amérique du Nord',
      africa: 'Afrique',
    },
  },
  id: {
    appTitle: 'Pencari Warna',
    appDescription: 'Temukan warna foundation dan makeup yang sempurna dengan alat bertenaga AI kami',
    nameLabel: 'Siapa nama Anda?',
    namePlaceholder: 'Masukkan nama Anda',
    skinToneLabel: 'Pilih warna kulit Anda',
    undertoneLabel: 'Pilih undertone Anda',
    regionLabel: 'Pilih wilayah Anda',
    findShadesButton: 'Temukan Warna Sempurna Saya',
    resultsTitle: 'Kecocokan Sempurna untuk',
    resultsDescription: 'Berdasarkan warna kulit {skinTone} Anda dengan undertone {undertone}',
    buyNow: 'Beli Sekarang',
    tryAgain: 'Ingin coba lagi?',
    findNewShades: 'Temukan Warna Baru',
    popular: 'Populer',
    skinTones: {
      fair: { label: 'Terang', description: 'Kulit terang dengan melanin minimal' },
      light: { label: 'Cerah', description: 'Warna kulit terang hingga sedang' },
      medium: { label: 'Sedang', description: 'Kulit sedang dengan melanin moderat' },
      deep: { label: 'Gelap', description: 'Warna kulit kaya dan gelap' },
    },
    undertones: {
      cool: { label: 'Dingin', description: 'Undertone pink, merah, atau biru' },
      warm: { label: 'Hangat', description: 'Undertone kuning, peach, atau emas' },
      neutral: { label: 'Netral', description: 'Campuran seimbang hangat dan dingin' },
    },
    regions: {
      'south-asia': 'Asia Selatan',
      'southeast-asia': 'Asia Tenggara',
      'middle-east': 'Timur Tengah',
      europe: 'Eropa',
      'north-america': 'Amerika Utara',
      africa: 'Afrika',
    },
  },
};

export const useTranslation = (language: Language = 'en') => {
  return translations[language];
};