import React from "react";
import Header from "../../Layouts/Header";
import Main from "./Main";
import MenProducts from "./MenProducts";
import WomenProducts from "./WomenProducts";
import KidsProducts from "./KidsProducts";

const index = () => {
  return (
    <>
      <Header />
      <Main />
      <MenProducts />
      <WomenProducts />
      <KidsProducts />
    </>
  );
};

export default index;
