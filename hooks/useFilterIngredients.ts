import { getIngredients } from "@/services/ingredients";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIngredients: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [selectedIds, { toggle }] = useSet(new Set<string>([]));
  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await getIngredients();
        setIngredients(ingredients);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);

  return {
    ingredients,
    loading,
    selectedIngredients: selectedIds,
    onAddId: toggle,
  };
};
