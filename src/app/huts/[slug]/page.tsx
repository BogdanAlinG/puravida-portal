import { huts } from "@/lib/data/huts";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/layout/Section";
import { H1, H2, Text, Accent } from "@/components/ui/Typography";
import { ProductGallery } from "@/components/features/ProductGallery";
import { TechSpecs } from "@/components/features/TechSpecs";
import { BookingEngine } from "@/components/features/BookingEngine";
import { Check } from "lucide-react";

export async function generateStaticParams() {
  return huts.map((hut) => ({
    slug: hut.slug,
  }));
}

export default async function HutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hut = huts.find((h) => h.slug === slug);

  if (!hut) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32 bg-brand-cream">
        <Section padded={false} className="pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Visuals & Info */}
            <div className="lg:col-span-7 space-y-16">
              <div>
                <Accent>{hut.accent}</Accent>
                <H1 className="mb-6">{hut.name}</H1>
                <Text className="text-xl leading-relaxed text-brand-charcoal/80">
                  {hut.fullDescription}
                </Text>
              </div>

              <ProductGallery images={hut.images} />

              {/* Technical Details */}
              <div id="tech" className="space-y-10">
                <H2 className="text-3xl">Technical Specifications</H2>
                <TechSpecs specs={hut.specs} />
              </div>

              {/* Features Grid */}
              <div className="space-y-10">
                <H2 className="text-3xl">Standard Features</H2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {hut.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-brand-terracotta/10 flex items-center justify-center group-hover:bg-brand-terracotta transition-colors">
                        <Check size={14} className="text-brand-terracotta group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-brand-charcoal/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Booking & Sticky Sidebar */}
            <div className="lg:col-span-5 relative">
              <BookingEngine modelName={hut.name} priceFrom={hut.priceFrom} />
            </div>
          </div>
        </Section>

        {/* Similar Models / Footer CTA Section */}
        <section className="bg-brand-charcoal py-32 text-center text-brand-cream">
          <div className="container mx-auto px-6 max-w-2xl">
            <Accent className="text-brand-sage">Not what you're looking for?</Accent>
            <H2 className="text-brand-cream mb-8">Every Pura Vida Hut is customizable.</H2>
            <Text className="text-brand-cream/60 mb-12">
              Our engineers and woodworkers are ready to adapt any of our 6 standard 
              models to your specific needs, from off-grid solar setups to 
              custom interior layouts.
            </Text>
            <div className="flex justify-center gap-4">
              <a href="/#huts" className="px-8 py-3 bg-brand-terracotta text-white uppercase tracking-widest font-bold hover:bg-brand-terracotta/90 transition-all">
                Explore All Models
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-cream py-12 border-t border-brand-charcoal/5">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-brand-charcoal/50">© 2026 Pura Vida Huts. Artisanal Quality from Bucovina.</p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-brand-charcoal/50 hover:text-brand-terracotta">Instagram</a>
            <a href="#" className="text-sm text-brand-charcoal/50 hover:text-brand-terracotta">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
