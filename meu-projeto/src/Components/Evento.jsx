import React from "react"

function Evento({numero}){

  function meuEvento(){
    console.log(`Fui ativado ${numero}`)
  }

  return(
    <div>
      <p>Clique no botão abaixo para disparar um evento</p>
      <button onClick={meuEvento}>Ativar!</button>
    </div>
  )
}

export default Evento