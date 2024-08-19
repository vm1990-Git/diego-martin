"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const Modal = ({ images, imageIndex, setImageIndex }) => {
  const handleSelect = (selectedIndex) => {
    setImageIndex(selectedIndex);
  };

  return (
    <div
      className="modal fade bg-dark bg-opacity-75"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <button
        type="button"
        className="btn-close position-absolute top-0 end-0 m-4 z-3 btn-close-white"
        data-bs-dismiss="modal"
        aria-label="Close"
        style={{ fontSize: "20px" }}
      ></button>
      <div className="modal-dialog modal-dialog-centered modal-fullscreen">
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
