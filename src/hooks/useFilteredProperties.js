import { useCallback, useEffect, useState } from "react";
import { applyFilters } from "../utils/utils";
import useProperties from "./useProperties";

const useFilteredProperties = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);
  const [filteredData, setFilteredData] = useState([]);
  const [paginatedProperties, setPaginatedProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);

  const { properties, loading, error } = useProperties();

  useEffect(() => {
    setFilteredData(applyFilters(properties, filters));
  }, [filters, properties]);

  useEffect(() => {
    setPaginatedProperties(filteredData.slice(0, page * pageSize));
  }, [filteredData, page, pageSize]);

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

  return {
    filters,
    setFilters,
    paginatedProperties,
    loading,
    error,
    handleReset: () => setFilters(initialFilters),
  };
};

export default useFilteredProperties;
