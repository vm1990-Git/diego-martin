"use client";

import Image from "next/image";
import React from "react";

const Card = ({
  id,
  image,
  direc = "",
  title = "",
  priceUsd = "Consultar",
  pricePesos = "Consultar",
}) => {
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const formatPrice = (price, symbol) => {
    if (price === "Consultar") return "Consultar";
    return `${symbol}${formatNumber(price)}`;
  };

  const displayPrice =
    priceUsd !== "Consultar"
      ? formatPrice(priceUsd, "U$S ")
      : pricePesos !== "Consultar"
      ? formatPrice(pricePesos, "$ ")
      : "Consultar";

  const imageAlt = direc || "Card image";

  const handleClick = () => {
    const url = `/propiedades/${id}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="card"
      style={{ width: "18rem", cursor: "pointer" }}
      onClick={handleClick}
    >
      <Image
        src={image}
        alt={imageAlt}
        width={200}
        height={200}
        className="card-img-top object-fit-cover"
        priority
      />

      <div className="card-body p-1">
        <ul className="list-group list-group-flush rounded-2">
          <li className="list-group-item fw-bold py-1">{direc}</li>
          <li className="list-group-item py-1">{title}</li>
        </ul>
      </div>

      <div
        className="card-footer fw-semibold"
        style={{ background: "#ffc800a7" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-4 text-center">Precio</div>
            <div className="col-8 text-center">{displayPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
