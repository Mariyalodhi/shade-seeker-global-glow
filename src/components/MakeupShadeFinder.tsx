import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Heart, User, Palette, MapPin, DollarSign, ShoppingBag, Sparkles, Star, Crown } from 'lucide-react';
import { useTranslation, Language } from '@/utils/translations';
import LanguageSelector from './LanguageSelector';

// Comprehensive product database with expanded regional brands
const productDatabase = {
  fair: {
    cool: {
      'South Asia': [
        // Pakistani Brands
        { brand: 'Luscious Cosmetics', shade: 'Fair Porcelain', price: 12, priceRange: 'low', affiliate: '#' },
        { brand: 'WB by Hemani', shade: 'Ivory Glow', price: 15, priceRange: 'low', affiliate: '#' },
        { brand: 'Rivaj UK', shade: 'Cool Fair', price: 10, priceRange: 'low', affiliate: '#' },
        { brand: 'Christine Cosmetics', shade: 'Fair Rose', price: 18, priceRange: 'mid', affiliate: '#' },
        { brand: 'Medora', shade: 'Porcelain Pink', price: 14, priceRange: 'low', affiliate: '#' },
        { brand: 'Sweet Touch England', shade: 'Fair Cool', price: 16, priceRange: 'mid', affiliate: '#' },
        { brand: 'Beautify by Amna', shade: 'Fair Blush', price: 22, priceRange: 'mid', affiliate: '#' },
        { brand: 'Bonanza Satrangi Beauty', shade: 'Ivory Rose', price: 20, priceRange: 'mid', affiliate: '#' },
        { brand: 'Zay Beauty', shade: 'Cool Ivory', price: 25, priceRange: 'high', affiliate: '#' },
        { brand: 'Masarrat Misbah', shade: 'Fair Perfection', price: 35, priceRange: 'high', affiliate: '#' },
        // Indian Brands
        { brand: 'Lakme', shade: 'Shell', price: 15, priceRange: 'mid', affiliate: '#' },
        { brand: 'Sugar Cosmetics', shade: 'Fair Ivory', price: 18, priceRange: 'mid', affiliate: '#' },
        { brand: 'Mamaearth', shade: 'Fair Glow', price: 12, priceRange: 'low', affiliate: '#' },
        { brand: 'Kay Beauty', shade: 'Porcelain', price: 28, priceRange: 'high', affiliate: '#' },
        { brand: 'Blue Heaven', shade: 'Fair Pink', price: 8, priceRange: 'low', affiliate: '#' },
        { brand: 'Faces Canada', shade: 'Ivory Fair', price: 16, priceRange: 'mid', affiliate: '#' },
        { brand: 'Plum', shade: 'Fair Rose', price: 22, priceRange: 'mid', affiliate: '#' },
        { brand: 'Just Herbs', shade: 'Fair Ayurvedic', price: 30, priceRange: 'high', affiliate: '#' },
        { brand: 'MyGlamm', shade: 'Fair Perfection', price: 24, priceRange: 'mid', affiliate: '#' },
        { brand: 'Swiss Beauty', shade: 'Fair Matte', price: 10, priceRange: 'low', affiliate: '#' },
        { brand: 'Insight Cosmetics', shade: 'Fair Silk', price: 14, priceRange: 'low', affiliate: '#' },
        { brand: 'Pahadi Local', shade: 'Fair Himalayan', price: 20, priceRange: 'mid', affiliate: '#' }
      ],
      'Southeast Asia': [
        { brand: 'Wardah', shade: 'Light Beige', price: 12, priceRange: 'low', affiliate: '#' },
        { brand: 'Emina', shade: 'Fair Natural', price: 10, priceRange: 'low', affiliate: '#' },
        { brand: 'Sariayu', shade: 'Fair Ivory', price: 15, priceRange: 'mid', affiliate: '#' },
        { brand: 'Cathy Doll', shade: 'Fair Pink', price: 8, priceRange: 'low', affiliate: '#' }
      ],
      'Middle East': [
        { brand: 'Huda Beauty', shade: 'Milkshake', price: 40, priceRange: 'high', affiliate: '#' },
        { brand: 'Mikyajy', shade: 'Fair Porcelain', price: 25, priceRange: 'mid', affiliate: '#' },
        { brand: 'Faces', shade: 'Ivory Cool', price: 18, priceRange: 'mid', affiliate: '#' },
        { brand: 'Yasmin Beauty', shade: 'Fair Rose', price: 22, priceRange: 'mid', affiliate: '#' },
        { brand: 'Maybelline', shade: 'Ivory', price: 12, priceRange: 'low', affiliate: '#' }
      ],
      'Europe': [
        { brand: 'Charlotte Tilbury', shade: 'Fair 1', price: 44, priceRange: 'high', affiliate: '#' },
        { brand: 'Kiko Milano', shade: 'Fair Neutral', price: 16, priceRange: 'mid', affiliate: '#' },
        { brand: 'Essence', shade: 'Fair Ivory', price: 5, priceRange: 'low', affiliate: '#' },
        { brand: 'Bourjois', shade: 'Porcelain', price: 14, priceRange: 'mid', affiliate: '#' },
        { brand: 'Revolution', shade: 'Fair F1', price: 8, priceRange: 'low', affiliate: '#' },
        { brand: 'L\'Oreal', shade: 'Ivory Rose', price: 15, priceRange: 'mid', affiliate: '#' }
      ],
      'North America': [
        { brand: 'Fenty Beauty', shade: '110', price: 38, priceRange: 'high', affiliate: '#' },
        { brand: 'Rare Beauty', shade: 'Fair 10N', price: 25, priceRange: 'mid', affiliate: '#' },
        { brand: 'Tarte', shade: 'Fair Light Neutral', price: 36, priceRange: 'high', affiliate: '#' },
        { brand: 'NARS', shade: 'Siberia', price: 38, priceRange: 'high', affiliate: '#' },
        { brand: 'e.l.f.', shade: 'Fair 140 C', price: 6, priceRange: 'low', affiliate: '#' },
        { brand: 'Morphe', shade: 'Fair 1', price: 18, priceRange: 'mid', affiliate: '#' },
        { brand: 'MAC', shade: 'NW10', price: 33, priceRange: 'high', affiliate: '#' }
      ],
      'Africa': [
        { brand: 'House of Tara', shade: 'Fair Glow', price: 20, priceRange: 'mid', affiliate: '#' },
        { brand: 'Zaron', shade: 'Fair Silk', price: 15, priceRange: 'mid', affiliate: '#' },
        { brand: 'Nubian Skin', shade: 'Fair 1', price: 28, priceRange: 'high', affiliate: '#' },
        { brand: 'Black Opal', shade: 'Fair', price: 15, priceRange: 'mid', affiliate: '#' }
      ]
    },
    warm: {
      'South Asia': [
        { brand: 'Lakme', shade: 'Warm Ivory', price: 15, priceRange: 'mid', affiliate: '#' },
        { brand: 'Sugar Cosmetics', shade: 'Fair Golden', price: 18, priceRange: 'mid', affiliate: '#' },
        { brand: 'Kay Beauty', shade: 'Golden Fair', price: 28, priceRange: 'high', affiliate: '#' }
      ],
      'Southeast Asia': [
        { brand: 'Wardah', shade: 'Golden Fair', price: 12, priceRange: 'low', affiliate: '#' },
        { brand: 'Emina', shade: 'Warm Beige', price: 10, priceRange: 'low', affiliate: '#' }
      ],
      'Middle East': [
        { brand: 'Huda Beauty', shade: 'Vanilla', price: 40, priceRange: 'high', affiliate: '#' },
        { brand: 'Mikyajy', shade: 'Golden Fair', price: 25, priceRange: 'mid', affiliate: '#' }
      ],
      'Europe': [
        { brand: 'Charlotte Tilbury', shade: 'Fair 2 Warm', price: 44, priceRange: 'high', affiliate: '#' },
        { brand: 'L\'Oreal', shade: 'Golden Ivory', price: 15, priceRange: 'mid', affiliate: '#' }
      ],
      'North America': [
        { brand: 'Fenty Beauty', shade: '120', price: 38, priceRange: 'high', affiliate: '#' },
        { brand: 'Rare Beauty', shade: 'Fair 12W', price: 25, priceRange: 'mid', affiliate: '#' }
      ],
      'Africa': [
        { brand: 'House of Tara', shade: 'Golden Fair', price: 20, priceRange: 'mid', affiliate: '#' }
      ]
    },
    neutral: {
      'South Asia': [
        { brand: 'Lakme', shade: 'Natural Fair', price: 15, priceRange: 'mid', affiliate: '#' },
        { brand: 'Sugar Cosmetics', shade: 'Fair Beige', price: 18, priceRange: 'mid', affiliate: '#' }
      ],
      'Southeast Asia': [
        { brand: 'Wardah', shade: 'Natural Fair', price: 12, priceRange: 'low', affiliate: '#' }
      ],
      'Middle East': [
        { brand: 'Huda Beauty', shade: 'Creme Brulee', price: 40, priceRange: 'high', affiliate: '#' }
      ],
      'Europe': [
        { brand: 'Charlotte Tilbury', shade: 'Fair 1.5', price: 44, priceRange: 'high', affiliate: '#' }
      ],
      'North America': [
        { brand: 'Fenty Beauty', shade: '115', price: 38, priceRange: 'high', affiliate: '#' }
      ],
      'Africa': [
        { brand: 'House of Tara', shade: 'Fair Natural', price: 20, priceRange: 'mid', affiliate: '#' }
      ]
    }
  },
  // Add more skin tones...
  light: {
    cool: {
      'South Asia': [
        { brand: 'Lakme', shade: 'Light Cool', price: 15, priceRange: 'mid', affiliate: '#' },
        { brand: 'Sugar Cosmetics', shade: 'Light Rose', price: 18, priceRange: 'mid', affiliate: '#' }
      ],
      'North America': [
        { brand: 'Fenty Beauty', shade: '150', price: 38, priceRange: 'high', affiliate: '#' }
      ]
    },
    warm: {
      'South Asia': [
        { brand: 'Lakme', shade: 'Light Golden', price: 15, priceRange: 'mid', affiliate: '#' }
      ]
    },
    neutral: {
      'South Asia': [
        { brand: 'Lakme', shade: 'Light Natural', price: 15, priceRange: 'mid', affiliate: '#' }
      ]
    }
  },
  medium: {
    cool: {
      'South Asia': [
        { brand: 'Lakme', shade: 'Medium Cool', price: 15, priceRange: 'mid', affiliate: '#' }
      ]
    },
    warm: {
      'South Asia': [
        { brand: 'Lakme', shade: 'Medium Golden', price: 15, priceRange: 'mid', affiliate: '#' }
      ]
    },
    neutral: {
      'South Asia': [
        { brand: 'Lakme', shade: 'Medium Natural', price: 15, priceRange: 'mid', affiliate: '#' }
      ]
    }
  },
  deep: {
    cool: {
      'Africa': [
        { brand: 'House of Tara', shade: 'Deep Cool', price: 20, priceRange: 'mid', affiliate: '#' }
      ]
    },
    warm: {
      'Africa': [
        { brand: 'House of Tara', shade: 'Deep Golden', price: 20, priceRange: 'mid', affiliate: '#' }
      ]
    },
    neutral: {
      'Africa': [
        { brand: 'House of Tara', shade: 'Deep Natural', price: 20, priceRange: 'mid', affiliate: '#' }
      ]
    }
  }
};

