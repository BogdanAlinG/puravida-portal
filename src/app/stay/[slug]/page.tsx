"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import { stayLocations, StayLocation } from "@/lib/data/stays";
import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/layout/Section";
import { H1, H2, H3, Text, Accent } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { StayBookingModal } from "@/components/features/StayBookingModal";
import { 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Star, 
  ArrowLeft,
  Wifi,
  Wind,
  Car,
  UtensilsCrossed,
  Tv,
  Coffee,
  Waves,
  Mountain,
  Building2,
  Tent,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const amenityIcons: Record<string, any> = {
  "Free Wi-Fi": Wifi,
  "High-speed Wi-Fi": Wifi,
  "Air Conditioning": Wind,
  "Private Parking": Car,
  "Kitchenette": UtensilsCrossed,
  "Full Kitchen": UtensilsCrossed,
  "Smart TV with Netflix": Tv,
  "Smart TV": Tv,
  "Coffee Maker": Coffee,
  "Beachfront Access": Waves,
  "Mountain Views": Mountain,
  "Central Locations": MapPin,
};

export default function StayDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [showAllGallery, setShowAllGallery] = React.useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);
  const slug = params.slug as string;
  
  const location = stayLocations.find((loc) => loc.slug === slug);

  // Keyboard navigation for Lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => 
          prev !== null ? (prev + 1) % location!.gallery.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => 
          prev !== null ? (prev - 1 + location!.gallery.length) % location!.gallery.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, location]);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream">
        <div className="text-center">
          <H2>Location not found</H2>
          <Button onClick={() => router.push("/stay")} className="mt-4">Back to all locations</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={location.image} 
          alt={location.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-4xl"
            >
              <button 
                onClick={() => router.push("/stay")}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium uppercase tracking-widest">Back to Gallery</span>
              </button>
              <Accent className="text-brand-terracotta mb-4">{location.price}</Accent>
              <H1 className="text-white mb-6 md:text-8xl">{location.name}</H1>
              <div className="flex flex-wrap gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-brand-terracotta" />
                  <span className="text-sm font-medium">{location.locationInfo}</span>
                </div>
                {location.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-terracotta rounded-full" />
                    <span className="text-sm font-medium uppercase tracking-wider">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 md:px-12 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-sm shadow-xl"
            >
              <H3 className="text-3xl mb-6">About the Experience</H3>
              <Text className="text-xl leading-relaxed mb-8 italic text-brand-charcoal/60 border-l-4 border-brand-terracotta pl-6">
                {location.description}
              </Text>
              <Text className="leading-relaxed">
                {location.fullDescription}
              </Text>

              {location.transport && (
                <div className="mt-12 p-6 bg-brand-sage/5 rounded-sm border border-brand-sage/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-brand-sage" size={24} />
                    <H3 className="mb-0">Transport & Access</H3>
                  </div>
                  <Text>{location.transport}</Text>
                </div>
              )}
            </motion.div>

            {/* Gallery Grid */}
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <div>
                  <Accent>Visual Story</Accent>
                  <H2 className="mb-0">Gallery</H2>
                </div>
                <Text className="text-sm font-bold text-brand-charcoal/40 uppercase tracking-widest">{location.gallery.length} Images</Text>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {location.gallery.slice(0, showAllGallery ? location.gallery.length : 6).map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i % 6 * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedImageIndex(i)}
                    className={cn(
                      "overflow-hidden rounded-sm shadow-lg aspect-[4/3] group cursor-pointer relative",
                      i === 0 && !showAllGallery && "md:col-span-2 lg:col-span-2 aspect-[16/9]"
                    )}
                  >
                    <img src={img} alt={`${location.name} gallery ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <Sparkles size={20} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {!showAllGallery && location.gallery.length > 6 && (
                <div className="text-center pt-8">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => setShowAllGallery(true)}
                    className="border-brand-charcoal hover:bg-brand-charcoal hover:text-white px-12 py-6 rounded-full font-bold tracking-[0.2em]"
                  >
                    VIEW ALL {location.gallery.length} IMAGES
                  </Button>
                </div>
              )}
            </div>

            {/* Amenities */}
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl space-y-10">
              <H2>Premium Amenities</H2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {location.amenities.map((amenity, i) => {
                  const Icon = amenityIcons[amenity] || CheckCircle2;
                  return (
                    <div key={i} className="flex flex-col gap-3 group">
                      <div className="w-12 h-12 bg-brand-sage/10 rounded-full flex items-center justify-center text-brand-sage group-hover:bg-brand-sage group-hover:text-white transition-all duration-300">
                        <Icon size={20} />
                      </div>
                      <span className="text-sm font-bold text-brand-charcoal/80 uppercase tracking-widest">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Reviews */}
            <div className="space-y-10">
              <H2>Guest Impressions</H2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {location.reviews.map((rev, i) => (
                  <div key={i} className="bg-white p-8 rounded-sm shadow-md border-t-4 border-brand-terracotta relative">
                    <div className="absolute top-4 right-8 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-brand-terracotta text-brand-terracotta" />
                      ))}
                    </div>
                    <Text className="text-brand-charcoal/80 italic mb-6">"{rev.text}"</Text>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-charcoal/10 rounded-full" />
                      <span className="font-bold text-sm uppercase tracking-widest">{rev.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-brand-charcoal text-white p-10 rounded-sm shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                  <location.icon size={120} />
                </div>
                
                <Accent className="text-brand-terracotta mb-2">Book Your Stay</Accent>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-serif">{location.price.split('/')[0]}</span>
                  <span className="text-white/40 text-sm">/ night</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-white/80 pb-4 border-b border-white/10">
                    <CheckCircle2 size={18} className="text-brand-terracotta" />
                    <span className="text-sm font-medium">Guaranteed Lowest Price</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80 pb-4 border-b border-white/10">
                    <CheckCircle2 size={18} className="text-brand-terracotta" />
                    <span className="text-sm font-medium">Free High-Speed Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 size={18} className="text-brand-terracotta" />
                    <span className="text-sm font-medium">Self Check-in Available</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-brand-terracotta hover:bg-brand-terracotta/90 text-white border-none py-8 text-xl"
                  onClick={() => setIsBookingOpen(true)}
                >
                  Request Booking
                </Button>
                
                <a href={`https://wa.me/40786258244?text=I'm interested in booking ${location.name}`} className="block mt-4">
                  <Button variant="outline" size="lg" className="w-full border-white/20 text-white hover:bg-white/10">
                    WhatsApp Support
                  </Button>
                </a>

                <p className="mt-6 text-[10px] text-center text-white/40 uppercase tracking-[0.2em]">
                  Minimum stay: 2-3 nights depending on season
                </p>
              </motion.div>

              <div className="bg-white p-6 rounded-sm shadow-md border-l-4 border-brand-sage">
                <Text className="text-sm">
                  Need a custom arrangement or group booking? Our concierge team is ready to help you plan the perfect Pura Vida escape.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-brand-charcoal text-white/50 py-20 mt-32 border-t border-white/5">
        <div className="container mx-auto px-6 text-center space-y-6">
          <div className="text-brand-cream text-2xl font-serif">Pura Vida Huts</div>
          <p className="text-sm">Artisanal Quality from Bucovina. Experienced across Romania.</p>
          <div className="flex justify-center gap-8 pt-4">
             <a href="#" className="hover:text-brand-terracotta transition-colors uppercase tracking-widest text-[10px] font-bold">Privacy Policy</a>
             <a href="#" className="hover:text-brand-terracotta transition-colors uppercase tracking-widest text-[10px] font-bold">Terms of Service</a>
          </div>
        </div>
      </footer>

      <StayBookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        locationName={location.name}
      />

      {/* Cinematic Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-charcoal/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
            >
              <X size={40} />
            </button>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => 
                  prev !== null ? (prev - 1 + location.gallery.length) % location.gallery.length : null
                );
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all z-[110] group"
            >
              <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => 
                  prev !== null ? (prev + 1) % location.gallery.length : null
                );
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all z-[110] group"
            >
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                src={location.gallery[selectedImageIndex]}
                alt={`Gallery image ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm"
              />
              
              <div className="flex flex-col items-center gap-2">
                <div className="px-6 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                  <span className="text-white font-bold tracking-[0.3em] uppercase text-xs">
                    {selectedImageIndex + 1} <span className="text-white/30 mx-2">/</span> {location.gallery.length}
                  </span>
                </div>
                <Text className="text-white/40 text-[10px] uppercase tracking-[0.2em]">Use Arrow Keys to Navigate • ESC to Close</Text>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
