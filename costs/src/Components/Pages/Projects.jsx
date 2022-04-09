import React from 'react';
import Message from '../Layout/Message';
import { useLocation } from 'react-router-dom';
import styles from './Projects.css';
import Container from '../Layout/Container'
import LinkButton from '../Layout/LinkButton'

const Projects = (props) => {
  const location = useLocation();
  let message = '';

  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Criar Projeto' />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass='start'>
        <p>Projetos...</p>
      </Container>
    </div>
  );
};

export default Projects;
