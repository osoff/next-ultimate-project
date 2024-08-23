"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FilterChecboxProps, FilterCheckbox } from "./FilterCheckbox";
import { Input } from "../ui/input";

interface CheckboxFiltersGroupProps {
  title: string;
  items: FilterChecboxProps[];
  defaultItems: FilterChecboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValue,
  className,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems.slice(0, limit);

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
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
            checked={false}
            onCheckedChange={(e) => console.log(e)}
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
            {showAll ? "Hide" : "Show all"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckboxFiltersGroup;
