import React from "react";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import Container from "@/shared/components/shared/container";
import ProductImage from "@/shared/components/shared/ProductImage";
import { Title } from "@/shared/components/shared/Title";
import GroupVariants from "@/shared/components/shared/GroupVariants";

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
        <div className=" w-[490px] bg-[#f9f9fb] p-7 rounded-lg">
          <Title
            text={product.name}
            size="md"
            className=" font-extrabold mb-1"
          />
          <p className=" text-gray-400">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <GroupVariants
            selectedValue="2"
            items={[
              {
                name: "Small",
                value: "1",
              },
              {
                name: "Medium",
                value: "2",
              },
              {
                name: "Big",
                value: "3",
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
};

export default page;
