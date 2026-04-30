"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/layout/Section";
import { H1, H2, H3, Text, Accent } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { stayLocations } from "@/lib/data/stays";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MapPin, Waves, Mountain, ArrowRight, Compass, Calendar, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { StayBookingModal } from "@/components/features/StayBookingModal";

const atmospheres = [
  {
    id: "sea",
    title: "Sea Side",
    subtitle: "Endless Horizons",
    icon: Waves,
    image: "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-17.jpg",
    slugs: ["vama-veche"]
  },
  {
    id: "boutique",
    title: "Boutique Heritage",
    subtitle: "Historic Romana",
    icon: Sparkles,
    image: "https://puravidahuts.com/wp-content/uploads/2025/04/573A3866-scaled.jpg",
    slugs: ["little-bucharest-apartments"]
  },
  {
    id: "urban",
    title: "Urban Sanctuary",
    subtitle: "Central Bucharest",
    icon: MapPin,
    image: "https://puravidahuts.com/wp-content/uploads/2025/09/IMG_20250923_180523-scaled.jpg",
    slugs: ["tiny-houses-bucharest"]
  }
];

export default function TourismHome() {
  const [activeAtmosphere, setActiveAtmosphere] = React.useState<typeof atmospheres[0] | null>(null);
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [selectedLocation, setSelectedLocation] = React.useState("Any Location");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Cinematic Hero */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-charcoal">
          {/* Dynamic Background with Ken Burns Effect */}
          <div className="absolute inset-0 z-0">
            <motion.div
              key={activeAtmosphere?.id || "default"}
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ y }}
              className="absolute inset-0"
            >
              <Image
                src={activeAtmosphere?.image || "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-17.jpg"}
                fill
                className="object-cover brightness-[0.35]"
                alt="Pura Vida Experience"
                priority
              />
            </motion.div>
          </div>

          {/* Watermark Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, delay: 1 }}
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0.1, 0]) }}
            className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
          >
            <img src="/logo-wide.png" className="w-1/2 opacity-20 invert grayscale" alt="Pura Vida Watermark" />
          </motion.div>

          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-brand-terracotta/50" />
                <Accent className="text-brand-terracotta text-sm md:text-base uppercase tracking-[0.4em] mb-0">Artisanal Living Since 2012</Accent>
                <div className="h-[1px] w-12 bg-brand-terracotta/50" />
              </div>

              <H1 className="text-white mb-8 text-6xl md:text-[8vw] font-serif leading-[0.9] tracking-tight drop-shadow-2xl">
                The Art of <br />
                <span className="text-brand-terracotta italic font-light">Slow Living</span>
              </H1>

              <Text className="text-white/70 max-w-2xl mx-auto text-xl md:text-2xl mb-16 font-light leading-relaxed">
                Step into a world where time slows down. <br className="hidden md:block" />
                Handcrafted tiny houses in Romania's most soul-stirring landscapes.
              </Text>

              {/* Quick Booking Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-4xl mx-auto bg-black/40 backdrop-blur-2xl border border-white/10 p-2 rounded-full hidden md:flex items-center gap-2 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="flex-1 px-8 py-4 text-left border-r border-white/10 group cursor-pointer hover:bg-white/5 transition-colors rounded-l-full relative">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-brand-terracotta font-bold mb-1">Destination</div>
                  <select
                    className="bg-transparent text-sm font-medium text-white focus:outline-none appearance-none cursor-pointer w-full"
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    value={selectedLocation}
                  >
                    <option className="bg-brand-charcoal">Any Location</option>
                    {stayLocations.map(l => (
                      <option key={l.slug} value={l.name} className="bg-brand-charcoal">{l.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 px-8 py-4 text-left border-r border-white/10 group cursor-pointer hover:bg-white/5 transition-colors">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-brand-terracotta font-bold mb-1">Check-in</div>
                  <div className="text-sm font-medium text-white/50 italic">Select Dates</div>
                </div>
                <div className="flex-1 px-8 py-4 text-left group cursor-pointer hover:bg-white/5 transition-colors">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-brand-terracotta font-bold mb-1">Travelers</div>
                  <div className="text-sm font-medium text-white/50 italic">Add Guests</div>
                </div>
                <Button
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-brand-terracotta h-16 px-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform font-bold tracking-widest text-xs"
                >
                  CHECK AVAILABILITY
                </Button>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center md:hidden">
                <Button size="lg" className="bg-brand-terracotta border-none h-16 px-10 text-lg rounded-full">
                  Explore Stays
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Social Proof Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 z-20"
          >
            <div className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold rotate-180">
              Rated 9.6/10 on Booking.com
            </div>
            <div className="h-24 w-[1px] bg-white/10" />
            <div className="flex flex-col gap-4 text-brand-terracotta">
              <Star size={16} className="fill-brand-terracotta" />
              <Star size={16} className="fill-brand-terracotta" />
              <Star size={16} className="fill-brand-terracotta" />
            </div>
          </motion.div>

          {/* Featured Teaser (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-32 left-12 hidden 2xl:flex items-center gap-6 z-20 bg-black/40 backdrop-blur-xl p-4 border border-white/10 rounded-sm group cursor-pointer"
          >
            <div className="relative w-20 h-20 overflow-hidden">
               <img src="https://puravidahuts.com/wp-content/uploads/2025/09/IMG_20250923_180523-scaled.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Teaser" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-terracotta font-bold mb-1">New Experience</div>
              <div className="text-white font-serif text-lg">Urban Sanctuary</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 pointer-events-none"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-brand-terracotta to-transparent relative overflow-hidden">
              <motion.div
                animate={{ y: [0, 48, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-4 bg-white"
              />
            </div>
          </motion.div>

          {/* Bottom Atmosphere Tabs (Mobile Hidden) */}
          <div className="absolute bottom-0 left-0 right-0 hidden lg:flex border-t border-white/10 backdrop-blur-md bg-black/40 z-30">
            {atmospheres.map((atm) => (
              <div
                key={atm.id}
                onMouseEnter={() => setActiveAtmosphere(atm)}
                onMouseLeave={() => setActiveAtmosphere(null)}
                className={cn(
                  "flex-1 border-r border-white/10 p-8 transition-all duration-500 group cursor-pointer relative overflow-hidden",
                  activeAtmosphere?.id === atm.id ? "bg-white/10" : "hover:bg-white/5"
                )}
              >
                {activeAtmosphere?.id === atm.id && (
                  <motion.div layoutId="tab-active" className="absolute inset-0 bg-brand-terracotta/10" />
                )}
                <div className="flex items-center gap-4 mb-2 relative z-10">
                  <atm.icon className={cn("transition-colors duration-300", activeAtmosphere?.id === atm.id ? "text-white" : "text-brand-terracotta")} size={24} />
                  <span className="text-sm font-bold uppercase tracking-widest text-white">{atm.title}</span>
                </div>
                <p className="text-white/40 text-xs uppercase tracking-wider relative z-10">{atm.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Atmosphere Grid - Premium Expanding Layout */}
        <section className="min-h-screen lg:h-[80vh] w-full flex flex-col lg:flex-row bg-brand-charcoal overflow-hidden border-b border-white/10">
          {atmospheres.map((atm) => (
            <motion.div
              key={atm.id}
              onMouseEnter={() => setActiveAtmosphere(atm)}
              onMouseLeave={() => setActiveAtmosphere(null)}
              initial={{ flex: 1 }}
              animate={{ 
                flex: activeAtmosphere?.id === atm.id ? 2 : 1,
                opacity: activeAtmosphere && activeAtmosphere.id !== atm.id ? 0.6 : 1
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative group cursor-pointer overflow-hidden border-r border-white/5 h-full"
            >
              <img 
                src={atm.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={atm.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 transition-opacity duration-500 group-hover:opacity-90" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <motion.div
                  animate={{ y: activeAtmosphere?.id === atm.id ? 0 : 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Accent className="text-brand-terracotta mb-2">{atm.subtitle}</Accent>
                  <H2 className="text-white text-5xl md:text-6xl font-serif mb-6 leading-none">{atm.title}</H2>
                  
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: activeAtmosphere?.id === atm.id ? 1 : 0,
                      height: activeAtmosphere?.id === atm.id ? "auto" : 0
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <Text className="text-white/60 mb-8 max-w-md">
                      Experience the perfect harmony between handcrafted comfort and {atm.id === 'sea' ? 'the rhythm of the tides' : atm.id === 'boutique' ? 'the elegance of history' : 'the soul of the city'}.
                    </Text>
                    <Link href={`/stay?filter=${atm.id}`}>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-charcoal rounded-full px-8">
                        DISCOVER {atm.title.toUpperCase()} <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Number Indicator */}
              <div className="absolute top-12 left-12">
                <div className="text-white/20 font-serif text-4xl italic">0{atmospheres.indexOf(atm) + 1}</div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Experience Section */}
        <Section className="bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <Accent>The Philosophy</Accent>
                <H2 className="text-5xl">Live the Dream Before You Own It.</H2>
                <Text className="text-xl italic border-l-4 border-brand-terracotta pl-8">
                  "Our stays aren't just accommodation; they are live demonstrations of
                  what your future could look like."
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-brand-sage/10 flex items-center justify-center text-brand-sage rounded-full">
                      <Compass size={20} />
                    </div>
                    <H3>Test the Layout</H3>
                    <Text className="text-sm">Feel the space of our Phoenix or Daylight models in person.</Text>
                  </div>
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-brand-sage/10 flex items-center justify-center text-brand-sage rounded-full">
                      <Calendar size={20} />
                    </div>
                    <H3>Easy Inquiries</H3>
                    <Text className="text-sm">Quick direct booking with no hidden platform fees.</Text>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img src="https://puravidahuts.com/wp-content/uploads/2021/12/Joy27.jpg" className="rounded-sm shadow-xl aspect-[3/4] object-cover" alt="Joy Interior" />
                  <img src="https://puravidahuts.com/wp-content/uploads/2021/08/MG_9467.jpg" className="rounded-sm shadow-xl aspect-[4/5] object-cover" alt="Daylight Night" />
                </div>
                <div className="space-y-4">
                  <img src="https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-134.jpg" className="rounded-sm shadow-xl aspect-[4/5] object-cover" alt="Hut Exterior" />
                  <img src="https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-120.jpg" className="rounded-sm shadow-xl aspect-[3/4] object-cover" alt="Beach Night" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Top Picks Showcase */}
        <Section className="bg-brand-cream border-y border-brand-charcoal/5">
          <div className="text-center mb-20">
            <Accent>Featured Destinations</Accent>
            <H2>Curated for the Soul</H2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              stayLocations.find(l => l.slug === "vama-veche"),
              stayLocations.find(l => l.slug === "tiny-houses-bucharest"),
              stayLocations.find(l => l.slug === "little-bucharest-apartments")
            ].map((loc) => loc && (
              <Link key={loc.slug} href={`/stay/${loc.slug}`} className="group">
                <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-72 overflow-hidden">
                    <img src={loc.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={loc.name} />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                      <Star size={12} className="fill-brand-terracotta text-brand-terracotta" />
                      <span className="text-xs font-bold">4.9</span>
                    </div>
                  </div>
                  <div className="p-8 space-y-4 flex-grow flex flex-col">
                    <div className="flex justify-between items-start">
                      <H3 className="mb-0 group-hover:text-brand-terracotta transition-colors leading-tight">{loc.name}</H3>
                      <loc.icon className="text-brand-sage shrink-0" size={20} />
                    </div>
                    <Text className="text-sm line-clamp-2 flex-grow">{loc.description}</Text>
                    <div className="pt-4 flex justify-between items-center border-t border-brand-charcoal/5">
                      <span className="text-brand-terracotta font-bold">{loc.price}</span>
                      <span className="text-xs uppercase tracking-widest font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Details <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/stay">
              <Button variant="outline" size="lg" className="border-brand-charcoal hover:bg-brand-charcoal hover:text-white">
                View All 5 Locations
              </Button>
            </Link>
          </div>
        </Section>

        {/* New Contact CTA (Tourism Focused) */}
        <section id="contact" className="bg-brand-charcoal text-brand-cream py-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-terracotta/5 skew-x-12 transform translate-x-1/4" />

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Accent className="text-brand-terracotta">Book Your Escape</Accent>
                <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to unplug?</h2>
                <p className="text-brand-cream/70 text-lg mb-12 max-w-lg">
                  Direct inquiries get the best rates. Message our concierge team to find your
                  perfect atmosphere and availability.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-terracotta">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-widest text-brand-cream/40">Our Hub</div>
                      <div className="text-xl font-serif">Bucovina, Romania</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-terracotta">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-widest text-brand-cream/40">Inquiries</div>
                      <div className="text-xl font-serif">book@puravidahuts.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-8 md:p-12 backdrop-blur-xl border border-white/10 rounded-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Your Name" className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-terracotta transition-colors text-white" />
                    <input type="email" placeholder="Email Address" className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-terracotta transition-colors text-white" />
                  </div>
                  <select className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-terracotta transition-colors appearance-none text-white">
                    <option className="bg-brand-charcoal text-white">Desired Atmosphere</option>
                    <option className="bg-brand-charcoal text-white">Sea Side Village</option>
                    <option className="bg-brand-charcoal text-white">Mountain Retreat</option>
                    <option className="bg-brand-charcoal text-white">Urban Sanctuary</option>
                  </select>
                  <textarea placeholder="Tell us about your trip (Dates, People...)" rows={4} className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-terracotta transition-colors resize-none text-white" />
                  <button type="submit" className="w-full bg-brand-terracotta text-white py-4 uppercase tracking-widest font-bold hover:bg-brand-terracotta/90 transition-colors">
                    Send Booking Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StayBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        locationName="Pura Vida Stays"
      />
      <Footer />
    </div>
  );
}
