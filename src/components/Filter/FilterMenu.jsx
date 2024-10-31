import React, { useCallback } from "react";

const FilterMenu = ({ filters, setFilters }) => {
  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      setFilters((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    },
    [setFilters]
  );

  const getValueOrDefault = (value) => (value === null ? "" : value);

  return (
    <div className="d-flex flex-column justify-content-center bg-dark text-bg-dark p-3 rounded-2">
      <div className="d-flex align-content-center justify-content-center">
        <h4 className="border-bottom border-3 border-warning p-1">Busqueda</h4>
      </div>
      <div className="mb-3">
        <label className="form-label">Tipo de Propiedad</label>
        <select
          className="form-select"
          name="tipo_de_inmueble"
          value={getValueOrDefault(filters.tipo_de_inmueble)}
          onChange={handleChange}
        >
          <option value="">Todas</option>
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
        <label className="form-label">Tipo de Operación</label>
        <select
          className="form-select"
          name="Tipo_de_operacion"
          value={getValueOrDefault(filters.Tipo_de_operacion)}
          onChange={handleChange}
        >
          <option value="">Seleccione</option>
          <option value="Venta">Venta</option>
          <option value="Alquiler">Alquiler</option>
        </select>
      </div>
    </div>
  );
};

export default FilterMenu;
