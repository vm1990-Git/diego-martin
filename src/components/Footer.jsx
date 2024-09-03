"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Footer = () => {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="+54 9 11 3074-0564"
        accountName="Diego Martin Propiedades"
        avatar="/assets/DMP2.jpg"
        chatMessage="Hola, dejanos tu consulta y en breve nos contactaremos."
        buttonStyle={{ bottom: 15, right: 15 }}
        chatboxStyle={{ bottom: 80, right: 5 }}
        statusMessage=""
        placeholder=""
      />
      <footer className="bg-dark text-white text-center py-2 mt-auto">
        <div>©2024 Mil990</div>
      </footer>
    </>
  );
};

export default Footer;
