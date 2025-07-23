# Trading Pro GPT Landing Page

A professional, multilingual landing page for Trading Pro GPT built with Next.js 14+, React, and Tailwind CSS. Features complete internationalization, SEO optimization, and Xentris.tech branding.

## 🚀 Quick Start

### Deploy to Vercel

1. Click the "Deploy" button in the v0 interface
2. Connect your GitHub account
3. Deploy to Vercel with one click

### Manual Setup

\`\`\`bash
# Clone the repository
git clone <your-repo-url>
cd trading-pro-gpt-landing

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 🌐 Features

- **Multilingual Support**: Spanish (ES) and English (EN) with proper hreflang implementation
- **SEO Optimized**: Complete meta tags, JSON-LD schema, sitemap.xml
- **Google SGE Ready**: Structured data for enhanced search results
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Xentris.tech Branding**: Custom color scheme and typography
- **Legal Compliance**: Privacy policy, cookie policy, terms of service
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized for Core Web Vitals

## 📁 Project Structure

\`\`\`
├── app/
│   ├── [lang]/                 # Language-specific routes
│   │   ├── page.tsx           # Main landing page
│   │   ├── privacy/           # Privacy policy
│   │   ├── cookies/           # Cookie policy
│   │   └── terms/             # Terms of service
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── header.tsx             # Site header
│   ├── footer.tsx             # Site footer
│   ├── hero-section.tsx       # Hero section
│   ├── features-section.tsx   # Features section
│   ├── faq-section.tsx        # FAQ section
│   └── ...                    # Other sections
├── public/
│   ├── sitemap.xml           # SEO sitemap
│   └── robots.txt            # Search engine directives
└── README.md
\`\`\`

## 🎨 Customization

### Adding Languages

1. Add language code to `languages` array in `app/[lang]/layout.tsx`
2. Add translations to content objects in each component
3. Update sitemap.xml with new language URLs
4. Add hreflang tags in layout

### Updating Content

Each component has a `content` object with translations:

\`\`\`tsx
const content = {
  en: {
    title: "English Title",
    description: "English description"
  },
  es: {
    title: "Título en Español", 
    description: "Descripción en español"
  }
}
\`\`\`

### Brand Colors (Xentris.tech)

\`\`\`css
--background: #0D0D0D      /* Dark background */
--primary: #1B123F         /* Primary purple */
--secondary: #331659       /* Secondary purple */
--accent: #8B3BC0          /* Accent purple */
--white: #FFFFFF           /* White text */
\`\`\`

### Adding Logos

Replace placeholder logo areas with your SVG files:

1. Add SVG files to `public/` directory
2. Update logo references in:
   - `components/header.tsx`
   - `components/footer.tsx`
   - `app/layout.tsx` (JSON-LD schema)

## 📊 SEO Features

### JSON-LD Schema Types
- Organization (Xentris.tech)
- WebSite (with search functionality)
- WebPage (for each page)
- FAQPage (with all FAQ items)

### Meta Tags
- Complete Open Graph tags
- Twitter Card tags
- Canonical URLs
- Hreflang tags for internationalization

### Performance
- Optimized images with proper alt text
- Lazy loading
- Minimal JavaScript bundle
- Fast loading times

## 🔒 Legal Compliance

### GDPR Compliance
- Cookie consent banner
- Privacy policy
- Data processing transparency
- User rights information

### Risk Disclaimers
- Trading risk warnings on all pages
- Clear "not financial advice" statements
- Professional consultation recommendations

## 🛠 Development

### Environment Variables

No environment variables required for basic functionality. The site works entirely with static generation.

### Available Scripts

\`\`\`bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
\`\`\`

### Adding New Sections

1. Create component in `components/`
2. Add to main page in `app/[lang]/page.tsx`
3. Include translations for both languages
4. Update navigation if needed

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface
- Optimized for all screen sizes

## 🔍 Analytics Ready

The site is prepared for analytics integration:

- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- Custom tracking events

Add your tracking codes to the layout files when ready.

## 📞 Support

For technical support or questions:
- Email: contacto@xentris.tech
- Documentation: This README
- Issues: GitHub repository issues

## 📄 License

Developed by Xentris.tech. All rights reserved.

---

**Powered by Xentris.tech, OpenAI & TwelveData**
