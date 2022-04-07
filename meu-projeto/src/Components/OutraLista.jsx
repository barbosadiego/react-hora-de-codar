import React from 'react';

const OutraLista = ({ itens }) => {
  return (
    <React.Fragment>
      <h3>Lista de coisas boas:</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Não há itens na lista</p>
      )}
    </React.Fragment>
  );
};

export default OutraLista;
