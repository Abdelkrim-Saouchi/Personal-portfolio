import './App.scss';
import Background from './components/Background';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Background />
      <Hero />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
