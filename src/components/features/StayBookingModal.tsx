"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Calendar as CalendarIcon, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { H3, Text } from "@/components/ui/Typography";
import { Calendar } from "@/components/ui/Calendar";
import { cn } from "@/lib/utils";
import { format, differenceInDays } from "date-fns";
import { DateRange } from "react-day-picker";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  locationName: string;
}

export const StayBookingModal = ({ isOpen, onClose, locationName }: BookingModalProps) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [showCalendar, setShowCalendar] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  const dateDisplay = React.useMemo(() => {
    if (dateRange?.from) {
      if (dateRange.to) {
        return `${format(dateRange.from, "MMM d")} → ${format(dateRange.to, "MMM d, yyyy")}`;
      }
      return `${format(dateRange.from, "MMM d, yyyy")} → ...`;
    }
    return "Select Arrival Date";
  }, [dateRange]);

  const dateLabel = React.useMemo(() => {
    if (!dateRange?.from) return "Select Arrival Date";
    if (!dateRange?.to) return "Select Departure Date";
    return "Dates Selected";
  }, [dateRange]);

  const nights = React.useMemo(() => {
    if (dateRange?.from && dateRange?.to) {
      return differenceInDays(dateRange.to, dateRange.from);
    }
    return 0;
  }, [dateRange]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (showCalendar) setShowCalendar(false);
              else onClose();
            }}
            className="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-brand-cream w-full max-w-lg rounded-sm shadow-2xl overflow-visible pointer-events-auto"
            >
              <div className="relative p-8 md:p-12">
                <button 
                  onClick={onClose}
                  className="absolute top-6 right-6 text-brand-charcoal/40 hover:text-brand-charcoal transition-colors z-10"
                >
                  <X size={24} />
                </button>

                {!isSubmitted ? (
                  <div className="space-y-8">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-brand-terracotta font-bold mb-2 block">
                        Experience Tiny Living
                      </span>
                      <H3 className="text-3xl">Book your stay at {locationName}</H3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <input 
                          required
                          type="text" 
                          placeholder="Full Name" 
                          className="w-full bg-transparent border-b border-brand-charcoal/10 py-3 text-sm focus:outline-none focus:border-brand-terracotta transition-colors" 
                        />
                        <input 
                          required
                          type="email" 
                          placeholder="Email Address" 
                          className="w-full bg-transparent border-b border-brand-charcoal/10 py-3 text-sm focus:outline-none focus:border-brand-terracotta transition-colors" 
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Date Range Picker */}
                          <div className="relative">
                            <label className="text-[9px] uppercase tracking-widest text-brand-charcoal/40 font-bold mb-1 block">
                              {dateLabel}
                            </label>
                            <button
                              type="button"
                              onClick={() => setShowCalendar(!showCalendar)}
                              className="w-full flex items-center justify-between bg-transparent border-b border-brand-charcoal/10 py-3 text-sm focus:outline-none focus:border-brand-terracotta transition-colors group"
                            >
                              <span className={cn(dateRange?.from ? "text-brand-charcoal" : "text-brand-charcoal/40 font-medium")}>
                                {dateDisplay}
                              </span>
                              <CalendarIcon className="text-brand-charcoal/20 group-hover:text-brand-terracotta transition-colors" size={16} />
                            </button>

                            <AnimatePresence>
                              {showCalendar && (
                                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 pointer-events-auto">
                                  {/* Overlay Backdrop */}
                                  <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-md"
                                    onClick={() => setShowCalendar(false)}
                                  />
                                  
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    className="relative w-full max-w-[400px] bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col"
                                  >
                                    <div className="p-5 border-b border-brand-charcoal/5 flex justify-between items-center bg-brand-cream/30">
                                      <div className="flex flex-col">
                                        <span className="text-[11px] uppercase tracking-widest font-bold text-brand-charcoal/60">
                                          {!dateRange?.from ? "Choose Arrival" : !dateRange?.to ? "Choose Departure" : "Confirm Stay"}
                                        </span>
                                        {nights > 0 && (
                                          <span className="text-[11px] text-brand-terracotta font-medium animate-in fade-in slide-in-from-left-2">
                                            {nights} {nights === 1 ? 'Night' : 'Nights'} Escape
                                          </span>
                                        )}
                                      </div>
                                      <div className="flex gap-4">
                                        {(dateRange?.from || dateRange?.to) && (
                                          <button 
                                            type="button"
                                            onClick={() => setDateRange({ from: undefined, to: undefined })}
                                            className="text-[11px] uppercase tracking-widest font-bold text-brand-terracotta hover:underline"
                                          >
                                            Clear
                                          </button>
                                        )}
                                        <button onClick={() => setShowCalendar(false)} className="p-1.5 hover:bg-brand-charcoal/5 rounded-full transition-colors">
                                          <X size={18} />
                                        </button>
                                      </div>
                                    </div>
                                    
                                    <div className="flex-1 p-6 flex items-center justify-center bg-white">
                                      <Calendar
                                        mode="range"
                                        selected={dateRange}
                                        onSelect={(range) => {
                                          setDateRange(range);
                                        }}
                                        numberOfMonths={1}
                                        disabled={{ before: new Date() }}
                                      />
                                    </div>

                                    <div className="p-5 bg-brand-cream/30 border-t border-brand-charcoal/5 flex items-center justify-between">
                                      <div className="hidden sm:block">
                                        <Text className="text-[10px] text-brand-charcoal/40 italic leading-tight">
                                          * All bookings are subject to availability
                                        </Text>
                                      </div>
                                      <Button 
                                        size="sm" 
                                        onClick={() => setShowCalendar(false)}
                                        disabled={!dateRange?.from || !dateRange?.to}
                                        className="min-w-[120px] h-11 text-xs uppercase tracking-widest font-bold"
                                      >
                                        Apply Dates
                                      </Button>
                                    </div>
                                  </motion.div>
                                </div>
                              )}
                            </AnimatePresence>
                          </div>

                          <div className="relative">
                            <label className="text-[9px] uppercase tracking-widest text-brand-charcoal/40 font-bold mb-1 block">Number of Guests</label>
                            <div className="relative">
                              <Users className="absolute right-0 top-3 text-brand-charcoal/20" size={16} />
                              <input 
                                type="number" 
                                placeholder="Guests" 
                                min="1"
                                className="w-full bg-transparent border-b border-brand-charcoal/10 py-3 text-sm focus:outline-none focus:border-brand-terracotta transition-colors" 
                              />
                            </div>
                          </div>
                        </div>
                        
                        <textarea 
                          placeholder="Any special requests?" 
                          rows={3} 
                          className="w-full bg-transparent border-b border-brand-charcoal/10 py-3 text-sm focus:outline-none focus:border-brand-terracotta transition-colors resize-none" 
                        />
                      </div>

                      <Button type="submit" className="w-full flex items-center justify-center gap-2 group">
                        Confirm Inquiry <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </form>
                    
                    <Text className="text-[10px] text-brand-charcoal/40 text-center uppercase tracking-widest">
                      Best Price Guaranteed via Direct Booking
                    </Text>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-brand-sage/10 rounded-full flex items-center justify-center mx-auto text-brand-sage">
                      <Send size={40} />
                    </div>
                    <div>
                      <H3 className="mb-2">Request Sent!</H3>
                      <Text className="text-brand-charcoal/60">
                        We've received your inquiry for {locationName}. <br />
                        Our team will contact you within 24 hours.
                      </Text>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
