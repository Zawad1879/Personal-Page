import * as d3 from 'd3';
import { useRef, useEffect } from 'react';
import BarChart from './BarChart'
import SimpleAnimatedBarChart from './SimpleAnimatedBarChart';

export default function Dataviz({data}) {
    const elementRef = useRef();
    // try { 
        // const di = elementRef.current;
        // useEffect(() => {
        //     let data = [100, 200, 300];
        //     let allPs =  d3.select("#myDiv").selectAll("div > h1");
        //     console.log(allPs);
            
        //     let paragraph = d3.select("#myDiv")
        //             .selectAll("p")
        //             .data(data)
        //             .enter()
        //             .text(function (d, i) {
        //                 console.log("d: " + d);
        //                 console.log("i: " + i);
        //                 console.log("this: " + this);

        //                 return d;
        //             });
        // }, [elementRef]);
    // } catch (e) {
    //     console.error('Error in Data viz');
    //     console.error(e);
    // }
    return (
        <div className="text-left">
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