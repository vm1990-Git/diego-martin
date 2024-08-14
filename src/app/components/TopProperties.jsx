"use client";

import React from "react";
import Card from "./Card";
import useProperties from "@/hooks/useProperties";

const getRandomProperties = (properties, num) => {
  if (properties.length <= num) return properties;

  const shuffled = properties.slice().sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};

const TopProperties = () => {
  const { properties } = useProperties();

  const randomProperties = getRandomProperties(properties, 4);

  return (
    <div className="d-flex flex-column py-4">
      <h2 className="text-center h2 fw-semibold">Propiedades destacadas</h2>
      <div className="container-fluid card-container">
        {randomProperties.length > 0 ? (
          randomProperties.map((property) => {
            const imageUrl =
              property.attributes.Imagen?.data?.[0]?.attributes?.url ||
              "/assets/NoImage.png";

            return (
              <Card
                key={property.id}
                id={property.id}
                image={imageUrl}
                title={property.attributes.Direccion || "Dirección"}
                subtitle={property.attributes.descripcion || "Localidad"}
                text={property.attributes.sub_descripcion || "Descripción"}
                priceUsd={property.attributes.valor_dolares || "Consultar"}
                pricePesos={property.attributes.valor_pesos || "Consultar"}
              />
            );
          })
        ) : (
          <div className="loading-container" style={{ height: "300px" }}>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <span className="my-3 fw-semibold">Cargando Propiedades</span>
          </div>
        )}
      </div>
      <a
        href="/propiedades"
        className="btn align-self-center bg-dark bg-opacity-75 text-white z-3"
      >
        Ver Más Propiedades
      </a>
    </div>
  );
};

export default TopProperties;
