import * as d3 from 'd3';
import { useRef, useEffect } from 'react';
import BarChart from './BarChart'
import SimpleAnimatedBarChart from './SimpleAnimatedBarChart';

export default function Dataviz({data}) {
    const elementRef = useRef();

    return (
        <div className="text-left p-10 md:mt-32">
            <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-blue-900">Data Visualization</h1>
            {/* <BarChart data={data}/> */}
            <SimpleAnimatedBarChart data={data}/>
            <div ref={elementRef} >
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    );
}