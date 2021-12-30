import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import MobileNavbar from './components/mobile-navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Skills from './pages/Skills';
import Timeline from './pages/Timeline';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import EditBlog from './pages/EditBlog';
import Dataviz from './pages/Dataviz';
import Login from './pages/Login';
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
        transition={{ duration: 0.5 }}  
        className="App relative min-h-screen md:flex">
          <MobileNavbar />
          <Navbar />
          <div class="flex-1 bg-gray-200">
            {/* <AnimatePresence exitBeforeEnter>
              <motion.div exit={{ opacity: 0 }}> */}
                <UserContext.Provider value={[user, setUser]}>
                <AnimatePresence exitBeforeEnter initial={false}>
                  <Switch location={location} key={location.pathname}>
                    <Route path="/welcome"><LandingPage/></Route>
                    <Route path="/about"><About/></Route>
                    <Route path="/skills"> <Skills /> </Route>
                    <Route path="/timeline"> <Timeline /> </Route>
                    <Route path="/projects"> <Projects /> </Route>
                    <Route path="/blog"> <Blog /> </Route>
                    <Route path="/login"> <Login /> </Route>
                    <Route path="/dataviz"> <Dataviz data={DhakaData}/> </Route>
                    <Route path="/"> <Redirect to="/welcome" /> </Route>
                    { user != 'Default user' ? 
                    <Route path="/edit-blog"> <EditBlog /></Route> 
                    : <Redirect to="/about" /> 
                    }
                  </Switch>
                  </AnimatePresence>
                </UserContext.Provider>
              {/* </motion.div> 
            </ AnimatePresence> */}
          </div>

      </motion.div>
  );
}

export default App;
