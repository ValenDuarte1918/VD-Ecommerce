import React from 'react'
import { Table } from '../../components/Ui/Table/Table'
import styles from './Checkout.module.css' 

export const Checkout = () => {
  return (
    <div className={styles.Container}>
        <h1 className={styles.title}>Checkout</h1>
        <div className={styles.grid}>
          <div>
            <Table/>
          </div>
          <div>
            
          </div>
        </div>
    </div>
  )
}
