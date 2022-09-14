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
import Iconify from "../../Components/Iconify";

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
const WomenProducts = () => {
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

  //init store
  let StoreDataBase = getFirestore();

  //collection ref
  let ProductsCollection = collection(StoreDataBase, "WomenProducts");

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
    <div id="Women" className="pt-[100px]">
      <div className="m-12">
        <h1 className="m-4 font-bold text-[#3e3e3e] text-3xl">
          WOMEN PRODUCTS
        </h1>
        {MenProducts !== null ? (
          <Slider {...settings}>
            {MenProducts.map((Product, index) => {
              return (
                <div key={index} className="!flex justify-center items-center">
                  <ProductItem
                    key={index}
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
        ) : (
          <div className="flex w-full justify-center items-center">
            <Iconify icon={"eos-icons:loading"} style={{ fontSize: "100px" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WomenProducts;
