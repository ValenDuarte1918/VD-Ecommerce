import Logo from '../../../assets/logo.svg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { CartModal } from '../CartModal';
import useCartContext from '../../../hook/useCartContext';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Componente Navbar.
 * Representa la barra de navegación principal de la aplicación, que incluye un logo, un enlace a la página de inicio y un ícono para mostrar el carrito de compras.
 * @component
 * @returns {JSX.Element} El componente Navbar.
 */
export const Navbar = () => {
  /**
   * Estado para controlar la visibilidad del modal del carrito.
   * @type {boolean}
   */
  const [showCartModal, setShowCartModal] = useState(false);

  /**
   * Obtiene los elementos del carrito desde el contexto.
   * @type {Array} cartItems - Lista de productos en el carrito.
   */
  const { state: { cartItems } } = useCartContext();

  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Maneja la visibilidad del modal del carrito.
   * Alterna entre mostrar y ocultar el modal.
   */
  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  /**
   * Navega a la página de inicio.
   * Redirige al usuario a la ruta principal ('/').
   */
  const handleNavigateToHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarDetail} onClick={handleNavigateToHome}>
        <img src={Logo} alt="logo" width={50} height={50} />
        <div>
          <span>Duarte- Ecommerce</span>
        </div>
      </div>
      {location.pathname !== '/checkout' && (
        <>
          <div className={styles.navbarCartContainer}>
            {cartItems.length > 0 && (
              <p className={styles.navbarTextAmount}>{cartItems.length}</p>
            )}
            <AddShoppingCartIcon onClick={handleShowCartModal} />
          </div>
          {showCartModal && (
            <CartModal handleShowCartModal={handleShowCartModal} />
          )}
        </>
      )}
    </div>
  );
};