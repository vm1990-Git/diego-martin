import { useState, useEffect } from "react";
import { fetchProperties } from "@/api/fetchProperties";

const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProperties = async () => {
      const controller = new AbortController();
      const { signal } = controller;
      try {
        setLoading(true);
        const fetchedProperties = await fetchProperties({ signal });
        setProperties(fetchedProperties);
        setFilteredProperties(fetchedProperties);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
          console.error("Error fetching properties:", err);
        }
      } finally {
        setLoading(false);
      }

      return () => {
        controller.abort();
      };
    };

    loadProperties();
  }, []);

  return {
    properties,
    filteredProperties,
    setFilteredProperties,
    loading,
    error,
  };
};

export default useProperties;
