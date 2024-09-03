import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const Contact = () => {
  return (
    <>
      <section id="contact" className="section-offset" />
      <div className="d-flex flex-column py-4 bg-dark text-white">
        <h2 className="text-center h2 fw-semibold pb-4">Contacto</h2>
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 order-1">
              <ContactInfo />
            </div>
            <div className="col-12 col-lg-4 mb-4 order-2 order-md-3 order-lg-2">
              <ContactMap />
            </div>
            <div className="col-md-6 col-lg-4 mb-4 order-3 order-md-2 order-lg-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
