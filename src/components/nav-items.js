import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function NavItems() {
    return (
        <ul className="list-none space-y-10 text-gray-400">
            <li className="transition duration-300 hover:text-white"><Link to="/About">About</Link></li>
            <li className="transition duration-300 hover:text-white"><Link to="/Skills">Skills</Link></li>
            <li className="transition duration-300 hover:text-white"><Link to="/Experience">Experience</Link></li>
            <li className="transition duration-300 hover:text-white"><Link to="/Projects">Projects</Link></li>
        </ul>
);
}
