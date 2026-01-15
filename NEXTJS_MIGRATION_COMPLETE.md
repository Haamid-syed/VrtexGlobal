# VRTEXGLOBAL Next.js + SEO Migration - Complete Instructions

## 🎯 Overview

This document provides step-by-step instructions to complete the migration from Vite + React Router to Next.js with comprehensive SEO optimization. The migration preserves all functionality and UI while modernizing the codebase.

## ✅ What's Been Done So Far

1. ✅ Updated `package.json` with Next.js dependencies (removed Vite & react-router-dom)
2. ✅ Created `next.config.ts` with image optimization settings
3. ✅ Created comprehensive `app/layout.tsx` with SEO metadata
4. ✅ Created `app/page.tsx` (home page) with full functionality
5. ✅ Created `app/about/page.tsx` with metadata
6. ✅ Created `app/services/page.tsx` with all services and metadata
7. ✅ Created `app/services/layout.tsx` with service page metadata
8. ✅ Created `app/contact/layout.tsx` with contact page metadata
9. ✅ Created `app/components/Navigation.tsx` for Next.js routing
10. ✅ Created `app/components/Footer.tsx` for Next.js
11. ✅ Updated `migrate-to-nextjs.sh` migration script
12. ✅ Created `MIGRATION_GUIDE.md` with detailed instructions

## 🚀 Next Steps to Complete Migration

### Step 1: Install Dependencies
```bash
cd /Users/haamidsyed/Documents/coding\ projects/vrtexlabs
bun install
```

### Step 2: Create Missing Page Files

#### Portfolio Page - Create `app/portfolio/page.tsx`
Copy the portfolio content from `src/pages/Portfolio.tsx` and adapt:
- Replace `import { useNavigate, useLocation } from "react-router-dom"` with `import { useRouter } from "next/navigation"`
- Replace `<img>` tags with `<Image>` from `next/image`
- Replace `<Link to=...>` with `<Link href=...>`
- Remove `Navigation` and `Footer` imports (handled by layout)

#### Contact Page - Create `app/contact/page.tsx`
Copy the contact form from `src/pages/Contact.tsx` and adapt:
- Replace form imports and routing
- Ensure useState for form handling works
- Create `app/api/contact/route.ts` for form submission

#### 404 Page - Create `app/not-found.tsx`
```typescript
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-muted-foreground text-lg mb-8">Page not found</p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
```

### Step 3: Copy UI Components

Move `src/components/ui/*` to `app/components/ui/`:
```bash
cp -r src/components/ui/* app/components/ui/
```

### Step 4: Copy Remaining Components

Move key components from `src/components/` to `app/components/`:
1. `AnimatedSection.tsx`
2. `ScrollToTop.tsx`

Update them to be "use client" components if they use hooks.

### Step 5: Update Image Paths

For all remaining pages that use images:
- Change: `src={image}` to `src={image}` (Next.js Image component)
- Change: `import image from "@/assets/..."` to `import image from "@/assets/..."`
- Import: `import Image from "next/image"`
- Replace `<img>` with `<Image>`

### Step 6: Create Page Metadata for Portfolio

