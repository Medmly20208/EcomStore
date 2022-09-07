import React from "react";

//components
import StoreItem from "./StoreItem";

//react slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

        zIndex: 100,
      }}
      onClick={onClick}
    >
      <style>{css}</style>
    </div>
  );
}
const Stores = () => {
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

  const StoresDetails = [
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZpJzKbFPd8iYFzU4Uu8d67i6T7cfVFWkSg&usqp=CAU",
      "LA",
    ],
    [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5pa2UlMjBzdG9yZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      "Paris",
    ],
    [
      "https://www.korodur.de/fileadmin/_processed_/f/9/csm_Nike_Kaunas_2_134aca5e73.jpg",
      "Madrid",
    ],
    [
      "https://www.dutchdecofactory.com/wp-content/uploads/2018/12/Nike_Dubai_Customization_High_Resolution-3-scaled-e1625315136496.jpg",
      "New York",
    ],
    [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f62ce046360145.58514d331624a.jpg",
      "Berlin",
    ],
    [
      "https://content3.jdmagicbox.com/comp/chennai/j7/044pxx44.xx44.180716073638.r8j7/catalogue/nike-store-v-r-chennai-mall-anna-nagar-chennai-shoe-dealers-2y0p3ba6jd.jpg?clr=2b2b3b",
      "Texas",
    ],
    [
      "https://www.vandadesigners.com/wp-content/uploads/2017/11/NIKE-19.jpg",
      "London",
    ],
  ];

  return (
    <div className="m-12">
      <h1 className="m-4 font-bold text-[#3e3e3e] text-3xl">OUR STORES</h1>

      <Slider {...settings}>
        {StoresDetails.map((Store, index) => {
          return (
            <div key={index} className="!flex justify-center items-center">
              <StoreItem key={index} Image={Store[0]} title={Store[1]} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Stores;
