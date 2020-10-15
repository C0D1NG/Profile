import React from 'react'
import '../css/GetInTouch.css'
import LinkedIn from '../images/linkedinblack.png'
import Gmail from '../images/gmailblack.png'
import codechef from '../images/codechefblack.png'
import fb from '../images/fb.png'
const GetInTouch=()=>{
    return (
        <div className="mainele">
           
          <div className="icons">
              <a href="https://www.linkedin.com/in/rishika-wadhera-931588199"><img className="icon" src={LinkedIn} alt="linkedin"></img></a>
              <a href="mailto:rishika.wadhera6@gmail.com"><img className="icon" src={Gmail} alt="gmail"></img></a>
              <a href="https://www.codechef.com/users/rishika6"><img className="icon" src={codechef} alt="codechef"></img></a>
              <a href="https://www.facebook.com/profile.php?id=100008450195203"><img className="icon" src={fb} alt="fb"></img></a>
          </div>
        </div>
    )
}
export default GetInTouch