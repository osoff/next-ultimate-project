import { Ingredient, Product } from "@prisma/client";
import { apiClient } from "./instance";

export async function getIngredients(): Promise<Ingredient[]> {
  const { data } = await apiClient.get<Ingredient[]>("/ingredients");
  return data;
}
