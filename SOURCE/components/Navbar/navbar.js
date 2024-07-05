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
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='desktopMenuListItem'>Projects</Link>
        <Link className='desktopMenuListItem'>portfolio</Link>

      </div>
      <button className="desktopMenuBtn">
        <img src="" alt="" className="desktopMenuImg"/>Contact me
      </button>
    </nav>
  )
}

export default Navbar