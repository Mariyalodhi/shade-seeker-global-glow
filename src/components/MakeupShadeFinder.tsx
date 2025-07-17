import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { 
  Heart, Palette, MapPin, DollarSign, ShoppingBag, Sparkles, Star, 
  Crown, Zap, Package, Eye, Smile, Globe, Wand2 
} from 'lucide-react';
import { useTranslation, Language } from '@/utils/translations';
import LanguageSelector from './LanguageSelector';

// Comprehensive regional brand database
const regionalBrands = {
  pakistan: {
    foundation: [
      { brand: 'Masarrat Misbah', shade: 'Fair Porcelain', price: 35, priceRange: 'high', affiliate: 'https://masarratmisbah.com/products/foundation' },
      { brand: 'Luscious Cosmetics', shade: 'Natural Fair', price: 12, priceRange: 'low', affiliate: 'https://lusciouscosmetics.com/collections/face/products/foundation' },
      { brand: 'Miss Rose', shade: 'Ivory Glow', price: 8, priceRange: 'low', affiliate: 'https://amazon.com/miss-rose-foundation/dp/B08X1234' },
      { brand: 'Rivaj UK', shade: 'Cool Fair', price: 10, priceRange: 'low', affiliate: 'https://rivajuk.com/products/hd-foundation' },
      { brand: 'Beautify by Amna', shade: 'Fair Blush', price: 22, priceRange: 'medium', affiliate: 'https://beautifybyamna.com/products/liquid-foundation' },
      { brand: 'Bling by Nadia Hussain', shade: 'Radiant Fair', price: 18, priceRange: 'medium', affiliate: 'https://blingbynadiahussain.com/collections/face/products/foundation' },
      { brand: 'J.', shade: 'Porcelain Perfect', price: 25, priceRange: 'medium', affiliate: 'https://jdot.com.pk/collections/foundation' },
      { brand: 'Zay Beauty', shade: 'Cool Ivory', price: 28, priceRange: 'medium', affiliate: 'https://zaybeauty.com/products/matte-foundation' },
      { brand: 'Medora', shade: 'Porcelain Pink', price: 14, priceRange: 'low', affiliate: 'https://medoracosmetics.com/products/liquid-foundation' },
      { brand: 'Alezem Beauty', shade: 'Fair Silk', price: 20, priceRange: 'medium', affiliate: 'https://alezembeauty.com/products/hd-foundation' },
      { brand: 'Kryolan', shade: 'Ultra Fair', price: 45, priceRange: 'high', affiliate: 'https://kryolan.com/products/ultrafoundation' },
      { brand: 'Maybelline', shade: 'Ivory Classic', price: 12, priceRange: 'low', affiliate: 'https://maybelline.com/products/face-makeup/foundation/fit-me-matte-poreless-foundation' },
      { brand: 'Entice Cosmetics', shade: 'Fair Natural', price: 16, priceRange: 'medium', affiliate: 'https://enticecosmetics.com/products/liquid-foundation' },
      { brand: 'Essence', shade: 'Fair Ivory', price: 5, priceRange: 'low', affiliate: 'https://essence.eu/products/stay-all-day-16h-long-lasting-make-up' },
      { brand: 'L\'Oréal', shade: 'Ivory Rose', price: 15, priceRange: 'medium', affiliate: 'https://loreal-paris.com/products/makeup/face/foundation/infallible-up-to-24hr-fresh-wear-foundation' },
      { brand: 'Sapphire', shade: 'Fair Elegance', price: 30, priceRange: 'high', affiliate: 'https://sapphirepk.com/collections/makeup/products/liquid-foundation' }
    ],
    concealer: [
      { brand: 'Masarrat Misbah', shade: 'Fair Coverage', price: 25, priceRange: 'medium', affiliate: 'https://masarratmisbah.com/products/concealer' },
      { brand: 'Luscious Cosmetics', shade: 'Light Concealer', price: 8, priceRange: 'low', affiliate: 'https://lusciouscosmetics.com/collections/face/products/concealer' },
      { brand: 'Beautify by Amna', shade: 'Perfect Cover', price: 15, priceRange: 'medium', affiliate: 'https://beautifybyamna.com/products/concealer' },
      { brand: 'Zay Beauty', shade: 'Flawless Hide', price: 20, priceRange: 'medium', affiliate: 'https://zaybeauty.com/products/concealer' },
      { brand: 'Maybelline', shade: 'Fit Me', price: 10, priceRange: 'low', affiliate: 'https://maybelline.com/products/face-makeup/concealer/fit-me-concealer' }
    ],
    highlighter: [
      { brand: 'Zay Beauty', shade: 'Golden Glow', price: 20, priceRange: 'medium', affiliate: 'https://example.com/zay-highlighter' },
      { brand: 'J.', shade: 'Pearl Highlight', price: 18, priceRange: 'medium', affiliate: 'https://example.com/j-highlighter' },
      { brand: 'Masarrat Misbah', shade: 'Champagne Glow', price: 30, priceRange: 'high', affiliate: 'https://example.com/masarrat-highlighter' },
      { brand: 'Beautify by Amna', shade: 'Rose Gold', price: 22, priceRange: 'medium', affiliate: 'https://example.com/beautify-highlighter' }
    ],
    lipstick: [
      { brand: 'Luscious Cosmetics', shade: 'Rose Pink', price: 10, priceRange: 'low', affiliate: 'https://lusciouscosmetics.com/collections/lips/products/matte-lipstick' },
      { brand: 'Beautify by Amna', shade: 'Coral Bliss', price: 18, priceRange: 'medium', affiliate: 'https://beautifybyamna.com/products/lipstick' },
      { brand: 'Bling by Nadia Hussain', shade: 'Berry Bold', price: 15, priceRange: 'medium', affiliate: 'https://blingbynadiahussain.com/collections/lips/products/lipstick' },
      { brand: 'Zay Beauty', shade: 'Matte Magic', price: 16, priceRange: 'medium', affiliate: 'https://zaybeauty.com/products/liquid-lipstick' },
      { brand: 'J.', shade: 'Classic Red', price: 20, priceRange: 'medium', affiliate: 'https://jdot.com.pk/collections/lipstick' }
    ],
    blush: [
      { brand: 'Medora', shade: 'Peachy Pink', price: 12, priceRange: 'low', affiliate: 'https://example.com/medora-blush' },
      { brand: 'Zay Beauty', shade: 'Rose Glow', price: 16, priceRange: 'medium', affiliate: 'https://example.com/zay-blush' },
      { brand: 'Beautify by Amna', shade: 'Coral Flush', price: 18, priceRange: 'medium', affiliate: 'https://example.com/beautify-blush' }
    ]
  },
  india: {
    foundation: [
      { brand: 'Lakmé', shade: 'Shell', price: 15, priceRange: 'medium', affiliate: 'https://lakme-india.com/products/9-to-5-primer-matte-liquid-foundation' },
      { brand: 'Sugar Cosmetics', shade: 'Fair Ivory', price: 18, priceRange: 'medium', affiliate: 'https://sugarcosmetics.com/products/dream-cover-spf15-mattifying-compact' },
      { brand: 'Mamaearth', shade: 'Fair Glow', price: 12, priceRange: 'low', affiliate: 'https://mamaearth.in/product/glow-serum-foundation-with-vitamin-c-turmeric' },
      { brand: 'Kay Beauty', shade: 'Porcelain', price: 28, priceRange: 'high', affiliate: 'https://kaybeauty.in/products/hd-foundation' },
      { brand: 'Blue Heaven', shade: 'Fair Pink', price: 8, priceRange: 'low', affiliate: 'https://blueheaven-india.com/products/one-tone-foundation' },
      { brand: 'Faces Canada', shade: 'Ivory Fair', price: 16, priceRange: 'medium', affiliate: 'https://facescanada.com/products/ultime-pro-hd-studio-foundation' }
    ],
    concealer: [
      { brand: 'Sugar Cosmetics', shade: 'Light Hide', price: 14, priceRange: 'low', affiliate: 'https://sugarcosmetics.com/products/ace-of-face-foundation-stick' },
      { brand: 'Lakmé', shade: 'Perfect Cover', price: 12, priceRange: 'low', affiliate: 'https://lakme-india.com/products/perfecting-liquid-foundation' }
    ],
    highlighter: [
      { brand: 'Sugar Cosmetics', shade: 'Golden Hour', price: 16, priceRange: 'medium', affiliate: 'https://sugarcosmetics.com/products/strobing-kit' },
      { brand: 'Kay Beauty', shade: 'Luminous', price: 24, priceRange: 'medium', affiliate: 'https://kaybeauty.in/products/highlighter' }
    ],
    lipstick: [
      { brand: 'Sugar Cosmetics', shade: 'Berry Me', price: 14, priceRange: 'low', affiliate: 'https://sugarcosmetics.com/products/matte-as-hell-crayon-lipstick' },
      { brand: 'Lakmé', shade: 'Classic Rose', price: 12, priceRange: 'low', affiliate: 'https://lakme-india.com/products/9-to-5-primer-matte-lip-color' }
    ],
    blush: [
      { brand: 'Sugar Cosmetics', shade: 'Peachy Keen', price: 12, priceRange: 'low', affiliate: 'https://sugarcosmetics.com/products/contour-de-force-face-palette' }
    ]
  },
  usa: {
    foundation: [
      { brand: 'Fenty Beauty', shade: '110', price: 38, priceRange: 'high', affiliate: 'https://fentybeauty.com/products/pro-filtr-soft-matte-longwear-foundation' },
      { brand: 'Rare Beauty', shade: 'Fair 10N', price: 25, priceRange: 'medium', affiliate: 'https://rarebeauty.com/products/liquid-touch-weightless-foundation' },
      { brand: 'Tarte', shade: 'Fair Light Neutral', price: 36, priceRange: 'high', affiliate: 'https://tartecosmetics.com/shop/amazonian-clay-full-coverage-foundation' },
      { brand: 'NARS', shade: 'Siberia', price: 38, priceRange: 'high', affiliate: 'https://narscosmetics.com/usa/natural-radiant-longwear-foundation' },
      { brand: 'e.l.f.', shade: 'Fair 140 C', price: 6, priceRange: 'low', affiliate: 'https://elfcosmetics.com/flawless-finish-foundation/300033.html' },
      { brand: 'Morphe', shade: 'Fair 1', price: 18, priceRange: 'medium', affiliate: 'https://morphe.com/products/fluidity-full-coverage-foundation' },
      { brand: 'MAC', shade: 'NW10', price: 33, priceRange: 'high', affiliate: 'https://maccosmetics.com/product/13847/310/products/makeup/face/foundation/studio-fix-fluid-spf-15' }
    ],
    concealer: [
      { brand: 'Tarte', shade: 'Fair Light', price: 28, priceRange: 'medium', affiliate: 'https://tartecosmetics.com/shop/shape-tape-contour-concealer' },
      { brand: 'Rare Beauty', shade: 'Fair', price: 20, priceRange: 'medium', affiliate: 'https://rarebeauty.com/products/liquid-touch-weightless-concealer' }
    ],
    highlighter: [
      { brand: 'Fenty Beauty', shade: 'Lightning Dust', price: 38, priceRange: 'high', affiliate: 'https://fentybeauty.com/products/killawatt-freestyle-highlighter' },
      { brand: 'Rare Beauty', shade: 'Mesmerize', price: 22, priceRange: 'medium', affiliate: 'https://rarebeauty.com/products/positive-light-liquid-luminizer-highlight' }
    ],
    lipstick: [
      { brand: 'Fenty Beauty', shade: 'Stunna', price: 25, priceRange: 'medium', affiliate: 'https://fentybeauty.com/products/stunna-lip-paint-longwear-fluid-lip-color' },
      { brand: 'Rare Beauty', shade: 'Kind', price: 20, priceRange: 'medium', affiliate: 'https://rarebeauty.com/products/kind-words-matte-lipstick' }
    ],
    blush: [
      { brand: 'Rare Beauty', shade: 'Soft Pinch', price: 23, priceRange: 'medium', affiliate: 'https://rarebeauty.com/products/soft-pinch-liquid-blush' }
    ]
  },
  uk: {
    foundation: [
      { brand: 'Charlotte Tilbury', shade: 'Fair 1', price: 44, priceRange: 'high', affiliate: 'https://example.com/charlotte-foundation' },
      { brand: 'Revolution', shade: 'Fair F1', price: 8, priceRange: 'low', affiliate: 'https://example.com/revolution-foundation' },
      { brand: 'Bourjois', shade: 'Porcelain', price: 14, priceRange: 'medium', affiliate: 'https://example.com/bourjois-foundation' },
      { brand: 'No7', shade: 'Fair Ivory', price: 16, priceRange: 'medium', affiliate: 'https://example.com/no7-foundation' },
      { brand: 'Sleek', shade: 'Fair Rose', price: 10, priceRange: 'low', affiliate: 'https://example.com/sleek-foundation' }
    ],
    concealer: [
      { brand: 'Charlotte Tilbury', shade: 'Fair', price: 32, priceRange: 'high', affiliate: 'https://example.com/charlotte-concealer' },
      { brand: 'Revolution', shade: 'Light', price: 6, priceRange: 'low', affiliate: 'https://example.com/revolution-concealer' }
    ],
    highlighter: [
      { brand: 'Charlotte Tilbury', shade: 'Champagne', price: 38, priceRange: 'high', affiliate: 'https://example.com/charlotte-highlighter' }
    ],
    lipstick: [
      { brand: 'Charlotte Tilbury', shade: 'Pillow Talk', price: 34, priceRange: 'high', affiliate: 'https://example.com/charlotte-lipstick' },
      { brand: 'Revolution', shade: 'Rouge', price: 5, priceRange: 'low', affiliate: 'https://example.com/revolution-lipstick' }
    ],
    blush: [
      { brand: 'Charlotte Tilbury', shade: 'Love Glow', price: 38, priceRange: 'high', affiliate: 'https://example.com/charlotte-blush' }
    ]
  },
  uae: {
    foundation: [
      { brand: 'Huda Beauty', shade: 'Milkshake', price: 40, priceRange: 'high', affiliate: 'https://example.com/huda-foundation' },
      { brand: 'Mikyajy', shade: 'Fair Porcelain', price: 25, priceRange: 'medium', affiliate: 'https://example.com/mikyajy-foundation' },
      { brand: 'Faces', shade: 'Ivory Cool', price: 18, priceRange: 'medium', affiliate: 'https://example.com/faces-foundation' },
      { brand: 'Yasmin Beauty', shade: 'Fair Rose', price: 22, priceRange: 'medium', affiliate: 'https://example.com/yasmin-foundation' }
    ],
    concealer: [
      { brand: 'Huda Beauty', shade: 'Fair', price: 30, priceRange: 'high', affiliate: 'https://example.com/huda-concealer' }
    ],
    highlighter: [
      { brand: 'Huda Beauty', shade: 'Winter Solstice', price: 38, priceRange: 'high', affiliate: 'https://example.com/huda-highlighter' }
    ],
    lipstick: [
      { brand: 'Huda Beauty', shade: 'Trophy Wife', price: 20, priceRange: 'medium', affiliate: 'https://example.com/huda-lipstick' }
    ],
    blush: [
      { brand: 'Huda Beauty', shade: 'Desert Rose', price: 32, priceRange: 'high', affiliate: 'https://example.com/huda-blush' }
    ]
  },
  france: {
    foundation: [
      { brand: 'L\'Oréal Paris', shade: 'Ivory Rose', price: 15, priceRange: 'medium', affiliate: 'https://example.com/loreal-france-foundation' },
      { brand: 'Lancôme', shade: 'Ivoire', price: 48, priceRange: 'high', affiliate: 'https://example.com/lancome-foundation' },
      { brand: 'Yves Saint Laurent', shade: 'B10', price: 52, priceRange: 'high', affiliate: 'https://example.com/ysl-foundation' },
      { brand: 'Bourjois', shade: 'Vanilla', price: 14, priceRange: 'medium', affiliate: 'https://example.com/bourjois-france-foundation' }
    ],
    concealer: [
      { brand: 'Lancôme', shade: 'Ivoire', price: 32, priceRange: 'high', affiliate: 'https://example.com/lancome-concealer' }
    ],
    highlighter: [
      { brand: 'YSL', shade: 'Or Gold', price: 45, priceRange: 'high', affiliate: 'https://example.com/ysl-highlighter' }
    ],
    lipstick: [
      { brand: 'YSL', shade: 'Rouge Pur', price: 38, priceRange: 'high', affiliate: 'https://example.com/ysl-lipstick' },
      { brand: 'L\'Oréal Paris', shade: 'Rouge Signature', price: 12, priceRange: 'low', affiliate: 'https://example.com/loreal-lipstick' }
    ],
    blush: [
      { brand: 'Lancôme', shade: 'Rose Fresque', price: 40, priceRange: 'high', affiliate: 'https://example.com/lancome-blush' }
    ]
  },
  indonesia: {
    foundation: [
      { brand: 'Wardah', shade: 'Light Beige', price: 12, priceRange: 'low', affiliate: 'https://example.com/wardah-foundation' },
      { brand: 'Emina', shade: 'Fair Natural', price: 10, priceRange: 'low', affiliate: 'https://example.com/emina-foundation' },
      { brand: 'Sariayu', shade: 'Fair Ivory', price: 15, priceRange: 'medium', affiliate: 'https://example.com/sariayu-foundation' },
      { brand: 'Cathy Doll', shade: 'Fair Pink', price: 8, priceRange: 'low', affiliate: 'https://example.com/cathy-foundation' }
    ],
    concealer: [
      { brand: 'Wardah', shade: 'Light', price: 8, priceRange: 'low', affiliate: 'https://example.com/wardah-concealer' }
    ],
    highlighter: [
      { brand: 'Emina', shade: 'Glow Up', price: 12, priceRange: 'low', affiliate: 'https://example.com/emina-highlighter' }
    ],
    lipstick: [
      { brand: 'Wardah', shade: 'Pink Berry', price: 10, priceRange: 'low', affiliate: 'https://example.com/wardah-lipstick' },
      { brand: 'Sariayu', shade: 'Classic Red', price: 12, priceRange: 'low', affiliate: 'https://example.com/sariayu-lipstick' }
    ],
    blush: [
      { brand: 'Emina', shade: 'Peachy', price: 8, priceRange: 'low', affiliate: 'https://example.com/emina-blush' }
    ]
  },
  global: {
    foundation: [
      { brand: 'Maybelline', shade: 'Fair Ivory', price: 12, priceRange: 'low', affiliate: 'https://example.com/maybelline-global-foundation' },
      { brand: 'L\'Oréal', shade: 'Ivory', price: 15, priceRange: 'medium', affiliate: 'https://example.com/loreal-global-foundation' },
      { brand: 'Revlon', shade: 'Buff', price: 10, priceRange: 'low', affiliate: 'https://example.com/revlon-foundation' },
      { brand: 'CoverGirl', shade: 'Fair', price: 8, priceRange: 'low', affiliate: 'https://example.com/covergirl-foundation' }
    ],
    concealer: [
      { brand: 'Maybelline', shade: 'Fair', price: 8, priceRange: 'low', affiliate: 'https://example.com/maybelline-concealer' }
    ],
    highlighter: [
      { brand: 'L\'Oréal', shade: 'Golden Hour', price: 14, priceRange: 'low', affiliate: 'https://example.com/loreal-highlighter' }
    ],
    lipstick: [
      { brand: 'Maybelline', shade: 'Red Revival', price: 9, priceRange: 'low', affiliate: 'https://example.com/maybelline-lipstick' },
      { brand: 'Revlon', shade: 'Pink In The Afternoon', price: 10, priceRange: 'low', affiliate: 'https://example.com/revlon-lipstick' }
    ],
    blush: [
      { brand: 'Maybelline', shade: 'Pink Amber', price: 7, priceRange: 'low', affiliate: 'https://example.com/maybelline-blush' }
    ]
  }
};

