import { Link } from "react-router-dom" 

export default function Navbar(){
    return(
        <>
            <ul>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
        </>
    )
}