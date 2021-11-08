import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="text-left p-10 md:mt-32">
                <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-blue-900">About</h1>
                <p ><span className="text-red-500"><strong>Full stack software engineer</strong></span> with <span className="text-red-500"><strong>3 years of experience</strong></span>. <br/><br />
                
                I have maintained and developed multiple projects from scratch, being involved in the back-end and front-end codebases. <br/><br />

                My specialities include:
                <ul>
                    <li><strong>Programming languages:</strong> Python , PHP, Javascript, Java, Scala</li>
                    <li><strong>Web frameworks:</strong> Laravel, Flask, Spring, Express, React</li>
                    <li><strong>DevOps:</strong> Git, Docker, AWS</li>
                </ul>
                and other libraries and technologies related to them.<br/><br/>
                
                </p>
                
            </div>
        </motion.div>
    );
}