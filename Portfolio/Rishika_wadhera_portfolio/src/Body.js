import React from 'react'
import './css/Body.css'
import pic from '../src/images/mypic.jpg'
import {emojify} from 'react-emojione'
import Skills from './components/GetInTouch'

const Body=()=>{
     return(
         
         <div className="body">
             <div className="pics">
                 <br></br>
             <img className="mypic" src={pic} alt="mypic"></img>
             <h2>Hi There!!{emojify('👋')}</h2>
             <h2> I'm Rishika Wadhera.</h2>
             <Skills/>
              </div>
              </div>
        
        
     )
}
export default Body;