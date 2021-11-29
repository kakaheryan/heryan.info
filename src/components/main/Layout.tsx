import * as React from "react";

import Footer from "@/components/main/footer";
import Header from "@/components/main/header";

import { PreloadProvider } from "@/context/PreloadContext";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <PreloadProvider>{children}</PreloadProvider>
      <Footer />
    </>
  );
}
