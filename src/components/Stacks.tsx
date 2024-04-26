import styles from '../styles/Stacks.module.css';

export default function Stacks() {
  const icons = [
    'git',
    'js',
    'ts',
    'html',
    'css',
    'react',
    'jest',
    'mysql',
    'nodejs',
    'docker',
    'express',
    'python',
  ];

  return (
    <section id="stacksSection" className={ styles.stacks }>
      <h1>Principais ferramentas e tecnologias que trabalho</h1>
      <hr />
      <div className={ styles.icons }>
        {icons.map((icon, index) => (
          <img
            key={ index }
            src={ `https://skillicons.dev/icons?i=${icon}` }
            alt={ icon }
          />
        ))}
      </div>
    </section>
  );
}
