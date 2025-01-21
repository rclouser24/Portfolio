import { Link } from "react-router-dom" 

export default function Navbar(){
    return(
        <>
            <div className="h-24 bg-gray-50 flex items-center justify-center">
                <h2 className="font-bold text-xl">Ryan Clouser</h2>
                <div>
                    <ul className="flex flex-wrap ml-12 align-middle text-gray-800">
                        <li className="mr-4 hover:bg-blue-400 hover:text-lg hover:text-white transition-all duration-300 p-2 rounded">
                            <Link to='/'>About</Link>
                        </li>
                        <li className="mr-4  hover:bg-blue-400 hover:text-lg hover:text-white transition-all duration-300 p-2 rounded">
                            <Link to='/portfolio'>Portfolio</Link>
                        </li>
                        <li className="mr-4  hover:bg-blue-400 hover:text-lg hover:text-white transition-all duration-300 p-2 rounded">
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li className="mr-4  hover:bg-blue-400 hover:text-lg hover:text-white transition-all duration-300 p-2 rounded">
                            <Link to='/resume'>Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}