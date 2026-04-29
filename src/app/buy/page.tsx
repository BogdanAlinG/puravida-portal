import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/layout/Section";
import { H1, H2, H3, Text, Accent } from "@/components/ui/Typography";
import { CheckCircle, Truck, ShieldCheck, MapPin } from "lucide-react";

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <Section className="bg-brand-charcoal text-brand-cream py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Accent className="text-brand-terracotta">Ready to ship</Accent>
            <H1 className="text-brand-cream mb-6">Buy Your Tiny House</H1>
            <Text className="text-brand-cream/70 text-xl mb-12">
              Why pay double or triple the price when you can have artisanal quality at a fair price? 
              We build your tiny home on a budget without compromising on soul.
            </Text>
            
            <div className="inline-block p-6 border border-brand-terracotta/30 bg-brand-terracotta/10 rounded-sm">
              <H3 className="text-brand-terracotta mb-2 italic">Special Offer</H3>
              <Text className="text-brand-cream font-bold mb-6">
                Buy a tiny house this month and receive ALL furniture and ALL appliances for FREE!
              </Text>
              <a 
                href="https://www.canva.com/design/DAFy8fikRzs/view?utm_content=DAFy8fikRzs&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-brand-terracotta text-white font-bold tracking-widest uppercase hover:bg-brand-terracotta/90 transition-all text-sm"
              >
                View Full Catalog (PDF)
              </a>
            </div>
          </div>
        </Section>

        {/* The Process */}
        <Section>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-sage/10 flex items-center justify-center text-brand-sage rounded-full">
                  <CheckCircle size={24} />
                </div>
                <H3>1. Selection</H3>
                <Text className="text-sm text-brand-charcoal/60">Choose from our 9 distinct models or customize a unique plan for your needs.</Text>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-sage/10 flex items-center justify-center text-brand-sage rounded-full">
                  <ShieldCheck size={24} />
                </div>
                <H3>2. Contract</H3>
                <Text className="text-sm text-brand-charcoal/60">Transparent pricing and clear timelines. No hidden fees or surprises.</Text>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-sage/10 flex items-center justify-center text-brand-sage rounded-full">
                  <Truck size={24} />
                </div>
                <H3>3. Production</H3>
                <Text className="text-sm text-brand-charcoal/60">4-month artisanal build cycle in our Bucovina workshop.</Text>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-sage/10 flex items-center justify-center text-brand-sage rounded-full">
                  <MapPin size={24} />
                </div>
                <H3>4. Delivery</H3>
                <Text className="text-sm text-brand-charcoal/60">Transport available everywhere in Europe on homologated Vlemmix trailers.</Text>
              </div>
            </div>
          </div>
        </Section>

        {/* Locations */}
        <Section className="bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <H2 className="mb-12">Free Testing Locations</H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-8 border border-brand-charcoal/5 rounded-sm">
                <H3 className="mb-4">Romania</H3>
                <ul className="space-y-2 text-brand-charcoal/60">
                  <li>• Vama Veche (Tiny House Village)</li>
                  <li>• Rasnov (Bucovina Spirit)</li>
                  <li>• Bucharest (Showroom)</li>
                  <li>• Cluj-Napoca (Strategic Hub)</li>
                  <li>• Iasi (Workshop)</li>
                </ul>
              </div>
              <div className="p-8 border border-brand-charcoal/5 rounded-sm">
                <H3 className="mb-4">The Netherlands</H3>
                <ul className="space-y-2 text-brand-charcoal/60">
                  <li>• Near Amsterdam (International Hub)</li>
                  <li>• Direct viewing available by appointment</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16">
              <Text className="mb-8 font-serif text-lg italic">"A hut is a refuge from the hectic world we live in."</Text>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a href="tel:+40786258244" className="px-8 py-3 bg-brand-terracotta text-white font-bold tracking-widest uppercase hover:bg-brand-terracotta/90 transition-all">
                  Call +40 786 258 244
                </a>
                <a href="mailto:contact@puravidahuts.com" className="px-8 py-3 border border-brand-charcoal text-brand-charcoal font-bold tracking-widest uppercase hover:bg-brand-charcoal hover:text-white transition-all">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <footer className="bg-brand-cream py-12 border-t border-brand-charcoal/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-brand-charcoal/50">© 2026 Pura Vida Huts. Artisanal Quality from Bucovina.</p>
        </div>
      </footer>
    </div>
  );
}
