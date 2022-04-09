import React from 'react';
import Message from '../Layout/Message';
import { useLocation } from 'react-router-dom';
import styles from './Projects.css';
import Container from '../Layout/Container';
import LinkButton from '../Layout/LinkButton';
import ProjectCard from '../Project/ProjectCard';

const Projects = (props) => {
  const [projects, setProjects] = React.useState([]);

  const location = useLocation();
  let message = '';

  if (location.state) {
    message = location.state.message;
  }

  React.useEffect(() => {
    fetch('http://localhost:5000/project', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setProjects(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
            />
          ))}
      </Container>
    </div>
  );
};

export default Projects;
