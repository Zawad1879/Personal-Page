import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function NavItems() {
    return (
        <ul className="list-none space-y-10 text-gray-400">
            <li className="transition duration-300 hover:text-white"><Link to="/about"><b>About</b></Link></li>
            <li className="transition duration-300 hover:text-white"><Link to="/skills"><b>Skills</b></Link></li>
            <li className="transition duration-300 hover:text-white"><Link to="/experience"><b>Experience</b></Link></li>
            <li className="transition duration-300 hover:text-white"><Link to="/projects"><b>Projects</b></Link></li>
            <li className="transition duration-300 hover:text-white"><Link to="/blog"><b>Blog</b></Link></li>
            <li className="transition duration-300 hover:text-white"><Link to="/dataviz"><b>Data Visualizations</b></Link></li>
        </ul>
);
}
