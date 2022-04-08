import React from 'react'
import styles from './LinkButton.css'
import {Link} from 'react-router-dom'

const LinkButton = ({to, text}) => {
  return (
   <Link className={styles.btn} to={to}>
    {text}
   </Link>
  )
}

export default LinkButton
