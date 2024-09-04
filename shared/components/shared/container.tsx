import React from "react";
import { cn } from "@/shared/lib/utils";

interface containerProps {
  className?: string;
}

const Container: React.FC<React.PropsWithChildren<containerProps>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("mx-auto max-w-[1280px]", className)}>{children}</div>
  );
};

export default Container;
