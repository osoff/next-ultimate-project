/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";
import ProductImage from "./ProductImage";
import { Title } from "./Title";
import { Button } from "../ui/button";
import GroupVariants from "./GroupVariants";
import {
  PizzaSize,
  PizzaType,
  mapPizzaType,
  pizzaSize,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { Ingredient } from "@prisma/client";
import IngredientItem from "./Ingredient";
import { useSet } from "react-use";
import { IProduct } from "@/@types/product";
import { calcTotalPizzaPrice } from "@/shared/lib/calc-total-pizza-price";

interface ChoosePizzaFormProps {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: IProduct["items"];
  className?: string;
  onClickAdd?: VoidFunction;
}

const ChoosePizzaForm: React.FC<ChoosePizzaFormProps> = ({
  imageUrl,
  name,
  ingredients,
  items,
  onClickAdd,
  className,
}) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const textDetails = `${size} cm, ${mapPizzaType[type]} pizza`;

  const totalPrice = calcTotalPizzaPrice(
    items,
    ingredients,
    type,
    size,
    selectedIngredients
  );

  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
  const availablePizzaSizes = pizzaSize.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));

  const handleClickAddCart = () => {
    onClickAdd?.();
  };

  useEffect(() => {
    const isAvailableSize = availablePizzaSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availablePizzaSizes?.find((item) => !item.disabled);
    if (availableSize && !isAvailableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);
  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage imageUrl={imageUrl} size={size} />
      <div className=" w-[490px] bg-[#f9f9fb] p-7">
        <Title text={name} size="md" className=" font-extrabold mb-1" />
        <p className=" text-gray-400">{textDetails}</p>

        <div className=" flex flex-col gap-4 mt-5">
          <GroupVariants
            items={availablePizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="grid grid-cols-3 gap-3 rounded-md p-5 bg-gray-50 h-[420px] overflow-auto scrollbar mt-5">
          {ingredients.map((ingredient) => (
            <IngredientItem
              key={ingredient.id}
              imageUrl={ingredient.imageUrl}
              name={ingredient.name}
              price={ingredient.price}
              active={selectedIngredients.has(ingredient.id)}
              onClick={() => addIngredient(ingredient.id)}
            />
          ))}
        </div>

        <Button
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
          onClick={handleClickAddCart}
        >
          Add to cart {totalPrice} $
        </Button>
      </div>
    </div>
  );
};

export default ChoosePizzaForm;
