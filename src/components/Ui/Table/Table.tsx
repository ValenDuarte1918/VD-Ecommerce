import styles from './Table.module.css'
import useCartContext from '../../../hook/useCartContext';
import { CartProduct } from '../../../interface';


export const Table = () => {
const {state:{cartItems},dispatch}  =useCartContext()

const removeToCart= (item: CartProduct) => {
    dispatch({type: 'REMOVE_FROM_CART', payload: item})
}
const addToCart= (item: CartProduct) => {
    dispatch({type: 'ADD_TO_CART', payload: item})
}
const totalPay= ()=> {
    const total = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)
    return total
}
  return (
    <div>
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
  {cartItems.length > 0 ? (
    cartItems.map((item) => (
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
    ))
  ) : (
    <tr>
      <td colSpan={5} className={styles.emptyRow}>
        No hay productos en el carrito.
      </td>
    </tr>
  )}
</tbody>
</table>
    <div className={styles.modalTotalContainer}>
      <h3>Total: ${totalPay()}</h3>
    </div>
    </div>
  )
}
