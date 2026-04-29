"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Tent, Bed, Info, Phone, LayoutGrid, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Huts", href: "/#huts", icon: Tent },
  { name: "Stay", href: "/stay", icon: Bed },
  { name: "Buy", href: "/buy", icon: Info },
  { name: "Press", href: "/press", icon: Newspaper },
  { name: "FAQ", href: "/faq", icon: LayoutGrid },
  { name: "Contact", href: "/#contact", icon: Phone },
];

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    [isHome ? "rgba(249, 247, 242, 0)" : "rgba(249, 247, 242, 0.8)", "rgba(249, 247, 242, 0.8)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  const shadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 20px rgba(0,0,0,0.05)"]
  );

  return (
    <motion.header
      style={{ backgroundColor, backdropBlur, boxShadow: shadow }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <nav className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.img 
            style={{ 
              filter: useTransform(
                scrollY,
                [0, 50],
                [isHome ? "brightness(0) invert(1)" : "brightness(1) invert(0)", "brightness(1) invert(0)"]
              )
            }}
            src="/logo-wide.png" 
            alt="Pura Vida Huts" 
            className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-brand-charcoal/70 hover:text-brand-terracotta transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/#contact">
            <Button size="sm">Book a Consultation</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-charcoal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-brand-cream border-t border-brand-charcoal/5 p-6 shadow-xl"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-lg font-serif text-brand-charcoal"
              >
                <link.icon size={20} className="text-brand-sage" />
                {link.name}
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Book a Consultation</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
