import { mdiGithub, mdiLink } from '@mdi/js';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import Tag from './Tag';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.src} alt={props.alt} />
      <h3>{props.title}</h3>
      <div className={styles.tags}>
        {props.tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
      <p>{props.desc}</p>
      <div className={styles.links}>
        <a href={props.liveLink} target="_blank" rel="noreferrer">
          <Icon path={mdiLink} size={1} />
        </a>
        <a href={props.githubRepo} target="_blank" rel="noreferrer">
          <Icon path={mdiGithub} size={1} />
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  desc: PropTypes.string,
  liveLink: PropTypes.string,
  githubRepo: PropTypes.string,
};

export default Card;
