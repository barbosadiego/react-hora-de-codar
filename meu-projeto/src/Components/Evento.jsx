import React from "react"
import Button from "./evento/Button"

function Evento(){

  function meuEvento(){
    console.log(`Fui ativado`)
  }

  function segundoEvento(){
    console.log('Ativando o segundo evento')
  }

  return(
    <div>
      <p>Clique no botão abaixo para disparar um evento</p>
      <Button event={meuEvento} text='Primeiro evento' />
      <Button event={segundoEvento} text='Segundo evento' />
    </div>
  )
}

export default Evento