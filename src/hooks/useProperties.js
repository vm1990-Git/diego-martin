import { useState, useEffect } from "react";

import { fetchProperties } from "../api/fetchProperties";

const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const loadProperties = async () => {
      try {
        setLoading(true);
        const fetchedProperties = await fetchProperties({ signal });
        console.log("useProperties -> fetchedProperties", fetchedProperties);
        setProperties(fetchedProperties);
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
  }, []);

  return {
    properties,
    loading,
    error,
  };
};

export default useProperties;
