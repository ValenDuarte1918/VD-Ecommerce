import { Product } from "../interface";

export const getProducts = async (page = 1): Promise<Product[]> => {
  console.log("Fetching products for page:", page);
  try {
    const response = await fetch(`http://localhost:3000/products?_page=${page}&_limit=2`);
    if (response.ok) {
      const data = await response.json();
      console.log("API Response:", data);
      return Array.isArray(data) ? data : data.products || []; // Devuelve el array de productos
    } else {
      throw new Error("Error fetching data");
    }
  } catch (error) {
    throw new Error("Network error");
  }
};