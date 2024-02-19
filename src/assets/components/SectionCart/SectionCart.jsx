import React from 'react'
import SectionCartHeader from './SectionCartHeader'
import SectionCartBody from './SectionCartBody'
import styles from './SectionCart.module.sass'

const SectionCart = () => {
  return (
    <section className={styles['section-cart']}>
      <SectionCartHeader />
      <SectionCartBody />
    </section>
  )
}

export default SectionCart