import React, { useState } from 'react'
import CartHeader from './CartHeader'
import Product from './Product'
import CartFooter from './CartFooter'
import {items as itemsData} from './../../cart.data'
import styles from './Cart.module.sass'

const Cart = () => {
  const [items, setItems] = useState(itemsData)

  const deleteProduct = (_id) => {
    setItems(prevItems => prevItems.filter(item => item._id !== _id))
  }

  return (
    <section className={styles.cart}>
        <CartHeader />

        <div>
            {items.length ? (
                items.map(item => (<Product key={item._id} deleteProduct={() => deleteProduct(item._id)} item={item} />))
            ): (
                <p>Товаров нет</p>
            )}
        </div>

        <CartFooter />
    </section>
  )
}

export default Cart