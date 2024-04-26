import { useContext } from 'react';
import instagram from '../../public/static/images/instagram.svg';
import github from '../../public/static/images/github.svg';
import linkedin from '../../public/static/images/linkedin.svg';
import baloon from '../../public/static/images/baloon.svg';
import code from '../../public/static/images/code.svg';
import styles from '../styles/Contact.module.css';
import ThemeContext from '../context/ThemeContext';

export default function Contato() {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="contactSection" className={ styles.container }>
      <div className={ styles.contact }>
        <h1>CONTATO</h1>
        <p>
          Envie-me qualquer mensagem, que te responderei assim que possível.
          <img src={ baloon } alt={ baloon } />
        </p>
        <a href="mailto:elisaborbaa@gmail.com" className={ styles.emailLink }>
          Enviar e-mail
        </a>
      </div>

      <div
        className={ `${styles.icons} transitionAll` }
        style={ { backgroundColor: theme === 'dark' ? '#333' : '#ad83c2' } }
      >
        <img className={ styles.codeIcon } src={ code } alt={ code } />
        <div className={ styles.links }>
          <a
            href="https://github.com/ElisaBorba"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ github } alt={ github } />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/elisa-borba-ferreira1000/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ linkedin } alt={ linkedin } />
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/elisaborbaa/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ instagram } alt={ instagram } />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
