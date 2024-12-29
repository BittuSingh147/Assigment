import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type NavigationButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
};

export function NavigationButton({ direction, onClick }: NavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 rounded-full bg-white/10 hover:bg-[#FFA229] transition-all group",
        "focus:outline-none focus:ring-2 focus:ring-[#FFA229]/50"
      )}
    >
      {direction === "left" ? (
        <ChevronLeft className="h-6 w-6 text-white group-hover:text-white" />
      ) : (
        <ChevronRight className="h-6 w-6 text-white group-hover:text-white" />
      )}
    </button>
  );
}