// Generate comprehensive product database
const generateProductDatabase = () => {
  const skinTones = ['fair', 'light', 'medium', 'deep'];
  const undertones = ['cool', 'warm', 'neutral'];
  const regions = Object.keys(regionalBrands);
  
  const database: any = {};
  
  skinTones.forEach(skinTone => {
    database[skinTone] = {};
    undertones.forEach(undertone => {
      database[skinTone][undertone] = {};
      regions.forEach(region => {
        if ((regionalBrands as any)[region]) {
          // If region has categorized products by type
          if (typeof (regionalBrands as any)[region] === 'object' && (regionalBrands as any)[region].foundation) {
            database[skinTone][undertone][region] = (regionalBrands as any)[region];
          } else {
            // Legacy format - assume all are foundation
            database[skinTone][undertone][region] = {
              foundation: (regionalBrands as any)[region] || []
            };
          }
        }
      });
    });
  });
  
  return database;
};

const productDatabase = generateProductDatabase();

interface MakeupShadeFinderProps {
  language?: Language;
}

const MakeupShadeFinder: React.FC<MakeupShadeFinderProps> = ({ language = 'en' }) => {
  const [skinTone, setSkinTone] = useState('');
  const [undertone, setUndertone] = useState('');
  const [region, setRegion] = useState('');
  const [productType, setProductType] = useState('foundation');
  const [budget, setBudget] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [results, setResults] = useState<any>(null);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(language);

  const t = useTranslation(currentLanguage);

  const skinToneOptions = [
    { value: 'fair', label: t.skinTones.fair.label, icon: '🌸', gradient: 'from-rose-100 to-pink-100' },
    { value: 'light', label: t.skinTones.light.label, icon: '🌿', gradient: 'from-green-100 to-emerald-100' },
    { value: 'medium', label: t.skinTones.medium.label, icon: '🌻', gradient: 'from-yellow-100 to-orange-100' },
    { value: 'deep', label: t.skinTones.deep.label, icon: '🍂', gradient: 'from-amber-100 to-red-100' }
  ];

  const undertoneOptions = [
    { value: 'cool', label: t.undertones.cool.label, icon: '❄️', gradient: 'from-blue-100 to-purple-100' },
    { value: 'warm', label: t.undertones.warm.label, icon: '☀️', gradient: 'from-orange-100 to-red-100' },
    { value: 'neutral', label: t.undertones.neutral.label, icon: '🌈', gradient: 'from-gray-100 to-slate-100' }
  ];

  const regionOptions = [
    { value: 'pakistan', label: t.regions.pakistan, icon: '🇵🇰', flag: '🏛️' },
    { value: 'india', label: t.regions.india, icon: '🇮🇳', flag: '🕌' },
    { value: 'uk', label: t.regions.uk, icon: '🇬🇧', flag: '🏰' },
    { value: 'usa', label: t.regions.usa, icon: '🇺🇸', flag: '🗽' },
    { value: 'qatar', label: t.regions.qatar, icon: '🇶🇦', flag: '🏜️' },
    { value: 'ksa', label: t.regions.ksa, icon: '🇸🇦', flag: '🕌' },
    { value: 'uae', label: t.regions.uae, icon: '🇦🇪', flag: '🏙️' },
    { value: 'france', label: t.regions.france, icon: '🇫🇷', flag: '🗼' },
    { value: 'germany', label: t.regions.germany, icon: '🇩🇪', flag: '🏰' },
    { value: 'canada', label: t.regions.canada, icon: '🇨🇦', flag: '🍁' },
    { value: 'indonesia', label: t.regions.indonesia, icon: '🇮🇩', flag: '🌺' },
    { value: 'spain', label: t.regions.spain, icon: '🇪🇸', flag: '🏛️' },
    { value: 'southeast-asia', label: t.regions['southeast-asia'], icon: '🌏', flag: '🌺' },
    { value: 'africa', label: t.regions.africa, icon: '🌍', flag: '🦁' },
    { value: 'global', label: t.regions.global, icon: '🌎', flag: '🌐' }
  ];

  const productTypeOptions = [
    { value: 'foundation', label: t.productTypes.foundation, icon: '💄', title: 'Select your foundation', description: 'Find the perfect base for your skin' },
    { value: 'concealer', label: t.productTypes.concealer, icon: '✨', title: 'Select your concealer', description: 'Hide imperfections with confidence' },
    { value: 'lipstick', label: t.productTypes.lipstick, icon: '💋', title: 'Select your lipstick', description: 'Express yourself with bold colors' }
  ];


  const getAvailableBrands = (): string[] => {
    if (!region) return [];
    const regionData = (regionalBrands as any)[region];
    if (!regionData) return [];
    
    if (regionData[productType]) {
      return Array.from(new Set(regionData[productType].map((product: any) => product.brand as string)));
    }
    
    // Fallback for regions without categorized products
    if (Array.isArray(regionData)) {
      return [...new Set(regionData.map((product: any) => product.brand as string))];
    }
    
    return [];
  };

  const handleProductSelection = (selectedProductType: string) => {
    if (!skinTone || !undertone || !region) {
      alert(t.selectRegionFirst);
      return;
    }

    setProductType(selectedProductType);

    let products = [];
    
    // Get products from regional brands database
    const regionData = (regionalBrands as any)[region];
    
    if (regionData && regionData[selectedProductType]) {
      products = [...regionData[selectedProductType]];
    } else {
      // If no products for specific type, show foundation as fallback
      if (regionData && regionData.foundation) {
        products = [...regionData.foundation];
      }
    }
    
    // Filter by brand if selected
    if (selectedBrand && selectedBrand !== 'any' && products.length > 0) {
      products = products.filter(product => product.brand === selectedBrand);
    }

    // Show diverse price range products (mix of low, medium, high)
    const diverseProducts = [];
    const lowPrice = products.filter(p => p.priceRange === 'low').slice(0, 3);
    const mediumPrice = products.filter(p => p.priceRange === 'medium').slice(0, 3);
    const highPrice = products.filter(p => p.priceRange === 'high').slice(0, 3);
    
    diverseProducts.push(...lowPrice, ...mediumPrice, ...highPrice);
    
    // If we don't have enough diverse products, fill with remaining
    if (diverseProducts.length < 9) {
      const remaining = products.filter(p => !diverseProducts.includes(p)).slice(0, 9 - diverseProducts.length);
      diverseProducts.push(...remaining);
    }

    setResults({
      skinTone,
      undertone,
      region,
      productType: selectedProductType,
      selectedBrand,
      products: diverseProducts.slice(0, 9)
    });
  };

  const PriceRangeBadge = ({ range }: { range: 'low' | 'medium' | 'high' }) => {
    const styles = {
      low: 'bg-green-100 text-green-700 border-green-200',
      medium: 'bg-purple-100 text-purple-700 border-purple-200',
      high: 'bg-amber-100 text-amber-700 border-amber-200'
    };
    
    return (
      <Badge className={`${styles[range]} border`}>
        {range === 'low' ? '$' : range === 'medium' ? '$$' : '$$$'}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 p-4 relative overflow-hidden">
      {/* Enhanced floating makeup elements with bigger animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl text-purple-500 animate-pulse transform hover:scale-125 transition-transform duration-300">💄</div>
        <div className="absolute top-1/4 right-20 text-7xl text-pink-500 animate-bounce transform hover:rotate-12 transition-transform duration-300">✨</div>
        <div className="absolute bottom-20 left-1/4 text-6xl text-purple-600 animate-pulse transform hover:scale-125 transition-transform duration-300">💋</div>
        <div className="absolute bottom-1/4 right-10 text-7xl text-pink-400 animate-bounce transform hover:rotate-12 transition-transform duration-300">🌸</div>
        <div className="absolute top-1/2 left-1/2 text-5xl text-purple-400 animate-pulse transform hover:scale-125 transition-transform duration-300">👑</div>
        <div className="absolute top-20 right-1/3 text-6xl text-pink-600 animate-bounce transform hover:rotate-12 transition-transform duration-300">💍</div>
        <div className="absolute top-40 left-20 text-5xl text-purple-300 animate-pulse transform hover:scale-125 transition-transform duration-300">💎</div>
        <div className="absolute bottom-40 right-1/4 text-6xl text-pink-300 animate-bounce transform hover:rotate-12 transition-transform duration-300">🦋</div>
        <div className="absolute top-3/4 left-10 text-5xl text-purple-500 animate-pulse transform hover:scale-125 transition-transform duration-300">🌺</div>
        <div className="absolute top-60 right-10 text-6xl text-pink-500 animate-bounce transform hover:rotate-12 transition-transform duration-300">🎀</div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
          <div className="mb-6">
            <Wand2 className="mx-auto mb-4 w-12 h-12 text-beauty-primary animate-pulse" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent mb-4">
              {t.appTitle}
            </h1>
            <p className="text-lg text-gray-700 font-medium">{t.appDescription}</p>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <Card className="backdrop-blur-lg bg-white/95 border-0 shadow-beauty-card rounded-3xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 p-8">
            <div className="text-center">
              <Heart className="mx-auto mb-3 w-8 h-8 text-white" />
              <CardTitle className="text-3xl text-white font-bold">Find Your Perfect Beauty Match</CardTitle>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            {/* User Profile Setup */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Region Selection */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-beauty-primary" />
                  <Label className="text-lg font-semibold text-gray-800">
                    {t.regionLabel}
                  </Label>
                </div>
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger className="h-12 text-lg border-beauty-primary/30 focus:border-beauty-primary rounded-xl">
                    <SelectValue placeholder="Choose your region..." />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-beauty-primary/20">
                    {regionOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value} className="text-lg">
                        <div className="flex items-center gap-2">
                          <span>{option.flag}</span>
                          <span>{option.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Skin Tone Dropdown */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-beauty-primary" />
                  <Label className="text-lg font-semibold text-gray-800">
                    {t.skinToneLabel}
                  </Label>
                </div>
                <Select value={skinTone} onValueChange={setSkinTone}>
                  <SelectTrigger className="h-12 text-lg border-beauty-primary/30 focus:border-beauty-primary rounded-xl">
                    <SelectValue placeholder="Select skin tone..." />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-beauty-primary/20">
                    {skinToneOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value} className="text-lg">
                        <div className="flex items-center gap-2">
                          <span>{option.icon}</span>
                          <span>{option.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Undertone Dropdown */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-beauty-primary" />
                  <Label className="text-lg font-semibold text-gray-800">
                    {t.undertoneLabel}
                  </Label>
                </div>
                <Select value={undertone} onValueChange={setUndertone}>
                  <SelectTrigger className="h-12 text-lg border-beauty-primary/30 focus:border-beauty-primary rounded-xl">
                    <SelectValue placeholder="Select undertone..." />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-beauty-primary/20">
                    {undertoneOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value} className="text-lg">
                        <div className="flex items-center gap-2">
                          <span>{option.icon}</span>
                          <span>{option.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator className="my-8 bg-gradient-to-r from-beauty-primary/20 to-beauty-secondary/20" />

            {/* Main Product Selection Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productTypeOptions.map((option) => (
                <Card 
                  key={option.value}
                  className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-purple-200 hover:border-purple-400 rounded-3xl overflow-hidden bg-gradient-to-br from-white to-purple-50"
                  onClick={() => handleProductSelection(option.value)}
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-4 animate-pulse">{option.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-6">{option.description}</p>
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl font-semibold"
                      disabled={!skinTone || !undertone || !region}
                    >
                      <Package className="mr-2 w-4 h-4" />
                      Shop Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Status */}
            {(!skinTone || !undertone || !region) && (
              <div className="text-center mt-6 p-4 bg-purple-50 rounded-xl border border-purple-200">
                <p className="text-purple-700 font-medium">
                  Please select your region, skin tone, and undertone first to get personalized recommendations
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Section */}
        {results && (
          <Card className="mt-8 backdrop-blur-lg bg-white/95 border-0 shadow-beauty-card rounded-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 p-8">
              <div className="text-center">
                <Sparkles className="mx-auto mb-3 w-8 h-8 text-white" />
                <CardTitle className="text-3xl text-white font-bold">
                  {t.resultsTitle}
                </CardTitle>
                <p className="text-white/90 text-lg mt-2">
                  {t.resultsDescription.replace('{skinTone}', results.skinTone).replace('{undertone}', results.undertone)}
                </p>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              {results.products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.products.map((product, index) => (
                    <Card key={index} className="border-2 border-purple-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-bold text-lg text-gray-800">{product.brand}</h3>
                              <p className="text-purple-600 font-medium">{product.shade}</p>
                            </div>
                            <PriceRangeBadge range={product.priceRange} />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-pink-600">
                              ${product.price}
                            </div>
                            <div className="flex items-center gap-1 text-yellow-500">
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4" />
                            </div>
                          </div>
                          
                          <Button 
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                            onClick={() => window.open(product.affiliate, '_blank')}
                          >
                            <ShoppingBag className="mr-2 w-4 h-4" />
                            {t.buyNow}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Eye className="mx-auto mb-4 w-12 h-12 text-gray-400" />
                  <p className="text-lg text-gray-600">{t.noProductsFound}</p>
                </div>
              )}
              
              <div className="text-center mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setResults(null)}
                  className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white rounded-xl"
                >
                  {t.findNewShades}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MakeupShadeFinder;