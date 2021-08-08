import * as d3 from 'd3';

export default function Dataviz() {
    d3.select(document.getElementById('myDiv')).style("background-color", "blue");
    return (
        <div id="myDiv" className="text-left">
            <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-blue-900">Data Visualization</h1>
        </div>
    );
}