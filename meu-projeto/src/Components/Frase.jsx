import React from "react"
import styles from './Frase.css'

function Frase(){
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>Este é outro componente</p>
    </div>
  )
}

export default Frase