import React from "react";

const Contact = () => {
  return (
    <div className="d-flex flex-column py-4 bg-dark text-white">
      <h2 className="text-center h2 fw-semibold pb-4">Contacto</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h5>Información de Contacto</h5>
            <ul className="list-unstyled py-3">
              <li className="mb-3">
                <strong>Dirección:</strong> Av Cazón 1365 - Tigre
              </li>
              <li className="mb-3">
                <strong>Teléfono:</strong> (011) 4731-5006
              </li>
              <li className="mb-3">
                <strong>WhatsApp:</strong> 15 3074-0564
              </li>
              <li className="mb-3">
                <strong>Email:</strong>{" "}
                <a href="mailto:diegogmartin@hotmail.com">
                  diegogmartin@hotmail.com
                </a>
                ,{" "}
                <a href="mailto:admdgm@hotmail.com.ar">admdgm@hotmail.com.ar</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <div style={{ width: "100%", height: "100%" }}>
              <iframe
                width="100%"
                height="400"
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=es&amp;q=Diego%20Mart%C3%ADn%20PROPIEDADES+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
