import React, { useEffect, useState } from 'react';
import Input from '../Form/Input';
import Select from '../Form/Select';
import SubmitButton from '../Form/SubmitButton';
import styles from './ProjectForm.css';

const ProjectForm = ({ handleSubmit, btnText, projectData }) => {
  const [categories, setCategories] = React.useState([]);
  const [project, setProject] = React.useState(projectData || {});

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const submit = (event) => {
    event.preventDefault();
    // console.log(project);
    handleSubmit(project);
  };

  function handleChange(event) {
    setProject({ ...project, [event.target.name]: event.target.value });
  }

  function handleCategory(event) {
    setProject({
      ...project,
      category: {
        id: event.target.value,
        name: event.target.options[event.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <Input
        type="number"
        text="Orçaçento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />
      <div>
        <Select
          name="category-id"
          text="Selecione uma categoria"
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : ''}
        />
      </div>
      <SubmitButton text={btnText} />
    </form>
  );
};

export default ProjectForm;
