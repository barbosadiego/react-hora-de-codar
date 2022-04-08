import React from 'react';
import styles from './Footer.css';
import { FaFacebook, FaInstagram, FaLink, FaLinkedin } from 'react-icons/fa';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2022
      </p>
    </footer>
  );
};

export default Footer;
