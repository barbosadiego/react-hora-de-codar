import React from 'react'
import styles from './Loading.css'
import loading from '../../img/loading.svg'

const Loading = (props) => {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loading} alt="Loading" />
    </div>
  )
}

export default Loading
