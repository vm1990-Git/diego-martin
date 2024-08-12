"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fetchPropertiyInfo } from "@/api/fetchPropertiyInfo";
import Image from "next/image";

const PropertyInfo = () => {
  const [propertyInfo, setPropertyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  useEffect(() => {
    const loadProperties = async () => {
      try {
        console.log("Fetching property info for ID:", id); // Debugging
        const fetchedData = await fetchPropertiyInfo(id);
        console.log("Fetched data:", fetchedData); // Debugging
        setPropertyInfo(fetchedData.attributes); // Access attributes here
      } catch (err) {
        setError(err);
        console.error("Error fetching properties:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadProperties();
    } else {
      setLoading(false); // No ID means no data to fetch
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!propertyInfo) {
    return <div>No property information available.</div>;
  }

  return (
    <div className="container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/assets/header1.jpg"
              alt="Imagen de encabezado"
              width={500}
              height={500}
              className="d-block w-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h2>{propertyInfo.Titulo}</h2>
      <p>
        <strong>Address:</strong> {propertyInfo.Direccion}
      </p>
      <p>
        <strong>Description:</strong> {propertyInfo.descripcion}
      </p>
      <p>
        <strong>Sub-description:</strong> {propertyInfo.sub_descripcion}
      </p>
      <p>
        <strong>Operation Type:</strong> {propertyInfo.Tipo_de_operacion}
      </p>
      <p>
        <strong>Property Type:</strong> {propertyInfo.tipo_de_inmueble}
      </p>
      <p>
        <strong>Value (USD):</strong> {propertyInfo.valor_dolares}
      </p>
      <p>
        <strong>Value (ARS):</strong> {propertyInfo.valor_pesos}
      </p>
      <p>
        <strong>Credit Eligible:</strong>{" "}
        {propertyInfo.Apto_credito ? "Yes" : "No"}
      </p>
      <p>
        <strong>Ambiences:</strong> {propertyInfo.Ambientes}
      </p>
      <p>
        <strong>Bedrooms:</strong> {propertyInfo.Dormitorios}
      </p>
      <p>
        <strong>Bathrooms:</strong> {propertyInfo.Banos ?? "Not specified"}
      </p>
      <p>
        <strong>Parking Spaces:</strong>{" "}
        {propertyInfo.espacio_para_autos ?? "Not specified"}
      </p>
      <p>
        <strong>Comforts:</strong> {propertyInfo.Comodidades ?? "Not specified"}
      </p>
      <p>
        <strong>Miscellaneous:</strong> {propertyInfo.Varios ?? "Not specified"}
      </p>
      <p>
        <strong>Services:</strong> {propertyInfo.Servicios ?? "Not specified"}
      </p>
      <p>
        <strong>Coordinates:</strong>{" "}
        {propertyInfo.coordenadas ?? "Not specified"}
      </p>
      <p>
        <strong>Created At:</strong>{" "}
        {new Date(propertyInfo.createdAt).toLocaleString()}
      </p>
      <p>
        <strong>Updated At:</strong>{" "}
        {new Date(propertyInfo.updatedAt).toLocaleString()}
      </p>
      <p>
        <strong>Published At:</strong>{" "}
        {new Date(propertyInfo.publishedAt).toLocaleString()}
      </p>
    </div>
  );
};

export default PropertyInfo;

{
}
