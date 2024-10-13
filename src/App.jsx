import './App.css'

// Image Imports
import profilePic from './assets/pfp.png'

//Imports
import Header from './components/Header.jsx'

function App() {

return (
  <>
  <div>
    <nav>
      <Header />
    </nav>
    <div>
      <div className='about-container'>
        {/* Container */}
        <div className='about-me'>
          <h1>Who Am I?</h1>
          <img src={profilePic} className='profile-pic' />
          <p>I'm Towaf from Queens, New York. I'm a rising junior at Thomas Edison CTE HS with a passion for Computer Science, where I'm currently learning Python!</p>
        </div>

        <div className='about-me'>
          <h1>Education</h1>
          <img className='profile-pic' />
          <p>Web Development</p>
          <p>Progamming and Prototyping</p>
          <p>SY 2024-2025</p>
          <p>Towaf Hossain</p>
        </div>

      </div>
    </div>
  </div>
  </>
  )
}

export default App
