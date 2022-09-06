import React, { useState, useEffect } from "react";

//react slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

//componnets
import ProductItem from "./ProductItem";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",

        left: "0px",
        zIndex: 100,
      }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
        right: "0px",
        zIndex: 100,
      }}
      onClick={onClick}
    />
  );
}
const MenProducts = () => {
  //slider settings
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [MenProducts, setMenProducts] = useState(null);
  const firebaseConfig = {
    apiKey: "AIzaSyB8kg_O4JjDBxyb6fEnYCBR3VbmgiZfrRw",
    authDomain: "ecomstoer.firebaseapp.com",
    databaseURL: "https://ecomstoer-default-rtdb.firebaseio.com",
    projectId: "ecomstoer",
    storageBucket: "ecomstoer.appspot.com",
    messagingSenderId: "582716717051",
    appId: "1:582716717051:web:243bf9bbb8e46d546dbd5e",
    measurementId: "G-WHFMMS8MJV",
  };

  //init firebsae app
  initializeApp(firebaseConfig);

  //init store
  let StoreDataBase = getFirestore();

  //collection ref
  let ProductsCollection = collection(StoreDataBase, "MenProducts");

  const fetchProducts = async () => {
    getDocs(ProductsCollection).then((snapshot) => {
      let FetchedProducts = [];
      snapshot.docs.forEach((doc) => {
        FetchedProducts.push({ ...doc.data(), id: doc.id });
      });
      setMenProducts(FetchedProducts);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="m-12">
      <h1 className="m-4 font-bold text-[#3e3e3e] text-3xl">MEN PRODUCTS</h1>
      {MenProducts !== null ? (
        <div className="flex gap-4">
          {MenProducts.map((Product, index) => {
            return (
              <ProductItem
                key={index}
                Id={Product.id}
                Src={Product.productImage}
                Name={Product.productName}
                Details={Product.productDetails}
                Price={Product.productPrice}
              />
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MenProducts;
