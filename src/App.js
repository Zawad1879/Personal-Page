import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import MobileNavbar from './components/mobile-navbar';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import EditBlog from './pages/EditBlog';
import Dataviz from './pages/Dataviz';
import Login from './pages/login';
import { UserContext } from './context/UserContext';
import { motion, AnimatePresence } from "framer-motion";
import { Switch, Route, Redirect, useLocation, useHistory } from "react-router-dom";
import DhakaData from './data.json'

function App() {
  const location = useLocation();
  const [token, setToken] = useState();
  const [user, setUser] = useState('Default user');
  const [data,setData]=useState([]);

  return (
      <motion.div           
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}  
        className="App relative min-h-screen md:flex">
          <MobileNavbar />
          <Navbar />
          
          <div class="flex-1 p-10 mt-32">
            <AnimatePresence exitBeforeEnter>
              <motion.div exit={{ opacity: 0 }}>
                <UserContext.Provider value={[user, setUser]}>
                  <Switch location={location} key={location.pathname}>
                    <Route path="/about"><About/></Route>
                    <Route path="/skills"> <Skills /> </Route>
                    <Route path="/experience"> <Experience /> </Route>
                    <Route path="/projects"> <Projects /> </Route>
                    <Route path="/blog"> <Blog /> </Route>
                    <Route path="/login"> <Login /> </Route>
                    <Route path="/dataviz"> <Dataviz data={DhakaData}/> </Route>
                    { user != 'Default user' ? 
                    <Route path="/edit-blog"> <EditBlog /></Route> 
                    : <Redirect to="/about" /> 
                    }
                    <Route path="/"> <Redirect to="/about" /> </Route>
                  </Switch>
                </UserContext.Provider>
              </motion.div> 
            </ AnimatePresence>
          </div>

      </motion.div>
  );
}

export default App;
