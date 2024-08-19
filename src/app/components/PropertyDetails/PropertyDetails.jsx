"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { IoCubeSharp, IoBed } from "react-icons/io5";
import { FaBath, FaThLarge, FaObjectGroup, FaHome } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { fetchPropertiyInfo } from "@/api/fetchPropertiyInfo";
import { FaSquare } from "react-icons/fa6";
import Modal from "./Modal";
import ControlledCarousel from "./Carousel";
import Map from "./Map";
import Details from "./Details";
import Icon from "./Icon";

function PropertyDetails() {
  const [imageIndex, setImageIndex] = useState(0);
  const [propertyInfo, setPropertyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathname = usePathname();
  const id = pathname.split("/")[2];

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
    Ambientes = "No disponible",
    Dormitorios = 0,
    Banos = 0,
    espacio_para_autos = false,
    coordenadas = null,
    Localidades = "No disponible",
    m2_cubiertos = 0,
    m2_descubiertos = 0,
    Lote = null,
  } = propertyInfo || {};

  const srcMatch = coordenadas?.match(/src="([^"]*)"/);
  const src = srcMatch ? srcMatch[1] : null;

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

  const comodidadesList = [
    { key: "Comodidades_Balcon", label: "Balcon" },
    { key: "Comodidades_Lavadero", label: "Lavadero" },
    { key: "Comodidades_Dep_Servicio", label: "Dep. Servicio" },
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
    <div className="container-md g-0" style={{ marginTop: "40px" }}>
      <div className="row g-0">
        <div className="col-12 col-lg-8 rounded-3 shadow-sm pt-3">
          <ControlledCarousel
            images={images}
            index={imageIndex}
            setIndex={setImageIndex}
          />
          <Modal
            images={images}
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
          />
          <div className="container-fluid py-2">
            <div className="row">
              <div className="col-12 col-md-6">
                <h3 className="fw-semibold">{Direccion}</h3>
                <h4 className="fw-semibold">{Localidades}</h4>
              </div>
              <div className="col-12 col-md-6 text-md-end">
                <h3 className="fw-semibold">{formatNumber(displayPrice)}</h3>
              </div>
            </div>
            <div>
              <h5 className="fw-semibold">
                {`${Tipo_de_operacion} - ${tipo_de_inmueble}`}{" "}
              </h5>
            </div>
          </div>
          <div className="px-4">
            <p
              className="text-start fw-semibold"
              style={{ fontSize: "1.2rem" }}
            >
              {Titulo}
            </p>

            <p>{descripcion}</p>
            <p> {Lote && <p>{`Lote ${Lote}`}</p>}</p>
            <hr className="custom-line" />
            <p>{sub_descripcion}</p>

            <div className="d-none d-lg-block">
              <Map src={src} />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 rounded-3 shadow-sm p-4">
          <div className="row">
            <div
              className="d-flex flex-wrap justify-content-center py-2 gap-2"
              style={{ fontSize: ".9rem" }}
            >
              <Icon
                label={"Ambientes"}
                value={extractNumber(Ambientes)}
                IconComponent={IoCubeSharp}
              />

              <Icon
                label={"Dormitorios"}
                value={extractNumber(Dormitorios)}
                IconComponent={IoBed}
              />
              <Icon
                label={"Baños"}
                value={extractNumber(Banos)}
                IconComponent={FaBath}
              />
              <Icon
                label={"Libres"}
                value={`${m2_descubiertos ? m2_descubiertos : 0}m² `}
                IconComponent={FaObjectGroup}
              />

              <Icon
                label={"Cubiertos"}
                value={`${m2_cubiertos ? m2_cubiertos : 0}m² `}
                IconComponent={FaHome}
              />

              <Icon
                label={"Totales"}
                value={`${m2_cubiertos + m2_descubiertos}m² `}
                IconComponent={FaThLarge}
              />
            </div>
          </div>
          <Details title={"Comodidades"} list={comodidadesList} />
          <Details title={"Varios"} list={variosList} />
          <Details title={"Servicios"} list={serviciosList} />
        </div>
        <div className="d-lg-none d-block g-0">
          <Map src={src} />
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
