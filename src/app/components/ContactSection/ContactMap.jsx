import React from "react";

const ContactMap = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        className="rounded-3"
        width="100%"
        height="400"
        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=es&amp;q=Diego%20Mart%C3%ADn%20PROPIEDADES+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default ContactMap;
