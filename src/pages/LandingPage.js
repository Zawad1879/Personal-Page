import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function LandingPage() {
    var bgImage = {
        width: "100%",
        height: "100%",
        backgroundImage: "url(/images/wallpapers/goldengai.jpeg)",
      };

    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
            'an <i>engineer</i>',
            'a <i>software developer</i>',
            'a <i>bibliophile</i>',
            'a <i>meditator</i>',
            'a <i>traveller</i>',
          ],
          typeSpeed: 130,
          backSpeed: 120,
          loop: true
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
          
      }, []);

    return (
                
            <div className="md:bg-cover flex justify-center items-center md:text-8xl sm:text-xl" style={ bgImage }>
                <div>
                    <p className="text-white text-7xl">Hello I'm <span className="text-yellow-400" >Niamat Zawad</span></p>
                    <p className="text-white text-7xl">I am <span style={{ whiteSpace: 'pre' }} ref={el} /></p>
                </div>
            </div>
    );
}