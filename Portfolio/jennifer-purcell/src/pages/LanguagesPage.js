import React from "react";
import Info from "../components/LanguagesPage/languagesInfo";
import Hero from "../components/Hero";
import languagesHero from "../images/languagesHero.jpg";

export default function LanguagesPage() {
  return (
    <>
      <Hero img={languagesHero} />
      <Info />
    </>
  );
}
