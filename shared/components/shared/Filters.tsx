"use client";

import React, { useEffect } from "react";
import { cn } from "@/shared/lib/utils";
import { Title } from "./Title";
import { Input } from "../ui/input";
import { RangeSlider } from "./RangeSlider";
import CheckboxFiltersGroup from "./CheckboxFiltersGroup";
import qs from "qs";
import { useRouter } from "next/navigation";
import { useIngredients } from "@/shared/hooks/useIngredients";
import { useFilters } from "@/shared/hooks/useFilters";
import { useQueryFilters } from "@/shared/hooks/useQueryFilters";

interface FiltersProps {
  className?: string;
}

const Filters: React.FC<FiltersProps> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();
  useQueryFilters(filters);

  const items = ingredients.map((el) => ({
    value: String(el.id),
    text: el.name,
  }));

  function updatePrices(prices: number[]) {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  }

  return (
    <div className={cn(className)}>
      <Title text="Filtering" size="sm" className=" mb-5 font-bold" />

      <CheckboxFiltersGroup
        title="Type of dough"
        className=" mt-5"
        name="TypeofDough"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzasTypes}
        items={[
          { text: "Thin", value: "1" },
          { text: "Traditional", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        title="Sizes"
        className=" mt-5"
        name="sizes"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: "20 cm", value: "20" },
          { text: "30 cm", value: "30" },
          { text: "40 cm", value: "40" },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className=" font-bold mb-3">Price from and to:</p>
        <div className=" flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={5000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.setPrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            placeholder="5000"
            min={0}
            max={5000}
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={5000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 5000,
          ]}
          onValueChange={updatePrices}
        />
      </div>
      <CheckboxFiltersGroup
        title="ingredients"
        className=" mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};

export default Filters;
