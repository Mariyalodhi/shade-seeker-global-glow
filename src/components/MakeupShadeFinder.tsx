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
      { brand: 'Masarrat Misbah', shade: 'Fair Porcelain', price: 35, priceRange: 'high', affiliate: '#' },
      { brand: 'Luscious Cosmetics', shade: 'Natural Fair', price: 12, priceRange: 'low', affiliate: '#' },
      { brand: 'Miss Rose', shade: 'Ivory Glow', price: 8, priceRange: 'low', affiliate: '#' },
      { brand: 'Rivaj UK', shade: 'Cool Fair', price: 10, priceRange: 'low', affiliate: '#' },
      { brand: 'Beautify by Amna', shade: 'Fair Blush', price: 22, priceRange: 'medium', affiliate: '#' },
      { brand: 'Bling by Nadia Hussain', shade: 'Radiant Fair', price: 18, priceRange: 'medium', affiliate: '#' },
      { brand: 'J.', shade: 'Porcelain Perfect', price: 25, priceRange: 'medium', affiliate: '#' },
      { brand: 'Zay Beauty', shade: 'Cool Ivory', price: 28, priceRange: 'medium', affiliate: '#' },
      { brand: 'Medora', shade: 'Porcelain Pink', price: 14, priceRange: 'low', affiliate: '#' },
      { brand: 'Alezem Beauty', shade: 'Fair Silk', price: 20, priceRange: 'medium', affiliate: '#' },
      { brand: 'Kryolan', shade: 'Ultra Fair', price: 45, priceRange: 'high', affiliate: '#' },
      { brand: 'Maybelline', shade: 'Ivory Classic', price: 12, priceRange: 'low', affiliate: '#' },
      { brand: 'Entice Cosmetics', shade: 'Fair Natural', price: 16, priceRange: 'medium', affiliate: '#' },
      { brand: 'Essence', shade: 'Fair Ivory', price: 5, priceRange: 'low', affiliate: '#' },
      { brand: 'L\'Oréal', shade: 'Ivory Rose', price: 15, priceRange: 'medium', affiliate: '#' },
      { brand: 'Sapphire', shade: 'Fair Elegance', price: 30, priceRange: 'high', affiliate: '#' }
    ],
    concealer: [
      { brand: 'Masarrat Misbah', shade: 'Fair Coverage', price: 25, priceRange: 'medium', affiliate: '#' },
      { brand: 'Luscious Cosmetics', shade: 'Light Concealer', price: 8, priceRange: 'low', affiliate: '#' },
      { brand: 'Beautify by Amna', shade: 'Perfect Cover', price: 15, priceRange: 'medium', affiliate: '#' }
    ],
    highlighter: [
      { brand: 'Zay Beauty', shade: 'Golden Glow', price: 20, priceRange: 'medium', affiliate: '#' },
      { brand: 'J.', shade: 'Pearl Highlight', price: 18, priceRange: 'medium', affiliate: '#' },
      { brand: 'Masarrat Misbah', shade: 'Champagne Glow', price: 30, priceRange: 'high', affiliate: '#' }
    ],
    lipstick: [
      { brand: 'Luscious Cosmetics', shade: 'Rose Pink', price: 10, priceRange: 'low', affiliate: '#' },
      { brand: 'Beautify by Amna', shade: 'Coral Bliss', price: 18, priceRange: 'medium', affiliate: '#' },
      { brand: 'Bling by Nadia Hussain', shade: 'Berry Bold', price: 15, priceRange: 'medium', affiliate: '#' }
    ],
    blush: [
      { brand: 'Medora', shade: 'Peachy Pink', price: 12, priceRange: 'low', affiliate: '#' },
      { brand: 'Zay Beauty', shade: 'Rose Glow', price: 16, priceRange: 'medium', affiliate: '#' }
    ]
  },
  india: [
    { brand: 'Lakmé', shade: 'Shell', price: 15, priceRange: 'medium', affiliate: '#' },
    { brand: 'Sugar Cosmetics', shade: 'Fair Ivory', price: 18, priceRange: 'medium', affiliate: '#' },
    { brand: 'Mamaearth', shade: 'Fair Glow', price: 12, priceRange: 'low', affiliate: '#' },
    { brand: 'Kay Beauty', shade: 'Porcelain', price: 28, priceRange: 'high', affiliate: '#' },
    { brand: 'Blue Heaven', shade: 'Fair Pink', price: 8, priceRange: 'low', affiliate: '#' },
    { brand: 'Faces Canada', shade: 'Ivory Fair', price: 16, priceRange: 'medium', affiliate: '#' },
    { brand: 'Plum', shade: 'Fair Rose', price: 22, priceRange: 'medium', affiliate: '#' },
    { brand: 'Just Herbs', shade: 'Fair Ayurvedic', price: 30, priceRange: 'high', affiliate: '#' },
    { brand: 'MyGlamm', shade: 'Fair Perfection', price: 24, priceRange: 'medium', affiliate: '#' },
    { brand: 'Swiss Beauty', shade: 'Fair Matte', price: 10, priceRange: 'low', affiliate: '#' },
    { brand: 'Insight Cosmetics', shade: 'Fair Silk', price: 14, priceRange: 'low', affiliate: '#' },
    { brand: 'Pahadi Local', shade: 'Fair Himalayan', price: 20, priceRange: 'medium', affiliate: '#' }
  ],
  usa: [
    { brand: 'Fenty Beauty', shade: '110', price: 38, priceRange: 'high', affiliate: '#' },
    { brand: 'Rare Beauty', shade: 'Fair 10N', price: 25, priceRange: 'medium', affiliate: '#' },
    { brand: 'Tarte', shade: 'Fair Light Neutral', price: 36, priceRange: 'high', affiliate: '#' },
    { brand: 'NARS', shade: 'Siberia', price: 38, priceRange: 'high', affiliate: '#' },
    { brand: 'e.l.f.', shade: 'Fair 140 C', price: 6, priceRange: 'low', affiliate: '#' },
    { brand: 'Morphe', shade: 'Fair 1', price: 18, priceRange: 'medium', affiliate: '#' },
    { brand: 'MAC', shade: 'NW10', price: 33, priceRange: 'high', affiliate: '#' }
  ],
  uk: [
    { brand: 'Charlotte Tilbury', shade: 'Fair 1', price: 44, priceRange: 'high', affiliate: '#' },
    { brand: 'Revolution', shade: 'Fair F1', price: 8, priceRange: 'low', affiliate: '#' },
    { brand: 'Bourjois', shade: 'Porcelain', price: 14, priceRange: 'medium', affiliate: '#' },
    { brand: 'No7', shade: 'Fair Ivory', price: 16, priceRange: 'medium', affiliate: '#' },
    { brand: 'Sleek', shade: 'Fair Rose', price: 10, priceRange: 'low', affiliate: '#' }
  ],
  uae: [
    { brand: 'Huda Beauty', shade: 'Milkshake', price: 40, priceRange: 'high', affiliate: '#' },
    { brand: 'Mikyajy', shade: 'Fair Porcelain', price: 25, priceRange: 'medium', affiliate: '#' },
    { brand: 'Faces', shade: 'Ivory Cool', price: 18, priceRange: 'medium', affiliate: '#' },
    { brand: 'Yasmin Beauty', shade: 'Fair Rose', price: 22, priceRange: 'medium', affiliate: '#' }
  ],
  france: [
    { brand: 'L\'Oréal Paris', shade: 'Ivory Rose', price: 15, priceRange: 'medium', affiliate: '#' },
    { brand: 'Lancôme', shade: 'Ivoire', price: 48, priceRange: 'high', affiliate: '#' },
    { brand: 'Yves Saint Laurent', shade: 'B10', price: 52, priceRange: 'high', affiliate: '#' },
    { brand: 'Bourjois', shade: 'Vanilla', price: 14, priceRange: 'medium', affiliate: '#' }
  ],
  indonesia: [
    { brand: 'Wardah', shade: 'Light Beige', price: 12, priceRange: 'low', affiliate: '#' },
    { brand: 'Emina', shade: 'Fair Natural', price: 10, priceRange: 'low', affiliate: '#' },
    { brand: 'Sariayu', shade: 'Fair Ivory', price: 15, priceRange: 'medium', affiliate: '#' },
    { brand: 'Cathy Doll', shade: 'Fair Pink', price: 8, priceRange: 'low', affiliate: '#' }
  ]
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
    { value: 'foundation', label: t.productTypes.foundation, icon: '💄' },
    { value: 'concealer', label: t.productTypes.concealer, icon: '✨' },
    { value: 'highlighter', label: t.productTypes.highlighter, icon: '✨' },
    { value: 'lipstick', label: t.productTypes.lipstick, icon: '💋' },
    { value: 'blush', label: t.productTypes.blush, icon: '🌸' }
  ];

  const budgetOptions = [
    { value: 'low', label: t.budgetRanges.low, icon: '💝', gradient: 'from-green-100 to-emerald-100' },
    { value: 'medium', label: t.budgetRanges.medium, icon: '💄', gradient: 'from-purple-100 to-pink-100' },
    { value: 'high', label: t.budgetRanges.high, icon: '👑', gradient: 'from-yellow-100 to-amber-100' }
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

  const handleAutoRecommend = () => {
    if (!skinTone || !undertone || !region) {
      alert(t.selectRegionFirst);
      return;
    }

    let products = [];
    const regionData = productDatabase[skinTone]?.[undertone]?.[region];
    
    if (regionData && regionData[productType]) {
      products = regionData[productType];
    }
    
    // Filter by budget if selected
    if (budget && products.length > 0) {
      products = products.filter(product => product.priceRange === budget);
    }
    
    // Filter by brand if selected
    if (selectedBrand && selectedBrand !== 'any' && products.length > 0) {
      products = products.filter(product => product.brand === selectedBrand);
    }

    setResults({
      skinTone,
      undertone,
      region,
      productType,
      budget,
      selectedBrand,
      products: products.slice(0, 12)
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
    <div className="min-h-screen bg-gradient-to-br from-beauty-gradient-soft via-beauty-gradient-glow to-beauty-gradient-coral p-4 relative overflow-hidden">
      {/* Enhanced floating makeup elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-6 h-6 text-beauty-pink animate-pulse">💄</div>
        <div className="absolute top-1/4 right-20 w-8 h-8 text-beauty-coral animate-bounce">✨</div>
        <div className="absolute bottom-20 left-1/4 w-6 h-6 text-beauty-gold animate-pulse">💋</div>
        <div className="absolute bottom-1/4 right-10 w-8 h-8 text-beauty-rose-gold animate-bounce">🌸</div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 text-beauty-lavender animate-pulse">👑</div>
        <div className="absolute top-20 right-1/3 w-6 h-6 text-beauty-warm animate-bounce">💍</div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
          <div className="mb-6">
            <Wand2 className="mx-auto mb-4 w-12 h-12 text-beauty-primary animate-pulse" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-beauty-primary via-beauty-secondary to-beauty-warm bg-clip-text text-transparent mb-4">
              {t.appTitle}
            </h1>
            <p className="text-lg text-gray-700 font-medium">{t.appDescription}</p>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-beauty-primary to-beauty-secondary mx-auto rounded-full"></div>
        </div>

        <Card className="backdrop-blur-lg bg-white/95 border-0 shadow-beauty-card rounded-3xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-beauty-gradient-soft to-beauty-gradient-glow p-8">
            <div className="text-center">
              <Heart className="mx-auto mb-3 w-8 h-8 text-white" />
              <CardTitle className="text-3xl text-white font-bold">Find Your Perfect Beauty Match</CardTitle>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Main Selections */}
              <div className="space-y-8">
                {/* Region Selection */}
                <div className="space-y-4">
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

                {/* Skin Tone Selection */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-beauty-primary" />
                    <Label className="text-lg font-semibold text-gray-800">
                      {t.skinToneLabel}
                    </Label>
                  </div>
                  <RadioGroup value={skinTone} onValueChange={setSkinTone}>
                    <div className="grid grid-cols-2 gap-3">
                      {skinToneOptions.map((option) => (
                        <div key={option.value} className="relative">
                          <div className={`p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                            ${skinTone === option.value 
                              ? 'border-beauty-primary bg-gradient-to-r ' + option.gradient + ' shadow-beauty-soft scale-105' 
                              : 'border-gray-200 hover:border-beauty-primary/50 bg-white hover:bg-gradient-to-r hover:' + option.gradient
                            }`}>
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                              <Label htmlFor={option.value} className="flex items-center gap-3 cursor-pointer w-full">
                                <span className="text-2xl">{option.icon}</span>
                                <span className="font-medium text-gray-800">{option.label}</span>
                              </Label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Undertone Selection */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-beauty-primary" />
                    <Label className="text-lg font-semibold text-gray-800">
                      {t.undertoneLabel}
                    </Label>
                  </div>
                  <RadioGroup value={undertone} onValueChange={setUndertone}>
                    <div className="grid grid-cols-3 gap-3">
                      {undertoneOptions.map((option) => (
                        <div key={option.value} className="relative">
                          <div className={`p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                            ${undertone === option.value 
                              ? 'border-beauty-primary bg-gradient-to-r ' + option.gradient + ' shadow-beauty-soft scale-105' 
                              : 'border-gray-200 hover:border-beauty-primary/50 bg-white hover:bg-gradient-to-r hover:' + option.gradient
                            }`}>
                            <div className="flex flex-col items-center space-y-2">
                              <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                              <Label htmlFor={option.value} className="flex flex-col items-center gap-2 cursor-pointer">
                                <span className="text-2xl">{option.icon}</span>
                                <span className="font-medium text-gray-800 text-center">{option.label}</span>
                              </Label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Right Column - Additional Options */}
              <div className="space-y-8">
                {/* Product Type Selection */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-beauty-primary" />
                    <Label className="text-lg font-semibold text-gray-800">
                      {t.productTypeLabel}
                    </Label>
                  </div>
                  <RadioGroup value={productType} onValueChange={setProductType}>
                    <div className="grid grid-cols-2 gap-3">
                      {productTypeOptions.map((option) => (
                        <div key={option.value} className="relative">
                          <div className={`p-3 rounded-xl border-2 transition-all duration-300 cursor-pointer
                            ${productType === option.value 
                              ? 'border-beauty-primary bg-beauty-gradient-soft text-white shadow-beauty-soft' 
                              : 'border-gray-200 hover:border-beauty-primary/50 bg-white'
                            }`}>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                              <Label htmlFor={option.value} className="flex items-center gap-2 cursor-pointer w-full">
                                <span className="text-lg">{option.icon}</span>
                                <span className="font-medium">{option.label}</span>
                              </Label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Budget Selection */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-beauty-primary" />
                    <Label className="text-lg font-semibold text-gray-800">
                      {t.budgetLabel}
                    </Label>
                  </div>
                  <RadioGroup value={budget} onValueChange={setBudget}>
                    <div className="space-y-3">
                      {budgetOptions.map((option) => (
                        <div key={option.value} className="relative">
                          <div className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer
                            ${budget === option.value 
                              ? 'border-beauty-primary bg-gradient-to-r ' + option.gradient + ' shadow-beauty-soft' 
                              : 'border-gray-200 hover:border-beauty-primary/50 bg-white hover:bg-gradient-to-r hover:' + option.gradient
                            }`}>
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                              <Label htmlFor={option.value} className="flex items-center gap-3 cursor-pointer w-full">
                                <span className="text-xl">{option.icon}</span>
                                <span className="font-medium text-gray-800">{option.label}</span>
                              </Label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Brand Selection */}
                {region && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Crown className="w-5 h-5 text-beauty-primary" />
                      <Label className="text-lg font-semibold text-gray-800">
                        {t.brandSelectLabel}
                      </Label>
                    </div>
                    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                      <SelectTrigger className="h-12 text-lg border-beauty-primary/30 focus:border-beauty-primary rounded-xl">
                        <SelectValue placeholder="Any brand..." />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-beauty-primary/20">
                        <SelectItem value="any" className="text-lg">Any brand</SelectItem>
                        {getAvailableBrands().map((brand: string) => (
                          <SelectItem key={brand} value={brand} className="text-lg">
                            {brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </div>

            <Separator className="my-8 bg-gradient-to-r from-beauty-primary/20 to-beauty-secondary/20" />

            {/* Action Button */}
            <div className="text-center">
              <Button 
                onClick={handleAutoRecommend}
                className="h-14 px-12 text-lg font-semibold bg-gradient-to-r from-beauty-primary to-beauty-secondary hover:from-beauty-secondary hover:to-beauty-primary text-white rounded-2xl shadow-beauty-soft transform hover:scale-105 transition-all duration-300"
                disabled={!skinTone || !undertone || !region}
              >
                <Zap className="mr-2 w-5 h-5" />
                {t.autoRecommendButton}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {results && (
          <Card className="mt-8 backdrop-blur-lg bg-white/95 border-0 shadow-beauty-card rounded-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-beauty-secondary to-beauty-warm p-8">
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
                    <Card key={index} className="border-2 border-beauty-primary/20 rounded-2xl overflow-hidden hover:shadow-beauty-soft transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-bold text-lg text-gray-800">{product.brand}</h3>
                              <p className="text-beauty-primary font-medium">{product.shade}</p>
                            </div>
                            <PriceRangeBadge range={product.priceRange} />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-beauty-secondary">
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
                            className="w-full bg-gradient-to-r from-beauty-primary to-beauty-secondary hover:from-beauty-secondary hover:to-beauty-primary text-white rounded-xl font-semibold"
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
                  className="border-beauty-primary text-beauty-primary hover:bg-beauty-primary hover:text-white rounded-xl"
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