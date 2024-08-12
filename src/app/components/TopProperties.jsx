import React from "react";
import Card from "./Card";

const TopProperties = () => {
  return (
    <div className="d-flex flex-column py-4">
      <h2 className="text-center h2 fw-semibold">Propiedades destacadas</h2>
      <div className="container-fluid card-container">
        <Card
          image="/assets/property1.jpg"
          title={"Calle falsa 123"}
          subtitle="Barrio Nordelta Norte"
          text="Oportunidad"
          price="consultar"
        />
        <Card
          image="/assets/property1.jpg"
          title={"Calle falsa 123"}
          subtitle="Barrio Nordelta Norte"
          text="Oportunidad"
          price="consultar"
        />
        <Card
          image="/assets/property1.jpg"
          title={"Calle falsa 123"}
          subtitle="Barrio Nordelta Norte"
          text="Oportunidad"
          price="consultar"
        />
        <Card
          image="/assets/property1.jpg"
          title={"Calle falsa 123"}
          subtitle="Barrio Nordelta Norte"
          text="Oportunidad"
          price="consultar"
        />
      </div>
      <a
        href="/propiedades"
        className="btn align-self-center bg-secondary bg-opacity-75 text-white"
      >
        Ver Más Propiedades
      </a>
    </div>
  );
};

export default TopProperties;
