import React from 'react';
import './navbar.css';
//  ../ -->leads to the parent element
import logo from '../../assets/text-font.svg';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Ayu" className='logo'/>
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        {/* offset is shifting of positions */}
        {/* duration is the time taken to change the page */}
        {/* spy will check if i am in this particular id, if yes then if will add this active class */}
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>portfolio</Link>

      </div>
      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        {/* getting the element by id and scrolling to view the page */}
        Contact me
      </button>
    </nav>
  )
}

export default Navbar