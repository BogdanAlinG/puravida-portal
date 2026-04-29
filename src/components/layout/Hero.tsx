"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { H1, Text, Accent } from "@/components/ui/Typography";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-charcoal">
      {/* Background Image Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-brand-charcoal/40 z-10" />
        <img 
          src="https://puravidahuts.com/wp-content/uploads/2024/07/cover-stay2.jpg" 
          alt="Pura Vida Huts Hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 container mx-auto px-6 md:px-12 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Accent className="text-brand-sage mb-2">Artisanal Living Since 2012</Accent>
          <H1 className="text-white md:text-8xl mb-8 tracking-tight">
            Escape the <span className="italic font-light">Ordinary</span>
          </H1>
          <Text className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl mb-12">
            Experience the Bucovina woodworking heritage through our modern, high-quality 
            tiny houses. Crafted for those who value freedom and sustainable luxury.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-12"
              onClick={() => document.getElementById('huts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Huts
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto px-12 border-white text-white hover:bg-white hover:text-brand-charcoal"
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn the Tradition
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-terracotta to-transparent" />
      </motion.div>
    </section>
  );
};
