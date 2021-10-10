import { motion } from 'framer-motion';

export default function LandingPage() {
    let statement = "I am a ";
    let role = "";
    var bgImage = {
        width: "100%",
        height: "100%",
        backgroundImage: "url(/images/wallpapers/tokyo.jpeg)",
      };
      const arr = ["I am a software developer", "I am "]
      
    return (
                
            <div className="md:bg-cover flex justify-center items-center md:text-8xl sm:text-xl" style={ bgImage }>
                <div>
                    <p className="text-white">Hi</p>
                </div>
            </div>
    );
}