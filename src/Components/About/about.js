import React, { useEffect } from 'react'
import aboutstyle from './about.module.css'
import aboutimg from '../../images/aboutme.jpg'
import CV from '../../cvfile/HəsənovaTürkan_CV.pdf'

import aboutData from '../../Data/aboutData'
import Aboutitem from '../../Itemss/aboutItem'

import Aos from 'aos'

// import { AOS } from 'aos'


function About() {

 useEffect(() => {
   Aos.init({duration: 1000, delay: 200 })
 }, [])

  return (
    <div id='about'  className={aboutstyle.about_common}>
      <div className={aboutstyle.about_container}>
        <div className={aboutstyle.about_line}>
          <div className={aboutstyle.circle}></div>
          <div className={aboutstyle.circle}></div>
          <h2>ABOUT ME</h2>
          <div className={aboutstyle.line}></div>
        </div>

        <div className={aboutstyle.img_text}>

          <div className={aboutstyle.text}>
            <p>I'm Front-end Developer based in Azerbaijan. I build clean, appealing responsive websites</p>
            <div className={aboutstyle.line2_center}><div className={aboutstyle.line2}></div><h2>Personal info</h2><div className={aboutstyle.line2}></div></div>
            
            <div className={aboutstyle.info}>
              <div className={aboutstyle.left_info}>
                
                {
                  aboutData.leftdata.map(item => {
                    return(
                      <Aboutitem
                        title={item.title}
                        desc = {item.desc}
                      />
                    )
                  })
                }
              </div>

              <div className={aboutstyle.right_info}>

                {
                  aboutData.rightdata.map(item => {
                    return(
                      <Aboutitem
                        title={item.title}
                        desc = {item.desc}
                      />
                    )
                  })
                }
              </div>          
            </div>

            <a href={CV} download='CV'> <button type='button'><span>Download CV</span></button></a>

          </div>

          <div data-aos="flip-left" className={aboutstyle.img}>
              <img src={aboutimg} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About