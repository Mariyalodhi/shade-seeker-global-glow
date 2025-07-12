import React from 'react';
import MakeupShadeFinder from './MakeupShadeFinder';

interface EmbeddableWidgetProps {
  width?: string;
  height?: string;
  language?: 'en' | 'es' | 'fr' | 'id';
  theme?: 'light' | 'dark';
}

const EmbeddableWidget: React.FC<EmbeddableWidgetProps> = ({
  width = '100%',
  height = '100vh',
  language = 'en',
  theme = 'light'
}) => {
  return (
    <div 
      className={`${theme === 'dark' ? 'dark' : ''} w-full h-full`}
      style={{ width, height }}
      data-language={language}
    >
      <MakeupShadeFinder />
    </div>
  );
};

// WordPress embedding instructions
export const WordPressEmbedCode = (props: EmbeddableWidgetProps = {}) => {
  const { width = '100%', height = '600px', language = 'en', theme = 'light' } = props;
  
  return `
<!-- Shade Seeker Makeup Finder Widget -->
<iframe 
  src="https://your-domain.com/widget?lang=${language}&theme=${theme}"
  width="${width}"
  height="${height}"
  frameborder="0"
  scrolling="auto"
  style="border: none; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"
  title="Makeup Shade Finder Tool"
></iframe>

<!-- Alternative: Direct embed (if allowed by hosting) -->
<div id="shade-seeker-widget" style="width: ${width}; height: ${height};"></div>
<script>
  // Load the widget
  (function() {
    var script = document.createElement('script');
    script.src = 'https://your-domain.com/widget.js';
    script.onload = function() {
      ShadeSeekerWidget.init({
        container: '#shade-seeker-widget',
        language: '${language}',
        theme: '${theme}'
      });
    };
    document.head.appendChild(script);
  })();
</script>
`;
};

export default EmbeddableWidget;