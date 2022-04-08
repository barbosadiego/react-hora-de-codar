import React from 'react'
import styles from './Container.css'

const Container = (props) => {
  console.log(styles)
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  )
}

export default Container
