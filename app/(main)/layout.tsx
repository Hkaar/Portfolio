import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageUpButton from "@/components/PageUpButton";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>

      <PageUpButton />
    </>
  );
}
