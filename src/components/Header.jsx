import { Link } from "react-router-dom";
import taehs from '../assets/taehs.png'

function Header(){
return(
    <div className="header">
        <div className="name-bar">
        <a target="_blank" href="https://www.taehs.org/" rel='noreferrer'><img src={taehs} className='school-logo' /></a>
            <h1>Junior Portfolio</h1>
        </div>
        <div className="nav-bar">
            <Link to='/Home'>Home</Link>
            <Link to='/CFU'>CFUs</Link>
            <Link to='/Lab'>Labs</Link>
            <Link to='/Project'>Projects</Link>
            <Link to='/InfyApp'>InfyApp</Link>
            <Link to='/Competition'>Competitions</Link>
            <Link to='/Certification'>Certification</Link>
            <Link to='/About'>About</Link>
        </div>
    </div>
    )
}

export default Header