import { useCallback, useEffect, useState } from "react";
import { applyFilters } from "../utils/utils";
import useProperties from "./useProperties";

const useFilteredProperties = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  const { properties, loading, error, meta } = useProperties(page, pageSize);

  useEffect(() => {
    setFilteredData(applyFilters(properties, filters));
  }, [filters, properties]);

  useEffect(() => {
    setPage(1);
    setHasMore(true);
  }, [filters]);

  useEffect(() => {
    if (
      meta?.pagination.total &&
      filteredData.length >= meta.pagination.total
    ) {
      setHasMore(false);
    }
  }, [filteredData, meta]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (!loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [loading, hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return {
    filters,
    setFilters,
    filteredData,
    loading,
    error,
    handleReset: () => setFilters(initialFilters),
  };
};

export default useFilteredProperties;
