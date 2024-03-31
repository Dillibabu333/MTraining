import React from "react";
import Prod from "./Prod";
import style from "./Products.module.css"
import Navbar from "./Navbar";

const Products = () => {
  const data = [
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/e/f/-original-imagymhw8g7tdyhk.jpeg?q=70",

      name: "SAMSUNG Galaxy F15 5G",
      desc: "(Jazzy Green, 128 GB)",

      price: "₹14,499",
      striked_price: "₹16,999",
      discount: "14% off",
    },

    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/m/m/-original-imagyzw9ghf32enc.jpeg?q=70",

      name: "VIVO V30 5G",
      desc: "(Andaman Blue, 128 GB)",

      price: "₹33,999",
      striked_price: "₹38,999",
      discount: "12% off",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/b/d/-original-imagpgx48f4szdvf.jpeg?q=70",

      name: "Google Pixel 7a",
      desc: "(Sea Blue, 128 GB)",

      price: "₹38,999",
      striked_price: "₹43,999",
      discount: "11% off",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/h/7/edge-40-neo-payj0004in-motorola-original-imagtkezzam4qxfq.jpeg?q=70",

      name: "Motorola Edge 40 Neo",
      desc: "(Soothing Sea, 256 GB)",

      price: "₹24,999",
      striked_price: "₹29,999",
      discount: "16% off",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/p/h/-original-imagqhyftnseqttk.jpeg?q=70",

      name: "Infinix Note 30 5G",
      desc: "(Magic Black, 256 GB)",

      price: "₹54,499",
      striked_price: "₹19,999",
      discount: "22% off",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/u/d/reno-11-5g-cph2599-oppo-original-imagwxdsh2zjfpdt.jpeg?q=70",

      name: "OPPO Reno11 5G",
      desc: "(Wave Green, 128 GB)",

      price: "₹29,999",
      striked_price: "₹38,999",
      discount: "23% off",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/b/d/-original-imagpgx48f4szdvf.jpeg?q=70",

      name: "Google Pixel 7a",
      desc: "(Sea Blue, 128 GB)",

      price: "₹38,999",
      striked_price: "₹43,999",
      discount: "11% off",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/e/f/-original-imagymhw8g7tdyhk.jpeg?q=70",

      name: "SAMSUNG Galaxy F15 5G",
      desc: "(Jazzy Green, 128 GB)",

      price: "₹14,499",
      striked_price: "₹16,999",
      discount: "14% off",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/m/m/-original-imagyzw9ghf32enc.jpeg?q=70",

      name: "VIVO V30 5G",
      desc: "(Andaman Blue, 128 GB)",

      price: "₹33,999",
      striked_price: "₹38,999",
      discount: "12% off",
    },
  ];

  return (
    <div id={style.mainproducts}>
      <Navbar/>
      <div className={style.products}>
        {data.map((items, index) => (
          <Prod
            key={index}
            img={items.img}
            name={items.name}
            desc={items.desc}
            price={items.price}
            striked_price={items.striked_price}
            discount={items.discount}
          />
        ))}
      </div>
     
    </div>
  );
};

export default Products;
