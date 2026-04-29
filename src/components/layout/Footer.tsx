import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-brand-cream py-16 border-t border-brand-charcoal/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/">
              <img 
                src="/logo.png" 
                alt="Pura Vida Huts" 
                className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold">
              © 2026 Pura Vida Huts. Artisanal Quality from Bucovina.
            </p>
          </div>

          {/* Social & Legal */}
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://www.instagram.com/puravidahuts/" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-charcoal/60 hover:text-brand-terracotta transition-colors font-medium">Instagram</a>
            <a href="https://www.facebook.com/puravidahuts" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-charcoal/60 hover:text-brand-terracotta transition-colors font-medium">Facebook</a>
            <a href="#" className="text-sm text-brand-charcoal/60 hover:text-brand-terracotta transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="text-sm text-brand-charcoal/60 hover:text-brand-terracotta transition-colors font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
