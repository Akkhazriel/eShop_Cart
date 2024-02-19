import React, { useState } from 'react'
import styles from './Cart.module.sass'
import ButtonDelete from '../../UI/ButtonDelete/ButtonDelete';

const Product = ({item, deleteProduct}) => {
    const [count, setCount] = useState(1);

    const handleCountChange = (e) => {
        setCount(e.target.value);
    }


  return (
    <section className={styles.product}>
        <div className={styles.product__img}><img src={item.image} alt="Apple MacBook Air 13"/></div>
        <div className={styles.product__title}>{item.title}</div>
        <div className={styles.product__count}>
            <div className={styles.count}>
                <div className={styles.count__box}>
                    <input type="number" className={styles.count__input} min="1" max="100" value={count} onChange={handleCountChange}/>
                </div>
                <div className={styles.count__controls}>
                    <button type="button" className={styles.count__up}>
                        <img src="./img/icons/icon-up.svg" alt="Increase"/>
                    </button>
                    <button type="button" className={styles.count__down}>
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
        ).format(item.price)}
        </div>
        <ButtonDelete deleteProduct={deleteProduct} item={item._id}/>
    </section>
  )
}

export default Product