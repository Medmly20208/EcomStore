import React from "react";

//components
import Header from "../../Layouts/Header";
import Main from "./Main";
import MenProducts from "./MenProducts";
import WomenProducts from "./WomenProducts";
import KidsProducts from "./KidsProducts";
import Stores from "./Stores";
import Footer from "./Footer";

const Index = () => {
  return (
    <>
      <Header />
      <Main />
      <MenProducts />
      <WomenProducts />
      <KidsProducts />
      <Stores />
      <Footer />
    </>
  );
};

export default Index;
