import React from "react";
import { cn } from "@/shared/lib/utils";
import Container from "./container";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import SeachInput from "./SeachInput";

interface headerProps {
  className?: string;
}

const Header: React.FC<headerProps> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href={"/"} className="flex items-center gap-4">
          <Image
            src="/logo.jpeg"
            alt="logo"
            width={45}
            height={45}
            className=" rounded-full"
          />
          <div>
            <h1 className="text-2xl uppercase font-black text-primary">
              Ultimate Stack
            </h1>
            <p className="text-sm text-gray-400 leading-3">
              Latest technologies
            </p>
          </div>
        </Link>

        <div className=" mx-10 flex-1">
          <SeachInput />
        </div>

        <div className=" flex items-center gap-3">
          <Button variant="outline" className=" flex items-center gap-1">
            <User size={16} />
            Log In
          </Button>
          <div>
            <Button className=" group relative">
              <b>520 $</b>
              <span className=" h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
