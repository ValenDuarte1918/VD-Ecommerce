import styles from './CardProduct.module.css' // Importa los estilos CSS específicos para este componente
import {  FC } from 'react' // Importa useContext de React para usar el contextoimport { CartContext } from '../../../context/CartContext' // Importa el contexto del carrito de compras
import { Product } from '../../../interface' // Importa la interfaz Product para definir el tipo de producto
import { CartProduct } from '../../../interface' // Importa la interfaz CartProduct para definir el tipo de producto en el carrito
import useCartContext from '../../../hook/useCartContext'
import { toast } from 'sonner'

interface Props{
    product: Product
}



// Define el componente CardProduct que recibe un objeto producto como prop
export const CardProduct: FC<Props>= ({product}) => {

    // Obtiene la función dispatch del contexto del carrito de compras
    const { dispatch } = useCartContext();

    // Crea un objeto item basado en el producto recibido como prop
        const item: CartProduct = {
        tail: product.tail, // Asigna el tail del producto
        id: product.id ?? 0, // Asigna el id del producto
        name: product.name, // Asigna el nombre del producto
        image: product.image, // Asigna la imagen del producto
        price: product.price, // Asigna el precio del producto
        quantity: 1, // Inicializa la cantidad en 1ñ
    }

    // Define la función addToCart que despacha una acción para agregar el item al carrito
    const addToCart = (item:CartProduct) => {
        dispatch({type: 'ADD_TO_CART', payload: item})
        toast.success('Product added to cart') // Muestra un mensaje de éxito al agregar el producto al carrito
    } 

    // Renderiza el componente CardProduct
    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardImage} src={product.image} alt={product.name}/> {/* Muestra la imagen del producto */}
            <div className={styles.cardDetail}>
                <h3 className={styles.cardTitle}>{product.name}</h3> {/* Muestra el nombre del producto */}
                <div className={styles.cardBody}>
                    <p className={styles.cardType}>{product.type}</p> {/* Muestra el tipo del producto */}
                    <p className={styles.cardPrice}>{product.price} $</p> {/* Muestra el precio del producto */}
                </div>
                <button className={styles.cardButton} onClick={() => addToCart(item)}> Add to cart</button> {/* Botón para agregar el producto al carrito */}
            </div>
        </div>
    )
}
