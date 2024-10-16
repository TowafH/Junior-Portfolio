import { Link } from "react-router-dom";

function Header(){
return(
    <div className="header">
        <div className="name-bar">
            <h1>Junior Portfolio</h1>
        </div>
        <div className="nav-bar">
            <Link to='/Home'>Home</Link>
            <Link to='/CFU'>CFUs</Link>
            <Link to='/Lab'>Labs</Link>
            <Link to='/Project'>Projects</Link>
            <Link to='/About'>About</Link>
            <Link to='/EarSketch'>Earsketch</Link>
        </div>
    </div>
    )
}

export default Header