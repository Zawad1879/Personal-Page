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
        const width = 500;

        let margin = ({top: 16, right: 6, bottom: 6, left: 0})
        let x = d3.scaleLinear([0, 1], [margin.left, width - margin.right])
        let y = d3.scaleBand()
            .domain(d3.range(n + 1))
            .rangeRound([margin.top, margin.top + barSize * (n + 1 + 0.1)])
            .padding(0.1)

        // let d = [1,2,3,4]
        const axis = (svg) => {
            const g = svg.append("g")
                .attr("transform", `translate(0,${margin.top})`);
            
            const axis = d3.axisTop(x)
                .ticks(width / 160)
                .tickSizeOuter(0)
                .tickSizeInner(-barSize * (n + y.padding()));
            
            return (_, transition) => {
                g.transition(transition).call(axis);
                g.select(".tick:first-of-type text").remove();
                g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "white");
                g.select(".domain").remove();
            };
        }
        

        // let pairs = new Map(d3.pairs(d, (a, b) => [b, a]));
        
        initializeSvg(svg);
        let keyframes = getKeyframes(k, n);
        console.log(keyframes);
        
        let nameframes = d3.groups(keyframes.flatMap(([, data]) => data), d => d.district);
        let prev = new Map(nameframes.flatMap(([, data]) => d3.pairs(data, (a, b) => [b, a])))
        let next = new Map(nameframes.flatMap(([, data]) => d3.pairs(data)))

        const formatNumber = d3.format(",d")

        function textTween(a, b) {
            const i = d3.interpolateNumber(a, b);
            return function(t) {
              this.textContent = formatNumber(i(t));
            };
          }
        
        function labels(svg) {
            let label = svg.append("g")
                .style("font", "bold 12px var(--sans-serif)")
                .style("font-variant-numeric", "tabular-nums")
                .attr("text-anchor", "end")
              .selectAll("text");
          
            return ([date, data], transition) => label = label
              .data(data.slice(0, n), d => d.name)
              .join(
                enter => enter.append("text")
                  .attr("transform", d => `translate(${x((prev.get(d) || d).value)},${y((prev.get(d) || d).rank)})`)
                  .attr("y", y.bandwidth() / 2)
                  .attr("x", -6)
                  .attr("dy", "-0.25em")
                  .text(d => d.district)
                  .call(text => text.append("tspan")
                    .attr("fill-opacity", 0.7)
                    .attr("font-weight", "normal")
                    .attr("x", -6)
                    .attr("dy", "1.15em")),
                update => update,
                exit => exit.transition(transition).remove()
                  .attr("transform", d => `translate(${x((next.get(d) || d).value)},${y((next.get(d) || d).rank)})`)
                  .call(g => g.select("tspan").tween("text", d => textTween(d.value, (next.get(d) || d).value)))
              )
              .call(bar => bar.transition(transition)
                .attr("transform", d => `translate(${x(d.value)},${y(d.rank)})`)
                .call(g => g.select("tspan").tween("text", d => textTween((prev.get(d) || d).value, d.value))))
          }

        let barz = bars(svg, keyframes, n, x, y);
        const updateAxis = axis(svg);
        const updateLabels = labels(svg);

        const transition = svg.transition()
                .duration(20000)
                .ease(d3.easeLinear);
        // barz(keyframes[0], transition);
        // keyframes[1][1][0].value = 1000;
        // console.log(keyframes)
        // barz(keyframes[1], transition);
        for(const keyframe of keyframes){
            x.domain([0, keyframe[1][0].value]);
            updateAxis(keyframe, transition);
            barz(keyframe, transition)
            updateLabels(keyframe, transition)
        }
    
        
    }, [time]);

    let color = (() => {
        const scale = d3.scaleOrdinal(d3.schemeTableau10);
        return d => scale(d.district);
      })();

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
            // console.log('in render bars');
            // console.log(data);
            
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
            console.log(data)
            svg.selectAll("rect").data(data, d => d.district)
                .join(
                    enter => enter.append("rect")
                    .attr("fill", color)
                    .attr("height", y.bandwidth())
                    .attr("x", x(0))
                    .attr("y", d => y((prev.get(d) || d).rank))
                    .attr("width", d => x((prev.get(d) || d).value) - x(0)),
            update => update,
            exit => exit.transition(transition).remove()
                    .attr("y", d => y((next.get(d) || d).rank))
                    .attr("width", d => x((next.get(d) || d).value) - x(0))
            )
            .call(
                svg => svg.transition(transition)
                            .attr("y", d => y(d.rank))
                            .attr("width", d => x(d.value))
            )
            
        }
        return renderBars;
    }

    const sendNext = () => {}


    const getKeyframes = (k, n) => {
        let dateValues = Array.from(d3.rollup(props.data, ([d]) => d.value, d => +new Date(d.date), d => d.district))
            .map(([date, data]) => [new Date(date), data])
            .sort(([a], [b]) => d3.ascending(a, b));
        
        let districtNumbers = new Set(props.data.map(d => d.district));
        console.log(dateValues)
        let keyframes = (() => {

            const rank = (value) => {
                const data = Array.from(districtNumbers, district => ({district, value: value(district)}));
                
                data.sort((a, b) => d3.descending(a.value, b.value));
                for (let i = 0; i < data.length; ++i) data[i].rank = Math.min(n, i);
                return data;
            }

            const keyframes = [];
            let ka, a, kb, b;
            console.log(d3.pairs(dateValues))
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
        svg.style("border", "1px solid black").attr('viewBox','0 0 '+500+' '+650);
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

