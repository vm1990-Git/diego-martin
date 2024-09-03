import React from "react";
import {
  FaSearchDollar,
  FaBuilding,
  FaHome,
  FaHandshake,
} from "react-icons/fa";

import { FaUserPen } from "react-icons/fa6";

const Services = () => {
  const services = [
    { icon: <FaHome />, label: "Compraventas" },
    { icon: <FaUserPen />, label: "Administraciones" },
    { icon: <FaBuilding />, label: "Alquileres" },
    { icon: <FaSearchDollar />, label: "Tasaciones" },
    {
      icon: <FaHandshake />,
      label: "Asesoramiento inmobiliario integral",
    },
  ];

  return (
    <>
      <section id="services" />
      <div className="d-flex flex-column py-5">
        <h2 className="text-center h2 fw-bold pb-4">Nuestros Servicios</h2>
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap">
            {services.map((service, index) => (
              <div
                key={index}
                className="d-flex flex-column align-items-center mx-3 mb-4"
                style={{ width: "150px" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center shadow px-4 rounded-5"
                  style={{
                    fontSize: "6rem",
                    color: "#ffc600",
                    height: "150px",
                  }}
                >
                  {service.icon}
                </div>
                <span className="text-center fw-bold pt-1">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
