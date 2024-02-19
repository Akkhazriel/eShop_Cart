import React from 'react'
import styles from './ButtonDelete.module.sass'

const ButtonDelete = ({deleteProduct, _id}) => {
  return (
    <div className={styles.product__controls}>
        <button type="button" onClick={() => {deleteProduct(_id)}}>
            <img src="./img/icons/cross.svg" alt="Delete"/>
        </button>
    </div>
  )
}

export default ButtonDelete