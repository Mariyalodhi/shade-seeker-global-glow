import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Heart, Sparkles, ShoppingBag, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Language, useTranslation } from '@/utils/translations';
import LanguageSelector from './LanguageSelector';

interface UserProfile {
  name: string;
  skinTone: string;
  undertone: string;
  region: string;
}

interface ProductRecommendation {
  brand: string;
  productName: string;
  shade: string;
  price: string;
  description: string;
  affiliateLink: string;
  isPopular?: boolean;
}

interface MakeupShadeFinderProps {
  language?: Language;
}

const MakeupShadeFinder: React.FC<MakeupShadeFinderProps> = ({ language = 'en' }) => {
  const [step, setStep] = useState<'form' | 'results'>('form');
  const [currentLanguage, setCurrentLanguage] = useState<Language>(language);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: '',
    skinTone: '',
    undertone: '',
    region: '',
  });
  const { toast } = useToast();
  const t = useTranslation(currentLanguage);

  const skinTones = [
    { value: 'fair', label: t.skinTones.fair.label, description: t.skinTones.fair.description },
    { value: 'light', label: t.skinTones.light.label, description: t.skinTones.light.description },
    { value: 'medium', label: t.skinTones.medium.label, description: t.skinTones.medium.description },
    { value: 'deep', label: t.skinTones.deep.label, description: t.skinTones.deep.description },
  ];

  const undertones = [
    { value: 'cool', label: t.undertones.cool.label, description: t.undertones.cool.description },
    { value: 'warm', label: t.undertones.warm.label, description: t.undertones.warm.description },
    { value: 'neutral', label: t.undertones.neutral.label, description: t.undertones.neutral.description },
  ];

  const regions = [
    { value: 'south-asia', label: t.regions['south-asia'] },
    { value: 'southeast-asia', label: t.regions['southeast-asia'] },
    { value: 'middle-east', label: t.regions['middle-east'] },
    { value: 'europe', label: t.regions.europe },
    { value: 'north-america', label: t.regions['north-america'] },
    { value: 'africa', label: t.regions.africa },
  ];

  const getProductRecommendations = (profile: UserProfile): ProductRecommendation[] => {
    const recommendations: ProductRecommendation[] = [];
    
    // Logic based on skin tone, undertone, and region
    if (profile.skinTone === 'fair' && profile.undertone === 'cool') {
      recommendations.push(
        {
          brand: 'Fenty Beauty',
          productName: 'Pro Filt\'r Soft Matte Foundation',
          shade: '110 - Fair with cool undertones',
          price: '$39',
          description: 'Buildable coverage with a soft matte finish',
          affiliateLink: '#',
          isPopular: true,
        },
        {
          brand: 'Maybelline',
          productName: 'Fit Me Matte + Poreless',
          shade: '102 - Fair Porcelain',
          price: '$7.99',
          description: 'Affordable drugstore option with natural finish',
          affiliateLink: '#',
        }
      );
    }

    if (profile.skinTone === 'fair' && profile.undertone === 'warm') {
      recommendations.push(
        {
          brand: 'Charlotte Tilbury',
          productName: 'Airbrush Flawless Foundation',
          shade: '2 Fair',
          price: '$49',
          description: 'Luxury foundation with radiant finish',
          affiliateLink: '#',
          isPopular: true,
        },
        {
          brand: 'L\'Oréal',
          productName: 'True Match Foundation',
          shade: 'W1 - Golden Ivory',
          price: '$12.99',
          description: 'Perfect match technology',
          affiliateLink: '#',
        }
      );
    }

    if (profile.skinTone === 'medium' && profile.undertone === 'warm') {
      recommendations.push(
        {
          brand: 'Fenty Beauty',
          productName: 'Pro Filt\'r Soft Matte Foundation',
          shade: '280 - Medium with warm golden undertones',
          price: '$39',
          description: 'Inclusive range with perfect warm medium shades',
          affiliateLink: '#',
          isPopular: true,
        },
        {
          brand: 'Lakme (South Asian)',
          productName: 'Absolute Perfect Radiance Foundation',
          shade: 'Golden Medium 03',
          price: '₹1,350',
          description: 'Perfect for South Asian skin tones',
          affiliateLink: '#',
        }
      );
    }

    if (profile.skinTone === 'deep' && profile.undertone === 'warm') {
      recommendations.push(
        {
          brand: 'Fenty Beauty',
          productName: 'Pro Filt\'r Soft Matte Foundation',
          shade: '450 - Deep with warm undertones',
          price: '$39',
          description: 'Revolutionary inclusive shade range',
          affiliateLink: '#',
          isPopular: true,
        },
        {
          brand: 'Black Opal',
          productName: 'True Color Foundation',
          shade: 'Beautiful Bronze',
          price: '$14.99',
          description: 'Specially formulated for deeper skin tones',
          affiliateLink: '#',
        }
      );
    }

    // Add region-specific recommendations
    if (profile.region === 'south-asia') {
      recommendations.push(
        {
          brand: 'Colorbar',
          productName: 'Perfect Match Foundation',
          shade: 'Natural Beige',
          price: '₹899',
          description: 'Indian brand perfect for South Asian undertones',
          affiliateLink: '#',
        }
      );
    }

    // Ensure we have at least 3 recommendations
    if (recommendations.length < 3) {
      recommendations.push(
        {
          brand: 'NARS',
          productName: 'Natural Radiant Longwear Foundation',
          shade: 'Custom Match',
          price: '$49',
          description: 'Professional color matching available',
          affiliateLink: '#',
        }
      );
    }

    return recommendations;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userProfile.name || !userProfile.skinTone || !userProfile.undertone || !userProfile.region) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to get accurate recommendations.",
        variant: "destructive",
      });
      return;
    }
    setStep('results');
    toast({
      title: `${t.resultsTitle.replace('for', '')} ${userProfile.name}!`,
      description: "Here are your personalized makeup recommendations.",
    });
  };

  const handleReset = () => {
    setStep('form');
    setUserProfile({ name: '', skinTone: '', undertone: '', region: '' });
  };

  if (step === 'results') {
    const recommendations = getProductRecommendations(userProfile);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex-1" />
            <LanguageSelector 
              currentLanguage={currentLanguage}
              onLanguageChange={setCurrentLanguage}
            />
          </div>

          <Card className="border-0 shadow-lg bg-card/90 backdrop-blur">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <CardTitle className="text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t.resultsTitle} {userProfile.name}
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                {t.resultsDescription
                  .replace('{skinTone}', skinTones.find(s => s.value === userProfile.skinTone)?.label || userProfile.skinTone)
                  .replace('{undertone}', undertones.find(u => u.value === userProfile.undertone)?.label || userProfile.undertone)}
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((product, index) => (
              <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/90 backdrop-blur group">
                {product.isPopular && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground z-10">
                    <Heart className="w-3 h-3 mr-1" />
                    {t.popular}
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{product.brand}</CardTitle>
                  <CardDescription className="font-medium text-foreground">
                    {product.productName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-accent">Shade: {product.shade}</p>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                    <p className="text-lg font-bold text-primary">{product.price}</p>
                  </div>
                  <Button 
                    className="w-full group-hover:scale-105 transition-transform"
                    onClick={() => window.open(product.affiliateLink, '_blank')}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    {t.buyNow}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-lg bg-card/90 backdrop-blur">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-primary">{t.tryAgain}</h3>
                <p className="text-muted-foreground">
                  Find shades for different occasions or update your preferences
                </p>
                <Button variant="outline" onClick={handleReset} className="mx-auto">
                  <Sparkles className="w-4 h-4 mr-2" />
                  {t.findNewShades}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-end mb-6">
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
        </div>
        
        <Card className="border-0 shadow-xl bg-card/90 backdrop-blur">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <CardTitle className="text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t.appTitle}
              </CardTitle>
            </div>
            <CardDescription className="text-lg">
              {t.appDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Input */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-medium">{t.nameLabel}</Label>
                <Input
                  id="name"
                  placeholder={t.namePlaceholder}
                  value={userProfile.name}
                  onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                  className="text-lg h-12"
                  required
                />
              </div>

              {/* Skin Tone Selection */}
              <div className="space-y-4">
                <Label className="text-lg font-medium">{t.skinToneLabel}</Label>
                <RadioGroup
                  value={userProfile.skinTone}
                  onValueChange={(value) => setUserProfile({ ...userProfile, skinTone: value })}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {skinTones.map((tone) => (
                    <div key={tone.value} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                      <RadioGroupItem value={tone.value} id={tone.value} />
                      <div className="flex-1">
                        <Label htmlFor={tone.value} className="font-medium cursor-pointer">
                          {tone.label}
                        </Label>
                        <p className="text-sm text-muted-foreground">{tone.description}</p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Undertone Selection */}
              <div className="space-y-4">
                <Label className="text-lg font-medium">{t.undertoneLabel}</Label>
                <RadioGroup
                  value={userProfile.undertone}
                  onValueChange={(value) => setUserProfile({ ...userProfile, undertone: value })}
                  className="grid grid-cols-1 gap-4"
                >
                  {undertones.map((undertone) => (
                    <div key={undertone.value} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                      <RadioGroupItem value={undertone.value} id={undertone.value} />
                      <div className="flex-1">
                        <Label htmlFor={undertone.value} className="font-medium cursor-pointer">
                          {undertone.label}
                        </Label>
                        <p className="text-sm text-muted-foreground">{undertone.description}</p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Region Selection */}
              <div className="space-y-4">
                <Label className="text-lg font-medium">{t.regionLabel}</Label>
                <RadioGroup
                  value={userProfile.region}
                  onValueChange={(value) => setUserProfile({ ...userProfile, region: value })}
                  className="grid grid-cols-2 gap-4"
                >
                  {regions.map((region) => (
                    <div key={region.value} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                      <RadioGroupItem value={region.value} id={region.value} />
                      <Label htmlFor={region.value} className="font-medium cursor-pointer">
                        {region.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full h-12 text-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                {t.findShadesButton}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MakeupShadeFinder;