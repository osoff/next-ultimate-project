import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSet } from "react-use";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzasTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams();

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(","))
  );

  const [pizzasTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.get("pizzasTypes")
        ? searchParams.get("pizzasTypes")?.split(",")
        : []
    )
  );

  const [sizes, { toggle: toggleSize }] = useSet(
    new Set<string>(
      searchParams.get("pizzaSize")
        ? searchParams.get("pizzaSize")?.split(",")
        : []
    )
  );

  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  function handleSetPrice(name: keyof PriceProps, value: number) {
    setPrices((prev) => ({ ...prev, [name]: value }));
  }

  return {
    sizes,
    pizzasTypes,
    selectedIngredients,
    prices,
    setPizzaTypes: togglePizzaTypes,
    setSelectedIngredients: toggleIngredients,
    setSizes: toggleSize,
    setPrices: handleSetPrice,
  };
};
