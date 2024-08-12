"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="d-flex flex-column py-4 bg-dark text-white">
      <h2 className="text-center h2 fw-semibold pb-4">Quiénes Somos</h2>
      <div className="container">
        <div className="row mb-1">
          <div className="col-auto">
            <span>Diego Martín Propiedades</span>
          </div>
        </div>
        <div className="row mb-1">
          <p>
            En Diego Martín Propiedades, empezamos cada día con un objetivo en
            mente: dar un servicio profesional, transparente y eficaz a nuestros
            clientes.
          </p>
        </div>
        <div className="row mb-1">
          <p>Nuestro cliente es USTED.</p>
        </div>
        <div className="row mb-1">
          <p>
            Usted, particular que busca una casa para comprar o en alquiler, ya
            sea como residencia habitual, segunda vivienda o inversión futura.
            Usted, profesional que busca el emplazamiento adecuado para su
            negocio. Y usted, propietario que busca comprador o inquilino para
            su inmueble.
          </p>
        </div>
        <div className={`row ${isExpanded ? "d-block" : "d-none d-md-block"}`}>
          <p>
            Nosotros creemos que hay una casa para cada persona y una persona
            para cada casa, por eso entendemos el aspecto humano de nuestro
            negocio y trabajamos cuidando la relación personal para prestarle el
            mejor asesoramiento durante todo el proceso de compra-venta y
            alquiler.
          </p>
        </div>
        <div className="row mt-3">
          <div className="col text-center d-md-none d-block">
            <button className="btn mt-3" onClick={handleToggle}>
              {isExpanded ? "Leer menos" : "Leer más"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
