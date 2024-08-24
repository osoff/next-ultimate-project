"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FilterChecboxProps, FilterCheckbox } from "./FilterCheckbox";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";

interface CheckboxFiltersGroupProps {
  title: string;
  items: FilterChecboxProps[];
  defaultItems?: FilterChecboxProps[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  selected?: Set<string>;
  defaultValue?: string[];
  className?: string;
  name?: string;
}

const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  loading,
  searchInputPlaceholder = "Поиск...",
  onClickCheckbox,
  selected,
  defaultValue,
  className,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
          ))}

        <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
      </div>
    );
  }
  return (
    <div className={cn(className)}>
      <p className=" fbold mb-3">{title}</p>
      {showAll && (
        <div className=" mb-5">
          <Input
            onChange={(e) => onChangeSearchValue(e)}
            placeholder={searchInputPlaceholder}
            className=" bg-gray-50 border-none"
          />
        </div>
      )}
      <div className=" flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selected?.has(item.value)}
            name={name}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div
          className={cn(showAll ? "border-t border-t-neutral-100 mt-4" : "")}
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className=" text-primary mt-3"
          >
            {showAll ? "Hide" : "+ Show all"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckboxFiltersGroup;
