import React from 'react'
import styles from './Cart.module.sass'

const CartFooter = () => {
  return (
    <footer className={styles['cart-footer']}>
        <div className={styles['cart-footer__count']}>3 единицы</div>
        <div className={styles['cart-footer__price']}>329 000 руб.</div>
    </footer>
  )
}

export default CartFooter