import React from 'react';

const Saudacao = ({ nome }) => {
  function gerarSaudacao(algumNome) {
    return `Olá ${algumNome}, tudo bem?`;
  }

  return (
    <React.Fragment>
     {nome && <p>{gerarSaudacao(nome)}</p>}
    </React.Fragment>
  );
};

export default Saudacao;
