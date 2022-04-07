import React from 'react';
import HelloWorld from './Components/HelloWorld';
import Frase from './Components/Frase';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';
import './App.css';

const App = (props) => {
  const nome = 'Tino';
  return (
    <div>
      <HelloWorld />
      <Frase />
      <SayMyName nome="Diego" />
      <SayMyName nome="Maria" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome='Diego'
        idade='35'
        profissao='Dev Web'
        foto='https://via.placeholder.com/150'
      />
    </div>
  );
};

export default App;
