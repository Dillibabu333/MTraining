import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import clothing_data from "./Clothing_data.json";
import accessories_data from "./Accessories_data.json";
import "./Home.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const Home = () => {
  const clothing = useRef();
  const accessories = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  const scrollHandler = (elemref) => {
    console.log(elemref);
    window.scrollTo({ top: elemref.current.offsetTop, behaviord: "smooth" });
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Navbar
        scrollHandler={scrollHandler}
        clothing={clothing}
        accessories={accessories}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div id="sliding_container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              src="https://shoplane-by-lassie.netlify.app/img/img4.png"
              alt="first img"
              width="100%"
            ></img>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://shoplane-by-lassie.netlify.app/img/img1.png"
              alt="second img"
              width="100%"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://shoplane-by-lassie.netlify.app/img/img2.png"
              alt="third img"
              width="100%"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://shoplane-by-lassie.netlify.app/img/img3.png"
              alt="fourth img"
              width="100%"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div ref={clothing} id="cloth_for_men_women">
        <h1>Clothing For Men And Women</h1>
        <div className="clothing_box">
          {clothing_data
            .filter(
              (items) =>
                items.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                items.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                items.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                items.price.toString().includes(searchTerm)
            )
            .map((items) => (
              <div className="cloth_item">
                <Link
                  className="link"
                  key={items.id}
                  to={`/clothProduct/${items.id}`}
                >
                  <div className="cloth">
                    <img src={items.image} alt="" />
                    <h3>{items.name}</h3>
                    <h4>{items.brand}</h4>
                    <h2>Rs {items.price}</h2>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div ref={accessories} id="accessories_for_men_women">
        <h1>Accessories For Men And Women</h1>

        <div className="accessories_box">
          {accessories_data
            .filter(
              (items) =>
                items.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                items.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                items.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                items.price.toString().includes(searchTerm)
            )
            .map((items) => (
              <div className="access_item">
                <Link
                  className="link"
                  key={items.id}
                  to={`/accessoriesProduct/${items.id}`}
                >
                  <div className="access">
                    <img src={items.image} alt="" />
                    <h3>{items.name}</h3>
                    <h4>{items.brand}</h4>
                    <h2>Rs {items.price}</h2>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
