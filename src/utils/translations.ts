export type Language = 'en' | 'es' | 'fr' | 'id';

export interface Translations {
  appTitle: string;
  appDescription: string;
  skinToneLabel: string;
  undertoneLabel: string;
  regionLabel: string;
  productTypeLabel: string;
  budgetLabel: string;
  brandSelectLabel: string;
  findShadesButton: string;
  autoRecommendButton: string;
  resultsTitle: string;
  resultsDescription: string;
  buyNow: string;
  tryAgain: string;
  findNewShades: string;
  popular: string;
  selectRegionFirst: string;
  noProductsFound: string;
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
    pakistan: string;
    india: string;
    uk: string;
    usa: string;
    qatar: string;
    ksa: string;
    uae: string;
    france: string;
    germany: string;
    canada: string;
    indonesia: string;
    spain: string;
    'southeast-asia': string;
    africa: string;
    global: string;
  };
  productTypes: {
    foundation: string;
    concealer: string;
    highlighter: string;
    lipstick: string;
    blush: string;
  };
  budgetRanges: {
    low: string;
    medium: string;
    high: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    appTitle: 'Shade Seeker Pro',
    appDescription: 'Find your perfect makeup shades with AI-powered regional recommendations',
    skinToneLabel: 'Select your skin tone',
    undertoneLabel: 'Select your undertone',
    regionLabel: 'Select your region/country',
    productTypeLabel: 'Select product type',
    budgetLabel: 'Select your budget',
    brandSelectLabel: 'Choose a specific brand (optional)',
    findShadesButton: 'Find My Perfect Shades',
    autoRecommendButton: 'Get Auto Recommendations',
    resultsTitle: 'Perfect Matches',
    resultsDescription: 'Curated for your {skinTone} skin with {undertone} undertones',
    buyNow: 'Buy Now',
    tryAgain: 'Want to try again?',
    findNewShades: 'Find New Shades',
    popular: 'Popular',
    selectRegionFirst: 'Please select a region first',
    noProductsFound: 'No products found for your criteria',
    skinTones: {
      fair: { label: 'Fair', description: 'Light skin with minimal melanin' },
      light: { label: 'Light', description: 'Light to medium skin tone' },
      medium: { label: 'Medium', description: 'Medium skin with moderate melanin' },
      deep: { label: 'Deep', description: 'Rich, deep skin tone' },
    },
    undertones: {
      cool: { label: 'Cool', description: 'Pink, red, or blue undertones' },
      warm: { label: 'Warm', description: 'Yellow, peach, or golden undertones' },
      neutral: { label: 'Neutral', description: 'Balanced mix of warm and cool' },
    },
    regions: {
      pakistan: 'Pakistan',
      india: 'India',
      uk: 'United Kingdom',
      usa: 'United States',
      qatar: 'Qatar',
      ksa: 'Saudi Arabia',
      uae: 'UAE/Dubai',
      france: 'France',
      germany: 'Germany',
      canada: 'Canada',
      indonesia: 'Indonesia',
      spain: 'Spain',
      'southeast-asia': 'Southeast Asia',
      africa: 'Africa',
      global: 'Global',
    },
    productTypes: {
      foundation: 'Foundation',
      concealer: 'Concealer',
      highlighter: 'Highlighter',
      lipstick: 'Lipstick',
      blush: 'Blush',
    },
    budgetRanges: {
      low: 'Budget-Friendly ($5-$15)',
      medium: 'Mid-Range ($15-$30)',
      high: 'Luxury ($30+)',
    },
  },
  es: {
    appTitle: 'Buscador de Tonos Pro',
    appDescription: 'Encuentra tus tonos perfectos de maquillaje con recomendaciones regionales de IA',
    skinToneLabel: 'Selecciona tu tono de piel',
    undertoneLabel: 'Selecciona tu subtono',
    regionLabel: 'Selecciona tu región/país',
    productTypeLabel: 'Selecciona tipo de producto',
    budgetLabel: 'Selecciona tu presupuesto',
    brandSelectLabel: 'Elige una marca específica (opcional)',
    findShadesButton: 'Encontrar Mis Tonos Perfectos',
    autoRecommendButton: 'Obtener Recomendaciones Automáticas',
    resultsTitle: 'Coincidencias Perfectas',
    resultsDescription: 'Seleccionado para tu piel {skinTone} con subtonos {undertone}',
    buyNow: 'Comprar Ahora',
    tryAgain: '¿Quieres intentar de nuevo?',
    findNewShades: 'Encontrar Nuevos Tonos',
    popular: 'Popular',
    selectRegionFirst: 'Por favor selecciona una región primero',
    noProductsFound: 'No se encontraron productos para tus criterios',
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
      pakistan: 'Pakistán',
      india: 'India',
      uk: 'Reino Unido',
      usa: 'Estados Unidos',
      qatar: 'Qatar',
      ksa: 'Arabia Saudí',
      uae: 'EAU/Dubai',
      france: 'Francia',
      germany: 'Alemania',
      canada: 'Canadá',
      indonesia: 'Indonesia',
      spain: 'España',
      'southeast-asia': 'Sudeste Asiático',
      africa: 'África',
      global: 'Global',
    },
    productTypes: {
      foundation: 'Base',
      concealer: 'Corrector',
      highlighter: 'Iluminador',
      lipstick: 'Labial',
      blush: 'Rubor',
    },
    budgetRanges: {
      low: 'Económico ($5-$15)',
      medium: 'Rango Medio ($15-$30)',
      high: 'Lujo ($30+)',
    },
  },
  fr: {
    appTitle: 'Chercheur de Teintes Pro',
    appDescription: 'Trouvez vos teintes parfaites avec des recommandations régionales IA',
    skinToneLabel: 'Sélectionnez votre carnation',
    undertoneLabel: 'Sélectionnez votre sous-ton',
    regionLabel: 'Sélectionnez votre région/pays',
    productTypeLabel: 'Sélectionnez le type de produit',
    budgetLabel: 'Sélectionnez votre budget',
    brandSelectLabel: 'Choisissez une marque spécifique (optionnel)',
    findShadesButton: 'Trouver Mes Teintes Parfaites',
    autoRecommendButton: 'Obtenir des Recommandations Auto',
    resultsTitle: 'Correspondances Parfaites',
    resultsDescription: 'Sélectionné pour votre peau {skinTone} avec des sous-tons {undertone}',
    buyNow: 'Acheter Maintenant',
    tryAgain: 'Voulez-vous réessayer ?',
    findNewShades: 'Trouver de Nouvelles Teintes',
    popular: 'Populaire',
    selectRegionFirst: 'Veuillez d\'abord sélectionner une région',
    noProductsFound: 'Aucun produit trouvé pour vos critères',
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
      pakistan: 'Pakistan',
      india: 'Inde',
      uk: 'Royaume-Uni',
      usa: 'États-Unis',
      qatar: 'Qatar',
      ksa: 'Arabie Saoudite',
      uae: 'EAU/Dubai',
      france: 'France',
      germany: 'Allemagne',
      canada: 'Canada',
      indonesia: 'Indonésie',
      spain: 'Espagne',
      'southeast-asia': 'Asie du Sud-Est',
      africa: 'Afrique',
      global: 'Mondial',
    },
    productTypes: {
      foundation: 'Fond de teint',
      concealer: 'Correcteur',
      highlighter: 'Enlumineur',
      lipstick: 'Rouge à lèvres',
      blush: 'Blush',
    },
    budgetRanges: {
      low: 'Économique ($5-$15)',
      medium: 'Milieu de gamme ($15-$30)',
      high: 'Luxe ($30+)',
    },
  },
  id: {
    appTitle: 'Pencari Warna Pro',
    appDescription: 'Temukan warna makeup sempurna dengan rekomendasi regional bertenaga AI',
    skinToneLabel: 'Pilih warna kulit Anda',
    undertoneLabel: 'Pilih undertone Anda',
    regionLabel: 'Pilih wilayah/negara Anda',
    productTypeLabel: 'Pilih jenis produk',
    budgetLabel: 'Pilih anggaran Anda',
    brandSelectLabel: 'Pilih merek tertentu (opsional)',
    findShadesButton: 'Temukan Warna Sempurna Saya',
    autoRecommendButton: 'Dapatkan Rekomendasi Otomatis',
    resultsTitle: 'Kecocokan Sempurna',
    resultsDescription: 'Dipilih untuk kulit {skinTone} dengan undertone {undertone}',
    buyNow: 'Beli Sekarang',
    tryAgain: 'Ingin coba lagi?',
    findNewShades: 'Temukan Warna Baru',
    popular: 'Populer',
    selectRegionFirst: 'Silakan pilih wilayah terlebih dahulu',
    noProductsFound: 'Tidak ada produk yang ditemukan untuk kriteria Anda',
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
      pakistan: 'Pakistan',
      india: 'India',
      uk: 'Inggris',
      usa: 'Amerika Serikat',
      qatar: 'Qatar',
      ksa: 'Arab Saudi',
      uae: 'UEA/Dubai',
      france: 'Prancis',
      germany: 'Jerman',
      canada: 'Kanada',
      indonesia: 'Indonesia',
      spain: 'Spanyol',
      'southeast-asia': 'Asia Tenggara',
      africa: 'Afrika',
      global: 'Global',
    },
    productTypes: {
      foundation: 'Foundation',
      concealer: 'Concealer',
      highlighter: 'Highlighter',
      lipstick: 'Lipstik',
      blush: 'Blush',
    },
    budgetRanges: {
      low: 'Hemat ($5-$15)',
      medium: 'Menengah ($15-$30)',
      high: 'Mewah ($30+)',
    },
  },
};

export const useTranslation = (language: Language = 'en') => {
  return translations[language];
};