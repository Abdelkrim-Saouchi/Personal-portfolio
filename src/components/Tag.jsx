import PropTypes from 'prop-types';
import styles from './Tag.module.scss';

const Tag = ({ name }) => {
  return <div className={styles.tag}>{name}</div>;
};

Tag.propTypes = {
  name: PropTypes.string,
};

export default Tag;
