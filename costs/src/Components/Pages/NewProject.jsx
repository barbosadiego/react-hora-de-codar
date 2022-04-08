import React from 'react'
import ProjectForm from '../Project/ProjectForm'
import styles from './NewProject.css'

const NewProject = (props) => {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm />
    </div>
  )
}

export default NewProject
