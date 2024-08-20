export const fetchProperties = async () => {
  try {
    const response = await fetch(
      "https://diegogmartin.onrender.com/api/propiedades?populate=*"
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const { data } = await response.json();
    console.log(data); //borrar
    return data;
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    throw error;
  }
};
