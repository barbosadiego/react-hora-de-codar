import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Company from './Components/Pages/Company';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import NewProject from './Components/Pages/NewProject';
import Projects from './Components/Pages/Projects';
import Project from './Components/Pages/Project';

import Container from './Components/Layout/Container';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';

const App = (props) => {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/newproject" element={<NewProject />}></Route>
            <Route path="/project/:id" element={<Project />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
