import styles from './CardProduct.module.css'; // Importa los estilos CSS específicos para este componente
import { FC } from 'react'; // Importa FC para definir el componente funcional
import { Product } from '../../../interface'; // Importa la interfaz Product para definir el tipo de producto
import { CartProduct } from '../../../interface'; // Importa la interfaz CartProduct para definir el tipo de producto en el carrito
import useCartContext from '../../../hook/useCartContext';
import { toast } from 'sonner';

/**
 * Props del componente CardProduct.
 * @typedef {Object} Props
 * @property {Product} product - Objeto que representa un producto.
 */
interface Props {
    product: Product;
}

/**
 * Componente CardProduct.
 * Representa una tarjeta de producto que muestra información del producto y permite agregarlo al carrito.
 * @component
 * @param {Props} props - Propiedades del componente.
 * @returns {JSX.Element} El componente CardProduct.
 */
export const CardProduct: FC<Props> = ({ product }) => {
    // Obtiene la función dispatch del contexto del carrito de compras
    const { dispatch } = useCartContext();

    /**
     * Objeto que representa un producto en el carrito.
     * @type {CartProduct}
     */
    const item: CartProduct = {
        tail: product.tail, // Asigna el tail del producto
        id: product.id ?? 0, // Asigna el id del producto
        name: product.name, // Asigna el nombre del producto
        image: product.image, // Asigna la imagen del producto
        price: product.price, // Asigna el precio del producto
        quantity: 1, // Inicializa la cantidad en 1
    };

    /**
     * Agrega un producto al carrito.
     * Despacha una acción para agregar el producto al carrito y muestra un mensaje de éxito.
     * @param {CartProduct} item - Objeto que representa el producto a agregar al carrito.
     */
    const addToCart = (item: CartProduct) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
        toast.success('Product added to cart'); // Muestra un mensaje de éxito al agregar el producto al carrito
    };

    // Renderiza el componente CardProduct
    return (
        <div className={styles.cardContainer}>
            <img
                className={styles.cardImage}
                src={product.image}
                alt={product.name}
            />{' '}
            {/* Muestra la imagen del producto */}
            <div className={styles.cardDetail}>
                <h3 className={styles.cardTitle}>{product.name}</h3>{' '}
                {/* Muestra el nombre del producto */}
                <div className={styles.cardBody}>
                    <p className={styles.cardType}>{product.type}</p>{' '}
                    {/* Muestra el tipo del producto */}
                    <p className={styles.cardPrice}>{product.price} $</p>{' '}
                    {/* Muestra el precio del producto */}
                </div>
                <button
                    className={styles.cardButton}
                    onClick={() => addToCart(item)}
                >
                    {' '}
                    Add to cart
                </button>{' '}
                {/* Botón para agregar el producto al carrito */}
            </div>
        </div>
    );
};