interface MakeupShadeFinderProps {
  language?: Language;
}

const MakeupShadeFinder: React.FC<MakeupShadeFinderProps> = ({ language = 'en' }) => {
  const [name, setName] = useState('');
  const [skinTone, setSkinTone] = useState('');
  const [undertone, setUndertone] = useState('');
  const [region, setRegion] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [results, setResults] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(language);

  const t = useTranslation(currentLanguage);

  const skinToneOptions = [
    { value: 'fair', label: t.skinTones.fair.label, icon: '🌸', gradient: 'from-pink-100 to-rose-100' },
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
    { value: 'South Asia', label: t.regions['south-asia'], icon: '🏛️' },
    { value: 'Southeast Asia', label: t.regions['southeast-asia'], icon: '🌺' },
    { value: 'Middle East', label: t.regions['middle-east'], icon: '🏜️' },
    { value: 'Europe', label: t.regions.europe, icon: '🏰' },
    { value: 'North America', label: t.regions['north-america'], icon: '🗽' },
    { value: 'Africa', label: t.regions.africa, icon: '🌍' }
  ];

  const priceRangeOptions = [
    { value: 'low', label: 'Budget-Friendly ($5-$15)', icon: '💝' },
    { value: 'mid', label: 'Mid-Range ($15-$30)', icon: '💄' },
    { value: 'high', label: 'Luxury ($30+)', icon: '👑' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (skinTone && undertone && region) {
      let products = productDatabase[skinTone]?.[undertone]?.[region] || [];
      
      // Filter by price range if selected
      if (priceRange) {
        products = products.filter(product => product.priceRange === priceRange);
      }
      
      setResults({
        name,
        skinTone,
        undertone,
        region,
        priceRange,
        products: products.slice(0, 8) // Show top 8 recommendations
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-beauty-gradient-soft via-beauty-gradient-glow to-beauty-gradient-coral p-4 relative overflow-hidden">
      {/* Floating beauty elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-beauty-pink to-beauty-coral opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 rounded-full bg-gradient-to-r from-beauty-gold to-beauty-rose-gold opacity-25 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-gradient-to-r from-beauty-lavender to-beauty-cool opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-beauty-coral to-beauty-pink opacity-15 animate-bounce"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
          <div className="mb-6">
            <Sparkles className="mx-auto mb-4 w-12 h-12 text-beauty-primary animate-pulse" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-beauty-primary via-beauty-secondary to-beauty-warm bg-clip-text text-transparent mb-4">
              {t.appTitle}
            </h1>
            <p className="text-lg text-gray-700 font-medium">{t.appDescription}</p>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-beauty-primary to-beauty-secondary mx-auto rounded-full"></div>
        </div>

        <Card className="backdrop-blur-lg bg-white/90 border-0 shadow-beauty-card rounded-3xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-beauty-gradient-soft to-beauty-gradient-glow p-8">
            <div className="text-center">
              <Heart className="mx-auto mb-3 w-8 h-8 text-white" />
              <CardTitle className="text-3xl text-white font-bold">Let's Find Your Perfect Shade</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Input */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-beauty-primary" />
                  <Label htmlFor="name" className="text-lg font-semibold text-gray-800">
                    {t.nameLabel}
                  </Label>
                </div>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 text-lg border-beauty-primary/30 focus:border-beauty-primary rounded-xl"
                  placeholder={t.namePlaceholder}
                />
              </div>

              <Separator className="bg-gradient-to-r from-beauty-primary/20 to-beauty-secondary/20" />

              {/* Skin Tone Selection */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-beauty-primary" />
                  <Label className="text-lg font-semibold text-gray-800">
                    {t.skinToneLabel}
                  </Label>
                </div>
                <RadioGroup value={skinTone} onValueChange={setSkinTone}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skinToneOptions.map((option) => (
                      <div key={option.value} className="relative">
                        <div className={`p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                          ${skinTone === option.value 
                            ? 'border-beauty-primary bg-gradient-to-r ' + option.gradient + ' shadow-beauty-soft' 
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

              <Separator className="bg-gradient-to-r from-beauty-primary/20 to-beauty-secondary/20" />

              {/* Undertone Selection */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-beauty-primary" />
                  <Label className="text-lg font-semibold text-gray-800">
                    {t.undertoneLabel}
                  </Label>
                </div>
                <RadioGroup value={undertone} onValueChange={setUndertone}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {undertoneOptions.map((option) => (
                      <div key={option.value} className="relative">
                        <div className={`p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                          ${undertone === option.value 
                            ? 'border-beauty-primary bg-gradient-to-r ' + option.gradient + ' shadow-beauty-soft' 
                            : 'border-gray-200 hover:border-beauty-primary/50 bg-white hover:bg-gradient-to-r hover:' + option.gradient
                          }`}>
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value={option.value} id={`undertone-${option.value}`} className="sr-only" />
                            <Label htmlFor={`undertone-${option.value}`} className="flex items-center gap-3 cursor-pointer w-full">
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

              <Separator className="bg-gradient-to-r from-beauty-primary/20 to-beauty-secondary/20" />

              {/* Region Selection */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-beauty-primary" />
                  <Label className="text-lg font-semibold text-gray-800">
                    {t.regionLabel}
                  </Label>
                </div>
                <RadioGroup value={region} onValueChange={setRegion}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {regionOptions.map((option) => (
                      <div key={option.value} className="relative">
                        <div className={`p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                          ${region === option.value 
                            ? 'border-beauty-primary bg-gradient-to-r from-beauty-pink/20 to-beauty-coral/20 shadow-beauty-soft' 
                            : 'border-gray-200 hover:border-beauty-primary/50 bg-white hover:bg-gradient-to-r hover:from-beauty-pink/10 hover:to-beauty-coral/10'
                          }`}>
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value={option.value} id={`region-${option.value}`} className="sr-only" />
                            <Label htmlFor={`region-${option.value}`} className="flex items-center gap-3 cursor-pointer w-full">
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

              <Separator className="bg-gradient-to-r from-beauty-primary/20 to-beauty-secondary/20" />

              {/* Price Range Selection */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-beauty-primary" />
                  <Label className="text-lg font-semibold text-gray-800">
                    Budget Preference (Optional)
                  </Label>
                </div>
                <RadioGroup value={priceRange} onValueChange={setPriceRange}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {priceRangeOptions.map((option) => (
                      <div key={option.value} className="relative">
                        <div className={`p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                          ${priceRange === option.value 
                            ? 'border-beauty-primary bg-gradient-to-r from-beauty-gold/20 to-beauty-rose-gold/20 shadow-beauty-soft' 
                            : 'border-gray-200 hover:border-beauty-primary/50 bg-white hover:bg-gradient-to-r hover:from-beauty-gold/10 hover:to-beauty-rose-gold/10'
                          }`}>
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value={option.value} id={`price-${option.value}`} className="sr-only" />
                            <Label htmlFor={`price-${option.value}`} className="flex items-center gap-3 cursor-pointer w-full">
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

              <Button 
                type="submit" 
                className="w-full h-14 bg-gradient-to-r from-beauty-primary via-beauty-secondary to-beauty-warm hover:from-beauty-primary/90 hover:via-beauty-secondary/90 hover:to-beauty-warm/90 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-beauty-soft hover:shadow-beauty-glow"
                disabled={!skinTone || !undertone || !region}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                {t.findShadesButton}
              </Button>
            </form>
          </CardContent>
        </Card>

        {results && (
          <Card className="mt-12 backdrop-blur-lg bg-white/95 border-0 shadow-beauty-card rounded-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-beauty-gradient-glow via-beauty-gradient-coral to-beauty-gradient-soft p-8">
              <div className="text-center">
                <Crown className="mx-auto mb-3 w-8 h-8 text-white" />
                <CardTitle className="text-3xl text-white font-bold mb-4">
                  {t.resultsTitle} {results.name || 'You'} ✨
                </CardTitle>
                <div className="flex flex-wrap justify-center gap-4 text-white/90">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                    Skin: {skinToneOptions.find(opt => opt.value === results.skinTone)?.label}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                    Undertone: {undertoneOptions.find(opt => opt.value === results.undertone)?.label}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                    Region: {results.region}
                  </Badge>
                  {results.priceRange && (
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                      {priceRangeOptions.find(opt => opt.value === results.priceRange)?.label}
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {results.products.map((product, index) => (
                  <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl p-6 hover:shadow-beauty-soft hover:border-beauty-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="absolute top-4 right-4">
                      <Badge className={`
                        ${product.priceRange === 'low' ? 'bg-green-100 text-green-800' : 
                          product.priceRange === 'mid' ? 'bg-blue-100 text-blue-800' : 
                          'bg-purple-100 text-purple-800'}
                      `}>
                        {product.priceRange === 'low' ? '💝' : product.priceRange === 'mid' ? '💄' : '👑'}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-bold text-xl text-gray-800 group-hover:text-beauty-primary transition-colors">
                        {product.brand}
                      </h3>
                      <p className="text-gray-600 font-medium">{product.shade}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-beauty-primary">${product.price}</p>
                        <Star className="w-5 h-5 text-beauty-gold fill-current" />
                      </div>
                      
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-beauty-primary to-beauty-secondary hover:from-beauty-primary/90 hover:to-beauty-secondary/90 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-beauty-soft"
                      >
                        <a 
                          href={product.affiliate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          {t.buyNow}
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {results.products.length === 0 && (
                <div className="text-center py-12">
                  <div className="mb-4">
                    <Sparkles className="mx-auto w-16 h-16 text-beauty-primary/50" />
                  </div>
                  <p className="text-xl text-gray-600 font-medium">No products found for your selection</p>
                  <p className="text-gray-500 mt-2">Try adjusting your price range or region selection</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MakeupShadeFinder;