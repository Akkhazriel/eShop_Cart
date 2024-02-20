import React from 'react'
import styles from './Cart.module.sass'

const CartFooter = ({total}) => {
  const {count, price} = total
  return (
    <footer className={styles['cart-footer']}>
        <div className={styles['cart-footer__count']}>{count} ед.</div>
        <div className={styles['cart-footer__price']}>{price} руб.</div>
    </footer>
  )
}

export default CartFooter