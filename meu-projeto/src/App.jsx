import React from 'react';
// import HelloWorld from './Components/HelloWorld';
// import Frase from './Components/Frase';
// import SayMyName from './Components/SayMyName';
// import Pessoa from './Components/Pessoa';
// import List from './Components/List';
import Evento from './Components/Evento';
import './App.css';
import Form from './Components/Form';

const App = (props) => {
  const nome = 'Tino';
  return (
    <React.Fragment>
     <h1>Testando eventos</h1>
     <Evento />
     <Form />
    </React.Fragment>
  );
};

export default App;
