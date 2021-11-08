import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function LandingPage() {
    var bgImage = {
        width: "100%",
        height: "100%",
        backgroundImage: "url(/images/wallpapers/goldengai.jpeg)",
      };

    const el = useRef(null);
    const topTextEl = useRef(null);
    const typed = useRef(null);
    const topTextTyped = useRef(null);
    useEffect(() => {

        const topTextoptions = {
          strings: [
          'Hi! I\'m Niamat Zawad'
        ],
          typeSpeed: 100,
          backSpeed: 120,
          showCursor: false
        };
        
        topTextTyped.current = new Typed(topTextEl.current, topTextoptions);

        const options = {
            strings: [
            'an <i>engineer</i>',
            'a <i>software developer</i>',
            'a <i>bibliophile</i>',
            'a <i>meditator</i>',
            'a <i>traveller</i>',
          ],
          typeSpeed: 180,
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
                    <p className="text-white text-7xl"><span className="text-yellow-400" style={{ whiteSpace: 'pre' }} ref={topTextEl} ></span></p>
                    <p className="text-white text-7xl">I am <span style={{ whiteSpace: 'pre' }} ref={el} /></p>
                </div>
            </div>
    );
}