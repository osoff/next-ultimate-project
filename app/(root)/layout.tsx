import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import Header from "@/shared/components/shared/Header";

export const metadata: Metadata = {
  title: "UltimateStack | Главная",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      {modal}
    </main>
  );
}
