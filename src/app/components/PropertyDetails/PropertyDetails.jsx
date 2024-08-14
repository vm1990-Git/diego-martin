"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { IoCubeSharp, IoBed } from "react-icons/io5";
import { FaBath, FaThLarge, FaObjectGroup, FaHome } from "react-icons/fa";
import Modal from "./Modal";
import ControlledCarousel from "./Carousel";
import { usePathname } from "next/navigation";
import { fetchPropertiyInfo } from "@/api/fetchPropertiyInfo";

function PropertyDetails() {
  const [imageIndex, setImageIndex] = useState(0);
  const [propertyInfo, setPropertyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  const IconClass =
    "d-flex flex-column align-items-center justify-content-center text-center";

  const IconStyle = { width: "100px" };

  const images = propertyInfo?.Imagen?.data?.map(
    (img) => img.attributes.url
  ) || ["/assets/NoImage.png"];

  const {
    Titulo = "No disponible",
    Direccion = "No disponible",
    descripcion = "No disponible",
    sub_descripcion = "No disponible",
    Tipo_de_operacion = "No disponible",
    tipo_de_inmueble = "No disponible",
    valor_dolares = 0,
    valor_pesos = 0,
    Apto_credito = false,
    Ambientes = "No disponible",
    Dormitorios = 0,
    Banos = 0,
    espacio_para_autos = false,
    Comodidades = "No disponible",
    Varios = "No disponible",
    Servicios = "No disponible",
    coordenadas = { lat: 0, lon: 0 },
    Localidades = "No disponible",
    m2_cubiertos = 0,
    m2_descubiertos = 0,
    Lote = null,
    Comodidades_Balcon = null,
    Comodidades_Lavadero = null,
    Comodidades_Dep_Servicio = null,
    Comodidades_Espacio_al_frente = null,
    Comodidades_Fondo_libre = null,
    Comodidades_Ascensor = null,
    Comodidades_Quincho = null,
    Comodidades_SUM = null,
    Comodidades_Parrilla = null,
    Comodidades_Piscina = null,
    Comodidades_Vigilancia = null,
    Comodidades_Terraza = null,
    Comodidades_Apto_Emprendimiento = null,
    Varios_Apto_Profesional = null,
    Varios_Apto_Credito = null,
    Varios_Destacado = null,
    Varios_Garantia_Propietaria = null,
    Varios_Seguro_de_caucion = null,
    Servicios_Gas_Natural = null,
    Servicios_Agua_Corriente = null,
    Servicios_Luz = null,
    Servicios_Red_Cloacal = null,
    Servicios_Pavimento = null,
  } = propertyInfo || {};

  const validDolares = valor_dolares != null && valor_dolares > 0;
  const validPesos = valor_pesos != null && valor_pesos > 0;

  const isPriceInDollars =
    validDolares && (valor_dolares >= valor_pesos || !validPesos);
  const maxPrice = isPriceInDollars ? valor_dolares : valor_pesos;

  const displayPrice =
    !validDolares && !validPesos
      ? "Consultar"
      : `${isPriceInDollars ? "U$S " : "$ "}${maxPrice}`;

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const extractNumber = (value) => {
    if (value) {
      const match = value.match(/\d+/);
      return match ? parseInt(match[0], 10) : 0;
    } else return 0;
  };

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const fetchedData = await fetchPropertiyInfo(id);
        setPropertyInfo(fetchedData.attributes);
      } catch (err) {
        setError(err);
        console.error("Error fetching properties:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadProperties();
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!propertyInfo) {
    return <div>No property information available.</div>;
  }

  const prevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Define arrays for comodidades, varios, and servicios
  const comodidadesList = [
    { key: "Comodidades_Balcon", label: "Balcon" },
    { key: "Comodidades_Lavadero", label: "Lavadero" },
    { key: "Comodidades_Dep_Servicio", label: "Dependencia de Servicio" },
    { key: "Comodidades_Espacio_al_frente", label: "Espacio al Frente" },
    { key: "Comodidades_Fondo_libre", label: "Fondo Libre" },
    { key: "Comodidades_Ascensor", label: "Ascensor" },
    { key: "Comodidades_Quincho", label: "Quincho" },
    { key: "Comodidades_SUM", label: "SUM" },
    { key: "Comodidades_Parrilla", label: "Parrilla" },
    { key: "Comodidades_Piscina", label: "Piscina" },
    { key: "Comodidades_Vigilancia", label: "Vigilancia" },
    { key: "Comodidades_Terraza", label: "Terraza" },
    { key: "Comodidades_Apto_Emprendimiento", label: "Apto Emprendimiento" },
  ].filter((item) => propertyInfo[item.key]);

  const variosList = [
    { key: "Varios_Apto_Profesional", label: "Apto Profesional" },
    { key: "Varios_Apto_Credito", label: "Apto Credito" },
    { key: "Varios_Destacado", label: "Destacado" },
    { key: "Varios_Garantia_Propietaria", label: "Garantía Propietaria" },
    { key: "Varios_Seguro_de_caucion", label: "Seguro de Caución" },
  ].filter((item) => propertyInfo[item.key]);

  const serviciosList = [
    { key: "Servicios_Gas_Natural", label: "Gas Natural" },
    { key: "Servicios_Agua_Corriente", label: "Agua Corriente" },
    { key: "Servicios_Luz", label: "Luz" },
    { key: "Servicios_Red_Cloacal", label: "Red Cloacal" },
    { key: "Servicios_Pavimento", label: "Pavimento" },
  ].filter((item) => propertyInfo[item.key]);

  return (
    <>
      <div className="container py-4 my-5">
        <div className="row">
          <div className="col-12 col-lg-8 shadow rounded-3 p-2">
            <ControlledCarousel
              images={images}
              index={imageIndex}
              setIndex={setImageIndex}
            />
            <Modal
              images={images}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
              prevImage={prevImage}
              nextImage={nextImage}
            />
            <div className="container p-4">
              <div className="row">
                <div className="col">
                  <h3 className="">{Direccion}</h3>
                </div>
                <div className="col text-end">
                  <h3>{formatNumber(displayPrice)}</h3>
                </div>
              </div>
            </div>
            <div className="container p-4">
              <p>{descripcion}</p>
              <hr className="custom-line" />
              <p>{sub_descripcion}</p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="container shadow rounded-3 p-4">
              <h3 className="text-center">{Titulo}</h3>

              <hr className="custom-line" />
              <div className="row">
                <div
                  className="d-flex flex-wrap justify-content-center py-2 gap-2"
                  style={{ fontSize: ".9rem" }}
                >
                  <div className={IconClass}>
                    <IoCubeSharp size={25} />
                    <span style={IconStyle}>{extractNumber(Ambientes)}</span>
                    <span>Ambientes</span>
                  </div>
                  <div className={IconClass}>
                    <IoBed size={25} />
                    <span style={IconStyle}>{extractNumber(Dormitorios)}</span>
                    <span>Dormitorios</span>
                  </div>
                  <div className={IconClass}>
                    <FaBath size={25} />
                    <span style={IconStyle}>{extractNumber(Banos)}</span>
                    <span>Baños</span>
                  </div>
                  <div className={IconClass}>
                    <FaObjectGroup size={25} />
                    <span style={IconStyle}>
                      {m2_descubiertos ? m2_descubiertos : 0}
                    </span>
                    <span>M2 Libres</span>
                  </div>
                  <div className={IconClass}>
                    <FaHome size={25} />
                    <span style={IconStyle}>
                      {m2_cubiertos ? m2_cubiertos : 0}
                    </span>
                    <span>M2 Cubiertos</span>
                  </div>
                  <div className={IconClass}>
                    <FaThLarge size={25} />
                    <span style={IconStyle}>
                      {parseInt(m2_cubiertos + m2_descubiertos)}
                    </span>
                    <span>M2 Totales</span>
                  </div>
                </div>
              </div>
              <hr className="custom-line" />
              {Apto_credito && <div>Apto Credito</div>}
              {espacio_para_autos && <div>Cochera</div>}

              <div className="mt-4">
                <h4>Comodidades</h4>
                <ul>
                  {comodidadesList.map((item) => (
                    <li key={item.key}>{item.label}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4>Varios</h4>
                <ul>
                  {variosList.map((item) => (
                    <li key={item.key}>{item.label}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4>Servicios</h4>
                <ul>
                  {serviciosList.map((item) => (
                    <li key={item.key}>{item.label}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;
