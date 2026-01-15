"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <span className="inline-block text-9xl font-bold text-foreground/20">
            404
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">
              Explore Services
            </Link>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Need help? Contact us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="tel:+919975613695" className="text-foreground hover:text-muted-foreground transition">
              +91 9975 613 695
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a href="mailto:info@vrtexglobal.com" className="text-foreground hover:text-muted-foreground transition">
              info@vrtexglobal.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
