import React from 'react';

import '../src/css/App.css'
import About from '../src/components/About'
import Projects from './components/Projects' 
import Body from './Body'


const App=()=>{
    return(
        <div className="outer">
        <div className="app">
             <Body/>
            </div>
            <About/>
          
        <Projects/>
      
        </div>

    )
}
export default App;
