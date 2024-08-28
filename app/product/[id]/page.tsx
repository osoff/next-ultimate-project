import React from "react";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import Container from "@/components/shared/container";
import ProductImage from "@/components/shared/ProductImage";
import { Title } from "@/components/shared/Title";

interface pageProps {
  className?: string;
  params: any;
}

const page: React.FC<pageProps> = async ({ className, params: { id } }) => {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} size={40} className="" />
        <div className=" w-[490px] bg-[#FCFCFC] p-7">
          <Title
            text={product.name}
            size="md"
            className=" font-extrabold mb-1"
          />
          <p className=" text-gray-400">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </div>
    </Container>
  );
};

export default page;
