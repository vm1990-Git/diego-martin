import React from "react";

const NavbarItem = ({ title, href }) => {
  return (
    <li className="nav-item nav-item-custom">
      <a
        href={href}
        className="nav-link fw-semibold text-white"
        aria-current="page"
      >
        {title}
      </a>
    </li>
  );
};

export default NavbarItem;
