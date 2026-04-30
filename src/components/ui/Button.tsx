"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-sage disabled:pointer-events-none disabled:opacity-50 tracking-wide uppercase",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-terracotta text-white shadow-sm hover:bg-brand-terracotta/90 hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "border border-brand-sage bg-transparent text-brand-sage hover:bg-brand-sage/10 hover:backdrop-blur-sm hover:text-brand-sage hover:scale-[1.02] active:scale-[0.98]",
        ghost: "hover:bg-brand-sage/10 hover:backdrop-blur-sm text-brand-charcoal hover:text-brand-sage",
        outline: "border border-brand-charcoal/20 bg-transparent hover:bg-brand-charcoal/5 hover:backdrop-blur-sm",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-9 rounded-sm px-4 text-xs",
        lg: "h-14 rounded-sm px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
