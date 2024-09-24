import { Link, Element } from 'react-scroll';
import './App.css';
import Home from './Home';
import About from './pages/About';
import { memo } from 'react';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

const App = () => {

  return (
    <div>
      <nav className='nav'>
        <ul>
          <li><Link activeClass='active' to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link activeClass='active' to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link activeClass='active' to="project" smooth={true} duration={500}>Project</Link></li>
          <li><Link activeClass='active' to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>

      <Element name="home" className="section ">
        <Home />
      </Element>
      <Element name="about" className="section">
        <About />
      </Element>
      <Element name="project" className="section">
        <Skills/>
      </Element>
      <Element name="project" className="section">
        <Projects/>
      </Element>
      <Element name="contact" className="section">
        <Contact />
      </Element>
    </div>
  );
};

export default memo(App);
