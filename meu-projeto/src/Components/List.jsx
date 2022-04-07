import React from 'react'
import styles from './List.module.css'
import Item from './Item'

const List = (props) => {
  return (
    <div className={styles.container}>
      <h1>Uma lista</h1>
      <ul>
        {/* <li>item 1</li> */}
        {/* <li>item 2</li> */}
        <Item marca='Ferrari' ano_lancamento={1956}/>
        <Item marca='VW' ano_lancamento={1964}/>
        <Item marca='Fiat' ano_lancamento={1987}/>
        <Item marca='Renault' ano_lancamento={1988}/>
        <Item marca='Chevrolet' ano_lancamento={1999}/>
        <Item />
      </ul>
    </div>
  )
}

export default List
