"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { ProductShowcase } from "@/components/features/ProductShowcase";
import { Heritage } from "@/components/features/Heritage";
import { CinematicSection } from "@/components/features/CinematicSection";
import { Text } from "@/components/ui/Typography";
import { Footer } from "@/components/layout/Footer";

export default function ModelsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Intro / Mission */}
        <section className="bg-brand-cream py-20 border-b border-brand-charcoal/5">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <div className="max-w-3xl mx-auto">
              <Text className="text-xl md:text-2xl font-serif text-brand-charcoal leading-relaxed">
                "We believe that luxury shouldn't be confined to static walls. 
                Our huts are designed for the modern nomad who seeks the perfect 
                balance between mobility, comfort, and artisanal quality."
              </Text>
            </div>
          </div>
        </section>

        <ProductShowcase />
        <Heritage />
        <CinematicSection />
        
        {/* Contact CTA */}
        <section id="contact" className="bg-brand-charcoal text-brand-cream py-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-terracotta/5 skew-x-12 transform translate-x-1/4" />
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to start your journey?</h2>
                <p className="text-brand-cream/70 text-lg mb-12 max-w-lg">
                  Whether you're looking for a permanent residence or a unique 
                  vacation retreat, we're here to help you choose the perfect model.
                </p>
                <div className="flex flex-wrap gap-6">
                  <a href="mailto:contact@puravidahuts.com" className="text-2xl font-serif border-b-2 border-brand-terracotta hover:text-brand-terracotta transition-colors">
                    contact@puravidahuts.com
                  </a>
                  <span className="text-2xl font-serif text-brand-terracotta">+40 786 258 244</span>
                </div>
              </div>
              
              <div className="bg-white/5 p-8 md:p-12 backdrop-blur-xl border border-white/10 rounded-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Your Name" className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-terracotta transition-colors" />
                    <input type="email" placeholder="Email Address" className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-terracotta transition-colors" />
                  </div>
                  <select className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-terracotta transition-colors appearance-none">
                    <option className="bg-brand-charcoal">Select Model</option>
                    <option className="bg-brand-charcoal">Phoenix XXL</option>
                    <option className="bg-brand-charcoal">Daylight</option>
                    <option className="bg-brand-charcoal">Joy</option>
                  </select>
                  <textarea placeholder="Message" rows={4} className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-terracotta transition-colors resize-none" />
                  <button type="submit" className="w-full bg-brand-terracotta text-white py-4 uppercase tracking-widest font-bold hover:bg-brand-terracotta/90 transition-colors">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
