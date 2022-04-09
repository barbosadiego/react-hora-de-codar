import React from 'react';
import Message from '../Layout/Message';
import { useLocation } from 'react-router-dom';

const Projects = (props) => {
  const location = useLocation();
  let message = '';

  if (location.state) {
    message = location.state.message;
  }

  return (
    <div>
      <h1>Meus Projetos</h1>
      {message && <Message type="success" msg={message} />}
    </div>
  );
};

export default Projects;
