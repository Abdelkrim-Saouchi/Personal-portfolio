import img3 from '../assets/abdelkrim-saouchi.github.io_Battleship.png';
import img4 from '../assets/abdelkrim-saouchi.github.io_Shopping-Cart.png';
import img1 from '../assets/abdelkrim-saouchi.github.io_Tic-Tac-Toe_.png';
import img2 from '../assets/abdelkrim-saouchi.github.io_Todo-list-Project_.png';
import img5 from '../assets/rest-countries-api2023.netlify.app.png';
import img6 from '../assets/where-is-waldo-22df1.web.app_.png';

const data = [
  {
    id: 1,
    src: img1,
    alt: 'Tic tac toe game screenshot',
    title: 'Tic Tac Toe game',
    tags: ['HTML', 'CSS', 'JS'],
    desc: 'By building this game, I was trying to learn revealing module pattern of ES5. It was taught and challenging!',
    githubRepo: 'https://github.com/Abdelkrim-Saouchi/Tic-Tac-Toe',
    liveLink: 'https://abdelkrim-saouchi.github.io/Tic-Tac-Toe/',
  },
  {
    id: 2,
    src: img2,
    alt: 'Todo list app screenshot',
    title: 'Todo list app',
    tags: [
      'HTML',
      'CSS',
      'JS',
      'Webpack',
      'Firebase',
      'LocalStorage',
      'Desktop only',
    ],
    desc: 'I build this app only with vanilla Javascript. I learned how to use webpack to make modular js. At first I used LocalStorage as database then I switched to firestore of firebase.',
    githubRepo: 'https://github.com/Abdelkrim-Saouchi/Todo-list-Project',
    liveLink: 'https://abdelkrim-saouchi.github.io/Todo-list-Project/',
  },
  {
    id: 3,
    src: img3,
    alt: 'battleship game screenshot',
    title: 'Battleship Game',
    tags: ['HTML', 'CSS', 'JS', 'Jest'],
    desc: 'Battleship is the project that made me explore vanilla Javascript modular programming with the help of unit testing using the most popular library Jest!',
    githubRepo: 'https://github.com/Abdelkrim-Saouchi/Battleship',
    liveLink: 'https://abdelkrim-saouchi.github.io/Battleship/',
  },
  {
    id: 4,
    src: img4,
    alt: 'Shopping site Screenshot',
    title: 'Shopping site FutureStore',
    tags: ['React', 'React router', 'Testing Library', 'CSS modules'],
    desc: 'In this project, I learnt how to using different complex technologies. I used the old approach of react routing and the new one. Check the commit history! React Testing library was the most challenging but I made it!',
    githubRepo: 'https://github.com/Abdelkrim-Saouchi/Shopping-Cart',
    liveLink: 'https://abdelkrim-saouchi.github.io/Shopping-Cart/',
  },

  {
    id: 5,
    src: img5,
    alt: 'rest countries site screenshot',
    title: 'Rest countries api',
    tags: ['React', 'React router', 'Sass'],
    desc: 'For this frontendMentor challenge, the main task was to make my solution close as possible to the design in the provided images. I enjoyed also learning the main concepts of sass.',
    githubRepo: 'https://github.com/Abdelkrim-Saouchi/rest-countries-api',
    liveLink: 'https://rest-countries-api2023.netlify.app/',
  },
  {
    id: 6,
    src: img6,
    alt: 'Where is waldo game screenshot',
    title: 'Where is Waldo game',
    tags: ['React', 'Firebase', 'Styled Components', 'Desktop only'],
    desc: "In this cute game, I tasted some backend using Baas like firebase. I stored the characters' locations and players' scores in the backend to prevent cheating. I also enjoyed learning a new styling tech like Styled components.",
    githubRepo: 'https://github.com/Abdelkrim-Saouchi/Where-is-waldo',
    liveLink: 'https://where-is-waldo-22df1.web.app/',
  },
];

export default data;
