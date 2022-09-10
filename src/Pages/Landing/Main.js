import React, { useState, useEffect } from "react";

//react slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
const Main = () => {
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

  const [Products, setProducts] = useState(null);

  //init store
  let StoreDataBase = getFirestore();

  //collection ref
  let BookCollection = collection(StoreDataBase, "Products");

  const fetchProducts = async () => {
    getDocs(BookCollection).then((snapshot) => {
      let FetchedProducts = [];
      snapshot.docs.forEach((doc) => {
        FetchedProducts.push({ ...doc.data(), id: doc.id });
      });
      setProducts(FetchedProducts);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {Products === null ? (
        <></>
      ) : (
        <div className="w-[100vw] max-w-[100%] overflow-hidden">
          <Slider {...settings}>
            {Products.map((Product, index) => {
              return (
                <div
                  key={index}
                  className="relative flex justify-center items-center"
                >
                  <img
                    className="w-full h-96"
                    key={index}
                    src={Product.productImage}
                    alt={Product.productName}
                  />
                  <div className="absolute font-extrabold left-8 bottom-8">
                    <h1 className="text-xl">{Product.productName}</h1>
                    <h1 className="text-3xl">{Product.productDetails}</h1>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Main;
