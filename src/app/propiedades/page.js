"use client";
import Card from "../components/Card";
import Filter from "../components/Filter/Filter";
import LoadingError from "../components/LoadingError";
import useFilteredProperties from "../../hooks/useFilteredProperties";

const Index = () => {
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
    orden: null,
    priceRange: { min: "", max: "" },
    currency: "",
  };

  const {
    filters,
    setFilters,
    paginatedProperties,
    loading,
    error,
    handleReset,
  } = useFilteredProperties(initialFilters);
  const page = useFilteredProperties.page;

  return (
    <div className="d-flex flex-column my-5 py-5">
      <Filter
        filters={filters}
        setFilters={setFilters}
        handleReset={handleReset}
      />
      <div className="container card-container">
        <LoadingError loading={loading} error={error} page={page} />
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
                direc={property.attributes.Direccion || "Dirección"}
                title={property.attributes.Titulo || "Descripción"}
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
