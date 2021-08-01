import './App.css';
import Navbar from './components/navbar';
import MobileNavbar from './components/mobile-navbar';
import Header from './components/header';
import PageA from './pages/pageA';
import PageB from './pages/pageB';
import { motion, AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
      <motion.div           
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}  
        className="App relative min-h-screen md:flex">
          <MobileNavbar />
          <Navbar />
          
          <div class="flex-1 p-10">
            <AnimatePresence exitBeforeEnter>
              <motion.div exit={{ opacity: 0 }}>
                <Switch location={location} key={location.pathname}>
                  <Route path="/pageA"><PageA/></Route>
                  <Route path="/pageB"> <PageB /> </Route>
                                  
                </Switch>
              </motion.div> 
            </ AnimatePresence>
          </div>

      </motion.div>
  );
}

export default App;
