"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/layout/Section";
import { H1, H2, H3, Text, Accent } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { MapPin, Waves, Mountain, Building2 } from "lucide-react";
import { StayBookingModal } from "@/components/features/StayBookingModal";

const locations = [
  {
    name: "Vama Veche Sea Side Village",
    description: "The ultimate tiny house experience right on the beach. A perfect blend of chill daytime vibes and vibrant party nights in Romania's most famous seaside village.",
    price: "From €80/night",
    icon: Waves,
    image: "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-134.jpg",
    details: ["Beachfront Access", "Tiny House Cluster", "Vibrant Atmosphere"]
  },
  {
    name: "Mamaia Nord Studios & Penthouses",
    description: "20 brand new studios, apartments, and 3 dream Penthouses. Located just 400m from the beach, fully equipped with premium appliances including air fryers and coffee makers.",
    price: "From 400 RON/night",
    icon: Building2,
    image: "https://puravidahuts.com/wp-content/uploads/2023/07/IMG-20230711-WA0102-scaled.jpg",
    details: ["Sea View Terrace", "Modern Design", "Full Kitchenette"]
  },
  {
    name: "Bucovina Garden Retreat",
    description: "Located in Câmpulung Moldovenesc, in the heart of Bucovina. Two tiny houses nestled in a traditional garden near UNESCO protected monasteries. Peace, history, and craftsmanship.",
    price: "Contact for Rates",
    icon: Mountain,
    image: "https://puravidahuts.com/wp-content/uploads/2021/08/MG_9494-scaled.jpg",
    details: ["Traditional Garden", "UNESCO Proximity", "Mountain Air"]
  },
  {
    name: "Bucharest Central Hub",
    description: "Experience tiny living in diverse central locations throughout the Romanian capital. Perfect for digital nomads or travelers seeking a unique urban sanctuary.",
    price: "From €65/night",
    icon: MapPin,
    image: "https://puravidahuts.com/wp-content/uploads/2022/05/Phoenix-tiny-house-Pura-Vida-6-scaled.jpeg",
    details: ["Central Locations", "Urban Sanctuary", "Compact Design"]
  }
];

export default function StayPage() {
  const [selectedLocation, setSelectedLocation] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      <main className="pt-32 pb-20">
        <Section className="text-center mb-12">
          <Accent>Experience Pura Vida</Accent>
          <H1 className="mb-6">Book a Tiny House</H1>
          <Text className="max-w-2xl mx-auto text-brand-charcoal/70">
            Before you buy, why not stay? Experience the magic of tiny living in our curated locations 
            across the beach, mountains, and city.
          </Text>
        </Section>

        <Section>
          <div className="container mx-auto px-6 space-y-24">
            {locations.map((loc, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="w-full lg:w-1/2 aspect-[16/10] overflow-hidden rounded-sm shadow-2xl relative group">
                  <img 
                    src={loc.image} 
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 p-4 bg-brand-cream/90 backdrop-blur-sm rounded-full text-brand-terracotta">
                    <loc.icon size={24} />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-6">
                  <Accent className="text-brand-terracotta">{loc.price}</Accent>
                  <H2 className="text-4xl">{loc.name}</H2>
                  <Text className="text-lg text-brand-charcoal/70 leading-relaxed">
                    {loc.description}
                  </Text>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 border-b border-brand-charcoal/10">
                    {loc.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-medium text-brand-sage uppercase tracking-wider">
                        <div className="w-1.5 h-1.5 bg-brand-terracotta rounded-full" />
                        {detail}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="flex-1"
                      onClick={() => setSelectedLocation(loc.name)}
                    >
                      Book Now
                    </Button>
                    <a href={`https://wa.me/40786258244?text=I'm interested in booking a stay at ${loc.name}`} className="flex-1">
                      <Button variant="outline" size="lg" className="w-full">WhatsApp Us</Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact CTA */}
        <Section className="bg-brand-charcoal text-brand-cream py-20 mt-20">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <H2 className="text-brand-cream">Guaranteed Best Price</H2>
            <Text className="text-brand-cream/60">
              Booking directly through our site ensures the lowest rate. Minimum stay is 3 nights on weekends 
              and 2 nights during the week. 
            </Text>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <div className="text-center">
                <Text className="text-brand-terracotta text-sm uppercase tracking-widest font-bold mb-2">WhatsApp Support</Text>
                <Text className="text-xl font-serif">+40 786 258 244</Text>
              </div>
              <div className="text-center">
                <Text className="text-brand-terracotta text-sm uppercase tracking-widest font-bold mb-2">Email Inquiries</Text>
                <Text className="text-xl font-serif">book@puravidahuts.com</Text>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <StayBookingModal 
        isOpen={!!selectedLocation} 
        onClose={() => setSelectedLocation(null)} 
        locationName={selectedLocation || ""}
      />
      
      <footer className="bg-brand-cream py-12 border-t border-brand-charcoal/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-brand-charcoal/50">© 2026 Pura Vida Huts. Artisanal Quality from Bucovina.</p>
        </div>
      </footer>
    </div>
  );
}
