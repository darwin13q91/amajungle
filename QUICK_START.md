# ⚡ QUICK START GUIDE - Amajungle

## 🚀 Getting Started

### Installation
```bash
cd amajungle
pnpm install
```

### Development
```bash
pnpm dev
# Opens http://localhost:5173
```

### Build & Deploy
```bash
pnpm build
pnpm preview  # Test build locally
git push      # Auto-deploys to Vercel
```

---

## 📁 Project Structure

```
amajungle/
├── public/                 # Static assets
│   ├── ama-logo.svg
│   └── team photos (.jpg)
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollProgress.tsx    # NEW
│   │   ├── ScrollToTop.tsx       # NEW
│   │   ├── LoadingSpinner.tsx    # NEW
│   │   └── SkeletonLoader.tsx    # NEW
│   ├── pages/             # Route pages
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   └── ContactPage.tsx
│   ├── contexts/          # React context
│   │   └── ThemeContext.tsx
│   ├── hooks/             # Custom hooks
│   │   └── useSectionInView.ts
│   ├── config/            # Configuration
│   │   └── routes.ts
│   ├── utils/             # Utilities
│   │   └── seo.ts
│   ├── styles/            # CSS
│   │   └── theme.css
│   ├── App.tsx            # Main app
│   ├── App.css            # Main styles (6400+ lines)
│   └── main.tsx           # Entry point
└── package.json
```

---

## 🎨 Key Components

### ScrollProgress
```tsx
import ScrollProgress from './components/ScrollProgress';

// Usage in App.tsx (already integrated)
<ScrollProgress />
```

### ScrollToTop
```tsx
import ScrollToTop from './components/ScrollToTop';

// Usage in App.tsx (already integrated)
<ScrollToTop />
```

### LoadingSpinner
```tsx
import LoadingSpinner from './components/LoadingSpinner';

<LoadingSpinner size="medium" color="var(--primary)" />
// size: 'small' | 'medium' | 'large'
```

### SkeletonLoader
```tsx
import SkeletonLoader from './components/SkeletonLoader';

<SkeletonLoader type="card" />
<SkeletonLoader type="text" lines={3} />
// type: 'text' | 'title' | 'avatar' | 'card' | 'image'
```

---

## 🎭 Styling Guide

### Using CSS Variables
```css
/* Colors */
var(--primary)          /* #ff9900 */
var(--primary-dark)     /* #232f3e */
var(--primary-alpha-1)  /* rgba(255, 153, 0, 0.1) */

/* Spacing */
var(--space-xs)   /* 10px */
var(--space-md)   /* 32px */
var(--space-xl)   /* 56px */

/* Shadows */
var(--shadow-sm)
var(--shadow-md)
var(--shadow-lg)

/* Fonts */
var(--font-primary)   /* Inter */
var(--font-heading)   /* Poppins */
```

### Common Patterns
```css
/* Glassmorphism Card */
.my-card {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.my-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Gradient Text */
.gradient-text {
  background: var(--gradient-primary);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s linear infinite;
}

/* Premium Button */
.premium-btn {
  background: var(--gradient-primary);
  padding: var(--space-sm) var(--space-xl);
  border-radius: 50px;
  box-shadow: 0 8px 24px var(--primary-alpha-3);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.premium-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px var(--primary-alpha-5);
}
```

---

## 🎯 Common Tasks

### Adding a New Page
```tsx
// 1. Create page component
// src/pages/NewPage.tsx
import SectionWrapper from '../components/SectionWrapper';

const NewPage = () => {
  return (
    <SectionWrapper id="new-page" className="hero-section">
      <h1>New Page</h1>
      <p>Content here...</p>
    </SectionWrapper>
  );
};

export default NewPage;

// 2. Add route in App.tsx
import NewPage from './pages/NewPage';
<Route path="/new-page" element={<NewPage />} />

// 3. Add to navigation in routes.ts
{
  path: 'new-page',
  label: 'New Page',
  component: 'NewPage',
  title: 'New Page - Amajungle',
  description: 'Description here'
}
```

