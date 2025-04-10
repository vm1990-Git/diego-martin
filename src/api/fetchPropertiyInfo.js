export const fetchPropertiyInfo = async (id) => {
  try {
    const response = await fetch(
      `https://diegogmartin.onrender.com/api/propiedades/${id}?populate=*`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    throw error;
  }
};
