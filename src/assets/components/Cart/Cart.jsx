import React, { useEffect, useState } from 'react'
import CartHeader from './CartHeader'
import Product from './Product'
import CartFooter from './CartFooter'
import {items as itemsData} from './../../cart.data'
import styles from './Cart.module.sass'

const Cart = () => {
  // Храним состояние массива данных из cart.data.js
  const [items, setItems] = useState(itemsData)
  // Храним состояние объекта с информацией о общей стоимости и количестве товара
  const [total, setTotal] = useState({
    // Изначально рассчитываем с помощью reduceдля массива items
    // reduce суммирует все значения priceTotal массива items, по умолчанию 0
    price: items.reduce((prev, curr) => {
      return prev + curr.priceTotal
    }, 0),
    // общее количество товаров которое так же рассчитывается методом reduce
    // prev накапливает каждое текущее число curr
    count: items.reduce((prev, curr) => {
      return prev + curr.count
    }, 0),
  })

  // следим за состоянием items внутри компонента
  useEffect(() => {
    // Если изменяется массив items, делаем пересчет на основе setTotal
    setTotal({
      price: items.reduce((prev, curr) => {
        return prev + curr.priceTotal
      }, 0),
      count: items.reduce((prev, curr) => {
        return prev + curr.count
      }, 0),
    })}, [items])

  // Удаляем продукт, принимает в себя _id товара из массива данных
  const deleteProduct = (_id) => {
    setItems(prevItems => prevItems.filter(item => item._id !== _id))
  }

  // Добавляем +1 к количеству определенного товара
  const increase = (_id) => {
    setItems((items) => {
      // Проходимся по всему массиву при нажатии
      return items.map((item) => {
        // Сравниваем полученнынй _id
        if(item._id === _id) {
          // Добавляем к текущему count + 1
          const newCount = item.count + 1
          // Умножаем новое число на цену
          const newPrice = newCount * item.price

          // Возвращаем весь массив + новыее значения
          return {
            ...item,
            count: newCount,
            priceTotal: newPrice,
          }
        }
        return item
      })
    })
  }

  // Убавляем -1
  const decrease = (_id) => {
    setItems((items) => {
      return items.map((item) => {
        if(item._id === _id) {
          // Делаем проверку, если count при убавлении -1 больше 1 то убавляем, если нет то оставляем единицу
          const newCount = item.count - 1 > 1 ? item.count - 1 : 1
          const newPrice = newCount * item.price

          return {
            ...item,
            count: newCount,
            priceTotal: newPrice,
          }
        }
        return item
      })
    })
  }

  // Изменяем поле input, принимаем id и новое значение полученное из поля
  const changeValue = (_id, newValue ) => {
    setItems((items) => {
      return items.map((item) => {
        if(item._id === _id) {
          return {
            ...item,
            count: newValue,
            priceTotal: newValue * item.price
          }
        }
        return item
      })
    })
  }

  return (
    <section className={styles.cart}>
        {/* Компонент */}
        <CartHeader />

        <div>
            {items.length ? (
                items.map(item =>
                  (<Product
                    key={item._id}
                    deleteProduct={() => deleteProduct(item._id)}
                    increase={() => increase(item._id)}
                    decrease={() => decrease(item._id)}
                    changeValue={changeValue}
                    item={item}
                  />))
            ): (
                <p>Товаров нет</p>
            )}
        </div>

        <CartFooter total={total}/>
    </section>
  )
}

export default Cart