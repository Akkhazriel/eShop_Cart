import React from 'react'
import styles from './Cart.module.sass'

const CartHeader = () => {
  return (
    <header className={styles['cart-header']}>
        <div className={styles['cart-header__title']}>наименование</div>
        <div className={styles['cart-header__count']}>количество</div>
        <div className={styles['cart-header__cost']}>стоимость</div>
    </header>
  )
}

export default CartHeader