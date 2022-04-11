import React from 'react';
import styles from '../Project/ProjectForm.css';
import Input from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';

const ServiceForm = ({ handleSubmit, textBtn, projectData }) => {
  const [service, setService] = React.useState({});

  function submit(event) {
    event.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(event) {
    setService({ ...service, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do Serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do Serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do Serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />
      <SubmitButton text={textBtn} />
    </form>
  );
};

export default ServiceForm;
