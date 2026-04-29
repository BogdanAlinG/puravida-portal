"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, Maximize2, Ruler, Weight, Thermometer, Wifi } from "lucide-react";
import { H3, Text, Accent } from "@/components/ui/Typography";

interface TechSpecsProps {
  specs: {
    area: string;
    weight: string;
    length: string;
    width: string;
    height: string;
    insulation: string;
    heating: string;
  };
}

export const TechSpecs = ({ specs }: TechSpecsProps) => {
  const specItems = [
    { label: "Total Area", value: specs.area, icon: Maximize2 },
    { label: "Total Weight", value: specs.weight, icon: Weight },
    { label: "Chassis Length", value: specs.length, icon: Ruler },
    { label: "Total Width", value: specs.width, icon: Ruler },
    { label: "Total Height", value: specs.height, icon: Ruler },
    { label: "Insulation", value: specs.insulation, icon: Thermometer },
    { label: "Heating System", value: specs.heating, icon: Wifi },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {specItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          className="flex items-center justify-between p-4 bg-white border border-brand-charcoal/5 rounded-sm"
        >
          <div className="flex items-center gap-3">
            <item.icon size={18} className="text-brand-sage" />
            <span className="text-sm font-medium text-brand-charcoal/60 uppercase tracking-wider">
              {item.label}
            </span>
          </div>
          <span className="text-sm font-bold text-brand-charcoal">
            {item.value}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
