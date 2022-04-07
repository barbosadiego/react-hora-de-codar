import React from 'react'
import styles from './List.module.css'
import Item from './Item'

const List = (props) => {
  return (
    <div className={styles.container}>
      <h1>Uma lista</h1>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <Item marca='Ferrari'/>
        <Item marca='VW' />
        <Item marca='Fiat' />
        <Item marca='Renault' />
      </ul>
    </div>
  )
}

export default List
