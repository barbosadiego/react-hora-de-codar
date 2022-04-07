import React from 'react';
import './App.css';
// import HelloWorld from './Components/HelloWorld';
// import Frase from './Components/Frase';
// import SayMyName from './Components/SayMyName';
// import Pessoa from './Components/Pessoa';
// import List from './Components/List';
// import Evento from './Components/Evento';
// import Form from './Components/Form';
import Condicional from './Components/Condicional';

const App = (props) => {
  const nome = 'Tino';
  return (
    <React.Fragment>
     <h1>Renderização condicional</h1>
     <Condicional />
    </React.Fragment>
  );
};

export default App;
