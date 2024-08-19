"use client";

import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

const images = [
  { img: "/assets/property1.jpg" },
  { img: "/assets/AboutUs2.png" },
  { img: "/assets/header1.jpg" },
];

const ImageGallery = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.img);
  };

  const handleRotationRight = () => {
    const totalLength = images.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = images[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = images.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = images[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-inner">
            {images.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <Image
                  src={item.img}
                  alt={`image ${index + 1}`}
                  width={500}
                  height={500}
                  onClick={() => handleClick(item, index)}
                  className="d-block w-100"
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={(e) => {
              handleRotationLeft();
            }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={(e) => {
              handleRotationRight();
            }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {clickedImg !== null && (
        <Modal
          clickedImg={clickedImg}
          setClickedImg={setClickedImg}
          handleRotationLeft={handleRotationLeft}
          handleRotationRight={handleRotationRight}
        />
      )}
    </>
  );
};

export default ImageGallery;
