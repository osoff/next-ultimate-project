import Categories from "@/components/shared/Categories";
import Container from "@/components/shared/container";
import Filters from "@/components/shared/Filters";
import ProductCart from "@/components/shared/ProductCart";
import ProductsGroupList from "@/components/shared/ProductsGroupList";
import SortPopup from "@/components/shared/SortPopup";
import { Title } from "@/components/shared/Title";
import TopBar from "@/components/shared/TopBar";

export default function Home() {
  return (
    <>
      <Container>
        <Title text="All pizzas" size="lg" className=" font-extrabold" />
      </Container>

      <TopBar />
      <Container className=" mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className=" w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                items={[
                  {
                    id: 1,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 11,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 13,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title="Combo"
                items={[
                  {
                    id: 1,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 11,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 13,
                    name: "superPizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EEEB54B9A5E739A0F6BB8A7273C6D6.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
