import React from 'react';
import Input from '../Form/Input';
import Select from '../Form/Select';
import SubmitButton from '../Form/SubmitButton';
import styles from './ProjectForm.css';

const ProjectForm = ({btnText}) => {
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
        <Select name='category-id' text='Selecione uma categoria' />
      </div>
      <SubmitButton text={btnText} />
    </form>
  );
};

export default ProjectForm;
