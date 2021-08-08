import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function NavItems() {
    return (
        <ul className="list-none space-y-10 text-gray-400">
            <li className="transition duration-300 hover:text-white"><Link to="/about">About</Link></li>
            <li className="transition duration-300 hover:text-white"><Link to="/skills">Skills</Link></li>
            <li className="transition duration-300 hover:text-white"><Link to="/experience">Experience</Link></li>
            <li className="transition duration-300 hover:text-white"><Link to="/projects">Projects</Link></li>
            <li className="transition duration-300 hover:text-white"><Link to="/blog">Blog</Link></li>
            <li className="transition duration-300 hover:text-white"><Link to="/dataviz">Data Visualizations</Link></li>
        </ul>
);
}
