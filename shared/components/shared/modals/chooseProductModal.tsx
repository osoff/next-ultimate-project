"use client";

import React from "react";
import { cn } from "@/shared/lib/utils";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";

import { useRouter } from "next/navigation";
import ChooseProductForm from "../ChooseProductForm";
import { IProduct } from "@/@types/product";
import ChoosePizzaForm from "../ChoosePizzaForm";

interface chooseProductModalProps {
  product: IProduct;
  className?: string;
}

const ChooseProductModal: React.FC<chooseProductModalProps> = ({
  className,
  product,
}) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.items[0].pizzaType);
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
          />
        ) : (
          <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ChooseProductModal;
