import { useContext } from 'react';
import myPic from '../../public/static/images/mypic.png';
import ThemeContext from '../context/ThemeContext';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={ styles.home }>
      <div className={ styles.about }>
        <hr />
        <h2>Olá!</h2>
        <h1>Meu nome é Elisa Borba, como vai?</h1>
        <p
          style={ {
            color: theme === 'dark' ? '#fff' : '#8c08ce',
            transition: '1s ease',
          } }
        >
          Sou desenvolvedora full stack, formada também em biomedicina e moro em
          Santa Catarina - Brasil. E minha grande paixão é criar aplicações web.
        </p>
      </div>
      <img src={ myPic } alt="uma foto minha" />
    </section>
  );
}
