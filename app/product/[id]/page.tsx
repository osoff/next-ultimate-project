import React from "react";
import { cn } from "@/lib/utils";

interface pageProps {
  className?: string;
  params: any;
}

const page: React.FC<pageProps> = ({ className, params: { id } }) => {
  return (
    <div className={cn(className)}>
      <p>Product {id}</p>
    </div>
  );
};

export default page;
