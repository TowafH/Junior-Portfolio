import resume1 from '../assets/resume1.jpg'
import resume2 from '../assets/resume2.jpg'

function About(){
    return(
        <>
        <div className='resumeContainer'>
            <img className="resume" src={resume1}></img>
            <img className="resume" src={resume2}></img>
        </div>
        </>
    )
}

export default About