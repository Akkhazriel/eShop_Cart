import React from 'react'
import Title from './../../UI/Title/Title'
import styles from './SectionCart.module.sass'
import container from './../App/App.module.sass'

const SectionCartHeader = () => {
  return (
    <header className={styles['section-cart__header']}>
        <div className={container.container}>
            <Title />
        </div>
    </header>
  )
}

export default SectionCartHeader