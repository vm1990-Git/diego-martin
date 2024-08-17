"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./PropetyDetails.css";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const Modal = ({ images, imageIndex, setImageIndex }) => {
  const handleSelect = (selectedIndex) => {
    setImageIndex(selectedIndex);
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div
          className="modal-content border-0 rounded-0 bg-transparent"
          style={{ maxHeight: "90vh", maxWidth: "100vw" }}
        >
          <Carousel activeIndex={imageIndex} onSelect={handleSelect}>
            {images.map((image, i) => (
              <Carousel.Item key={i}>
                <div
                  className="d-flex justify-content-center carousel-item-container custom-carousel-container"
                  style={{ height: "90vh", width: "100%" }}
                >
                  <Image
                    src={image}
                    alt={`Descripción de la imagen ${i + 1}`}
                    className="img-fluid object-fit-contain"
                    width={1500}
                    height={1000}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Modal;
