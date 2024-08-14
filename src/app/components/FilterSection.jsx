"use client";

import React, { useCallback } from "react";

const FilterSection = ({ filters, setFilters }) => {
  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;

      if (name === "priceRangeMin" || name === "priceRangeMax") {
        setFilters((prev) => ({
          ...prev,
          priceRange: {
            ...prev.priceRange,
            [name === "priceRangeMin" ? "min" : "max"]: value,
          },
        }));
      } else if (type === "checkbox") {
        setFilters((prev) => ({
          ...prev,
          additionalOptions: {
            ...prev.additionalOptions,
            [name]: checked,
          },
        }));
      } else {
        setFilters((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }));
      }
    },
    [setFilters]
  );

  const handleResetFilters = useCallback(() => {
    setFilters({
      operationType: "",
      propertyType: "",
      currency: "",
      priceRange: { min: "", max: "" },
      rooms: "",
      bedrooms: "",
      bathrooms: "",
      amenities,
      additionalOptions: {
        credit: false,
        parking: false,
      },
      location: "",
    });
  }, [setFilters]);

  return (
    <div className="d-flex align-self-center">
      <button
        className="btn btn-dark"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        Filtros
      </button>

      <div
        className="offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabIndex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            Filtros
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label">Operación</label>
              <select
                className="form-select"
                name="operationType"
                value={filters.operationType}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="Alquiler">Alquiler</option>
                <option value="Venta">Venta</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Localidad</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={filters.location}
                onChange={handleChange}
                aria-label="Localidad"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Tipo de Propiedad</label>
              <select
                className="form-select"
                name="propertyType"
                value={filters.propertyType}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="Casa">Casa</option>
                <option value="Departamentos">Departamentos</option>
                <option value="PH">PH</option>
                <option value="Lotes">Lotes</option>
                <option value="Locales">Locales</option>
                <option value="Galpones">Galpones</option>
                <option value="Cochera">Cochera</option>
                <option value="Duplex">Duplex</option>
                <option value="Oficinas">Oficinas</option>
                <option value="Otros">Otros</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Valor</label>
              <div className="input-group mb-2">
                <span className="input-group-text w-25">desde $</span>
                <input
                  type="number"
                  className="form-control"
                  name="priceRangeMin"
                  value={filters.priceRange.min}
                  onChange={handleChange}
                  aria-label="Monto mínimo"
                />
              </div>
              <div className="input-group">
                <span className="input-group-text w-25">hasta $</span>
                <input
                  type="number"
                  className="form-control"
                  name="priceRangeMax"
                  value={filters.priceRange.max}
                  onChange={handleChange}
                  aria-label="Monto máximo"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Moneda</label>
              <div className="d-flex align-items-center">
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="usd"
                    name="currency"
                    value="usd"
                    checked={filters.currency === "usd"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="usd">
                    U$S
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="pesos"
                    name="currency"
                    value="pesos"
                    checked={filters.currency === "pesos"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="pesos">
                    $
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Ambientes</label>
              <select
                className="form-select"
                name="rooms"
                value={filters.rooms}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="1">1 ambientes</option>
                <option value="2">2 ambientes</option>
                <option value="3">3 ambientes</option>
                <option value="4">4 ambientes</option>
                <option value="5">5 o más ambientes</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Dormitorios</label>
              <select
                className="form-select"
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="1">1 dormitorio</option>
                <option value="2">2 dormitorios</option>
                <option value="3">3 dormitorios</option>
                <option value="4">4 dormitorios</option>
                <option value="5">5 o más dormitorios</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Baños</label>
              <select
                className="form-select"
                name="bathrooms"
                value={filters.bathrooms}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="1">1 baño</option>
                <option value="2">2 baños</option>
                <option value="3">3 baños</option>
                <option value="4">4 baños</option>
                <option value="5">5 o más baños</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Comodidades</label>
              <select
                className="form-select"
                name="amenities"
                value={filters.amenities}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="Balcón">Balcón</option>
                <option value="Lavadero">Lavadero</option>
                <option value="Dep. Servicio">Dep. Servicio</option>
                <option value="Espacio al Frente">Espacio al Frente</option>
                <option value="Acensor">Acensor</option>
                <option value="Quincho">Quincho</option>
                <option value="Sum">Sum</option>
                <option value="Parrilla">Parrilla</option>
                <option value="Pscina">Pscina</option>
                <option value="Vigilancia">Vigilancia</option>
                <option value="Terraza">Terraza</option>
                <option value="Apto Emprendimiento">Apto Emprendimiento</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Opciones adicionales</label>
              <div className="d-flex align-items-center">
                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="credit"
                    name="credit"
                    checked={filters.additionalOptions.credit}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Apto Crédito
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="parking"
                    name="parking"
                    checked={filters.additionalOptions.parking}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="parking">
                    Con Cochera
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleResetFilters}
              >
                Borrar Filtros
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
