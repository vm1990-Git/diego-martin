import React from "react";
import { Image } from "react-bootstrap";

const Logo = () => {
  return (
    <a href="/" className="navbar-brand fw-bold" style={{ color: "white" }}>
      <div className="d-flex fle align-items-center ">
        <Image
          src={"/assets/logo2.png"}
          alt={"logo"}
          width={30}
          height={30}
          className="card-img-top pe-1"
        />
        <div className="d-flex flex-column text-center">
          <span style={{ fontSize: ".7rem" }}>Diego Martin</span>
          <span
            className="border-top border-2 border-warning"
            style={{ fontSize: ".6rem" }}
          >
            Propiedades
          </span>
        </div>
      </div>
    </a>
  );
};

export default Logo;
