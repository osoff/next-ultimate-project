import React from "react";
import { cn } from "@/lib/utils";
import Categories from "./Categories";
import SortPopup from "./SortPopup";
import Container from "./container";
import { categories } from "../../prisma/constants";
import { Category } from "@prisma/client";

interface TopBarProps {
  categories: Category[];
  className?: string;
}

const TopBar: React.FC<TopBarProps> = ({ className, categories }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className=" flex items-center justify-between">
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};

export default TopBar;
