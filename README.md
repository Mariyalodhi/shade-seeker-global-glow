# Shade Seeker - Makeup Shade Finder Tool

A responsive, multilingual makeup shade finder tool that helps users select the perfect foundation and makeup shades based on their skin tone, undertone, and geographic region.

## Features

✨ **AI-Powered Recommendations**: Get personalized makeup shade suggestions based on skin analysis
🌍 **Multilingual Support**: Available in English, Spanish, French, and Indonesian
📱 **Mobile-Friendly**: Fully responsive design that works on all devices
🔗 **WordPress Embeddable**: Easy integration with WordPress websites
💄 **Multiple Brands**: Recommendations from international and South Asian beauty brands
🛒 **Affiliate Ready**: Built-in support for affiliate links

## Live Demo

Visit [https://your-domain.com](https://your-domain.com) to try the tool.

## How It Works

1. **Personal Information**: Users enter their name
2. **Skin Analysis**: Select skin tone (fair, light, medium, deep)
3. **Undertone Detection**: Choose undertone (cool, warm, neutral)
4. **Regional Preferences**: Select geographic region for localized recommendations
5. **Get Results**: Receive personalized foundation and makeup shade recommendations

## Supported Regions

- South Asia
- Southeast Asia
- Middle East
- Europe
- North America
- Africa

## Supported Languages

- 🇺🇸 English
- 🇪🇸 Spanish (Español)
- 🇫🇷 French (Français)
- 🇮🇩 Indonesian (Bahasa Indonesia)

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **State Management**: React Hooks
- **Internationalization**: Custom translation system
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/shade-seeker.git
   cd shade-seeker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## WordPress Integration

### Method 1: iframe Embed

Add this code to your WordPress post or page:

```html
<iframe 
  src="https://your-domain.com/widget?lang=en&theme=light"
  width="100%"
  height="600px"
  frameborder="0"
  scrolling="auto"
  style="border: none; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"
  title="Makeup Shade Finder Tool"
></iframe>
```

### Method 2: JavaScript Widget

Add this to your WordPress theme's footer:

```html
<div id="shade-seeker-widget" style="width: 100%; height: 600px;"></div>
<script>
  (function() {
    var script = document.createElement('script');
    script.src = 'https://your-domain.com/widget.js';
    script.onload = function() {
      ShadeSeekerWidget.init({
        container: '#shade-seeker-widget',
        language: 'en',
        theme: 'light'
      });
    };
    document.head.appendChild(script);
  })();
</script>
```

### Customization Options

- `lang`: Language (en, es, fr, id)
- `theme`: Theme (light, dark)
- `width`: Widget width (default: 100%)
- `height`: Widget height (default: 600px)

## Adding New Languages

1. **Add language to translations**
   ```typescript
   // src/utils/translations.ts
   export const translations: Record<Language, Translations> = {
     // ... existing languages
     'pt': {
       appTitle: 'Buscador de Tons',
       // ... add all translations
     }
   };
   ```

2. **Update language selector**
   ```typescript
   // src/components/LanguageSelector.tsx
   const languages = [
     // ... existing languages
     { code: 'pt' as Language, name: 'Português', flag: '🇵🇹' },
   ];
   ```

## Adding New Beauty Brands

1. **Update recommendations logic**
   ```typescript
   // src/components/MakeupShadeFinder.tsx
   const getProductRecommendations = (profile: UserProfile): ProductRecommendation[] => {
     // Add new brand recommendations based on user profile
   };
   ```

2. **Add brand-specific logic for different regions**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
