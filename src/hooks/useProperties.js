import { useState, useEffect } from "react";
import { fetchProperties } from "../api/fetchProperties";

const useProperties = (page = 1, pageSize = 10) => {
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
        const { data, meta } = await fetchProperties(page, pageSize, {
          signal,
        });
        setProperties((prevProperties) => {
          const existingIds = new Set(prevProperties.map((prop) => prop.id));
          const newProperties = data.filter(
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
