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
    <div className="flex flex-col items-center gap-2 mb-4 w-full animate-in fade-in slide-in-from-top-2 duration-500">
      <div className="text-xl font-serif font-medium capitalize tracking-tight">
        {format(currentMonth, "MMMM yyyy")}
      </div>
      <div className="flex items-center gap-6 justify-center w-full">
        <button 
          type="button"
          disabled={!previousMonth} 
          onClick={() => previousMonth && goToMonth(previousMonth)}
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "h-8 w-8 p-0 opacity-70 hover:opacity-100 border-current/10 transition-all hover:border-brand-terracotta hover:text-brand-terracotta rounded-full bg-transparent text-current",
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
            buttonVariants({ variant: "outline", size: "icon" }),
            "h-8 w-8 p-0 opacity-70 hover:opacity-100 border-current/10 transition-all hover:border-brand-terracotta hover:text-brand-terracotta rounded-full bg-transparent text-current",
            !nextMonth && "opacity-20 cursor-not-allowed"
          )}
          aria-label="Next Month"
        >
          <ChevronRight className="h-4 w-4" />
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
        month_grid: "w-full border-collapse !important",
        weekdays: "grid grid-cols-7 mb-2 w-full !important",
        weekday: "text-current/30 font-bold text-[9px] uppercase tracking-[0.2em] text-center py-2",
        weeks: "space-y-0.5 w-full !important",
        week: "grid grid-cols-7 w-full",
        day: cn(
          "h-9 w-9 p-0 font-sans text-xs relative flex items-center justify-center transition-all duration-300 rounded-full",
          "hover:bg-brand-sage/20 cursor-pointer hover:scale-110 active:scale-95"
        ),
        range_start: "bg-brand-terracotta text-white rounded-full z-10",
        range_end: "bg-brand-terracotta text-white rounded-full z-10",
        range_middle: "bg-brand-terracotta/20 text-current rounded-none !important",
        selected: "bg-brand-terracotta text-white hover:bg-brand-terracotta/90",
        today: "text-brand-terracotta font-black after:content-[''] after:absolute after:bottom-1 after:w-0.5 after:h-0.5 after:bg-brand-terracotta after:rounded-full",
        outside: "opacity-20",
        disabled: "opacity-20 cursor-not-allowed",
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
