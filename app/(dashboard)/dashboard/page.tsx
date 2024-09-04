import React from "react";
import { cn } from "@/shared/lib/utils";

interface pageProps {
  className?: string;
}

const page: React.FC<pageProps> = ({ className }) => {
  return <div className={cn(className)}></div>;
};

export default page;
