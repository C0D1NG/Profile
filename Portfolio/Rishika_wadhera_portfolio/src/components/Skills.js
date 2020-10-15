import React from 'react'
import javacup from '../images/javacup.png'
import js from '../images/js.png'
import mern from '../images/mern.jpg'
import cp from '../images/cp.jpg'
import '../css/Skills.css'
const Skills=()=>{
    return (
        <div className="outer">
            <div className="heading">
                <h1>My Skills</h1>
            </div>
           < div className="skills">
                  
                  <img  className="iconsskills" src={javacup}></img><br></br>
                  <img className="iconsskills" src={js}></img>
                  
                  
                  <img className="iconsskills" src={mern}></img><br></br>
                  <img className="iconsskills" src={cp}></img>

               </div>
               
             
            <div className="proj">
                <h1>Projects</h1>
            </div>
         </div>
        
    )
}
export default Skills