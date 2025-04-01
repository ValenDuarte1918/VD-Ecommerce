import { useQuery } from "react-query";
import { Toaster } from "sonner";
import { CardProduct } from "../../components/Ui/CardProduct";
import { Hero } from "../../components/Ui/Hero";
import { getProducts } from "../../Service";
import styles from "./Home.module.css";
import { useState } from "react";

/**
 * Componente Home.
 * Representa la página principal de la aplicación, que muestra una lista de productos con paginación.
 * @component
 * @returns {JSX.Element} El componente Home.
 */
const Home = () => {
  /**
   * Estado para controlar la página actual de la paginación.
   * @type {number}
   */
  const [page, setPage] = useState(1);

  /**
   * Consulta para obtener los productos de la API.
   * Utiliza `react-query` para manejar la solicitud y el estado de los datos.
   * @type {Object}
   * @property {Array<Product>} data - Lista de productos obtenidos.
   * @property {boolean} isLoading - Indica si los datos están cargando.
   * @property {Error} error - Error ocurrido durante la consulta.
   */
  const { data, isLoading, error } = useQuery(
    ["products", page],
    () => getProducts(page),
    { keepPreviousData: true }
  );

  return (
    <>
      <Hero />
      <Toaster richColors />
      <h1 className={styles.title}>Products</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <div className={styles.container}>
        {data?.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <button
          onClick={() => setPage(page - 1)}
          className={styles.paginationButton}
          disabled={page === 1}
        >
          previous page
        </button>
        <div className={styles.paginationActive}>
          <span>{page}</span>
        </div>
        <button
          className={styles.paginationButton}
          onClick={() => setPage(page + 1)}
        >
          next page
        </button>
      </div>
    </>
  );
};

export default Home;
