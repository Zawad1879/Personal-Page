import NavItems from './nav-items';
import { motion, AnimatePresence } from "framer-motion";

import {useState} from 'react';

export default function MobileNavbar() {
    const [show, setShow] = useState(false);
    return (
        <div>
        <div class="bg-blue-900 text-blue-100 flex justify-between md:hidden">
            <a href="#" class="block p-4 text-white font-bold">Niamat Zawad</a>
        
            <button class="p-4 focus:outline-none transition duration-300 focus:bg-blue-800" onClick={() => setShow(!show)}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
            
        {show? 
        <motion.div class="bg-blue-900 p-4" 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}  
        >
            <NavItems />
        </motion.div> 
        : null}
        
        </div>
    );
}