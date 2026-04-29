import * as React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: TypographyProps) => (
  <h1 className={cn("text-5xl md:text-7xl font-serif text-brand-charcoal mb-6 leading-tight", className)}>
    {children}
  </h1>
);

export const H2 = ({ children, className }: TypographyProps) => (
  <h2 className={cn("text-3xl md:text-5xl font-serif text-brand-charcoal mb-4 leading-snug", className)}>
    {children}
  </h2>
);

export const H3 = ({ children, className }: TypographyProps) => (
  <h3 className={cn("text-xl md:text-2xl font-serif text-brand-charcoal mb-3", className)}>
    {children}
  </h3>
);

export const Text = ({ children, className }: TypographyProps) => (
  <p className={cn("text-base md:text-lg text-brand-charcoal/80 leading-relaxed font-sans", className)}>
    {children}
  </p>
);

export const Accent = ({ children, className }: TypographyProps) => (
  <span className={cn("text-brand-terracotta font-medium tracking-widest uppercase text-xs mb-4 block", className)}>
    {children}
  </span>
);
