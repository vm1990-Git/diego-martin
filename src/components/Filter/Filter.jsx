"use client";

import FilterOffcanvas from "./FilterOffcanvas";
import FilterMenu from "./FilterMenu";

const Filter = ({ filters, setFilters, handleReset }) => {
  return (
    <div className="d-flex align-self-center">
      <FilterMenu filters={filters} setFilters={setFilters} />
      <FilterOffcanvas
        filters={filters}
        setFilters={setFilters}
        handleReset={handleReset}
      />
    </div>
  );
};

export default Filter;
