import styles from './CardProduct.module.css' // Importa los estilos CSS específicos para este componente
import { useContext } from 'react' // Importa useContext de React para usar el contexto
import { CartContext } from '../../../context/CartContext' // Importa el contexto del carrito de compras

// Define el componente CardProduct que recibe un objeto producto como prop
export const CardProduct = ({product}) => {

    // Obtiene la función dispatch del contexto del carrito de compras
    const { dispatch } = useContext(CartContext);

    // Crea un objeto item basado en el producto recibido como prop
    const item = {
        id: product.tail, // Asigna el id del producto
        name: product.name, // Asigna el nombre del producto
        image: product.image, // Asigna la imagen del producto
        quantity: 1, // Inicializa la cantidad en 1
    }

    // Define la función addToCart que despacha una acción para agregar el item al carrito
    const addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: item})
    } 

    // Renderiza el componente CardProduct
    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardImage} src={product.image} alt={product.name}/> {/* Muestra la imagen del producto */}
            <div className={styles.cardDetail}>
                <h3 className={styles.cardTitle}>{product.name}</h3> {/* Muestra el nombre del producto */}
                <div className={styles.cardBody}>
                    <p className={styles.cardType}>{product.type}</p> {/* Muestra el tipo del producto */}
                    <p className={styles.cardPrice}> 
                        price, <small> 00 </small> {/* Muestra el precio del producto */}
                    </p>
                </div>
                <button className={styles.cardButton} onClick={() => addToCart(item)}> Add to cart</button> {/* Botón para agregar el producto al carrito */}
            </div>
        </div>
    )
}
