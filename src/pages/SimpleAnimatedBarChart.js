import { useEffect, useState, useRef } from "react";
import useInterval from "../components/useInterval";
import * as d3 from 'd3';

export default function SimpleAnimatedBarChart(props) {
    const [time, setTime] = useState(0);
    const [d, setD] = useState(0);
    const [demoText, setDemoText] = useState('');
    const chart = useRef(null);
    

    useEffect(() => {
        const svg = d3.select(chart.current);
        const barSize = 48
        const k = 10 // Controls the speed of the animating bars
        const n = 12 // Number of bars we want to show

        let margin = ({top: 16, right: 6, bottom: 6, left: 0})
        let x = d3.scaleLinear([0, 1], [0, 100])
        let y = d3.scaleBand()
            .domain(d3.range(n + 1))
            .rangeRound([margin.top, margin.top + barSize * (n + 1 + 0.1)])
            .padding(0.1)

        let d = [1,2,3,4]

        

        let pairs = new Map(d3.pairs(d, (a, b) => [b, a]));
        console.log(pairs)
        
        initializeSvg(svg);
        let keyframes = getKeyframes(k, n);
        console.log(keyframes);

        let barz = bars(svg, keyframes, n, x, y);
        const transition = svg.transition()
                .duration(2000)
                .ease(d3.easeLinear);
        barz(keyframes[0], transition);
        keyframes[1][1][0].value = 1000;
        console.log(keyframes[0])
        barz(keyframes[1], transition);
        
    }, [time]);

    const bars = (svg, keyframes, n, x, y) => {
        // let color = (() => {
        //     const scale = d3.scaleOrdinal(d3.schemeTableau10);
        //     if (props.data.some(d => d.category !== undefined)) {
        //       const categoryByName = new Map(props.data.map(d => [d.name, d.category]))
        //       scale.domain(Array.from(categoryByName.values()));
        //       return d => scale(categoryByName.get(d.name));
        //     }
        //     return d => scale(d.name);
        //   })();
        let nameframes = d3.groups(keyframes.flatMap(([, data]) => data), d => d.district);
        let prev = new Map(nameframes.flatMap(([, data]) => d3.pairs(data, (a, b) => [b, a])))
        let next = new Map(nameframes.flatMap(([, data]) => d3.pairs(data)))
        
        let bar = svg.append("g")
            .attr("fill-opacity", 0.6)
            .selectAll("rect");
        
        // svg.selectAll("rect").data(props.data.slice(0,n))
        //     .enter().append("rect")
        //     .attr("fill", "orange")
        //     .attr("height", y.bandwidth())
        //     .attr("x", x(0))
        //     .attr("y", d => y((prev.get(d) || d).rank))
        //     .attr("width", d => 100 - x(0));
        
        // return ([date, data], transition) => bar = bar
        //     .data(data.slice(0, n), d => d.name)
        //     .join(
        //     enter => enter.append("rect")
        //         .attr("fill", "orange")
        //         .attr("height", y.bandwidth())
        //         .attr("x", x(0))
        //         .attr("y", d => y((prev.get(d) || d).rank))
        //         .attr("width", d => x((prev.get(d) || d).value) - x(0)),
        //     update => update,
        //     exit => exit.transition(transition).remove()
        //         .attr("y", d => y((next.get(d) || d).rank))
        //         .attr("width", d => x((next.get(d) || d).value) - x(0))
        //     )
        //     .call(bar => bar.transition(transition)
        //     .attr("y", d => y(d.rank))
        //     .attr("width", d => x(d.value) - x(0)));


        const renderBars = ([date, data], transition) => {
            console.log('in render bars');
            console.log(data);
            
            // svg.selectAll("p")
            // .data(props.data.slice(0, 12))
            // .enter()
            // .append("p")
            // .text(function(d) {
            //     return "District is " + d.district;
            // })
            // .exit().remove();
            // bar.data(data.slice(0, n), d => d.district)
            // bar = bar
            // let dNumbers = data.map(d => d.district);
            
            svg.selectAll("rect").data(data)
                .join(
                    enter => enter.append("rect")
                    .attr("fill", 'orange')
                    .attr("height", y.bandwidth())
                    .attr("x", x(0))
                    .attr("y", (d,i) => i * 45)
                    .attr("width", d => d.value),
            update => update
            )
            .call(
                svg => svg.transition(transition)
                            .attr("y", (d,i) => i * 45)
                            .attr("width", d => (d.value))
            );
            
        }
        return renderBars;
    }

    const sendNext = () => {

    }


    const getKeyframes = (k, n) => {
        let dateValues = Array.from(d3.rollup(props.data, ([d]) => d.value, d => +new Date(d.date), d => d.district))
            .map(([date, data]) => [new Date(date), data])
            .sort(([a], [b]) => d3.ascending(a, b));

        let districtNumbers = new Set(props.data.map(d => d.district));
        
        let keyframes = (() => {

            const rank = (value) => {
                const data = Array.from(districtNumbers, district => ({district, value: value(district)}));
                data.sort((a, b) => d3.descending(a.value, b.value));
                for (let i = 0; i < data.length; ++i) data[i].rank = Math.min(n, i);
                return data;
            }

            const keyframes = [];
            let ka, a, kb, b;
            for ([[ka, a], [kb, b]] of d3.pairs(dateValues)) {
                for (let i = 0; i < k; ++i) {
                    const t = i / k;
                    keyframes.push([
                        new Date(ka * (1 - t) + kb * t),
                        rank(name => (a.get(name) || 0) * (1 - t) + (b.get(name) || 0) * t)
                    ]);
                }
            }
            keyframes.push([new Date(kb), rank(name => b.get(name) || 0)]);
            return keyframes;
        })();

        return keyframes;
    }

    const initializeSvg = (svg) => {
        // Initialize svg
        // svg.selectAll("p")
        // .data(props.data.slice(0, 12))
        // .enter()
        // .append("p")
        // .text(function(d) {
        //     return "District is " + d.district;
        // })
        // .exit().remove();
        svg.style("border", "1px solid black").attr('viewBox','0 0 '+500+' '+500);
    }
    // useInterval(() => {
    //     setTime(time + 1);
    //   }, 1000);

    // function setLoop() {
    //     setD(d + 1);
    // };

    // let i = 0;
    // while (i < 1000){
    //         setLoop();
    // }

    return(
        <div>
            <p>{time}</p>
            <p>{demoText}</p>
            <p>{d}</p>
            <svg ref={chart} />
            <button onClick={sendNext} />
        </div>
    )
}

