# Next.js + SEO Migration Guide for VRTEXGLOBAL

This document provides a step-by-step guide to complete the migration from Vite + React Router to Next.js with full SEO optimization.

## ✅ Completed Steps

1. ✅ Updated package.json with Next.js dependencies
2. ✅ Created next.config.ts with image optimization
3. ✅ Created app/layout.tsx with SEO metadata
4. ✅ Created app/page.tsx (home page)
5. ✅ Created app/components/Navigation.tsx for Next.js
6. ✅ Created app/about/page.tsx with metadata

## 📋 Remaining Steps

### 1. Update Component Paths Structure
- Move `/src/components` to `/app/components` (non-route shared components)
- Keep UI components in `/app/components/ui`
- Update all imports from `@/components` to `@/components`

### 2. Move Assets
- Keep `/public` directory (Next.js serves from here)
- Move `src/assets/` to `public/images/`
- Update all image imports to use `next/image` with Image component

### 3. Create Remaining Page Routes

```
app/
  ├── page.tsx (home) ✅
  ├── about/
  │   └── page.tsx ✅
  ├── services/
  │   └── page.tsx
  ├── portfolio/
  │   └── page.tsx
  ├── contact/
  │   └── page.tsx
  └── not-found.tsx
```

### 4. Create Metadata for Each Page

Each page needs its own metadata:

```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description...",
  openGraph: { ... },
};
```

### 5. Move Shared Components

Update the following components for Next.js:
- `Navigation.tsx` - ✅ Already done
- `Footer.tsx` - Add to `/app/components`
- `AnimatedSection.tsx` - Move to `/app/components`
- `ScrollToTop.tsx` - Move to `/app/components`

### 6. Update Routing

Replace all React Router code:
- `<Link to="/path">` → `<Link href="/path">`
- `useNavigate()` → `useRouter()` from `next/navigation`
- `useLocation()` → `usePathname()` from `next/navigation`

### 7. Create SEO Files

```
public/
  ├── sitemap.xml
  ├── robots.txt
  └── opengraph-image.jpg
```

### 8. Update TypeScript Config

Ensure `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### 9. Install Dependencies

```bash
bun install
```

### 10. Run Development Server

```bash
bun run dev
```

## 🎯 SEO Enhancements Already Implemented

1. ✅ Metadata exports from each page
2. ✅ Open Graph tags for social sharing
3. ✅ Canonical URLs
4. ✅ Alt text for images
5. ✅ Structured HTML headings (H1, H2, H3)

## 🎯 SEO Enhancements to Add

1. **JSON-LD Schema** - Add to layout.tsx:
   - Organization schema
   - LocalBusiness schema
   - Product schema

2. **Meta tags** - Add to each page:
   - robots meta tag
   - viewport
   - theme-color

3. **Sitemaps & Robots**:
   - Create `public/sitemap.xml`
   - Create `public/robots.txt`

4. **Performance**:
   - Image optimization (Next.js Image component)
   - Font optimization
   - CSS-in-JS optimization

5. **Mobile**:
   - Responsive design ✅ (already Tailwind)
   - Mobile meta tags ✅

## 📝 Implementation Notes

### Link Replacement Pattern
```tsx
// OLD
import { Link } from "react-router-dom";
<Link to="/services">Services</Link>

// NEW
import Link from "next/link";
<Link href="/services">Services</Link>
```

### Image Replacement Pattern
```tsx
// OLD
<img src={image} alt="description" />

// NEW
import Image from "next/image";
<Image src={image} alt="description" fill />
```

### Navigation Hook Pattern
```tsx
// OLD
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
navigate("/path");

// NEW
import { useRouter } from "next/navigation";
const router = useRouter();
router.push("/path");
```

## 📞 Contact/Form Updates

For the Contact page form submission:
- Keep existing state management (useState)
- Create API route: `app/api/contact/route.ts`
- Handle form submission to API route

## 🔍 Testing Checklist

- [ ] All pages render without errors
- [ ] Navigation works on all pages
- [ ] Images load and optimize correctly
- [ ] Mobile responsive design works
- [ ] Forms submit correctly
- [ ] SEO meta tags visible in page source
- [ ] Images have proper alt text
- [ ] Links use proper Next.js routing
- [ ] Build completes successfully (`bun run build`)
- [ ] Production server runs (`bun run start`)

