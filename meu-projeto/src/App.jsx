import React from 'react';
import './App.css';
import Saudacao from './Components/Saudacao';
import SeuNome from './Components/SeuNome';
// import OutraLista from './Components/OutraLista';
// import HelloWorld from './Components/HelloWorld';
// import Frase from './Components/Frase';
// import SayMyName from './Components/SayMyName';
// import Pessoa from './Components/Pessoa';
// import List from './Components/List';
// import Evento from './Components/Evento';
// import Form from './Components/Form';
// import Condicional from './Components/Condicional';

const App = (props) => {
  const [nome, setNome] = React.useState();

  return (
    <React.Fragment>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </React.Fragment>
  );
};

export default App;
