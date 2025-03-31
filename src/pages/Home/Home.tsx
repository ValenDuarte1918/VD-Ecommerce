import { Hero } from '../../components/Ui/Hero';
import { useState } from 'react';
import styles from './Home.module.css';
import { CardProduct } from '../../components/Ui/CardProduct';
import { getProducts } from '../../Service';
import { Toaster } from 'sonner';
import { useQuery } from 'react-query';

const Home = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery(
    ["products", page],
    () => getProducts(page),
    {keepPreviousData: true}
  );
  return (
    <>
      <Hero />
      <Toaster richColors />
      <h1 className={styles.title}>Products</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading products</p>}
      <div className={styles.container}>
          {data?.map((product) => (
            <CardProduct key={product.tail} product={product} />
          ))}
      </div>
      <div className={styles.paginationContainer}>
        <button
        onClick= {() => setPage(page + 1 )}
        className={styles.paginationButton} 
        > 
        Next page
        </button>
        <div className={styles.paginationActive}>
        <span >{page}</span>
        </div>
        <button
        className={styles.paginationButton}
        onClick = {() => setPage(page - 1 )}
        disabled={page === 1}
        > 
        Previe page
        </button>
      </div>
    </>
  )
}
export default Home;
