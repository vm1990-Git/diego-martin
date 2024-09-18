"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

const ContactForm = () => {
  const form = useRef(null);
  const [formCompleted, setFormCompleted] = useState(false);

  const pathname = usePathname();
  const url = `https://diegogmartin.com.ar/${pathname}`;

  const sendEmail = (e) => {
    e.preventDefault();

    if (formCompleted) {
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_TEMPLATE_PUBLIC_KEY;

      if (serviceId && templateId && publicKey && form.current) {
        emailjs
          .sendForm(serviceId, templateId, form.current, publicKey)
          .then(() => {
            toast.success("Correo enviado");
            form.current.reset();
            setFormCompleted(false);
          })
          .catch((error) => {
            toast.error("Algo salió mal");
          });
      } else {
        toast.error(
          "Las variables de entorno no están definidas correctamente o el formulario no está disponible"
        );
      }
    } else {
      toast.error("Por favor completar todos los datos");
    }
  };

  const handleInputChange = () => {
    if (form.current) {
      const formData = new FormData(form.current);
      const requiredFields = [
        "user_name",
        "user_phone",
        "user_mail",
        "user_message",
      ];
      const isFormCompleted = requiredFields.every((field) => {
        const value = formData.get(field);
        if (typeof value === "string") {
          return value.trim() !== "";
        }
        return false;
      });
      setFormCompleted(isFormCompleted);
    }
  };

  return (
    <div
      className="px-4 shadow rounded-3"
      style={{ height: "400px", background: "#53535337" }}
    >
      <form
        className="d-flex flex-column align-items-center justify-content-around h-100 p-2"
        ref={form}
        onSubmit={sendEmail}
        onChange={handleInputChange}
      >
        <input
          className="form-control"
          type="text"
          placeholder="Nombre"
          name="user_name"
        />
        <input
          className="form-control"
          type="tel"
          placeholder="Celular"
          name="user_phone"
        />
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          name="user_mail"
        />
        <input
          className="form-control visually-hidden"
          type="url"
          placeholder=""
          name="property"
          value={pathname == "/" ? "ninguna" : url}
          readOnly
        />
        <textarea
          className="form-control"
          rows="4"
          placeholder="Mensaje"
          name="user_message"
        />
        <button
          className={`btn btn-warning fw-semibold text-white mt-3 `}
          type="submit"
        >
          Enviar
        </button>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              padding: "10px",
              fontSize: "18px",
              fontWeight: 500,
            },
            duration: 5000,
          }}
        />
      </form>
    </div>
  );
};

export default ContactForm;
