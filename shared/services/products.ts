import { Product } from "@prisma/client";
import { apiClient } from "./instance";

export async function productSearch(query: String): Promise<Product[]> {
  const { data } = await apiClient.get<Product[]>("/products/search", {
    params: { query },
  });
  return data;
}
