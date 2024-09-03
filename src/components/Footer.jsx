"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Footer = () => {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="+54 9 11 3074-0564"
        accountName="Diego Martin Propiedades"
        avatar="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/65012831_648523475667522_7314071632820043776_n.jpg?ccb=11-4&oh=01_Q5AaIIi0K8VBbUKownPO0UBiDhky6oOSpq68ux4J-4J8-swW&oe=66D060AE&_nc_sid=5e03e0&_nc_cat=106"
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
