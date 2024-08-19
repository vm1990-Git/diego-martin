"use client";

import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { makePhoneCall, openWhatsapp } from "../../../utils/utils.js";

const ContactInfo = () => {
  return (
    <div
      className="border-start border-4 border-warning px-4 shadow rounded-end-3"
      style={{ height: "400px", background: "#53535337" }}
    >
      <div className="d-flex flex-column justify-content-around h-100 container p-2 fw-semibold">
        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center">
              <FaLocationDot size={23} />
              <span className="ms-2 " style={{ fontSize: "1.3rem" }}>
                Dirección:
              </span>
            </div>
            <div className="row text-start px-5" style={{ fontSize: "1rem" }}>
              <span>Av Cazón 1365 - Tigre</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col" onClick={() => makePhoneCall("1147315006")}>
            <div className="d-flex align-items-center">
              <FaPhoneAlt size={23} />
              <span className="ms-2 " style={{ fontSize: "1.3rem" }}>
                Teléfono:
              </span>
            </div>
            <div className="row text-start px-5" style={{ fontSize: "1rem" }}>
              <span>(011) 4731-5006</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col" onClick={() => openWhatsapp("5491130740564")}>
            <div className="d-flex align-items-center">
              <IoLogoWhatsapp size={25} />
              <span className="ms-2 " style={{ fontSize: "1.3rem" }}>
                WhatsApp:
              </span>
            </div>
            <div className="row text-start px-5" style={{ fontSize: "1rem" }}>
              <span>15 3074-0564</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <a
              href="mailto:diegogmartin@hotmail.com"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="d-flex align-items-center">
                <IoIosMail size={25} />
                <span className="ms-2 " style={{ fontSize: "1.3rem" }}>
                  Email:
                </span>
              </div>
              <div className="row text-start px-5" style={{ fontSize: "1rem" }}>
                <span>diegogmartin@hotmail.com</span>
              </div>
              <div className="row text-start px-5" style={{ fontSize: "1rem" }}>
                <span>admdgm@hotmail.com.ar</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
