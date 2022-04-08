import React from 'react'
import ProjectForm from '../Project/ProjectForm'
import styles from './NewProject.css'
import {useNavigate} from 'react-router-dom'

const NewProject = () => {

  const history = useNavigate();

  function createPost(project){
    //initialize cost and services
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/project', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        history('/projects', { message: 'Projeto criado com sucesso!' })
      })
    .catch((error) => console.log(error))
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText='Criar Projeto' />
    </div>
  )
}

export default NewProject
