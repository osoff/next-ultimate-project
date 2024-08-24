"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useClickAway, useDebounce } from "react-use";
import Link from "next/link";
import Image from "next/image";
import { productSearch } from "@/services/products";
import { Product } from "@prisma/client";

interface SeachInputProps {
  className?: string;
}

const SeachInput: React.FC<SeachInputProps> = ({ className }) => {
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef(null);
  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await productSearch(searchQuery);
        setProducts(response);
      } catch (e) {
        console.log(e);
      }
    },
    300,
    [searchQuery]
  );

  function handleClickItem() {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  }
  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30 transition-all ",
          focused ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Search product..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-400 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12"
            )}
            onClick={handleClickItem}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className=" rounded-sm size-8"
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SeachInput;
