import React from "react";

const Icon = ({ label, value, IconComponent }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center rounded-3 py-2">
      <IconComponent size={30} className="text-warning" />
      <span style={{ width: "100px" }}>{value}</span>
      <span>{label}</span>
    </div>
  );
};

export default Icon;
