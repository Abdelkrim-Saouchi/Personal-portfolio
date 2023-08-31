import Card from '../components/Card';
import { getData } from '../data/getData';
import styles from './Projects.module.scss';

const Projects = () => {
  const projects = getData();

  return (
    <section id="projects" className={styles.projects}>
      <h2>My projects:</h2>
      <div className={styles.projectsList}>
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
