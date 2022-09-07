import React from "react";

//components
import Header from "../../Layouts/Header";
import Main from "./Main";
import MenProducts from "./MenProducts";
import WomenProducts from "./WomenProducts";
import KidsProducts from "./KidsProducts";
import Stores from "./Stores";

const index = () => {
  return (
    <>
      <Header />
      <Main />
      <MenProducts />
      <WomenProducts />
      <KidsProducts />
      <Stores />
    </>
  );
};

export default index;
