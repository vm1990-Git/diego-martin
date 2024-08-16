import React from "react";

const Logo = () => {
  return (
    <a href="#" className="navbar-brand fw-bold" style={{ color: "white" }}>
      <div className="d-flex flex-column text-center">
        <span style={{ fontSize: ".8rem" }}>Diego Martin</span>
        <span
          className="border-top border-2 border-warning"
          style={{ fontSize: ".75rem" }}
        >
          Propiedades
        </span>
      </div>
    </a>
  );
};

export default Logo;
