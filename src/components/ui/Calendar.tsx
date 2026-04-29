"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, useDayPicker, useNavigation } from "react-day-picker";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function CustomMonthCaption(props: any) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  
  // In v9, the month date is passed via calendarMonth prop
  const currentMonth = props.calendarMonth?.date;
  
  if (!currentMonth) return <div className="hidden" />;

  return (
    <div className="flex flex-col items-center gap-6 mb-8 w-full animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="text-3xl font-serif font-medium text-brand-charcoal capitalize tracking-tight">
        {format(currentMonth, "MMMM yyyy")}
      </div>
      <div className="flex items-center gap-12 justify-center w-full">
        <button 
          type="button"
          disabled={!previousMonth} 
          onClick={() => previousMonth && goToMonth(previousMonth)}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-11 w-11 p-0 opacity-70 hover:opacity-100 border-brand-charcoal/10 transition-all hover:border-brand-terracotta hover:text-brand-terracotta rounded-full shadow-sm bg-white",
            !previousMonth && "opacity-20 cursor-not-allowed"
          )}
          aria-label="Previous Month"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button 
          type="button"
          disabled={!nextMonth} 
          onClick={() => nextMonth && goToMonth(nextMonth)}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-11 w-11 p-0 opacity-70 hover:opacity-100 border-brand-charcoal/10 transition-all hover:border-brand-terracotta hover:text-brand-terracotta rounded-full shadow-sm bg-white",
            !nextMonth && "opacity-20 cursor-not-allowed"
          )}
          aria-label="Next Month"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4", className)}
      classNames={{
        months: "flex flex-col items-center justify-center",
        month: "flex flex-col items-center !important",
        month_grid: "w-full border-collapse flex flex-col items-center !important",
        weekdays: "grid grid-cols-7 mb-3 w-full max-w-[350px] !important",
        weekday: "text-brand-charcoal/30 font-bold text-[10px] uppercase tracking-[0.25em] text-center py-2 w-11",
        weeks: "space-y-1 w-full max-w-[350px] !important",
        week: "grid grid-cols-7 w-full",
        day: cn(
          "h-11 w-11 p-0 font-sans text-sm relative flex items-center justify-center transition-all duration-300 rounded-full",
          "hover:bg-brand-sage/10 cursor-pointer hover:scale-110 active:scale-95"
        ),
        range_start: "bg-brand-terracotta text-white rounded-full z-10 shadow-md shadow-brand-terracotta/20",
        range_end: "bg-brand-terracotta text-white rounded-full z-10 shadow-md shadow-brand-terracotta/20",
        range_middle: "bg-brand-terracotta/10 text-brand-charcoal rounded-none !important",
        selected: "bg-brand-terracotta text-white hover:bg-brand-terracotta/90",
        today: "text-brand-terracotta font-black after:content-[''] after:absolute after:bottom-1 after:w-1 after:h-1 after:bg-brand-terracotta after:rounded-full",
        outside: "text-brand-charcoal/10 opacity-20",
        disabled: "text-brand-charcoal/10 opacity-50 cursor-not-allowed",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        MonthCaption: CustomMonthCaption,
        Nav: () => <div className="hidden" /> // Handled by custom caption
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";
