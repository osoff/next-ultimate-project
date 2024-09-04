/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/shared/lib/utils";
import ProductImage from "./ProductImage";
import { Title } from "./Title";
import { Button } from "../ui/button";

interface ChoosePizzaFormProps {
  imageUrl: string;
  name: string;
  ingredients: any[];
  items: any[];
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
  const textDetails = "info about products (text details)";
  const totalPrice = 55;
  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage imageUrl={imageUrl} size={30} />
      <div className=" w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className=" font-extrabold mb-1" />
        <p className=" text-gray-400">{textDetails}</p>
        <Button className=" h-[55px] px-10 text-base rounded-[18px] w-full">
          Add to cart {totalPrice}
        </Button>
      </div>
    </div>
  );
};

export default ChoosePizzaForm;
