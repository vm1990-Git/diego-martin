import React from "react";

const Details = ({ title, list }) => {
  if (list.length === 0) {
    return null;
  }

  return (
    <div>
      <hr className="custom-line" />
      <h4>{title}</h4>
      <ul>
        {list.map((item) => (
          <li key={item.key}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
