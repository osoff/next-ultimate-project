"use client";

import React from "react";
import { cn } from "@/shared/lib/utils";

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface GroupVariantsProps {
  items: readonly Variant[];
  onClick?: (value: Variant["value"]) => void;
  value?: Variant["value"];
  selectedValue?: Variant["value"];
  className?: string;
}

const GroupVariants: React.FC<GroupVariantsProps> = ({
  items,
  onClick,
  selectedValue,
  className,
}) => {
  return (
    <div
      className={cn(
        className,
        "flex justify-between bg-[#f3f3f7] rounded-xl p-1 select-none"
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          disabled={item.disabled}
          onClick={() => onClick?.(item.value)}
          className={cn(
            "flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm",
            {
              "bg-white shadow": item.value === selectedValue,
              "text-gray-500 opacity-50 pointer-events-none": item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default GroupVariants;
