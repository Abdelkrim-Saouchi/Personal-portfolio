import desktopVideo from '../assets/desktop-bg.mp4';
import styles from './Background.module.scss';

const Background = () => {
  return (
    <>
      <div className={styles.overlay}></div>
      <video
        className={styles.bg}
        src={desktopVideo}
        autoPlay
        muted
        loop
      ></video>
    </>
  );
};

export default Background;
