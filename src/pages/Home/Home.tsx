import {Hero} from '../../components/Ui/Hero'
import {useEffect, useState} from 'react'
import styles from './Home.module.css'
import { CardProduct } from '../../components/Ui/CardProduct'
import { getProducts } from '../../Service'
import { Product } from '../../interface'
import { Toaster } from 'sonner'

export const Home = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    }).catch(() => {
      setError(true)
    }).finally(() => {
      setIsLoading(false)
    })
  }, [])


  return (
    <>
    <Hero/>
    <Toaster richColors/>
    <h1 className={styles.title}>Products</h1>
    {isLoading && <p>Loading...</p>}
    {error && <p>Error loading products</p>}
    <div className= {styles.container}>
      {products.map((product) => (
        <CardProduct key={product.tail} product={product}/>
      ))}


    </div>
    </>
  )
}

