import Logo from '../../../assets/logo.svg';
import Cart from '../../../assets/cart.svg';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { CartModal } from '../CartModal';
import useCartContext from '../../../hook/useCartContext';

export const Navbar = () => {

  const [showCartModal, setShowCartModal] = useState(false);
  const {state: {cartItems}} = useCartContext()



  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal)
  }

  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbarDetail}>
          <img src={Logo} alt="logo" width={50} height={50}/>
          <div>
            <span> DH Ecommerce</span>
          </div>
        </div>
        <div className={styles.navbarCartContainer}>
          {cartItems.length > 0 && (
          <p className={styles.navbarTextAmount}>{cartItems.length}</p>
          )}
          <img src={Cart} alt="cart" onClick={handleShowCartModal} />
        </div>
        {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal} />)} 
    </div>
  )
}
