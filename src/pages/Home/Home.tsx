import { Hero } from '../../components/Ui/Hero';
import { useState } from 'react';
import styles from './Home.module.css';
import { CardProduct } from '../../components/Ui/CardProduct';
import { getProducts } from '../../Service';
import { Toaster } from 'sonner';
import { useQuery } from "react-query";

const Home = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ['products', page],
    queryFn: () => getProducts(page),
    keepPreviousData: true, // Mantiene los datos de la página anterior mientras se cargan los nuevos
  });

  console.log("Current Page:", page);
  console.log("Products Data:", data);

  return (
    <>
      <Hero />
      <Toaster richColors />
      <h1 className={styles.title}>Products</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading products</p>}
      <div className={styles.container}>
        {Array.isArray(data) ? (
          data.map((product) => (
            <CardProduct key={product.tail} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <div className={styles.paginationContainer}>
        <button
          className={styles.paginationButton}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <div className={styles.paginationActive}>
          <span>{page}</span>
        </div>
        <button
          className={styles.paginationButton}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default Home;
