#!/bin/bash

# Next.js Migration Setup Script for VRTEXGLOBAL
# This script sets up the directory structure and makes necessary file movements

set -e  # Exit on error

echo "🚀 Starting Next.js Migration for VRTEXGLOBAL..."

# Create app directory structure
echo "📁 Creating app directory structure..."
mkdir -p app/{about,services,portfolio,contact}
mkdir -p app/components/ui
mkdir -p public/images

# Move assets from src/assets to public/images
echo "🖼️  Moving assets..."
if [ -d "src/assets" ]; then
  cp src/assets/* public/images/ 2>/dev/null || true
  echo "✅ Assets copied to public/images/"
fi

# Create public files for SEO
echo "📝 Creating SEO files..."

# Create robots.txt
cat > public/robots.txt <<'EOF'
User-agent: *
Allow: /

Sitemap: https://vrtexglobal.com/sitemap.xml
EOF

# Create sitemap.xml
cat > public/sitemap.xml <<'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://vrtexglobal.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://vrtexglobal.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://vrtexglobal.com/services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://vrtexglobal.com/portfolio</loc>
    <changefreq>bi-weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://vrtexglobal.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
EOF

echo "✅ SEO files created (robots.txt, sitemap.xml)"

echo ""
echo "✨ Migration setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Run: bun install"
echo "2. Update component imports in page files"
echo "3. Move UI components from src/components/ui to app/components/ui"
echo "4. Replace react-router imports with next/link and next/navigation"
echo "5. Run: bun run dev"
echo ""
