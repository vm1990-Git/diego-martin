import React, { useCallback } from "react";

const amenityLabels = {
  espacio_para_autos: "Cochera",
  Comodidades_Balcon: "Balcón",
  Comodidades_Lavadero: "Lavadero",
  Comodidades_Dep_Servicio: "Dep. Servicio",
  Comodidades_Fondo_libre: "Fondo libre",
  Comodidades_Ascensor: "Ascensor",
  Comodidades_Quincho: "Quincho",
  Comodidades_SUM: "Sum",
  Comodidades_Parrilla: "Parrilla",
  Comodidades_Piscina: "Piscina",
  Comodidades_Vigilancia: "Vigilancia",
  Comodidades_Terraza: "Terraza",
  Varios_Apto_Credito: "Apto Crédito",
  Varios_Destacado: "Destacado",
  Servicios_Gas_Natural: "Gas Natural",
  Servicios_Agua_Corriente: "Agua Corriente",
  Servicios_Luz: "Luz",
  Servicios_Red_Cloacal: "Red Cloacal",
  Servicios_Pavimento: "Pavimento",
  Varios_Apto_Profesional: "Apto Profesional",
  Comodidades_Espacio_al_frente: "Espacio al Frente",
  Varios_Seguro_de_caucion: "Seguro Caución",
  Varios_Garantia_Propietaria: "Garantía Propietaria",
  Comodidades_Apto_Emprendimiento: "Apto Emprendimiento",
};

const FilterOffcanvas = ({ filters, setFilters, handleReset }) => {
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
      } else {
        setFilters((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }));
      }
    },
    [setFilters]
  );
  const checkboxKeys = Object.keys(amenityLabels);

  const getValueOrDefault = (value) => (value === null ? "" : value);

  return (
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
        <div className="d-flex justify-content-center mb-4">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleReset}
          >
            Borrar Filtros
          </button>
        </div>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label">Localidad</label>
              <select
                className="form-select"
                name="Localidades"
                value={getValueOrDefault(filters.Localidades)}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="Avellaneda">Avellaneda</option>
                <option value="Bahía Blanca">Bahía Blanca</option>
                <option value="Berazategui">Berazategui</option>
                <option value="Bolívar">Bolívar</option>
                <option value="Campana">Campana</option>
                <option value="Chivilcoy">Chivilcoy</option>
                <option value="Cnel. Suárez">Cnel. Suárez</option>
                <option value="Dolores">Dolores</option>
                <option value="Ensenada">Ensenada</option>
                <option value="Escobar">Escobar</option>
                <option value="Florencio Varela">Florencio Varela</option>
                <option value="La Plata">La Plata</option>
                <option value="Lomas de Zamora">Lomas de Zamora</option>
                <option value="Lanús">Lanús</option>
                <option value="Mar del Plata">Mar del Plata</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Morón">Morón</option>
                <option value="Pilar">Pilar</option>
                <option value="Quilmes">Quilmes</option>
                <option value="San Fernando">San Fernando</option>
                <option value="San Isidro">San Isidro</option>
                <option value="San Martín">San Martín</option>
                <option value="San Nicolás">San Nicolás</option>
                <option value="San Pedro">San Pedro</option>
                <option value="Tigre">Tigre</option>
                <option value="Tres Arroyos">Tres Arroyos</option>
                <option value="Zárate">Zárate</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Tipo de Propiedad</label>
              <select
                className="form-select"
                name="tipo_de_inmueble"
                value={getValueOrDefault(filters.tipo_de_inmueble)}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="Casa">Casa</option>
                <option value="Departamentos">Departamentos</option>
                <option value="PH">PH</option>
                <option value="Lotes">Lotes</option>
                <option value="Locales">Locales</option>
                <option value="Galpones">Galpones</option>
                <option value="Cocheras">Cocheras</option>
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
                  value={getValueOrDefault(filters.priceRange?.min)}
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
                  value={getValueOrDefault(filters.priceRange?.max)}
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
                name="Ambientes"
                value={getValueOrDefault(filters.Ambientes)}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 o más</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Dormitorios</label>
              <select
                className="form-select"
                name="Dormitorios"
                value={getValueOrDefault(filters.Dormitorios)}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 o más</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label">Baños</label>
              <select
                className="form-select"
                name="Banos"
                value={getValueOrDefault(filters.Banos)}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 o más</option>
              </select>
            </div>

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Opciones Adicionales
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="m-2">
                      <div className="row g-0">
                        {checkboxKeys.map((key) => (
                          <div
                            className="col-md-6 mb-2 d-flex align-items-center"
                            key={key}
                          >
                            <div className="form-check w-100">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id={key}
                                name={key}
                                checked={filters[key] || false}
                                onChange={handleChange}
                              />
                              <label className="form-check-label" htmlFor={key}>
                                {amenityLabels[key] || key}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterOffcanvas;
