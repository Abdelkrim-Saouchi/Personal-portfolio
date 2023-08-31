import { mdiFacebook, mdiGithub, mdiGmail, mdiLinkedin } from '@mdi/js';
import Icon from '@mdi/react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Do not hesitate if you want to contact me and discuss.</p>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" id="" cols="30" rows="10"></textarea>
        <button type="submit">Submit</button>
      </form>
      <div>
        <Icon path={mdiGmail} size={1} />
        <Icon path={mdiGithub} size={1} />
        <Icon path={mdiFacebook} size={1} />
        <Icon path={mdiLinkedin} size={1} />
      </div>
    </section>
  );
};

export default Contact;
