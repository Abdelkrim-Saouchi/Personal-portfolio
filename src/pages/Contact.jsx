import emailjs from '@emailjs/browser';
import { mdiFacebook, mdiGithub, mdiGmail, mdiLinkedin } from '@mdi/js';
import Icon from '@mdi/react';
import { useRef, useState } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  const formRef = useRef(null);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'Contact_service',
        'contact_form',
        formRef.current,
        '2hP8b3vhlUWOxD69e'
      )
      .then((_) => {
        setShowError(false);
        setShowSuccess(true);
      })
      .catch((_) => {
        setShowError(true);
        setShowSuccess(false);
      });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <h2>Contact Me</h2>
        <p>Do not hesitate if you want to contact me and discuss.</p>

        {showError && <span data-error>Something wrong happened! Retry.</span>}
        {showSuccess && (
          <span data-success>Received! I'll reply as soon as possible.</span>
        )}

        <form onSubmit={sendEmail} ref={formRef}>
          <input type="text" placeholder="Name" name="user_name" required />
          <input type="email" placeholder="Email" name="user_email" required />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
        <div>
          <a href="#">
            <Icon path={mdiGmail} size={1.5} />
          </a>
          <a href="#">
            <Icon path={mdiGithub} size={1.5} />
          </a>
          <a href="#">
            <Icon path={mdiFacebook} size={1.5} />
          </a>
          <a href="#">
            <Icon path={mdiLinkedin} size={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
