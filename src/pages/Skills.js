import { motion } from 'framer-motion';

export default function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
        <div className="-m-4 mt-4 flex flex-wrap justify-center -py-2">
            
            <div style={{ width: "250px" }} className="inline-block max-w-xs rounded overflow-hidden shadow-lg m-4">
                <img style={{width: "100px", height:"100px" }}  class="object-scale-down m-auto" src="/images/icons/python_icon.png" alt="Python"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2" style={{ color: "rgb(52,121,180)" }}>Python</div>
                    <p class="text-gray-700 text-base">
                        Flask<br/>
                        Django<br/>
                        Sckit-Learn<br/>
                        Numpy<br/>
                    </p>
                </div>
            </div>

            <div style={{ width: "250px" }} className="inline-block max-w-xs rounded overflow-hidden shadow-lg m-4">
                <img style={{width: "100px", height:"100px"}}  className="object-scale-down m-auto" src="/images/icons/php_icon.png" alt="PHP"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 " style={{ color: "rgb(137,147,190)" }}>PHP</div>
                    <p class="text-gray-700 text-base">
                        Laravel<br/>
                        CakePHP<br/>
                        API<br/>
                    </p>
                </div>
            </div>

            <div style={{ width: "250px" }} className="inline-block max-w-xs rounded overflow-hidden shadow-lg m-4">
                <img style={{width: "100px", height:"100px" }}  className="object-scale-down m-auto" src="/images/icons/java_icon.png" alt="Java"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 " style={{ color: "rgb(231,111,0)" }}>Java</div>
                    <p class="text-gray-700 text-base">
                        Spring<br/>
                        API<br/>
                    </p>
                </div>
            </div>

            <div style={{ width: "250px" }} className="m-4 inline-block max-w-xs rounded overflow-hidden shadow-lg">
                <img style={{width: "100px", height:"100px" }}  className="object-scale-down m-auto" src="/images/icons/js_icon.png" alt="Javascript"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 " style={{ color: "rgb(241,193,49)" }}>Javascript</div>
                    <p class="text-gray-700 text-base">
                        Node<br/>
                        React<br/>
                        Vue<br/>
                    </p>
                </div>
            </div>

            <div style={{ width: "250px" }} className="m-4 inline-block max-w-xs rounded overflow-hidden shadow-lg">
                <img style={{width: "100px", height:"100px" }}  className="object-scale-down m-auto" src="/images/icons/devops_icon.png" alt="Devops"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 " style={{ color: "rgb(187,187,187)" }}>DevOps</div>
                    <p class="text-gray-700 text-base">
                        AWS<br/>
                        Docker<br/>
                        Git<br/>
                    </p>
                </div>
            </div>

        </div>
        </motion.div>
    );
}