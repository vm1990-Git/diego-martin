import React from "react";

const FilterMenu = ({ filters, setFilters }) => {
  const handleOperationChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      Tipo_de_operacion: value,
    }));
  };

  const handleOrderChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      orden: value,
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
              onClick={() => handleOperationChange("Alquiler")}
            >
              Alquiler
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleOperationChange("Venta")}
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
        Filtros
      </button>

      <div className="dropdown">
        <button
          className="btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {filters.orden || "Ordenar ⮃"}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleOrderChange("Menor Precio")}
            >
              Menor Precio
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleOrderChange("Mayor Precio")}
            >
              Mayor Precio
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleOrderChange("Recientes")}
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
