"use client";

import React from "react";
import NavbarItem from "./NavbarItem";
import Logo from "./Logo";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
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
            <NavbarItem label={"Home"} onClick={() => router.push("/")} />
            <NavbarItem
              label={"Quienes Somos"}
              onClick={() => router.push("/#about-us")}
            />
            <NavbarItem
              label={"Servicios"}
              onClick={() => router.push("/#services")}
            />
            <NavbarItem
              label={"Búsqueda"}
              onClick={() => router.push("/propiedades")}
            />
            <NavbarItem
              label={"Contacto"}
              onClick={() => router.push("#contact")}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
