import React from "react";
import { TbArrowsUpDown } from "react-icons/tb";
import { MdFilterList } from "react-icons/md";

const FilterMenu = ({ filters, setFilters }) => {
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div
      className="position-fixed start-0 top-0 d-flex justify-content-center gap-3 border-top border-bottom border-2 p-1 z-3 bg-white"
      style={{ width: "100vw", marginTop: "55px" }}
    >
      <div className="dropdown">
        <button
          className="btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {filters.Tipo_de_operacion || "Operación"}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                handleFilterChange("Tipo_de_operacion", "Alquiler")
              }
            >
              Alquiler
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleFilterChange("Tipo_de_operacion", "Venta")}
            >
              Venta
            </a>
          </li>
        </ul>
      </div>

      <button
        className="btn rounded-0 border-start border-end border-1 rounded-start-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        Filtros <MdFilterList size={18} />
      </button>

      <div className="dropdown">
        <button
          className="btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="d-flex gap-1 align-items-center">
            {filters.orden || "Orden"}
            <TbArrowsUpDown size={15} />
          </div>
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleFilterChange("orden", "Menor Precio")}
            >
              Menor Precio
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleFilterChange("orden", "Mayor Precio")}
            >
              Mayor Precio
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleFilterChange("orden", "Recientes")}
            >
              Recientes
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterMenu;
