import React from 'react'
import homestyle from './home.module.css'
import myimg from '../../images/myphoto.jpg'
function Home() {
  return (
    <div className={homestyle.common} id='home'>
      <div className={homestyle.left}>
        <p>Turkan Hasanova</p>
        <ul className={homestyle.icon_ul}>
          <li><a target='_blank' href='https://www.linkedin.com/in/turkanhasanova/'><ion-icon name="logo-linkedin"></ion-icon></a></li>
          <li><a target='_blank' href='https://github.com/DevTurkan'><ion-icon name="logo-github"></ion-icon></a></li>
          <li><a href='#'><ion-icon name="logo-youtube"></ion-icon></a></li>
          <li><a target='_blank' href='https://www.instagram.com/_h.turkan_/'><ion-icon name="logo-instagram"></ion-icon></a></li>
        </ul>
      </div>
      <div className={homestyle.right}>
        <div className={homestyle.right_inner}>
          <div className={homestyle.text_div}>
            <h1>I'm Turkan Hasanova</h1>
            <h3>FRONT-END DEVELOPER.</h3>
            <p>I'm a Front-End web developer. Being a very passionate personality, I'm highly dedicated to my work & my goal is to build an excellent software that'd truly improve the lives of many.</p>
            <a href='#about'> <button type='button'><span>MORE ABOUT ME</span></button></a>
          </div>
        </div>
      </div>
      <img className={homestyle.photo} src={myimg} />
    </div>
  )
}

export default Home