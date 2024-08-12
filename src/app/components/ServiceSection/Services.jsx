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
    <div className="d-flex flex-column py-4">
      <h2 className="text-center h2 fw-semibold">Nuestros Servicios</h2>
      <div className="container">
        <div className="d-flex justify-content-center flex-wrap">
          {services.map((service, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center mx-3 mb-4"
              style={{ width: "150px" }}
            >
              <div style={{ fontSize: "6rem", color: "#ffc600" }}>
                {service.icon}
              </div>
              <span className="text-center fw-semibold">{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
