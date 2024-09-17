export const fetchProperties = async (page = 1, pageSize = 10) => {
  try {
    const response = await fetch(
      `https://diegogmartin.onrender.com/api/propiedades?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const { data, meta } = await response.json();
    return { data, meta };
  } catch (error) {
    console.error("Failed to fetch properties:", error.message);
    throw error;
  }
};
