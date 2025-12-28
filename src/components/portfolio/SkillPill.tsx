import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SkillPillProps {
  name: string;
  icon: ReactNode;
  className?: string;
}

export const SkillPill = ({ name, icon, className }: SkillPillProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
        "bg-pill border border-pill-border",
        "text-sm font-medium text-foreground",
        "mr-3 mb-3 transition-all duration-200",
        "hover:border-muted-foreground/30 hover:-translate-y-[1px]",
        className
      )}
    >
      <span className="w-5 h-5 flex items-center justify-center text-foreground">
        {icon}
      </span>
      {name}
    </span>
  );
};
