import styles from './About.module.scss';

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae in
        sequi officiis quidem vitae quam minima voluptatibus voluptate hic
        dolorem, reprehenderit eveniet fuga recusandae reiciendis ipsam, a ad
        itaque beatae. Ab quo aut non, quis cupiditate accusantium, quas eius
        ullam obcaecati temporibus, earum labore corporis omnis velit commodi?
        Dolore, fugiat.
      </p>
      <div className={styles.skills}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
      </div>
    </section>
  );
};

export default About;
