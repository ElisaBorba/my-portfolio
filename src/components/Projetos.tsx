import { useContext } from 'react';
import { Carousel, Card } from 'antd';
import ThemeContext from '../context/ThemeContext';
import { LeftArrow } from './LeftArrow';
import { RightArrow } from './RightArrow';
import projectsJson from '../projects.json'

type ProjectsType = {
  id: number;
  name: string;
  url: string;
  description: string;
}

export default function Projetos() {
  const { theme } = useContext(ThemeContext);
  const projects: ProjectsType[] = projectsJson;

  return (
    <section
      id="projectsSection"
      className="projects transitionAll"
      style={ { backgroundColor: theme === 'dark' ? '#333' : '#CFE9EE' } }
    >
      <div>
        <h3>Alguns de meus projetos.</h3>
        <h3>
          E para ver mais acesse meu
          {' '}
          <a
            href="https://github.com/ElisaBorba"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </h3>
        <hr />
      </div>

        <Carousel
          className="carousel"
          dots={ false }
          responsive={ [
            { breakpoint: 360, settings: { slidesToShow: 1 } },
            { breakpoint: 767, settings: { slidesToShow: 1 } },
            { breakpoint: 1200, settings: { slidesToShow: 2 } },
            { breakpoint: 1600, settings: { slidesToShow: 3 } },
            { breakpoint: 1921, settings: { slidesToShow: 4 } },
          ] }
          prevArrow={ <LeftArrow currentSlide={ 0 } slideCount={ 0 } /> }
          nextArrow={ <RightArrow currentSlide={ 0 } slideCount={ 0 } /> }
          arrows
        >
          {projects.map((project) => (
            <a
              key={ project.id }
              href={ project.url }
              className="cardLink"
              target="_blank"
              aria-label={ `Ver mais sobre o projeto ${project.name}` }
              rel="noreferrer"
            >
              <Card
                hoverable
                className="customCard"
                style={ {
                  backgroundColor: theme === 'dark' ? '#303642' : '#FFF',
                  color: theme === 'dark' ? '#FFF' : '#303642',
                  fontSize: 17,
                  textAlign: 'justify',
                  lineHeight: '1.3',
                  wordSpacing: 1,
                  minHeight: '460px',
                  maxWidth: '550px',
                  width: 'calc(100% - 45px)',
                  border:
                    theme === 'dark'
                      ? '1px solid #303642'
                      : '1px solid #e8e8e8',
                  transition: '1s ease',
                } }
                cover={
                  <img
                    alt={ `${project.name}` }
                    src={`/static/images/${project.name}.png`}
                  />
                }
              >
                { project.description }
              </Card>
            </a>
          ))}
        </Carousel>
    </section>
  );
}
