import { mdiFacebook, mdiGithub, mdiGmail, mdiLinkedin } from '@mdi/js';
import Icon from '@mdi/react';
import { useRef } from 'react';
import { Email } from '../sendEmail/smtp';
import styles from './Contact.module.scss';

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const sendEmail = (e) => {
    console.log(emailRef.current.value);
    console.log(messageRef.current.value);
    e.preventDefault();
    console.log('run');
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'karimsa1955@outlook.com',
      Password: 'A9FB2E2E8614FC6E967612165C962003F497',
      To: 'krimouv1995@gmail.com',
      From: 'karimsa1955@outlook.com',
      Subject: 'Message from my Portfolio',
      Body: `
        name: ${nameRef.current.value}.
        email: ${emailRef.current.value}.
        ${messageRef.current.value}
      `,
    }).then((message) => alert(message));
  };
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <h2>Contact Me</h2>
        <p>Do not hesitate if you want to contact me and discuss.</p>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Name" ref={nameRef} />
          <input type="email" placeholder="Email" ref={emailRef} />
          <textarea placeholder="Message" ref={messageRef}></textarea>
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
