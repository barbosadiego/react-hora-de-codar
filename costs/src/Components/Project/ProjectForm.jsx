import React from 'react';

const ProjectForm = (props) => {
  return (
    <form>
      <div>
        <input type="text" placeholder="Insira o nome do projeto" />
      </div>
      <div>
        <input type="number" placeholder="Insira o orçamento total" />
      </div>
      <div>
        <select name="category_id" id="">
          <option disabled>Selecione uma categoria</option>
        </select>
      </div>
      <div>
        <input type="submit" value='Criar Projeto' />
      </div>
    </form>
  );
};

export default ProjectForm;
