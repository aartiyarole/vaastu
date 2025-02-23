import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Contact from './components/Contact';
import About from './components/About';
import OurServices from './components/OurServices';
import ProjectDrawings from './components/ProjectDrawings';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Home from './components/Home';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-services" element={<OurServices />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/project-drawings" element={<ProjectDrawings />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
