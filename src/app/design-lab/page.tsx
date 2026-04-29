"use client";

import { Button } from "@/components/ui/Button";
import { H1, H2, H3, Text, Accent } from "@/components/ui/Typography";
import { Section, SectionTitle } from "@/components/layout/Section";
import { motion } from "framer-motion";

export default function DesignLab() {
  return (
    <main className="min-h-screen bg-brand-cream">
      {/* Hero Preview */}
      <Section className="bg-brand-charcoal text-brand-cream overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-terracotta/10 -skew-x-12 transform translate-x-1/2" />
        <Accent className="text-brand-sage">Design System Lab</Accent>
        <H1 className="text-brand-cream">The Artisanal Digital Experience</H1>
        <Text className="text-brand-cream/70 max-w-2xl mb-8">
          A showcase of the Pura Vida Huts design language. Minimalist, premium, and 
          rooted in the Bucovina woodworking heritage.
        </Text>
        <div className="flex flex-wrap gap-4">
          <Button>Explore Huts</Button>
          <Button variant="secondary" className="border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-charcoal">
            Our Story
          </Button>
        </div>
      </Section>

      {/* Colors */}
      <Section>
        <SectionTitle 
          accent="Palettes" 
          title="Natural Color Tones" 
          description="Inspired by the wood, moss, and clay of the Romanian mountains."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Terracotta", hex: "#D2691E", class: "bg-brand-terracotta" },
            { name: "Sage Green", hex: "#7D8E7E", class: "bg-brand-sage" },
            { name: "Cream", hex: "#F9F7F2", class: "bg-brand-cream border" },
            { name: "Charcoal", hex: "#2D2D2D", class: "bg-brand-charcoal" },
          ].map((color) => (
            <motion.div 
              key={color.name}
              whileHover={{ scale: 1.05 }}
              className="group cursor-help"
            >
              <div className={`${color.class} aspect-square rounded-sm mb-3 shadow-sm transition-shadow group-hover:shadow-md`} />
              <H3 className="mb-1">{color.name}</H3>
              <code className="text-xs text-brand-charcoal/50 uppercase">{color.hex}</code>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Buttons & Forms */}
      <Section className="bg-white/50">
        <SectionTitle 
          accent="Interactive" 
          title="Tactile Elements" 
          description="Buttons and inputs designed to feel responsive and high-quality."
        />
        <div className="flex flex-wrap items-center gap-8">
          <div className="space-y-4">
            <Text className="font-medium mb-4">Button Variants</Text>
            <div className="flex flex-wrap gap-4">
              <Button>Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
              <Button variant="outline">Outline Style</Button>
              <Button variant="ghost">Ghost Style</Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <Text className="font-medium mb-4">Button Sizes</Text>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large Scale</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Typography Showcase */}
      <Section>
        <SectionTitle 
          accent="Typography" 
          title="Serif & Sans Pairing" 
          description="Balancing heritage with modern readability."
        />
        <div className="space-y-12 max-w-4xl">
          <div>
            <Accent>Header 1 / Playfair Display</Accent>
            <H1 className="mb-0">The Phoenix XXL flagship model.</H1>
          </div>
          <div>
            <Accent>Header 2 / Playfair Display</Accent>
            <H2 className="mb-0">Crafted with Bucovina tradition.</H2>
          </div>
          <div>
            <Accent>Body Text / Inter</Accent>
            <Text>
              Our tiny houses are built using sustainable materials and traditional 
              woodworking techniques. Each unit is a masterpiece of efficiency and 
              comfort, designed to bring you closer to nature without sacrificing luxury.
            </Text>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-brand-charcoal/10 text-center">
        <Text className="text-sm">Pura Vida Huts Design System v1.0</Text>
      </footer>
    </main>
  );
}
