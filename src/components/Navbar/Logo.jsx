import React from "react";
import { Image } from "react-bootstrap";

const Logo = () => {
  return (
    <a href="/" className="navbar-brand fw-bold" style={{ color: "white" }}>
      <div className="d-flex align-items-center">
        <Image
          src={"/assets/logo2.png"}
          alt={"logo"}
          width={60}
          height={60}
          className="card-img-top pe-1"
          style={{ maxWidth: "150px" }}
        />
        <div className="d-flex flex-column text-center">
          <span style={{ fontSize: "1rem" }}>Diego Martin</span>
          <span
            className="border-top border-2 border-warning"
            style={{ fontSize: ".9rem" }}
          >
            Propiedades
          </span>
        </div>
      </div>
    </a>
  );
};

export default Logo;
