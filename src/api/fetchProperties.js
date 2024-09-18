export const fetchProperties = async (
  page = 1,
  pageSize = 10,
  filters = {}
) => {
  try {
    const filterQuery = Object.keys(filters)
      .map((key) => `filters[${key}][$eq]=${encodeURIComponent(filters[key])}`)
      .join("&");

    const url = `https://diegogmartin.onrender.com/api/propiedades?${filterQuery}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    console.log(url);
    const response = await fetch(url);

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
