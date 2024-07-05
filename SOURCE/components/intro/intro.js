import React from 'react'
import './intro.css'
import bg from '../../assets/design-and-development-process.svg';
import {Link} from 'react-scroll';


const Intro = () => {
  return (
    
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Ayushi Kumari</span><br/>
               
            </span>
            <p className='introPara'>a 3rd year student at IIT BHU,Varanasi.</p>
            <Link><button className='btn'>Say hello</button></Link>
        </div>
        <img src={bg} alt="" className='bg'/>
    </section>
  );
}

export default Intro