import React from 'react';
import styles from './Project.css';
import { useParams } from 'react-router-dom';
import Loading from '../Layout/Loading';
import Container from '../Layout/Container';
import ProjectForm from '../Project/ProjectForm';
import Message from '../Layout/Message';

const Project = (props) => {
  const { id } = useParams();
  const [project, setProject] = React.useState([]);
  const [showProjectForm, setShowProjectForm] = React.useState(false);
  const [showServiceForm, setShowServiceForm] = React.useState(false);
  const [message, setMessage] = React.useState();
  const [type, setType] = React.useState();

  React.useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/project/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => setProject(data))
        .catch((error) => console.log(error));
    }, 300);
  }, [id]);

  function editPost(project) {
    setMessage('')
    if (project.budget < project.cost) {
      setMessage('O orçamento não pode ser menor rque o custo do projeto!');
      setType('error');
      return false
    }

    fetch(`http://localhost:5000/project/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMessage('Projeto atualizado!');
        setType('success');
      })
      .catch((error) => console.log(error));
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  return (
    <React.Fragment>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento:</span> R$ {project.budget}
                  </p>
                  <p>
                    <span>Total utilizado:</span> R$ {project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className={styles.service_form_container}>
              <h2>Adidione um serviço:</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
              </button>
              <div className={styles.project_form}>
                {showServiceForm && <div>formulário do serviço</div>}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container>
              <p>Itens de Serviços</p>
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
};

export default Project;
