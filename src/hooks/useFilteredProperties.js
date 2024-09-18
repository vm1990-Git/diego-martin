import { useCallback, useEffect, useState } from "react";
import { applyFilters } from "../utils/utils";
import useProperties from "./useProperties";

const useFilteredProperties = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(12);
  const [hasMore, setHasMore] = useState(true);

  const { properties, loading, error, meta } = useProperties(
    page,
    pageSize,
    {}
  );

  useEffect(() => {
    const newFilteredData = applyFilters(properties, filters);
    setFilteredData(newFilteredData);
  }, [filters, properties]);

  useEffect(() => {
    if (page == meta?.pagination.pageCount) {
      setHasMore(false);
    }
  }, [page, meta?.pagination.pageCount]);

  useEffect(() => {
    if (filteredData.length != 0 && filteredData.length < 20 && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [filteredData, hasMore]);

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
