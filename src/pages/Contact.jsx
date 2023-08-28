import { mdiFacebook, mdiGithub, mdiGmail, mdiLinkedin } from '@mdi/js';
import Icon from '@mdi/react';

<Icon path={mdiGmail} size={1} />;

const Contact = () => {
  return (
    <section>
      <h2>Contact Me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        itaque?
      </p>
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
