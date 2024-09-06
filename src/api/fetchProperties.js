export const fetchProperties = async () => {
  try {
    const response = await fetch(
      "https://diegogmartin.onrender.com/api/propiedades?populate=*&pagination[pageSize]=500"
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch properties:", error.message);
    throw error;
  }
};
