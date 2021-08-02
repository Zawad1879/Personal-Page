import './App.css';
import Navbar from './components/navbar';
import MobileNavbar from './components/mobile-navbar';
import Header from './components/header';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import { motion, AnimatePresence } from "framer-motion";
import { Switch, Route, Redirect, useLocation, useHistory } from "react-router-dom";

function App() {
  const location = useLocation();

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
                <Switch location={location} key={location.pathname}>
                  <Route path="/about"><About/></Route>
                  <Route path="/skills"> <Skills /> </Route>
                  <Route path="/experience"> <Experience /> </Route>
                  <Route path="/projects"> <Projects /> </Route>
                  <Route path="/blog"> <Blog /> </Route>
                  <Route path="/"> <Redirect to="/about" /> </Route>
                </Switch>
              </motion.div> 
            </ AnimatePresence>
          </div>

      </motion.div>
  );
}

export default App;
