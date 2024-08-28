import { useRouter } from "next/navigation";
import { Filters } from "./useFilters";
import qs from "qs";
import { useEffect } from "react";

export function useQueryFilters(filters: Filters) {
  const router = useRouter();

  useEffect(() => {
    const params = {
      ...filters.prices,
      pizzasTypes: Array.from(filters.pizzasTypes),
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients),
    };

    const query = qs.stringify(params, { arrayFormat: "comma" });
    router.replace(`?${query}`, { scroll: false });
  }, [filters, router]);
}
