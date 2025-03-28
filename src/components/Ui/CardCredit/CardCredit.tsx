import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from './CardCredit.module.css';

export const CardCredit = () => {
  return (
    <div className={styles.constainer}>
        <div>
        <Cards
            number= {""}
            name= {""}
            expiry= {""}
            cvc= {""}
            focused= {""}
        />
        </div>
        <form>
        <div className={styles.formControl}>
            <label htmlFor="number">Card Number</label>
            <input type="text" id="number" name= "number" placeholder="Card Numer" required/>
        </div>
            <div className={styles.formControl}>
                <label htmlFor="name">Card Name</label>
                <input type="text" id="name" name= "name" placeholder="Card Name" required/>
            </div>

            <div className={styles.formInputGrup}>
                <div className={styles.formControl}>
                    <label htmlFor="expiry">Card Expiry</label>
                    <input type="text" id="expiry" name= "expiry" placeholder="MM/YY" required/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="cvc">Card CVC</label>
                    <input type="text" id="cvc" name= "cvc" placeholder="CVC" required/>
                </div>
            </div>
        </form>
    </div>
  )
}
export default CardCredit
