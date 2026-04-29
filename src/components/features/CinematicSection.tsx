"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { H2, Text, Accent } from "@/components/ui/Typography";

export const CinematicSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-brand-charcoal">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-charcoal/60 z-10" />
        <video 
          src="https://puravidahuts.com/wp-content/uploads/2023/10/3203197048428700262.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <Accent className="text-brand-terracotta mb-4">The Artistic Vision</Accent>
          <H2 className="text-brand-cream text-4xl md:text-6xl mb-8">
            Crafted for the soul, <br className="hidden md:block" /> built for the road.
          </H2>
          <Text className="text-brand-cream/70 text-lg mb-12">
            Experience the artisanal journey from raw Bucovina timber to 
            your future mobile sanctuary.
          </Text>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 mx-auto text-brand-cream"
          >
            <div className="w-16 h-16 rounded-full border border-brand-cream/30 flex items-center justify-center group-hover:bg-brand-terracotta group-hover:border-brand-terracotta transition-all duration-300">
              <Play size={24} fill="currentColor" />
            </div>
            <span className="text-sm uppercase tracking-widest font-bold">Watch Full Tour</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
