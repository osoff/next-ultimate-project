import Categories from "@/shared/components/shared/Categories";
import Container from "@/shared/components/shared/container";
import Filters from "@/shared/components/shared/Filters";
import ProductCart from "@/shared/components/shared/ProductCart";
import ProductsGroupList from "@/shared/components/shared/ProductsGroupList";
import SortPopup from "@/shared/components/shared/SortPopup";
import { Title } from "@/shared/components/shared/Title";
import TopBar from "@/shared/components/shared/TopBar";
import { categories } from "../../prisma/constants";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });
  return (
    <>
      <Container>
        <Title text="All pizzas" size="lg" className=" mt-3 font-extrabold" />
      </Container>

      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />
      <Container className=" mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className=" w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      items={category.products}
                      categoryId={category.id}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
