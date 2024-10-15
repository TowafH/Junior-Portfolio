import './App.css'
import { useEffect } from 'react'

//Imports
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import CFU from './components/CFU.jsx'

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
        </Routes>
    </nav>
  </div>
  </>
  )
}

export default App