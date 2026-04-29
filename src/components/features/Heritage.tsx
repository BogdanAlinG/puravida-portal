"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { H2, Text, Accent } from "@/components/ui/Typography";
import { Check } from "lucide-react";

const values = [
  "Bucovina Woodworking Tradition",
  "High-Performance Thermal Insulation",
  "Vlemmix Certified Trailers",
  "WiFi-Controlled Smart Heating",
  "Spruce Wood Artisanal Finishing",
  "Eco-Friendly Materials"
];

export const Heritage = () => {
  return (
    <Section id="story" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="order-2 lg:order-1">
          <Accent>Rooted in Tradition</Accent>
          <H2 className="mb-8">Craftsmanship that speaks for itself.</H2>
          
          <div className="space-y-6 mb-10">
            <Text className="text-xl leading-relaxed text-brand-charcoal/80">
              Our tiny houses are all built in Romania, by a team of incredibly talented artisans. We use treated and very resistant Romanian spruce and larch wood to create structures that last generations.
            </Text>
            <Text className="text-lg leading-relaxed text-brand-charcoal/60">
              Every Pura Vida hut is built on a Vlemmix trailer, designed for the open road and homologated with a Certificate of Conformity. From the initial wood selection to the hand-painted stained glass, we infuse every corner with heart and soul.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {values.map((value) => (
              <div key={value} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-sage/20 flex items-center justify-center">
                  <Check size={12} className="text-brand-sage" />
                </div>
                <span className="text-sm font-medium text-brand-charcoal/80">{value}</span>
              </div>
            ))}
          </div>

          <blockquote className="border-l-4 border-brand-terracotta pl-6 italic text-brand-charcoal/70 mb-8">
            "We don't just build houses; we build the freedom to live anywhere, 
            surrounded by the warmth of natural wood."
          </blockquote>
        </div>

        {/* Right: Visual */}
        <div className="order-1 lg:order-2 relative">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 border border-brand-terracotta translate-x-4 translate-y-4 -z-10" />
            <img 
              src="https://puravidahuts.com/wp-content/uploads/2021/08/MG_9443.jpg"
              alt="Bucovina Heritage"
              className="w-full h-full object-cover shadow-xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-terracotta/10 rounded-full blur-3xl z-0" />
        </div>
      </div>
    </Section>
  );
};
