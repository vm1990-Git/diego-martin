import React from "react";

const Map = ({ src }) => {
  return (
    <div>
      <iframe
        style={{ width: "100%" }}
        width="100%"
        height="400"
        src={src}
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default Map;
