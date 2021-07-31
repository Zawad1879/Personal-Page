import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function NavItems() {
    return (
        <ul class="list-none space-y-10 text-gray-400">
            <li class="transition duration-300 hover:text-white"><Link to="/pageA">About</Link></li>
            <li class="transition duration-300 hover:text-white"><Link to="/pageB">Skills</Link></li>
            <li class="transition duration-300 hover:text-white">Experience</li>
            <li class="transition duration-300 hover:text-white">Projects</li>
        </ul>
);
}
