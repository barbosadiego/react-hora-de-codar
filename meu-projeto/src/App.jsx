import React from 'react';
import './App.css';
import OutraLista from './Components/OutraLista';
// import HelloWorld from './Components/HelloWorld';
// import Frase from './Components/Frase';
// import SayMyName from './Components/SayMyName';
// import Pessoa from './Components/Pessoa';
// import List from './Components/List';
// import Evento from './Components/Evento';
// import Form from './Components/Form';
// import Condicional from './Components/Condicional';

const App = (props) => {

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <React.Fragment>
     <h1>Renderização de listas</h1>
     <OutraLista itens={meusItens} />
     <OutraLista itens={[]} />
    </React.Fragment>
  );
};

export default App;
