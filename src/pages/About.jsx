import styles from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <h2>About Me</h2>

        <p>
          Welcome to my portfolio! I'm not your usual pharmacist; I'm also a
          programming enthusiast. I'm on a mission to tackle problems using both
          my pharmacy know-how and coding skills. Learning is my constant
          companion, as I strive to level up and enhance my abilities. Join me
          as I merge my pharmacy background with the world of programming to
          craft innovative solutions that truly make an impact!
        </p>
        <div className={styles.skills}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        </div>
      </div>
    </section>
  );
};

export default About;
