import React from 'react';
import Message from '../Layout/Message';
import { useLocation } from 'react-router-dom';
import styles from './Projects.css';
import Container from '../Layout/Container';
import Loading from '../Layout/Loading';
import LinkButton from '../Layout/LinkButton';
import ProjectCard from '../Project/ProjectCard';

const Projects = (props) => {
  const [projects, setProjects] = React.useState([]);
  const [removeLoading, setRemoveLoading] = React.useState(false);
  const [projectMessage, setProjectMessage] = React.useState('');

  const location = useLocation();
  let message = '';

  if (location.state) {
    message = location.state.message;
  }

  React.useEffect(() => {
    setTimeout(() => {
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
          setRemoveLoading(true);
        })
        .catch((error) => console.log(error));
    }, 300);
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/project/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage('Projeto removido com sucesso!')
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados</p>
        )}
      </Container>
    </div>
  );
};

export default Projects;
