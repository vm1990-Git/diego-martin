import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide mt-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src="/assets/header1.jpg"
            alt="Imagen de encabezado"
            width={1000}
            height={500}
            className="d-block w-100"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/assets/header2.png"
            alt="Imagen de encabezado"
            width={1000}
            height={500}
            className="d-block w-100"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/assets/header3.png"
            alt="Imagen de encabezado"
            width={1000}
            height={500}
            className="d-block w-100"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Header;
