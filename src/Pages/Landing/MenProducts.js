import React, { useState, useEffect } from "react";

//react slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Iconify
import { Icon } from "@iconify/react";

//firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

//componnets
import ProductItem from "./ProductItem";

const css = `
    #special:before {
        color: #3F54C2 !important;
    }
`;

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        id="special"
        className={className}
        style={{
          ...style,
          display: "block",

          zIndex: 100,
        }}
        onClick={onClick}
      >
        <style>{css}</style>
      </div>
    </>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      id="special"
      style={{
        ...style,
        display: "block",
        Color: "black",

        zIndex: 100,
      }}
      onClick={onClick}
    >
      <style>{css}</style>
    </div>
  );
}
const MenProducts = () => {
  //slider settings
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
        <div className="max-w-[100%]">
          <Slider {...settings}>
            {MenProducts.map((Product, index) => {
              return (
                <div key={index} className="!flex justify-center items-center">
                  <ProductItem
                    Id={Product.id}
                    Src={Product.productImage}
                    Name={Product.productName}
                    Details={Product.productDetails}
                    Price={Product.productPrice}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MenProducts;
