import React, { useState } from 'react'; // Asegúrate de importar React
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from './CardCredit.module.css';
import { toast } from 'sonner';
import useCartContext from '../../../hook/useCartContext';
import { CartProduct } from '../../../interface';

/**
 * Componente de tarjeta de crédito.
 * Permite a los usuarios ingresar los datos de su tarjeta de crédito para realizar una compra.
 * @component
 */
export const CardCredit = () => {
    /**
     * Estado para almacenar los datos de la tarjeta de crédito.
     * @typedef {Object} CardData
     * @property {string} number - Número de la tarjeta de crédito.
     * @property {string} name - Nombre del titular de la tarjeta.
     * @property {string} expiry - Fecha de expiración de la tarjeta (MM/YY).
     * @property {string} cvc - Código de seguridad de la tarjeta.
     * @property {string} focused - Campo actualmente enfocado.
     */
    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focused: ''
    });

    const { dispatch } = useCartContext();

    const { number, name, expiry, cvc, focused } = cardData;

    /**
     * Maneja los cambios en los campos del formulario.
     * Actualiza el estado `cardData` con los valores ingresados por el usuario.
     * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio en el input.
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            [e.target.name]: e.target.value
        });
    };

    /**
     * Maneja el evento de enfoque en los campos del formulario.
     * Actualiza el estado `focused` con el nombre del campo actualmente enfocado.
     * @param {React.FocusEvent<HTMLInputElement>} e - Evento de enfoque en el input.
     */
    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            focused: e.target.name
        });
    };

    /**
     * Maneja el envío del formulario.
     * Valida que todos los campos estén completos, limpia el carrito y muestra un mensaje de éxito.
     * @param {React.FormEvent<HTMLFormElement>} e - Evento de envío del formulario.
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Validar que los campos no estén vacíos
        if ([number, name, expiry, cvc].includes('')) {
            toast.error('Por favor, completa todos los campos');
            return;
        }
        setCardData({
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focused: ''
        });
        dispatch({ type: 'CLEAR_CART', payload: {} as CartProduct });
        toast.success('Compra realizada con éxito');
    };

    return (
        <div className={styles.container}>
            <div>
                <Cards
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={cardData.focused}
                />
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.formControl}>
                    <label htmlFor="number">Card Number</label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        placeholder="Card Number"
                        value={number}
                        onFocus={handleInputFocus}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="name">Card Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Card Name"
                        value={name}
                        onFocus={handleInputFocus}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.formInputGroup}>
                    <div className={styles.formControl}>
                        <label htmlFor="expiry">Card Expiry</label>
                        <input
                            type="text"
                            id="expiry"
                            name="expiry"
                            placeholder="MM/YY"
                            value={expiry}
                            onFocus={handleInputFocus}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="cvc">Card CVC</label>
                        <input
                            type="text"
                            id="cvc"
                            name="cvc"
                            placeholder="CVC"
                            value={cvc}
                            onFocus={handleInputFocus}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <button type="submit" className={styles.buyButton}>
                    Buy Now
                </button>
            </form>
        </div>
    );
};

export default CardCredit;