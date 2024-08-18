// "use client";
// import React, { useCallback, useEffect, useState } from "react";
// import Card from "../components/Card";
// import FilterSection from "../components/FilterSection";
// import useProperties from "../../hooks/useProperties";

// const applyFilters = (properties, filters) => {
//   let filtered = properties;

//   if (filters.rooms) {
//     filtered = filtered.filter(
//       (property) =>
//         property.attributes.Ambientes &&
//         property.attributes.Ambientes.includes(filters.rooms)
//     );
//   }

//   if (filters.operationType) {
//     filtered = filtered.filter(
//       (property) =>
//         property.attributes.Tipo_de_operacion === filters.operationType
//     );
//   }

//   if (filters.propertyType) {
//     filtered = filtered.filter(
//       (property) =>
//         property.attributes.tipo_de_inmueble &&
//         property.attributes.tipo_de_inmueble.includes(filters.propertyType)
//     );
//   }

//   if (filters.currency) {
//     filtered = filtered.filter((property) =>
//       filters.currency === "usd"
//         ? property.attributes.valor_dolares
//         : property.attributes.valor_pesos
//     );
//   }

//   if (filters.priceRange.min || filters.priceRange.max) {
//     filtered = filtered.filter((property) => {
//       const price =
//         filters.currency === "usd"
//           ? property.attributes.valor_dolares
//           : property.attributes.valor_pesos;
//       return (
//         (!filters.priceRange.min ||
//           parseFloat(price) >= parseFloat(filters.priceRange.min)) &&
//         (!filters.priceRange.max ||
//           parseFloat(price) <= parseFloat(filters.priceRange.max))
//       );
//     });
//   }

//   if (filters.bedrooms) {
//     filtered = filtered.filter(
//       (property) =>
//         property.attributes.Dormitorios &&
//         property.attributes.Dormitorios.includes(filters.bedrooms)
//     );
//   }

//   if (filters.amenities) {
//     filtered = filtered.filter(
//       (property) =>
//         property.attributes.Comodidades &&
//         property.attributes.Comodidades.includes(filters.amenities)
//     );
//   }

//   if (filters.additionalOptions.credit) {
//     filtered = filtered.filter((property) => property.attributes.Apto_credito);
//   }
//   if (filters.additionalOptions.parking) {
//     filtered = filtered.filter(
//       (property) => property.attributes.espacio_para_autos
//     );
//   }

//   if (filters.location) {
//     filtered = filtered.filter((property) =>
//       property.attributes.Direccion.toLowerCase().includes(
//         filters.location.toLowerCase()
//       )
//     );
//   }

//   return filtered;
// };

// const Index = () => {
//   const [page, setPage] = useState(1);
//   const [pageSize] = useState(8);

//   const {
//     properties,
//     filteredProperties,
//     setFilteredProperties,
//     loading,
//     error,
//   } = useProperties();

//   const [filters, setFilters] = useState({
//     operationType: "",
//     propertyType: "",
//     currency: "",
//     priceRange: { min: "", max: "" },
//     rooms: "",
//     bedrooms: "",
//     bathrooms: "",
//     amenities: "",
//     additionalOptions: {
//       credit: false,
//       parking: false,
//     },
//     location: "",
//   });

//   const filteredData = applyFilters(properties, filters);

//   const paginatedProperties = filteredData.slice(0, page * pageSize);

//   useEffect(() => {
//     setFilteredProperties(paginatedProperties);
//   }, [page, filteredData]);

//   const handleScroll = useCallback(() => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop + 1 >=
//       document.documentElement.scrollHeight
//     ) {
//       if (!loading && paginatedProperties.length < filteredData.length) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     }
//   }, [loading, paginatedProperties, filteredData]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   if (loading && page === 1) {
//     return (
//       <div className="loading-container">
//         <div className="spinner-border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//         <span className="my-3 fw-semibold">Cargando Propiedades</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center">
//         Error loading properties: {error.message}
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex flex-column my-5 py-5">
//       <h2 className="text-center h2 fw-semibold pb-3">Propiedades</h2>
//       <FilterSection filters={filters} setFilters={setFilters} />
//       <div className="container card-container">
//         {filteredProperties.length > 0 ? (
//           filteredProperties.map((property) => {
//             const imageUrl =
//               property.attributes.Imagen?.data?.[0]?.attributes?.url ||
//               "/assets/NoImage.png";

//             return (
//               <Card
//                 key={property.id}
//                 id={property.id}
//                 image={imageUrl}
//                 title={property.attributes.Direccion || "Dirección"}
//                 subtitle={property.attributes.descripcion || "Localidad"}
//                 text={property.attributes.sub_descripcion || "Descripción"}
//                 priceUsd={property.attributes.valor_dolares || "Consultar"}
//                 pricePesos={property.attributes.valor_pesos || "Consultar"}
//               />
//             );
//           })
//         ) : (
//           <p>No properties available.</p>
//         )}
//         {loading && page > 1 && (
//           <div className="text-center">
//             <div className="spinner-border" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Index;

"use client";
import React, { useCallback, useEffect, useState } from "react";
import Card from "../components/Card";
import FilterSection from "../components/Filter/FilterSection";
import useProperties from "../../hooks/useProperties";

const applyFilters = (properties, filters) => {
  let filtered = properties;

  if (filters.rooms) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.Ambientes &&
        property.attributes.Ambientes.includes(filters.rooms)
    );
  }

  if (filters.operationType) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.Tipo_de_operacion === filters.operationType
    );
  }

  if (filters.propertyType) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.tipo_de_inmueble &&
        property.attributes.tipo_de_inmueble.includes(filters.propertyType)
    );
  }

  if (filters.currency) {
    filtered = filtered.filter((property) =>
      filters.currency === "usd"
        ? property.attributes.valor_dolares
        : property.attributes.valor_pesos
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

  if (filters.bedrooms) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.Dormitorios &&
        property.attributes.Dormitorios.includes(filters.bedrooms)
    );
  }

  if (filters.amenities) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.Comodidades &&
        property.attributes.Comodidades.includes(filters.amenities)
    );
  }

  if (filters.additionalOptions.credit) {
    filtered = filtered.filter((property) => property.attributes.Apto_credito);
  }
  if (filters.additionalOptions.parking) {
    filtered = filtered.filter(
      (property) => property.attributes.espacio_para_autos
    );
  }

  if (filters.location) {
    filtered = filtered.filter((property) =>
      property.attributes.Direccion.toLowerCase().includes(
        filters.location.toLowerCase()
      )
    );
  }

  return filtered;
};

const Index = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);

  const {
    properties,
    filteredProperties,
    setFilteredProperties,
    loading,
    error,
  } = useProperties();

  //infinite scroll
  const paginatedProperties = properties.slice(0, page * pageSize);

  //infinite scroll
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (!loading && paginatedProperties.length < properties.length) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [loading, paginatedProperties, properties]);

  //infinite scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  //infinite scroll
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
      <FilterSection />
      <div className="container card-container">
        {properties.length > 0 ? (
          properties.map((property) => {
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
