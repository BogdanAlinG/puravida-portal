"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { H3, Text, Accent } from "@/components/ui/Typography";
import { ArrowRight, Maximize2, Ruler, Weight } from "lucide-react";
import { huts } from "@/lib/data/huts";

const ProductCard = ({ model, index }: { model: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
  >
    {/* Image Container */}
    <div className="relative h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-brand-charcoal/20 z-10 group-hover:bg-brand-charcoal/0 transition-colors duration-500" />
      <motion.img 
        src={model.image} 
        alt={model.name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
      />
      <div className="absolute bottom-6 left-6 z-20">
        <Accent className="text-white mb-1 group-hover:text-brand-terracotta transition-colors">{model.accent}</Accent>
        <H3 className="text-white text-3xl mb-0">{model.name}</H3>
      </div>
    </div>

    {/* Content Container */}
    <div className="p-8">
      <Text className="mb-6 text-brand-charcoal/60 line-clamp-2">
        {model.description}
      </Text>
      
      {/* Specs Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8 border-y border-brand-charcoal/5 py-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-brand-sage">
            <Maximize2 size={14} />
            <span className="text-[10px] uppercase tracking-widest font-bold">Area</span>
          </div>
          <span className="text-sm font-medium">{model.specs.area}</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-brand-sage">
            <Weight size={14} />
            <span className="text-[10px] uppercase tracking-widest font-bold">Weight</span>
          </div>
          <span className="text-sm font-medium">{model.specs.weight}</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-brand-sage">
            <Ruler size={14} />
            <span className="text-[10px] uppercase tracking-widest font-bold">Length</span>
          </div>
          <span className="text-sm font-medium">{model.specs.length}</span>
        </div>
      </div>

      <Link href={`/huts/${model.id}`} className="block">
        <Button variant="ghost" className="w-full justify-between group/btn px-0 hover:bg-transparent">
          View Details 
          <ArrowRight className="group-hover/btn:translate-x-2 transition-transform text-brand-terracotta" />
        </Button>
      </Link>
    </div>
  </motion.div>
);

export const ProductShowcase = () => {
  return (
    <Section id="huts" className="bg-brand-cream/50">
      <SectionTitle 
        accent="The Collection" 
        title="Our Tiny Houses" 
        description="Every Pura Vida hut is built on a Vlemmix trailer with high-quality spruce wood and premium insulation."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {huts.map((hut, index) => (
          <ProductCard 
            key={hut.slug} 
            model={{
              id: hut.slug,
              name: hut.name,
              accent: hut.accent,
              description: hut.description,
              image: hut.images[0],
              specs: {
                area: hut.specs.area,
                weight: hut.specs.weight,
                length: hut.specs.length
              }
            }} 
            index={index} 
          />
        ))}
      </div>
    </Section>
  );
};
