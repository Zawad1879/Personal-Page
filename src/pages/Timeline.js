import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsFillBagFill } from 'react-icons/bs';
import { MdSchool } from 'react-icons/md'; 

export default function Timeline() {
    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
        <div className="text-left p-10 md:mt-32">
            <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-blue-900">Timeline</h1>

<VerticalTimeline lineColor="black" layout="1-column-left">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(232,117,0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(232,117,0)' }}
    date="January 2021 - December 2022"
    iconStyle={{ background: 'rgb(232,117,0)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Masters in Computer Science</h3>
    <h4 className="vertical-timeline-element-subtitle"><a href="https://www.utdallas.edu/"><u>The University of Texas at Dallas</u></a></h4>
    <h4 style={{ fontSize: "12px" }} className="vertical-timeline-element-subtitle"><i>Dallas, Texas</i></h4>
    <p>
        Concentrating on the data sciences and intelligent systems tracks. <br/><br/>
        Courses taken so far: Machine Learning, Natural Language Processing, Big Data Management and Analytics, Database, Operating Systems, Statistics for Data Science<br/>
        
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="October 2017 - December 2020"
    iconStyle={{ background: 'rgb(47,113,183)', color: '#fff' }}
    icon={<BsFillBagFill />}
  >
    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle"><a href="https://lifematics.co.jp/en/corporate.html"><u>Lifematics Inc.</u></a></h4>
    <h4 style={{ fontSize: "12px" }} className="vertical-timeline-element-subtitle"><i>Tokyo, Japan</i></h4>
    <p>
      Full-stack Web Development
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2017 - July 2017"
    iconStyle={{ background: 'rgb(153,31,35)', color: '#fff' }}
    icon={<BsFillBagFill />}
  >
    <h3 className="vertical-timeline-element-title ">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle"><a href="http://infinitytechltd.com/"><u>Infinity Technology International Ltd.</u></a></h4>
    <h4 style={{ fontSize: "12px" }} className="vertical-timeline-element-subtitle"><i>Dhaka, Bangladesh</i></h4>
    <p>
      Full-stack web development
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 2015 - July 2016"
    iconStyle={{ background: 'rgb(0,226,120)', color: '#fff' }}
    icon={<BsFillBagFill />}
  >
    <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle"><a href="https://www.bracu.ac.bd/"><u>BRAC University</u></a></h4>
    <h4 style={{ fontSize: "12px" }} className="vertical-timeline-element-subtitle"><i>Dhaka, Bangladesh</i></h4>
    <p>
      Teaching, grading quizzes
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="January 2013 - December 2016"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Bachelors in Computer Science and Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle"><a href="https://www.bracu.ac.bd/"><u>BRAC University</u></a></h4>
    <h4 style={{ fontSize: "12px" }} className="vertical-timeline-element-subtitle"><i>Dhaka, Bangladesh</i></h4>
  </VerticalTimelineElement>
  
</VerticalTimeline>
        </div>
        </motion.div>
    );
}