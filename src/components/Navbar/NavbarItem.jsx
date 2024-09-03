import React from "react";

const NavbarItem = ({ label, onClick }) => {
  return (
    <li
      className="nav-item nav-item-custom text-center d-flex align-items-center"
      style={{ cursor: "pointer", fontSize: "1.1rem" }}
    >
      <div
        className="nav-link fw-semibold text-white"
        aria-current="page"
        onClick={onClick}
        data-bs-toggle="collapse"
        data-bs-target=".navbar-collapse.show"
      >
        {label}
      </div>
    </li>
  );
};

export default NavbarItem;
