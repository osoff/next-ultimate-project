import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./Title";
import { FilterCheckbox } from "./FilterCheckbox";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import { RangeSlider } from "./RangeSlider";
import CheckboxFiltersGroup from "./CheckboxFiltersGroup";

interface FiltersProps {
  className?: string;
}

const options = [
  {
    text: "Cheese Sauce",
    value: "1",
  },
  {
    text: "Mozzarella",
    value: "2",
  },
  {
    text: "Garlic",
    value: "3",
  },
  {
    text: "Pepperoni",
    value: "4",
  },
  {
    text: "Chicken Fillet",
    value: "5",
  },
  {
    text: "Tomatoes",
    value: "6",
  },
  {
    text: "Olives",
    value: "7",
  },
  {
    text: "Basil",
    value: "8",
  },
  {
    text: "Onion",
    value: "9",
  },
  {
    text: "Mushrooms",
    value: "10",
  },
  {
    text: "Bacon",
    value: "11",
  },
  {
    text: "Parmesan",
    value: "12",
  },
  {
    text: "Spinach",
    value: "13",
  },
  {
    text: "Red Peppers",
    value: "14",
  },
  {
    text: "Jalapenos",
    value: "15",
  },
  {
    text: "Anchovies",
    value: "16",
  },
  {
    text: "Pineapple",
    value: "17",
  },
  {
    text: "Sausage",
    value: "18",
  },
  {
    text: "Ham",
    value: "19",
  },
  {
    text: "Artichokes",
    value: "20",
  },
];

const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Title text="Filtering" size="sm" className=" mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Collect" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className=" font-bold mb-3">Price from and to:</p>
        <div className=" flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={0} max={1000} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        title="ingredients"
        className=" mt-5"
        limit={6}
        defaultItems={options}
        items={options}
      />
    </div>
  );
};

export default Filters;
