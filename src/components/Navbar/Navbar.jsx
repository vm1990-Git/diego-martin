"use client";

import React, { useEffect, useRef } from "react";
import NavbarItem from "./NavbarItem";
import Logo from "./Logo";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef(null);

  const contactLink = /^\/propiedades\/\d+$/.test(pathname)
    ? "#contact"
    : "/#contact";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
          const navbarToggler = document.querySelector(".navbar-toggler");
          const isExpanded =
            navbarToggler.getAttribute("aria-expanded") === "true";
          if (isExpanded) {
            navbarToggler.click();
          }
        }
      };

      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, []);

  return (
    <nav
      className="navbar fixed-top navbar-expand-md navbar-dark bg-dark shadow"
      data-bs-backdrop="true"
      ref={navRef}
    >
      <div className="container-lg">
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
              onClick={() => router.push(contactLink)}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