### Adding a New Component
```tsx
// src/components/MyComponent.tsx
interface MyComponentProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

const MyComponent = ({ 
  title, 
  description,
  onClick 
}: MyComponentProps) => {
  return (
    <div className="my-component">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {onClick && <button onClick={onClick}>Click Me</button>}
    </div>
  );
};

export default MyComponent;
```

### Adding CSS
```css
/* In App.css */

/* Component Styles */
.my-component {
  background: var(--card-bg);
  padding: var(--space-lg);
  border-radius: var(--radius);
  animation: fadeInUp 0.6s ease;
}

.my-component:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
```

---

## 🔧 Configuration

### EmailJS Setup
```env
# .env.local
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Vercel Deployment
1. Connect GitHub repo to Vercel
2. Set environment variables in Vercel dashboard
3. Auto-deploys on git push to main

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules dist
pnpm install
pnpm build
```

### Type Errors
```bash
# Check TypeScript
pnpm tsc --noEmit
```

### CSS Issues
- Check for duplicate selectors
- Verify CSS variable names
- Look for unclosed brackets
- Check animation names

---

## 📊 Performance Tips

### Optimize Images
```html
<!-- Use WebP format -->
<img src="image.webp" alt="Description" />

<!-- Add loading="lazy" -->
<img src="image.jpg" loading="lazy" alt="Description" />
```

### Code Splitting
```tsx
// Lazy load heavy components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<LoadingSpinner />}>
  <HeavyComponent />
</Suspense>
```

### Memoization
```tsx
// Memoize expensive computations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// Memoize callbacks
const handleClick = useCallback(() => {
  doSomething();
}, []);
```

---

## 🎨 Animation Cheatsheet

```css
/* Available Animations */
@keyframes shimmer       /* Gradient slide */
@keyframes float         /* Gentle up/down */
@keyframes pulse         /* Scale pulse */
@keyframes fadeIn        /* Opacity in */
@keyframes fadeInUp      /* Slide up + fade */
@keyframes fadeInDown    /* Slide down + fade */
@keyframes fadeOut       /* Opacity out */
@keyframes scaleIn       /* Scale in */
@keyframes slideInLeft   /* Slide from left */
@keyframes slideInRight  /* Slide from right */
@keyframes glow          /* Shadow pulse */

/* Usage */
.element {
  animation: fadeInUp 0.6s ease;
  animation: shimmer 3s linear infinite;
}
```

---

## 🔑 Key Files Reference

| File | Purpose |
|------|---------|
| `App.tsx` | Main app structure, routing |
| `App.css` | All styles (6400+ lines) |
| `theme.css` | CSS variables, colors |
| `index.css` | Global resets, base styles |
| `routes.ts` | Navigation configuration |
| `seo.ts` | SEO meta tags |
| `ThemeContext.tsx` | Dark/light theme logic |

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
.element { /* Base: Mobile */ }

@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }

/* Use clamp() for fluid sizing */
font-size: clamp(1rem, 2vw, 1.5rem);
```

---

## ✅ Pre-Deployment Checklist

- [ ] Run `pnpm build` successfully
- [ ] Test all pages and routes
- [ ] Verify forms work (EmailJS)
- [ ] Check mobile responsiveness
- [ ] Test dark theme toggle
- [ ] Verify all images load
- [ ] Check console for errors
- [ ] Test CTAs and links
- [ ] Verify SEO meta tags
- [ ] Run Lighthouse audit

---

## 📞 Support & Resources

- **GitHub**: https://github.com/darwin13q91/amajungle
- **Production**: https://amajungle.vercel.app
- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **TypeScript**: https://www.typescriptlang.org

---

*Quick reference for rapid development*
*Updated: January 11, 2026*
