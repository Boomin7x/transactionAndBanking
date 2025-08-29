# Finasddee - Next.js Project

This is a Next.js project configured with your custom color palette and ready for HTML migration.

## 🎨 Color Palette

The project is configured with the following color scheme:

- **Gradient Primary**: `linear-gradient(212.6deg, #FFEED2 25.89%, #CE9739 100.36%)`
- **Dark Blue**: `#082642`
- **Light Gray**: `#FAFAFA`
- **Green**: `#309E3A`
- **Gold Light**: `#FFEED2`
- **Gold Dark**: `#CE9739`

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with custom color palette
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page showcasing color palette
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # Reusable button component
│   │   └── Card.tsx         # Card components for content sections
│   └── layout/
│       └── Header.tsx       # Header component with variants
└── lib/
    └── utils.ts             # Utility functions for className merging
```

## 🎯 Features Configured

- ✅ Next.js 15 with App Router
- ✅ TypeScript support
- ✅ Tailwind CSS v4 with custom color palette
- ✅ Custom utility classes for your colors
- ✅ Reusable UI components
- ✅ ESLint configuration
- ✅ Responsive design ready

## 🔧 Available Color Classes

You can use these Tailwind classes throughout your project:

### Background Colors
- `bg-gradient-primary` - Your custom gradient
- `bg-dark-blue` - Dark blue (#082642)
- `bg-light-gray` - Light gray (#FAFAFA)
- `bg-green` - Green (#309E3A)
- `bg-gold-light` - Gold light (#FFEED2)
- `bg-gold-dark` - Gold dark (#CE9739)

### Text Colors
- `text-dark-blue`
- `text-light-gray`
- `text-green`
- `text-gold-light`
- `text-gold-dark`

## 📝 Migrating Your HTML

1. **Components**: Place your HTML components in `src/components/`
2. **Pages**: Create new pages in `src/app/`
3. **Styling**: Use the configured color classes or CSS variables
4. **Assets**: Place images and other assets in `public/`

## 🛠 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🎨 Professional Components Created

### Layout Components
- **MainHeader**: Responsive navigation with mobile menu
- **Footer**: Multi-column footer with links and branding

### Section Components
- **HeroSection**: Full-screen hero with background image and send money form
- **SendMoneyForm**: Interactive form with real-time exchange rate calculation
- **HowItWorksSection**: 3-step process with animations
- **WhyChooseUsSection**: Benefits showcase with icons
- **NetworkSection**: Country grid with flag icons
- **TestimonialsSection**: Carousel with customer reviews
- **SpecialOfferSection**: Call-to-action with background image
- **FAQSection**: Accordion-style frequently asked questions

### UI Components
- **Button**: Versatile button with multiple variants
- **Card**: Flexible card components with header, content, footer
- **Accordion**: Collapsible content with smooth animations
- **Preloader**: Loading screen with brand animation
- **BackToTop**: Smooth scroll-to-top functionality

## 🔧 Technical Features

- **TypeScript**: Full type safety with Zod schemas
- **TanStack Query**: Data fetching and caching
- **Framer Motion**: Smooth animations and transitions
- **React Hook Form**: Form handling with validation
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: Optimized images and lazy loading

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment Ready

The project is configured for deployment on:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## 📋 Next Steps

1. **Add Images**: Place your brand images in `public/images/`
2. **Customize Content**: Update text, testimonials, and FAQ data
3. **API Integration**: Connect real exchange rate APIs
4. **Authentication**: Add user login/signup functionality
5. **Payment Processing**: Integrate payment gateways
6. **Testing**: Add unit and integration tests

## 🎯 Migration Complete

Your HTML project has been successfully converted to a modern Next.js application with:
- ✅ Professional component architecture
- ✅ TypeScript integration
- ✅ Modern state management
- ✅ Responsive design
- ✅ Smooth animations
- ✅ SEO optimization
- ✅ Performance optimization
