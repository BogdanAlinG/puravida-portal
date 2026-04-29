"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
  container?: boolean;
  padded?: boolean;
}

export const Section = ({
  children,
  className,
  container = true,
  padded = true,
  ...props
}: SectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        padded && "py-16 md:py-32",
        className
      )}
      {...props}
    >
      <div className={cn(container && "container mx-auto px-6 md:px-12 max-w-7xl")}>
        {children}
      </div>
    </motion.section>
  );
};

export const SectionTitle = ({
  accent,
  title,
  description,
  centered = false,
}: {
  accent?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) => (
  <div className={cn("max-w-3xl mb-12 md:mb-20", centered && "mx-auto text-center")}>
    {accent && (
      <span className="text-brand-terracotta font-medium tracking-widest uppercase text-xs mb-4 block">
        {accent}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6 leading-snug">
      {title}
    </h2>
    {description && (
      <p className="text-base md:text-lg text-brand-charcoal/70 leading-relaxed font-sans">
        {description}
      </p>
    )}
  </div>
);
