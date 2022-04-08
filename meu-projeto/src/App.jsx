import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Empresa from './Pages/Empresa';
import Contato from './Pages/Contato';
import Home from './Pages/Home';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
// import Saudacao from './Components/Saudacao';
// import SeuNome from './Components/SeuNome';
// import OutraLista from './Components/OutraLista';
// import HelloWorld from './Components/HelloWorld';
// import Frase from './Components/Frase';
// import SayMyName from './Components/SayMyName';
// import Pessoa from './Components/Pessoa';
// import List from './Components/List';
// import Evento from './Components/Evento';
// import Form from './Components/Form';
// import Condicional from './Components/Condicional';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/empresa' element={<Empresa />}></Route>
        <Route path='/contato' element={<Contato />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
