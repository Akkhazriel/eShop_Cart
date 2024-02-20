import React, { useState } from 'react'
import styles from './Cart.module.sass'
import ButtonDelete from '../../UI/ButtonDelete/ButtonDelete';

const Product = ({item, deleteProduct, increase, decrease, changeValue}) => {
    const [count, setCount] = useState(item.count);

    const handleCountChange = (e) => {
        const newValue = +e.target.value
        const updatedCount = newValue > 1 ? newValue : 1
        setCount(updatedCount)
        changeValue(item._id, updatedCount)
    }

    const handleIncrease = () => {
        const newCount = count + 1
        setCount(newCount)
        increase(item._id)
    }

    const handleDecrease = () => {
        const newCount = count - 1 > 1 ? count - 1 : 1
        setCount(newCount)
        decrease(item._id)
    }

  return (
    <section className={styles.product}>
        <div className={styles.product__img}><img src={item.image} alt="Apple MacBook Air 13"/></div>
        <div className={styles.product__title}>{item.title}</div>
        <div className={styles.product__count}>
            <div className={styles.count}>
                <div className={styles.count__box}>
                    <input
                        type="number"
                        className={styles.count__input}
                        min="1"
                        max="100"
                        value={count}
                        onChange={handleCountChange}
                    />
                </div>
                <div className={styles.count__controls}>
                    <button
                        type="button"
                        className={styles.count__up}
                        onClick={handleIncrease}
                    >
                        <img src="./img/icons/icon-up.svg" alt="Increase"/>
                    </button>
                    <button
                        type="button"
                        className={styles.count__down}
                        onClick={handleDecrease}
                    >
                        <img src="./img/icons/icon-down.svg" alt="Decrease"/>
                    </button>
                </div>
            </div>
        </div>
        <div className={styles.product__price}>{new Intl.NumberFormat(
            'ru-RU', {
                style: 'currency',
                currency: 'RUB',
            }
        ).format(item.priceTotal)}
        </div>
        <ButtonDelete deleteProduct={deleteProduct} item={item._id}/>
    </section>
  )
}

export default Product