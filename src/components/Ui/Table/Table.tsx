import styles from './Table.module.css';
import useCartContext from '../../../hook/useCartContext';
import { CartProduct } from '../../../interface';

/**
 * Componente Table.
 * Representa una tabla que muestra los productos en el carrito, permite agregar o eliminar productos y calcula el total a pagar.
 * @component
 * @returns {JSX.Element} El componente Table.
 */
export const Table = () => {
  /**
   * Obtiene los elementos del carrito y la función dispatch desde el contexto del carrito.
   * @type {Array<CartProduct>} cartItems - Lista de productos en el carrito.
   * @type {function} dispatch - Función para despachar acciones al carrito.
   */
  const { state: { cartItems }, dispatch } = useCartContext();

  /**
   * Elimina un producto del carrito.
   * Despacha una acción para eliminar el producto del carrito.
   * @param {CartProduct} item - Producto a eliminar del carrito.
   */
  const removeToCart = (item: CartProduct) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  /**
   * Agrega un producto al carrito.
   * Despacha una acción para agregar el producto al carrito.
   * @param {CartProduct} item - Producto a agregar al carrito.
   */
  const addToCart = (item: CartProduct) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  /**
   * Calcula el total a pagar por los productos en el carrito.
   * @returns {number} El total a pagar.
   */
  const totalPay = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total;
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        <>
          <table className={styles.modalTable}>
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Eliminar</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Agregar</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>
                    <button
                      className={styles.modalButtonRemove}
                      onClick={() => removeToCart(item)}
                      aria-label={`Eliminar 1 ${item.name}`}
                    >
                      -1
                    </button>
                  </td>
                  <td>
                    <p>{item.quantity}</p>
                  </td>
                  <td>
                    <button
                      className={styles.modalButtonAdd}
                      onClick={() => addToCart(item)}
                      aria-label={`Agregar 1 ${item.name}`}
                    >
                      +1
                    </button>
                  </td>
                  <td>
                    <p>${item.quantity * item.price}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.modalTotalContainer}>
            <h3>Total: ${totalPay()}</h3>
          </div>
        </>
      ) : (
        <div className={styles.emptyCartMessage}>
          <p>No hay productos en el carrito.</p>
        </div>
      )}
    </div>
  );
};
