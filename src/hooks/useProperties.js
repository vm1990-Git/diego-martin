import { useState, useEffect } from "react";
import { fetchProperties } from "../api/fetchProperties";

const useProperties = (page = 1, pageSize, filter) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const loadProperties = async () => {
      try {
        setLoading(true);
        const { data, meta } = await fetchProperties(page, 70, filter, {
          signal,
        });

        // Ordenar solo las imágenes de las propiedades con id > 55
        const sortedProperties = data.map((property) => {
          // Si el id es mayor a 55, ordenar las imágenes
          if (property.id > 55) {
            const sortedImages = property.attributes.Imagen?.data?.sort(
              (a, b) => a.attributes.name.localeCompare(b.attributes.name)
            );

            // Retornar la propiedad con las imágenes ordenadas
            return {
              ...property,
              attributes: {
                ...property.attributes,
                Imagen: {
                  ...property.attributes.Imagen,
                  data: sortedImages,
                },
              },
            };
          }

          // Retornar la propiedad sin cambios si id <= 55
          return property;
        });

        setProperties((prevProperties) => {
          const existingIds = new Set(prevProperties.map((prop) => prop.id));
          const newProperties = sortedProperties.filter(
            (prop) => !existingIds.has(prop.id)
          );
          return [...prevProperties, ...newProperties];
        });
        setMeta(meta);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
          console.error("Error fetching properties:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    loadProperties();

    return () => {
      controller.abort();
    };
  }, [page, pageSize]);

  return {
    properties,
    loading,
    error,
    meta,
  };
};

export default useProperties;
