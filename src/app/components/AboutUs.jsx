"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="flex-column align-items-center py-4 text-white"
      style={{
        backgroundImage: `url('/assets/1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row g-0">
          <div className="col-md-7 d-flex flex-column justify-content-center bg-dark bg-opacity-75 p-4 text-white shadow border-start border-4 border-warning">
            <h5 className="fw-bold">Diego Martin Propiedades</h5>
            <p className="mb-2">
              En Diego Martín Propiedades, empezamos cada día con un objetivo en
              mente: dar un servicio profesional, transparente y eficaz a
              nuestros clientes.
            </p>
            <p className="mb-2">Nuestro cliente es USTED.</p>
            <div
              className={`row ${isExpanded ? "d-block" : "d-none d-md-block"}`}
            >
              <p className="mb-2">
                Usted, particular que busca una casa para comprar o en alquiler,
                ya sea como residencia habitual, segunda vivienda o inversión
                futura. Usted, profesional que busca el emplazamiento adecuado
                para su negocio. Y usted, propietario que busca comprador o
                inquilino para su inmueble.
              </p>
              <p className="mb-2">
                Nosotros creemos que hay una casa para cada persona y una
                persona para cada casa, por eso entendemos el aspecto humano de
                nuestro negocio y trabajamos cuidando la relación personal para
                prestarle el mejor asesoramiento durante todo el proceso de
                compra-venta y alquiler.
              </p>
            </div>
            <div className="col text-center d-md-none d-block">
              <button className="btn mt-3 text-white" onClick={handleToggle}>
                {isExpanded ? "Leer menos" : "Leer más"}
              </button>
            </div>
          </div>
          <div className="col-md-5 d-flex">
            <Image
              src="/assets/property1.jpg"
              alt="Imagen del local"
              className="img-fluid w-100 h-auto"
              style={{ objectFit: "cover" }}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="row mt-3"></div>
      </div>
    </div>
  );
};

export default AboutUs;

// <div className="d-flex flex-column py-4 bg-dark text-white">
//   <h2 className="text-center h2 fw-semibold pb-4">Quiénes Somos</h2>
// <div className="container">
//   <div className="row mb-4 align-items-center">
//     <div className="col-md-6">
//       <p>
//         En Diego Martín Propiedades, empezamos cada día con un objetivo en
//         mente: dar un servicio profesional, transparente y eficaz a
//         nuestros clientes.
//       </p>
//     </div>
//   </div>
//   <div className="row mb-1">
//     <div className="col-auto">
//       <span>Diego Martín Propiedades</span>
//     </div>
//   </div>
//   <div className="row mb-1">
//     <p>Nuestro cliente es USTED.</p>
//   </div>
//   <div className="row mb-1">
//     <p>
//       Usted, particular que busca una casa para comprar o en alquiler, ya
//       sea como residencia habitual, segunda vivienda o inversión futura.
//       Usted, profesional que busca el emplazamiento adecuado para su
//       negocio. Y usted, propietario que busca comprador o inquilino para
//       su inmueble.
//     </p>
//   </div>
//   <div className={`row ${isExpanded ? "d-block" : "d-none d-md-block"}`}>
//     <p>
// Nosotros creemos que hay una casa para cada persona y una persona
// para cada casa, por eso entendemos el aspecto humano de nuestro
// negocio y trabajamos cuidando la relación personal para prestarle el
// mejor asesoramiento durante todo el proceso de compra-venta y
// alquiler.
//     </p>
//   </div>
// <div className="row mt-3">
//   <div className="col text-center d-md-none d-block">
//     <button className="btn mt-3" onClick={handleToggle}>
//       {isExpanded ? "Leer menos" : "Leer más"}
//     </button>
//   </div>
// </div>
// </div>
// </div>
