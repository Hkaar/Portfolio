import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function DynamicLayout({ children }: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
