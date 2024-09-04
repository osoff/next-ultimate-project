import React from "react";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { Title } from "./Title";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface ProductCartProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

const ProductCart: React.FC<ProductCartProps> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={cn(className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px] hover:pt-7 transition-all duration-200">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className=" mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          gsdfgsd, dsfgsdfg, dfsgsdfdsgdfg, sdfgdsfg, asdfasf, gdg, sdfasdf
        </p>

        <div className=" flex justify-between items-center mt-4">
          <span className=" text-[20px]">
            from <b>{price} $</b>
          </span>
          <Button variant="secondary" className=" text-base font-bold">
            <Plus size={20} className=" mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCart;
