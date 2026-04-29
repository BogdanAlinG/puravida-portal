import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/layout/Section";
import { H1, H2, Text, Accent } from "@/components/ui/Typography";

const faqs = [
  {
    q: "What driver license do I need for this?",
    a: "For our smaller houses you can use B category driver’s license. For the bigger ones you do need the BE or CE driver’s license. We will mention on each individual house the weight and the necessary driver’s licence."
  },
  {
    q: "What type of vehicle do I need in order to be able to pull this?",
    a: "Our smaller models can be pulled with a normal car with at least 110HP. For the bigger models you should use a SUV. A 4×4 vehicule would be your best option that can tow 3.5 tons like Vw Touareg or Mercedes ML."
  },
  {
    q: "How do you heat your house?",
    a: "Electrical heating is used to heat our houses. We primarily use WiFi-controlled underfloor heating systems and optional electric fireplaces for maximum comfort."
  },
  {
    q: "What's the insulation like?",
    a: "Our houses are insulated for the harsh Romanian climate (+40° in Summer and -25° in Winter). We use high-performance rock wool, anti-condensation foils, and treated wood paneling."
  },
  {
    q: "What are your delivery times?",
    a: "Once we decide on the final design, a 4-month delivery period should be taken into account for our artisanal construction process."
  },
  {
    q: "Are the trailers homologated?",
    a: "Yes, all our trailers have a COC (Certificate of Conformity) and are ready for registration with a proper license plate for the open road."
  },
  {
    q: "What is the minimum stay for booking a hut?",
    a: "The minimum period for accommodation in our tiny houses is 3 nights during weekends and 2 nights during the week. For our glamping tents, the minimum stay is 2 nights."
  },
  {
    q: "Do you offer camping spots for vans and tents?",
    a: "Yes! In our Vama Veche Sea Side Village, we provide dedicated spaces for tents, campervans, caravans, and motorhomes right near the beach."
  },
  {
    q: "Is the furniture included when I buy a house?",
    a: "While our houses come turn-key ready, we often have special promotions. Currently, any tiny house purchased includes ALL furniture and ALL high-end appliances for free as a gift from Pura Vida Huts."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      <main className="pt-32 pb-20">
        <Section>
          <div className="max-w-3xl mx-auto">
            <Accent>Knowledge Base</Accent>
            <H1 className="mb-12">Frequently Asked Questions</H1>
            
            <div className="space-y-12">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-brand-charcoal/10 pb-8 group">
                  <H2 className="text-xl mb-4 group-hover:text-brand-terracotta transition-colors">
                    {faq.q}
                  </H2>
                  <Text className="text-brand-charcoal/70 leading-relaxed">
                    {faq.a}
                  </Text>
                </div>
              ))}
            </div>

            <div className="mt-20 p-12 bg-brand-charcoal text-brand-cream rounded-sm">
              <H2 className="text-brand-cream mb-4">Still have questions?</H2>
              <Text className="text-brand-cream/60 mb-8">
                Our team is ready to answer any technical or logistical questions you might have about your future tiny house.
              </Text>
              <a href="/#contact" className="inline-block px-8 py-3 bg-brand-terracotta text-white uppercase tracking-widest font-bold hover:bg-brand-terracotta/90 transition-all">
                Get in Touch
              </a>
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
