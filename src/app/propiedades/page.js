"use client";
import React, { useCallback, useEffect, useState } from "react";
import Card from "../components/Card";
import useProperties from "../../hooks/useProperties";
import Filter from "../components/Filter/Filter";

const applyFilters = (properties, filters) => {
  let filtered = properties;

  if (filters.Tipo_de_operacion) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.Tipo_de_operacion &&
        property.attributes.Tipo_de_operacion.includes(
          filters.Tipo_de_operacion
        )
    );
  }

  if (filters.tipo_de_inmueble) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.tipo_de_inmueble &&
        property.attributes.tipo_de_inmueble.includes(filters.tipo_de_inmueble)
    );
  }

  if (filters.priceRange.min || filters.priceRange.max) {
    filtered = filtered.filter((property) => {
      const price =
        filters.currency === "usd"
          ? property.attributes.valor_dolares
          : property.attributes.valor_pesos;
      return (
        (!filters.priceRange.min ||
          parseFloat(price) >= parseFloat(filters.priceRange.min)) &&
        (!filters.priceRange.max ||
          parseFloat(price) <= parseFloat(filters.priceRange.max))
      );
    });
  }

  if (filters.currency) {
    filtered = filtered.filter((property) =>
      filters.currency === "usd"
        ? property.attributes.valor_dolares
        : property.attributes.valor_pesos
    );
  }

  if (filters.Ambientes) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.Ambientes &&
        property.attributes.Ambientes.includes(filters.Ambientes)
    );
  }

  if (filters.Dormitorios) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.Dormitorios &&
        property.attributes.Dormitorios.includes(filters.Dormitorios)
    );
  }

  if (filters.Banos) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.Banos &&
        property.attributes.Banos.includes(filters.Banos)
    );
  }

  if (filters.espacio_para_autos) {
    filtered = filtered.filter(
      (property) => property.attributes.espacio_para_autos
    );
  }

  if (filters.Varios_Apto_Credito) {
    filtered = filtered.filter(
      (property) => property.attributes.Varios_Apto_Credito
    );
  }

  if (filters.Localidades) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.Localidades &&
        property.attributes.Localidades.includes(filters.Localidades)
    );
  }

  const comodidadesKeys = [
    "Comodidades_Balcon",
    "Comodidades_Lavadero",
    "Comodidades_Dep_Servicio",
    "Comodidades_Espacio_al_frente",
    "Comodidades_Fondo_libre",
    "Comodidades_Ascensor",
    "Comodidades_Quincho",
    "Comodidades_SUM",
    "Comodidades_Parrilla",
    "Comodidades_Piscina",
    "Comodidades_Vigilancia",
    "Comodidades_Terraza",
    "Comodidades_Apto_Emprendimiento",
  ];

  comodidadesKeys.forEach((key) => {
    if (filters[key]) {
      filtered = filtered.filter(
        (property) => property.attributes[key] === true
      );
    }
  });

  const variosKeys = [
    "Varios_Apto_Profesional",
    "Varios_Apto_Credito",
    "Varios_Destacado",
    "Varios_Garantia_Propietaria",
    "Varios_Seguro_de_caucion",
  ];

  variosKeys.forEach((key) => {
    if (filters[key]) {
      filtered = filtered.filter(
        (property) => property.attributes[key] === true
      );
    }
  });

  if (filters.Direccion) {
    filtered = filtered.filter((property) =>
      property.attributes.Direccion.toLowerCase().includes(
        filters.Direccion.toLowerCase()
      )
    );
  }

  const serviciosKeys = [
    "Servicios_Gas_Natural",
    "Servicios_Agua_Corriente",
    "Servicios_Luz",
    "Servicios_Red_Cloacal",
    "Servicios_Pavimento",
  ];

  serviciosKeys.forEach((key) => {
    if (filters[key]) {
      filtered = filtered.filter(
        (property) => property.attributes[key] === true
      );
    }
  });

  const sortOptions = {
    Recientes: (a, b) =>
      new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt),
    "Menor Precio": (a, b) =>
      parseFloat(a.attributes.valor_dolares) -
      parseFloat(b.attributes.valor_dolares),
    "Mayor Precio": (a, b) =>
      parseFloat(b.attributes.valor_dolares) -
      parseFloat(a.attributes.valor_dolares),
  };

  if (filters.orden in sortOptions) {
    filtered = filtered.sort(sortOptions[filters.orden]);
  }

  return filtered;
};

const Index = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);
  const initialFilters = {
    Tipo_de_operacion: "",
    tipo_de_inmueble: null,
    valor_dolares: 0,
    valor_pesos: 0,
    Ambientes: null,
    Dormitorios: null,
    Banos: null,
    espacio_para_autos: null,
    updatedAt: null,
    Localidades: null,
    Comodidades_Balcon: null,
    Comodidades_Lavadero: null,
    Comodidades_Dep_Servicio: null,
    Comodidades_Espacio_al_frente: null,
    Comodidades_Fondo_libre: null,
    Comodidades_Ascensor: null,
    Comodidades_Quincho: null,
    Comodidades_SUM: null,
    Comodidades_Parrilla: null,
    Comodidades_Piscina: null,
    Comodidades_Vigilancia: null,
    Comodidades_Terraza: null,
    Comodidades_Apto_Emprendimiento: null,
    Varios_Apto_Profesional: null,
    Varios_Apto_Credito: null,
    Varios_Destacado: null,
    Varios_Garantia_Propietaria: null,
    Varios_Seguro_de_caucion: null,
    Servicios_Gas_Natural: null,
    Servicios_Agua_Corriente: null,
    Servicios_Luz: null,
    Servicios_Red_Cloacal: null,
    Servicios_Pavimento: null,
    orden: "",
    priceRange: { min: "", max: "" },
  };

  const [filters, setFilters] = useState(initialFilters);
  const [filteredData, setFilteredData] = useState([]);

  const { properties, loading, error } = useProperties();

  useEffect(() => {
    setFilteredData(applyFilters(properties, filters));
  }, [filters, properties]);

  const paginatedProperties = filteredData.slice(0, page * pageSize);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (!loading && paginatedProperties.length < properties.length) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [loading, paginatedProperties.length, properties.length]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (loading && page === 1) {
    return (
      <div className="loading-container">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className="my-3 fw-semibold">Cargando Propiedades</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        Error loading properties: {error.message}
      </div>
    );
  }

  return (
    <div className="d-flex flex-column my-5 py-5">
      <Filter filters={filters} setFilters={setFilters} />
      <div className="container card-container">
        {paginatedProperties.length > 0 ? (
          paginatedProperties.map((property) => {
            const imageUrl =
              property.attributes.Imagen?.data?.[0]?.attributes?.url ||
              "/assets/NoImage.png";

            return (
              <Card
                key={property.id}
                id={property.id}
                image={imageUrl}
                title={property.attributes.Direccion || "Dirección"}
                subtitle={property.attributes.descripcion || "Localidad"}
                text={property.attributes.sub_descripcion || "Descripción"}
                priceUsd={property.attributes.valor_dolares || "Consultar"}
                pricePesos={property.attributes.valor_pesos || "Consultar"}
              />
            );
          })
        ) : (
          <p>No properties available.</p>
        )}
        {loading && page > 1 && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
