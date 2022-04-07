import React from 'react';
import PropTypes from 'prop-types'

const Item = ({ marca, ano_lancamento }) => {
  return (
    <React.Fragment>
      <li>
        {marca} - {ano_lancamento}
      </li>
    </React.Fragment>
  );
};

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number
}

Item.defaultProps ={
  marca: 'faltou a marca',
  ano_lancamento: 0,
}

export default Item;
