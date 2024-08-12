import React from "react";
import NavbarItem from "./NavbarItem";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark shadow">
      <div className="container">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <NavbarItem title={"Home"} href={"/"} />
            <NavbarItem title={"Quienes Somos"} href={"/"} />
            <NavbarItem title={"Servicios"} href={"/"} />
            <NavbarItem title={"Búsqueda"} href={"/propiedades"} />
            <NavbarItem title={"Contacto"} href={"/"} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
