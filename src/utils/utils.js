export const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

export const makePhoneCall = (phoneNumber) => {
  if (isMobileDevice()) {
    window.location.href = `tel:${phoneNumber}`;
  } else {
    console.warn("Phone call feature is only available on mobile devices.");
  }
};

export const openWhatsapp = (phoneNumber) => {
  window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}`);
};

export const applyFilters = (properties, filters) => {
  console.log("applyFilters properties:", properties);
  console.log("applyFilters filters:", filters);

  let filtered = properties;

  if (filters.Tipo_de_operacion) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.Tipo_de_operacion &&
        property.attributes.Tipo_de_operacion.includes(
          filters.Tipo_de_operacion
        )
    );
  }

  if (filters.tipo_de_inmueble) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.tipo_de_inmueble &&
        property.attributes.tipo_de_inmueble.includes(filters.tipo_de_inmueble)
    );
  }

  if (filters.priceRange.min || filters.priceRange.max) {
    filtered = filtered.filter((property) => {
      const price =
        filters.currency === "pesos"
          ? property.attributes.valor_pesos
          : property.attributes.valor_dolares;

      if (
        property.attributes.valor_dolares === null &&
        property.attributes.valor_pesos === null
      ) {
        return true;
      }

      return (
        (!filters.priceRange.min ||
          parseFloat(price) >= parseFloat(filters.priceRange.min)) &&
        (!filters.priceRange.max ||
          parseFloat(price) <= parseFloat(filters.priceRange.max))
      );
    });
  }

  if (filters.currency) {
    filtered = filtered.filter((property) => {
      if (
        property.attributes.valor_dolares === null &&
        property.attributes.valor_pesos === null
      ) {
        return true;
      }

      return filters.currency === "usd"
        ? property.attributes.valor_dolares
        : property.attributes.valor_pesos;
    });
  }

  if (filters.Ambientes) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.Ambientes &&
        property.attributes.Ambientes.includes(filters.Ambientes)
    );
  }

  if (filters.Dormitorios) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.Dormitorios &&
        property.attributes.Dormitorios.includes(filters.Dormitorios)
    );
  }

  if (filters.Banos) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.Banos &&
        property.attributes.Banos.includes(filters.Banos)
    );
  }

  if (filters.espacio_para_autos) {
    filtered = filtered.filter(
      (property) => property.attributes.espacio_para_autos
    );
  }

  if (filters.Varios_Apto_Credito) {
    filtered = filtered.filter(
      (property) => property.attributes.Varios_Apto_Credito
    );
  }

  if (filters.Localidades) {
    filtered = filtered.filter(
      (property) =>
        property.attributes.Localidades &&
        property.attributes.Localidades.includes(filters.Localidades)
    );
  }

  const comodidadesKeys = [
    "Comodidades_Balcon",
    "Comodidades_Lavadero",
    "Comodidades_Dep_Servicio",
    "Comodidades_Espacio_al_frente",
    "Comodidades_Fondo_libre",
    "Comodidades_Ascensor",
    "Comodidades_Quincho",
    "Comodidades_SUM",
    "Comodidades_Parrilla",
    "Comodidades_Piscina",
    "Comodidades_Vigilancia",
    "Comodidades_Terraza",
    "Comodidades_Apto_Emprendimiento",
  ];

  comodidadesKeys.forEach((key) => {
    if (filters[key]) {
      filtered = filtered.filter(
        (property) => property.attributes[key] === true
      );
    }
  });

  const variosKeys = [
    "Varios_Apto_Profesional",
    "Varios_Apto_Credito",
    "Varios_Destacado",
    "Varios_Garantia_Propietaria",
    "Varios_Seguro_de_caucion",
  ];

  variosKeys.forEach((key) => {
    if (filters[key]) {
      filtered = filtered.filter(
        (property) => property.attributes[key] === true
      );
    }
  });

  if (filters.Direccion) {
    filtered = filtered.filter((property) =>
      property.attributes.Direccion.toLowerCase().includes(
        filters.Direccion.toLowerCase()
      )
    );
  }

  const serviciosKeys = [
    "Servicios_Gas_Natural",
    "Servicios_Agua_Corriente",
    "Servicios_Luz",
    "Servicios_Red_Cloacal",
    "Servicios_Pavimento",
  ];

  serviciosKeys.forEach((key) => {
    if (filters[key]) {
      filtered = filtered.filter(
        (property) => property.attributes[key] === true
      );
    }
  });

  const sortOptions = {
    Recientes: (a, b) => {
      const dateA = new Date(a.attributes.updatedAt);
      const dateB = new Date(b.attributes.updatedAt);
      console.log("Recientes - a:", dateA, "b:", dateB);
      return dateB - dateA;
    },
    "Mayor Precio": (a, b) => {
      const priceA =
        filters.currency === "pesos"
          ? parseFloat(a.attributes.valor_pesos) || 0
          : parseFloat(a.attributes.valor_dolares) || 0;
      const priceB =
        filters.currency === "pesos"
          ? parseFloat(b.attributes.valor_pesos) || 0
          : parseFloat(b.attributes.valor_dolares) || 0;
      console.log("Mayor Precio - a:", priceA, "b:", priceB);
      return priceB - priceA;
    },
    "Menor Precio": (a, b) => {
      const priceA =
        filters.currency === "pesos"
          ? parseFloat(a.attributes.valor_pesos) || 0
          : parseFloat(a.attributes.valor_dolares) || 0;
      const priceB =
        filters.currency === "pesos"
          ? parseFloat(b.attributes.valor_pesos) || 0
          : parseFloat(b.attributes.valor_dolares) || 0;
      console.log("Menor Precio - a:", priceA, "b:", priceB);
      return priceA - priceB;
    },
  };

  if (filters.orden in sortOptions) {
    console.log(filters.orden);
    filtered = filtered.sort(sortOptions[filters.orden]);
    console.log("applyFilters filtered:", filtered);
  }

  console.log("applyFilters filtered:", filtered);
  return filtered;
};
