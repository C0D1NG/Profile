import React from 'react'
import '../css/Projects.css'

import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import '../css/cards.css'
import CovidAlert from '../images/covidalert.gif'
import Golden from '../images/goldenratio.gif'
import Todo from '../images/todo.gif'
const Projects=()=>{
    return(
        <div>
        
        <div className="projects">
            
            <Row>
           <Col  gutter={20} sm={8} md={8} lg={4}>
               
            <div class="flip-card">
           
        <div className="flip-card-inner">
        <div className="flip-card-front">
        <img src={CovidAlert} alt="Avatar"></img>
        </div>
        <div className="flip-card-back">
        <h1>Track-cov19</h1>
        <p>An application that updates user regarding the situation of COVID19 pandemic using numebers and charts.Built using React Js.</p>
        <a href="https://track-cov19.netlify.app">View live</a><br></br>
        <a href="https://github.com/Rishika6/Track-cov19">Code link</a>
        </div>
        </div>
        </div>
            </Col>
         
        
            <Col sm={8} md={8} lg={4}><div class="flip-card">
            
        <div className="flip-card-inner">
        <div className="flip-card-front">
        <img src={Golden} alt="Avatar"></img>
        </div>
        <div className="flip-card-back">
        <h1>Evolution Ratio</h1>
        <p>Dimistyfy the Golden ratio and learn about its applications in real world.Bult using HTML,CSS and Boostrap.</p>
        <a href="https://evolution-ratio.netlify.app">View live</a><br></br>
        <a href="https://github.com/Rishika6/Evolution-Ratio">Code Link</a>
        </div>
        </div>
        </div></Col>
        <Col  sm={8} md={8} lg={4}>
            <div class="flip-card">
           <div className="flip-card-inner">
        <div className="flip-card-front">
        <img src={Todo} alt="Avatar"></img>
        </div>
        <div className="flip-card-back">
         <h1>MYTODOS's</h1>
         <p>A todo list application built using MERN stack with basic user authentication.</p>
         <a href="https://github.com/Rishika6/MyTodos">Code Link</a>
        </div>
        </div>
        </div>
    </Col>
    
         </Row>
        <div className="sp"></div>
        
           </div>
        </div>
           
            
            
    )
}
export default Projects