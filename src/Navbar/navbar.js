import React, { useState } from 'react'
// import navbarstyle from './navbar.module.css'
import  './navvbar.css'

function Navbar() {
  const[active, setActive] = useState("nav__menu");
  const[toggleIcon, setToggleIcon] = useState("nav__toggler");

  const[clicks, setClicks] = useState(false);

  const clickactive = () => {
    setClicks(false) ? setActive('nav__menu nav__active') : setActive('nav__menu');
    setClicks(false) ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler');

  }
  const navToggle = () => {
    active === "nav__menu" ? setActive('nav__menu nav__active') : setActive('nav__menu');
    toggleIcon === "nav__toggler" ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')

  }
  return (
    <header>
        <nav className='nav'> {/* nav */}
          <div className="logo">
            <a href='#home'><p><span>P</span>ortfolio</p></a>
          </div>

          <ul className={active}>
              <li onClick={clickactive} className={clicks}><a href='#home'>Home</a></li>
              <li onClick={clickactive} className={clicks}><a href='#about'>About</a></li>
              <li onClick={clickactive} className={clicks}><a href='#experience'>Experience</a></li>
              <li onClick={clickactive} className={clicks}><a href='#portfolio'>Portfolio</a></li>
              <li onClick={clickactive} className={clicks}><a href='#contact'>Contact</a></li>
          </ul>

          <div onClick={navToggle} className={toggleIcon}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>

        </nav>
    </header>

    // <nav className='navv'>
    //   <a href='#' className='brand'>hjj</a>
    //   <ul className='nav__menu'>
    //     <li className='nav__item'><a href='#' className='nav__link'>Home</a></li>
    //     <li className='nav__item'><a href='#' className='nav__link'>About</a></li>
    //     <li className='nav__item'><a href='#' className='nav__link'>Experience</a></li>
    //     <li className='nav__item'><a href='#' className='nav__link'>Portfolio</a></li>
    //     <li className='nav__item'><a href='#' className='nav__link'>Contact</a></li>
    //   </ul>

    //   <div className='nav__toggler'>
    //     <div className='line1'></div>
    //     <div className='line2'></div>
    //     <div className='line3'></div>
    //   </div>
    // </nav>
  )
}

export default Navbar