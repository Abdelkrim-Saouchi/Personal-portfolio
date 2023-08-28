import Card from '../components/Card';
import { getData } from '../data/getData';

const Projects = () => {
  const projects = getData();

  return (
    <section>
      <h2>My projects:</h2>
      <div>
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
