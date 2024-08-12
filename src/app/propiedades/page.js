"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import FilterSection from "../components/FilterSection";
import { fetchProperties } from "@/api/fetchProperties";

const Index = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    operationType: "",
    propertyType: "",
    currency: "",
    priceRange: { min: "", max: "" },
    rooms: "",
    bedrooms: "",
    bathrooms: "",
    additionalOptions: {
      credit: false,
      parking: false,
    },
    location: "",
  });

  useEffect(() => {
    const loadProperties = async () => {
      const controller = new AbortController();
      const { signal } = controller;
      try {
        console.log("fetching properties");
        setLoading(true); // Set loading to true before starting the fetch
        const fetchedProperties = await fetchProperties({ signal });
        setProperties(fetchedProperties);
        setFilteredProperties(fetchedProperties);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
          console.error("Error fetching properties:", err);
        }
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }

      return () => {
        controller.abort();
      };
    };

    loadProperties();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = properties;

      if (filters.rooms) {
        filtered = filtered.filter(
          (property) =>
            property.attributes.Ambientes &&
            property.attributes.Ambientes.includes(filters.rooms)
        );
      }

      // Apply type filter
      if (filters.operationType) {
        filtered = filtered.filter(
          (property) =>
            property.attributes.Tipo_de_operacion === filters.operationType
        );
      }

      // Apply propertyType filter
      if (filters.propertyType) {
        filtered = filtered.filter(
          (property) =>
            property.attributes.tipo_de_inmueble &&
            property.attributes.tipo_de_inmueble.includes(filters.propertyType)
        );
      }

      // Apply currency filter
      if (filters.currency) {
        filtered = filtered.filter((property) =>
          filters.currency === "usd"
            ? property.attributes.valor_dolares
            : property.attributes.valor_pesos
        );
      }

      // Apply price range filter
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

      // Apply bedrooms filter
      if (filters.bedrooms) {
        filtered = filtered.filter(
          (property) =>
            property.attributes.Dormitorios &&
            property.attributes.Dormitorios.includes(filters.bedrooms)
        );
      }

      // Apply bathrooms filter
      if (filters.bathrooms) {
        filtered = filtered.filter(
          (property) =>
            property.attributes.Banos &&
            property.attributes.Banos.includes(filters.bathrooms)
        );
      }

      // Apply additional options filter
      if (filters.additionalOptions.credit) {
        filtered = filtered.filter(
          (property) => property.attributes.Apto_credito
        );
      }
      if (filters.additionalOptions.parking) {
        filtered = filtered.filter(
          (property) => property.attributes.espacio_para_autos
        );
      }

      // Apply location filter
      if (filters.location) {
        filtered = filtered.filter((property) =>
          property.attributes.Direccion.toLowerCase().includes(
            filters.location.toLowerCase()
          )
        );
      }

      setFilteredProperties(filtered);
    };

    applyFilters();

    console.log(filters);
  }, [filters, properties]);

  if (loading)
    return (
      <div className="loading-container">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className="my-3 fw-semibold">Cargando Propiedades</span>
      </div>
    );
  if (error)
    return (
      <div className="text-center">
        Error loading properties: {error.message}
      </div>
    );

  return (
    <div className="d-flex flex-column my-5 py-5">
      <h2 className="text-center h2 fw-semibold pb-3">Propiedades</h2>
      <FilterSection filters={filters} setFilters={setFilters} />
      <div className="container-fluid card-container">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Card
              key={property.id}
              id={property.id}
              image={property.image || "/assets/property1.jpg"}
              title={property.attributes.Direccion || "Dirección"}
              subtitle={property.attributes.descripcion || "Localidad"}
              text={property.attributes.sub_descripcion || "Descripción"}
              priceUsd={property.attributes.valor_dolares || "Consultar"}
              pricePesos={property.attributes.valor_pesos || "Consultar"}
            />
          ))
        ) : (
          <p>No properties available.</p>
        )}
      </div>
    </div>
  );
};

export default Index;
