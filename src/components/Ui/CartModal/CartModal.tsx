import styles from './CartModal.module.css';
import Close from '../../../assets/close.svg';
import { FC } from 'react';
import { Table } from '../Table/Table';
import { useNavigate } from 'react-router';

/**
 * Props del componente CartModal.
 * @typedef {Object} Props
 * @property {function} handleShowCartModal - Función para manejar la visibilidad del modal del carrito.
 */
interface Props {
    handleShowCartModal: () => void;
}

/**
 * Componente CartModal.
 * Representa un modal que muestra el contenido del carrito de compras y permite navegar al proceso de checkout.
 * @component
 * @param {Props} props - Propiedades del componente.
 * @returns {JSX.Element} El componente CartModal.
 */
export const CartModal: FC<Props> = ({ handleShowCartModal }) => {
    const navigate = useNavigate();

    /**
     * Maneja la navegación al proceso de checkout.
     * Cierra el modal y redirige al usuario a la página de checkout.
     */
    const handleNavigation = () => {
        navigate('/checkout');
        handleShowCartModal();
    };

    return (
        <div className={styles.modalContainer}>
            <button
                className={styles.modalCloseButton}
                onClick={handleShowCartModal}
            >
                <img src={Close} alt="Close" />
            </button>
            <Table />
            <div className={styles.modalButtonContainer}>
                <button onClick={handleNavigation}>Checkout</button>
            </div>
        </div>
    );
};
