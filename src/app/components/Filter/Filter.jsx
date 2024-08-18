"use client";

import React, { useEffect } from "react";
import FilterOffcanvas from "./FilterOffcanvas";
import FilterMenu from "./FilterMenu";

const Filter = ({ filters, setFilters }) => {
  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <div className="d-flex align-self-center">
      <FilterMenu filters={filters} setFilters={setFilters} />
      <FilterOffcanvas filters={filters} setFilters={setFilters} />
    </div>
  );
};

export default Filter;
