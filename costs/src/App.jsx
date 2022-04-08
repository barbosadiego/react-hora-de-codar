import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Company from './Components/Pages/Company';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import NewProject from './Components/Pages/NewProject';

import Container from './Components/Layout/Container';

const App = (props) => {
  return (
    <Router>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </ul>
      <Container customClass='min-height'>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/newproject" element={<NewProject />}></Route>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
};

export default App;
