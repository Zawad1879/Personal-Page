import React, { useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Blog() {
    const [data, setData] = React.useState();
    
    useEffect(() => {
        axios.get("/api")
            .then(({ data }) => setData(data.message))
            .catch(error => {});
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
        <div className="text-left p-10 md:mt-32">
            <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-blue-900">Blog</h1>
            <p className="font-serif text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>{ data ? data : "Loading..." }</p>
        </div>
        </motion.div>
    );
}