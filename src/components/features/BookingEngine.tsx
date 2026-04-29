"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { H3, Text } from "@/components/ui/Typography";
import { Calendar as CalendarIcon, CreditCard, Send } from "lucide-react";

interface BookingEngineProps {
  modelName: string;
  priceFrom: string;
}

export const BookingEngine = ({ modelName, priceFrom }: BookingEngineProps) => {
  const [step, setStep] = React.useState(1);

  return (
    <div className="bg-white border border-brand-charcoal/5 rounded-sm p-8 shadow-sm sticky top-32">
      <div className="mb-8">
        <span className="text-[10px] uppercase tracking-widest text-brand-sage font-bold mb-2 block">
          Investment starting at
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-serif text-brand-charcoal">{priceFrom}</span>
          <span className="text-sm text-brand-charcoal/40 font-sans">incl. VAT</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4 text-sm font-medium border-b border-brand-charcoal/5 pb-4">
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center border transition-all",
            step === 1 ? "bg-brand-terracotta border-brand-terracotta text-white" : "bg-white border-brand-charcoal/10 text-brand-charcoal/40"
          )}>
            1
          </div>
          <span className={step === 1 ? "text-brand-charcoal" : "text-brand-charcoal/40"}>Configure</span>
          <div className="flex-grow h-[1px] bg-brand-charcoal/5" />
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center border transition-all",
            step === 2 ? "bg-brand-terracotta border-brand-terracotta text-white" : "bg-white border-brand-charcoal/10 text-brand-charcoal/40"
          )}>
            2
          </div>
          <span className={step === 2 ? "text-brand-charcoal" : "text-brand-charcoal/40"}>Inquire</span>
        </div>

        {step === 1 ? (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50">Exterior Siding</label>
              <div className="flex gap-2">
                {["Spruce", "Larch", "Thermo-Wood"].map(wood => (
                  <button key={wood} className="flex-1 py-2 px-3 text-xs border border-brand-charcoal/10 rounded-sm hover:border-brand-terracotta transition-colors">
                    {wood}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50">Add-ons</label>
              <div className="space-y-2">
                {["Solar Package", "Air Conditioning", "Terrace System"].map(opt => (
                  <label key={opt} className="flex items-center gap-3 text-sm p-3 border border-brand-charcoal/5 rounded-sm cursor-pointer hover:bg-brand-cream/30">
                    <input type="checkbox" className="accent-brand-terracotta" />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
            <Button onClick={() => setStep(2)} className="w-full">Next Step</Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-brand-charcoal/10 py-3 text-sm focus:outline-none focus:border-brand-terracotta" />
            <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-brand-charcoal/10 py-3 text-sm focus:outline-none focus:border-brand-terracotta" />
            <textarea placeholder="Tell us about your project location..." rows={3} className="w-full bg-transparent border-b border-brand-charcoal/10 py-3 text-sm focus:outline-none focus:border-brand-terracotta resize-none" />
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">Back</Button>
              <Button className="flex-grow flex items-center gap-2">
                Send Inquiry <Send size={16} />
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-8 pt-8 border-t border-brand-charcoal/5">
        <div className="flex items-center gap-3 text-xs text-brand-charcoal/40">
          <CalendarIcon size={14} />
          <span>Typical delivery time: 12-16 weeks</span>
        </div>
      </div>
    </div>
  );
};

// Internal CN helper since it's used in components
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
