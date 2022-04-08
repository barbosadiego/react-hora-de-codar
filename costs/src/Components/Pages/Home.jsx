import React from 'react';
import styles from './Home.css';
import savings from '../../img/savings.svg';
import LinkButton from '../Layout/LinkButton';

const Home = (props) => {
  return (
    <section className={styles.home_container}>
      <h1>
        Ben vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo</p>
      <LinkButton to='/newproject' text='Criar Projeto' />
      <img src={savings} alt="Costs" />
    </section>
  );
};

export default Home;
