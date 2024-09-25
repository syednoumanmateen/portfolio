import { Link, Element } from 'react-scroll';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { memo } from 'react';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import { useTheme } from './context/Theme';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { FiMoon } from 'react-icons/fi';
import { CiSun } from 'react-icons/ci';
import { useEffect } from 'react';

const App = () => {
  const { theme, themeToggler } = useTheme()

  useEffect(() => { document.documentElement.setAttribute('data-theme', theme) }, [theme])

  return (
    <div id='main'>
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
      <Element name="skill" className="section">
        <Skills />
      </Element>
      <Element name="project" className="section">
        <Projects />
      </Element>
      <Element name="contact" className="section">
        <Contact />
      </Element>

      <div className="toggler fs-4 text-light bg-dark p-2 rounded">
        <FiMoon />
        <div className='rotate' onClick={() => themeToggler()}>{theme === "dark" ? <FaToggleOff /> : <FaToggleOn />} </div>
        <CiSun />
      </div>
    </div>
  );
};

export default memo(App);
