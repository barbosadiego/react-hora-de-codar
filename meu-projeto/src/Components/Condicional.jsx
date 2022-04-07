import React from 'react';

const Condicional = (props) => {
  const [email, setEmail] = React.useState();
  const [userEmail, setUserEmail] = React.useState();

  function enviarEmail(event) {
    event.preventDefault();
    setUserEmail(email)
  }

  function limparEmail(event){
    event.preventDefault();
    setUserEmail(null)
  }

  return (
    <div>
      <h2>Cadastre seu e-mail</h2>
      <form action="">
        <input
          type="email"
          placeholder="Digite seu e-mail..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={enviarEmail}>Enviar e-mail</button>
        {userEmail && (
          <div>
            <p>O email do usuário é {userEmail}</p>
            <button onClick={limparEmail}>Limpar</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Condicional;
