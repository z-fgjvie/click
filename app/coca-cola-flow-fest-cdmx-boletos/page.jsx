import React from "react";
import HeaderBoletos from "./components/header-boletos";
import HeroBoletos from "./components/hero-boletos";
import Conciertos from "./components/conciertos";
import Footer from "@/components/footer";

export default function PageCocaColaBoletos() {
  return (
    <>
      <HeaderBoletos />
      <HeroBoletos />
      <Conciertos />
      <Footer />
    </>
  );
}
