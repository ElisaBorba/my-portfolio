import { Link } from 'react-scroll';
import { useContext } from 'react';
import { Col, Row } from 'antd';
import CheckTheme from './CheckTheme';
import styles from '../styles/Header.module.css';
import ThemeContext from '../context/ThemeContext';

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      style={ {
        backgroundColor:
          theme === 'dark'
            ? 'rgba(50, 50, 50, 0.9)'
            : 'rgba(255, 255, 255, 0.9)',
      } }
      className="transitionAll"
    >
      <Row className={ styles.links } gutter={ [8, 0] }>
        <Col>
          <Link
            style={ {
              color: theme === 'dark' ? '#fff' : '#000',
              transition: '1s ease',
            } }
            spy
            smooth
            offset={ 20 }
            duration={ 500 }
            to="home"
          >
            HOME
          </Link>
        </Col>
        <Col>
          <Link
            style={ {
              color: theme === 'dark' ? '#fff' : '#000',
              transition: '1s ease',
            } }
            spy
            smooth
            offset={ 20 }
            duration={ 500 }
            to="projectsSection"
          >
            PROJETOS
          </Link>
        </Col>
        <Col>
          <Link
            className="transitionAll"
            style={ {
              color: theme === 'dark' ? '#fff' : '#000',
              transition: '1s ease',
            } }
            spy
            smooth
            offset={ 20 }
            duration={ 500 }
            to="stacksSection"
          >
            STACKS
          </Link>
        </Col>
        <Col>
          <Link
            style={ {
              color: theme === 'dark' ? '#fff' : '#000',
              transition: '1s ease',
            } }
            spy
            smooth
            offset={ 20 }
            duration={ 500 }
            to="contactSection"
          >
            CONTATO
          </Link>
        </Col>
        <Col
          sm={ { push: '1' } }
          lg={ { push: '9' } }
          xl={ { push: '10' } }
          xxl={ { push: '17' } }
        >
          <CheckTheme />
        </Col>
      </Row>
    </header>
  );
}
