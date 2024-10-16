import './App.css'
import { useEffect } from 'react'

//Imports
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import CFU from './components/CFU.jsx'
import Lab from './components/Lab.jsx'
import Project from './components/Project.jsx'
import About from './components/About.jsx'
import EarSketch from './components/EarSketch.jsx'

// NavBar
import { Route, Routes, useNavigate } from 'react-router-dom';

function RedirectToHome() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/Home');
  }, [navigate]);

  return null;
}

function App() {

return (
  <>
  <div>
    <nav>
      <Header />
      <Routes>
        <Route path="/" element={<RedirectToHome />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/CFU' element={<CFU />} />
          <Route path='/Lab' element={<Lab />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/About' element={<About />} />
          <Route path='/EarSketch' element={<EarSketch />} />
        </Routes>
    </nav>
  </div>
  </>
  )
}

export default App