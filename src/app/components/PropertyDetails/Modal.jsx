"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./PropetyDetails.css";
import Image from "next/image";

const Modal = ({ images, imageIndex, prevImage, nextImage }) => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content position-relative">
            <div className="d-flex justify-content-center align-items-center position-relative">
              <button
                type="button"
                className="btn-close btn-close-dark position-absolute top-0 end-0 m-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <button
                className="btn btn-custom-arrow position-absolute top-50 start-0 translate-middle-y"
                onClick={prevImage}
                style={{ zIndex: 1, fontSize: "50px", fontWeight: "100" }}
              >
                &#8249;
              </button>
              <Image
                src={images[imageIndex]}
                alt="Descripción de la imagen"
                className="img-fluid d-block"
                style={{ maxWidth: "100%", height: "auto" }}
                width={1000}
                height={1000}
              />
              <button
                className="btn btn-custom-arrow position-absolute top-50 end-0 translate-middle-y"
                onClick={nextImage}
                style={{ zIndex: 1, fontSize: "50px", fontWeight: "100" }}
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