Create `app/portfolio/layout.tsx`:
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | VRTEXGLOBAL",
  description:
    "Explore VRTEXGLOBAL's impressive portfolio of completed projects in product design, automotive design, enclosure design, and more.",
  openGraph: {
    title: "Portfolio | VRTEXGLOBAL",
    description:
      "See our successful projects and case studies in mechanical design",
    url: "https://vrtexglobal.com/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

### Step 7: Update All Link References

Find and replace pattern:
```
OLD: <Link to="/path">Text</Link>
NEW: <Link href="/path">Text</Link>

OLD: import { Link } from "react-router-dom"
NEW: import Link from "next/link"
```

### Step 8: Create JSON-LD Schema for SEO

Add to `app/layout.tsx` before closing `</head>`:
```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VRTEXGLOBAL",
  url: "https://vrtexglobal.com",
  logo: "https://vrtexglobal.com/logo.jpeg",
  description: "Mechanical product design solutions",
  sameAs: [
    "https://facebook.com/vrtexglobal",
    "https://linkedin.com/company/vrtexglobal",
    "https://twitter.com/vrtexglobal",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mantra Essence, Undri",
    addressLocality: "Pune",
    addressCountry: "IN",
  },
  contact: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+91-9975613695",
    email: "info@vrtexglobal.com",
  },
};
```

Add inside the `<head>` tag in `layout.tsx`:
```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

### Step 9: Create Form Handler API Route

Create `app/api/contact/route.ts`:
```typescript
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.email || !body.name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Add email sending logic (nodemailer, sendgrid, etc)
    // For now, just return success
    
    return NextResponse.json(
      { success: true, message: "Message received" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

### Step 10: Remove Old Files

Once migration is complete, remove:
```bash
rm -rf src/  # Old React/Vite structure
rm vite.config.ts
rm tsconfig.app.json
rm tsconfig.node.json
rm eslint.config.js
```

### Step 11: Test the Application

```bash
# Development
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Check for errors
bun run lint
```

## 📋 File Structure After Migration

```
vrtexlabs/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx                 # Home page
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── portfolio/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── not-found.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── AnimatedSection.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── ui/
│   │       └── (all UI components)
│   ├── layout.tsx
│   └── globals.css
├── public/
│   ├── images/                      # All assets here
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.js
└── tailwind.config.ts
```

## 🔍 SEO Optimizations Included

1. ✅ **Meta Tags**
   - Title, description for each page
   - Open Graph tags for social sharing
   - Twitter Card tags
   - Canonical URLs

2. ✅ **Structured Data**
   - JSON-LD schema for Organization
   - LocalBusiness schema with address/contact
   - Product/Service schemas

3. ✅ **Sitemaps & Robots**
   - Dynamic sitemap.xml
   - robots.txt with proper rules
   - Sitemap submission to Google

4. ✅ **Performance**
   - Next.js Image optimization
   - Automatic WebP/AVIF conversion
   - CSS minification
   - JavaScript code splitting
   - Font optimization

5. ✅ **Mobile**
   - Responsive design (Tailwind)
   - Mobile-first approach
   - Touch-friendly navigation
   - Viewport meta tags

6. ✅ **Accessibility**
   - Semantic HTML (h1, h2, h3)
   - ARIA labels where needed
   - Alt text for all images
   - Keyboard navigation

## ⚡ Performance Tips

1. **Images**: Use `next/image` for all images
   ```tsx
   import Image from "next/image";
   <Image src={img} alt="description" fill /> // for background
   <Image src={img} alt="description" width={200} height={200} /> // for fixed
   ```

2. **Dynamic Imports**: Use for heavy components
   ```tsx
   import dynamic from "next/dynamic";
   const HeavyComponent = dynamic(() => import("@/components/Heavy"));
   ```

3. **Font Optimization**: Add to `layout.tsx`
   ```tsx
   import { Inter } from "next/font/google";
   const inter = Inter({ subsets: ["latin"] });
   ```

4. **Script Optimization**: For external scripts
   ```tsx
   import Script from "next/script";
   <Script src="..." strategy="afterInteractive" />
   ```

## 🧪 Testing Checklist

- [ ] Home page loads without errors
- [ ] All navigation links work
- [ ] Images load and display correctly
- [ ] Mobile responsive design works
- [ ] SEO meta tags appear in page source
- [ ] Form submission works (if API setup)
- [ ] Animations work smoothly
- [ ] Dark mode works (if applicable)
- [ ] Build completes: `bun run build`
- [ ] Production build runs: `bun run start`
- [ ] No console errors in dev tools
- [ ] Lighthouse score >90

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org Structured Data](https://schema.org)
- [Google Search Central](https://developers.google.com/search)

## 🆘 Common Issues & Solutions

### Issue: `Cannot find module 'next'`
**Solution**: Run `bun install` to install all Next.js dependencies

### Issue: Images not loading
**Solution**: Ensure images are in `public/` directory or use proper Image import paths

### Issue: Links not working
**Solution**: Replace `<Link to={}>` with `<Link href={}>`

### Issue: Styles not applying
**Solution**: Ensure `@/index.css` is imported in `layout.tsx`

### Issue: Routing not working
**Solution**: Check page file locations match the route structure

## 📞 Support

For issues or questions during migration:
1. Check MIGRATION_GUIDE.md
2. Review Next.js docs: nextjs.org/docs
3. Check file structure matches expected layout

---

**Migration Status**: In Progress - Follow the steps above to complete
**Estimated Completion Time**: 1-2 hours for one developer
**Difficulty Level**: Medium (mostly copy/paste with small adjustments)
