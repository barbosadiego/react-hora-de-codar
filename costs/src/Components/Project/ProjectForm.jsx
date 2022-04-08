import React, { useEffect } from 'react';
import Input from '../Form/Input';
import Select from '../Form/Select';
import SubmitButton from '../Form/SubmitButton';
import styles from './ProjectForm.css';

const ProjectForm = ({ btnText }) => {
  const [categories, setCategories] = React.useState([]);

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

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçaçento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <div>
        <Select
          name="category-id"
          text="Selecione uma categoria"
          options={categories}
        />
      </div>
      <SubmitButton text={btnText} />
    </form>
  );
};

export default ProjectForm;
