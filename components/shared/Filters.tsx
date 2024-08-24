"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Title } from "./Title";
import { Input } from "../ui/input";
import { RangeSlider } from "./RangeSlider";
import CheckboxFiltersGroup from "./CheckboxFiltersGroup";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter, useSearchParams } from "next/navigation";

interface FiltersProps {
  className?: string;
}
interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

const Filters: React.FC<FiltersProps> = ({ className }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { ingredients, loading, selectedIngredients, onAddId } =
    useFilterIngredients();
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.get("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );
  const [pizzasTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.get("pizzasTypes")
        ? searchParams.get("pizzasTypes")?.split(",")
        : []
    )
  );
  const [price, setPrice] = useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const items = ingredients.map((el) => ({
    value: String(el.id),
    text: el.name,
  }));

  useEffect(() => {
    const filters = {
      ...price,
      pizzasTypes: Array.from(pizzasTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    };

    const query = qs.stringify(filters, { arrayFormat: "comma" });
    router.replace(`?${query}`, { scroll: false });
  }, [price, pizzasTypes, sizes, selectedIngredients, router]);

  function handleSetPrice(name: keyof PriceProps, value: number) {
    setPrice({ ...price, [name]: value });
  }

  return (
    <div className={cn(className)}>
      <Title text="Filtering" size="sm" className=" mb-5 font-bold" />

      <CheckboxFiltersGroup
        title="Type of dough"
        className=" mt-5"
        name="TypeofDough"
        onClickCheckbox={togglePizzaTypes}
        selected={pizzasTypes}
        items={[
          { text: "Thin", value: "1" },
          { text: "Traditional", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        title="Sizes"
        className=" mt-5"
        name="sizes"
        onClickCheckbox={toggleSizes}
        selected={sizes}
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
            value={String(price.priceFrom)}
            onChange={(e) =>
              handleSetPrice("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            placeholder="5000"
            min={0}
            max={5000}
            value={String(price.priceTo)}
            onChange={(e) => handleSetPrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={5000}
          step={10}
          value={[price.priceFrom || 0, price.priceTo || 5000]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
      </div>
      <CheckboxFiltersGroup
        title="ingredients"
        className=" mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};

export default Filters;
