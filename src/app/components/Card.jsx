"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Card = ({
  id,
  image,
  title = "",
  text = "",
  priceUsd = "Consultar",
  pricePesos = "Consultar",
}) => {
  const router = useRouter();

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

  const imageAlt = title || "Card image";

  const handleClick = () => {
    router.push(`/propiedades/${id}`);
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
        className="card-img-top"
      />

      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item fw-bold">{title}</li>
          <li className="list-group-item fw-semibold text-danger">{text}</li>
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
