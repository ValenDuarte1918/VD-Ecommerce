import { Product } from "../interface";

/**
 * Obtiene una lista de productos desde la API.
 * @async
 * @function getProducts
 * @param {number} [page=0] - Número de la página para la paginación.
 * @returns {Promise<Product[]>} Una promesa que resuelve con una lista de productos.
 * @throws {Error} Si ocurre un error en la red o la respuesta no es exitosa.
 */
export const getProducts = async (page = 0): Promise<Product[]> => {
  try {
    const response = await fetch(`http://localhost:3000/products?_page=${page}&_limit=24`);
    
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch products');
    }
  } catch (error) {
    throw new Error('Network error');
  }
};

/**
 * Crea un nuevo producto en la API.
 * @async
 * @function createProduct
 * @param {Product} product - Objeto que representa el producto a crear.
 * @returns {Promise<Product>} Una promesa que resuelve con el producto creado.
 * @throws {Error} Si ocurre un error en la red o la respuesta no es exitosa.
 */
export const createProduct = async (product: Product): Promise<Product> => {
  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error creating product");
    }
  } catch (error) {
    throw new Error("Network error");
  }
};