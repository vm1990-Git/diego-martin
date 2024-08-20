import React, { useCallback } from "react";

const amenityLabels = {
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
  Comodidades_espacio_para_auto: "Espacio para Auto",
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
      data-bs-backdrop="true"
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
                <option value="Ciudad Autónoma de Buenos Aires (CABA)">
                  Ciudad Autónoma de Buenos Aires (CABA)
                </option>
                <option value="l 25 de Mayo">25 de Mayo</option>
                <option value="l 9 de Julio">9 de Julio</option>
                <option value="Adolfo Alsina">Adolfo Alsina</option>
                <option value="Adolfo Gonzales Chaves">
                  Adolfo Gonzales Chaves
                </option>
                <option value="Alberti">Alberti</option>
                <option value="Almirante Brown">Almirante Brown</option>
                <option value="Arrecifes">Arrecifes</option>
                <option value="Avellaneda">Avellaneda</option>
                <option value="Ayacucho">Ayacucho</option>
                <option value="Azul">Azul</option>
                <option value="Bahía Blanca">Bahía Blanca</option>
                <option value="Balcarce">Balcarce</option>
                <option value="Baradero">Baradero</option>
                <option value="Benito Juárez">Benito Juárez</option>
                <option value="Berazategui">Berazategui</option>
                <option value="Berisso">Berisso</option>
                <option value="Bolívar">Bolívar</option>
                <option value="Bragado">Bragado</option>
                <option value="Brandsen">Brandsen</option>
                <option value="Campana">Campana</option>
                <option value="Cañuelas">Cañuelas</option>
                <option value="Capitán Sarmiento">Capitán Sarmiento</option>
                <option value="Carlos Casares">Carlos Casares</option>
                <option value="Carlos Tejedor">Carlos Tejedor</option>
                <option value="Carmen de Areco">Carmen de Areco</option>
                <option value="Castelli">Castelli</option>
                <option value="Chacabuco">Chacabuco</option>
                <option value="Chascomús">Chascomús</option>
                <option value="Chivilcoy">Chivilcoy</option>
                <option value="Colón">Colón</option>
                <option value="Coronel Dorrego">Coronel Dorrego</option>
                <option value="Coronel Pringles">Coronel Pringles</option>
                <option value="Coronel Rosales">Coronel Rosales</option>
                <option value="Coronel Suárez">Coronel Suárez</option>
                <option value="Daireaux">Daireaux</option>
                <option value="Dolores">Dolores</option>
                <option value="Ensenada">Ensenada</option>
                <option value="Escobar">Escobar</option>
                <option value="Esteban Echeverría">Esteban Echeverría</option>
                <option value="Exaltación de la Cruz">
                  Exaltación de la Cruz
                </option>
                <option value="Ezeiza">Ezeiza</option>
                <option value="Florencio Varela">Florencio Varela</option>
                <option value="Florentino Ameghino">Florentino Ameghino</option>
                <option value="General Alvarado">General Alvarado</option>
                <option value="General Alvear">General Alvear</option>
                <option value="General Arenales">General Arenales</option>
                <option value="General Belgrano">General Belgrano</option>
                <option value="General Guido">General Guido</option>
                <option value="General Juan Madariaga">
                  General Juan Madariaga
                </option>
                <option value="General La Madrid">General La Madrid</option>
                <option value="General Las Heras">General Las Heras</option>
                <option value="General Lavalle">General Lavalle</option>
                <option value="General Paz">General Paz</option>
                <option value="General Pinto">General Pinto</option>
                <option value="General Pueyrredón">General Pueyrredón</option>
                <option value="General Rodríguez">General Rodríguez</option>
                <option value="General San Martín">General San Martín</option>
                <option value="General Viamonte">General Viamonte</option>
                <option value="General Villegas">General Villegas</option>
                <option value="Guaminí">Guaminí</option>
                <option value="Hipólito Yrigoyen">Hipólito Yrigoyen</option>
                <option value="Hurlingham">Hurlingham</option>
                <option value="Ituzaingó">Ituzaingó</option>
                <option value="José C. Paz">José C. Paz</option>
                <option value="Junín">Junín</option>
                <option value="La Costa">La Costa</option>
                <option value="La Matanza">La Matanza</option>
                <option value="La Plata">La Plata</option>
                <option value="Lanús">Lanús</option>
                <option value="Laprida">Laprida</option>
                <option value="Las Flores">Las Flores</option>
                <option value="Leandro N. Alem">Leandro N. Alem</option>
                <option value="Lezama">Lezama</option>
                <option value="Lincoln">Lincoln</option>
                <option value="Lobería">Lobería</option>
                <option value="Lobos">Lobos</option>
                <option value="Lomas de Zamora">Lomas de Zamora</option>
                <option value="Luján">Luján</option>
                <option value="Magdalena">Magdalena</option>
                <option value="Maipú">Maipú</option>
                <option value="Malvinas Argentinas">Malvinas Argentinas</option>
                <option value="Mar Chiquita">Mar Chiquita</option>
                <option value="Marcos Paz">Marcos Paz</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Merlo">Merlo</option>
                <option value="Monte">Monte</option>
                <option value="Monte Hermoso">Monte Hermoso</option>
                <option value="Moreno">Moreno</option>
                <option value="Morón">Morón</option>
                <option value="Navarro">Navarro</option>
                <option value="Necochea">Necochea</option>
                <option value="Olavarría">Olavarría</option>
                <option value="Patagones">Patagones</option>
                <option value="Pehuajó">Pehuajó</option>
                <option value="Pellegrini">Pellegrini</option>
                <option value="Pergamino">Pergamino</option>
                <option value="Pila">Pila</option>
                <option value="Pilar">Pilar</option>
                <option value="Pinamar">Pinamar</option>
                <option value="Presidente Perón">Presidente Perón</option>
                <option value="Puán">Puán</option>
                <option value="Punta Indio">Punta Indio</option>
                <option value="Quilmes">Quilmes</option>
                <option value="Ramallo">Ramallo</option>
                <option value="Rauch">Rauch</option>
                <option value="Rivadavia">Rivadavia</option>
                <option value="Rojas">Rojas</option>
                <option value="Roque Pérez">Roque Pérez</option>
                <option value="Saavedra">Saavedra</option>
                <option value="Saladillo">Saladillo</option>
                <option value="Salliqueló">Salliqueló</option>
                <option value="Salto">Salto</option>
                <option value="San Andrés de Giles">San Andrés de Giles</option>
                <option value="San Antonio de Areco">
                  San Antonio de Areco
                </option>
                <option value="San Cayetano">San Cayetano</option>
                <option value="San Fernando">San Fernando</option>
                <option value="San Isidro">San Isidro</option>
                <option value="San Miguel">San Miguel</option>
                <option value="San Nicolás">San Nicolás</option>
                <option value="San Pedro">San Pedro</option>
                <option value="San Vicente">San Vicente</option>
                <option value="Suipacha">Suipacha</option>
                <option value="Tandil">Tandil</option>
                <option value="Tapalqué">Tapalqué</option>
                <option value="Tigre">Tigre</option>
                <option value="Tordillo">Tordillo</option>
                <option value="Tornquist">Tornquist</option>
                <option value="Trenque Lauquen">Trenque Lauquen</option>
                <option value="Tres Arroyos">Tres Arroyos</option>
                <option value="Tres de Febrero">Tres de Febrero</option>
                <option value="Tres Lomas">Tres Lomas</option>
                <option value="Vicente López">Vicente López</option>
                <option value="Villa Gesell">Villa Gesell</option>
                <option value="Villarino">Villarino</option>
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
