import React from 'react'
import ProjectForm from '../Project/ProjectForm'
import styles from './NewProject.css'

const NewProject = () => {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText='Criar Projeto' />
    </div>
  )
}

export default NewProject
