import React, { useEffect } from 'react'
import experiencestyle from './experience.module.css'
import Carousel from './slickslider'
import Aos from 'aos'

function Experience() {
  useEffect(() => {
    Aos.init({duration: 1000, delay: 200 })
  }, [])

  return (
    <div id='experience'  className={experiencestyle.exp_common}>
      <div className={experiencestyle.exp_container}>
        <div className={experiencestyle.exp_line}>
          <div className={experiencestyle.circle}></div>
          <div className={experiencestyle.circle}></div>
          <h2>EXPERIENCE</h2>
          <div className={experiencestyle.line}></div>
        </div>

        <div className={experiencestyle.exp_education}>
          <h1>Education</h1>

          <div className={experiencestyle.education_common}>
            <div data-aos="flip-right" className={experiencestyle.education1}>
                
                <a className={experiencestyle.schoolicon}><ion-icon name="school"></ion-icon></a>
                <div className={experiencestyle.education_text}>
                    <h6>2018-2022</h6>
                    <h4>Bachelor degree - National Aviation Academy</h4>
                    <h5>Information Technology</h5>
                </div>


            </div>

            <div data-aos="flip-left" className={experiencestyle.education2}>
              <a className={experiencestyle.schoolicon}><ion-icon name="school"></ion-icon></a>
              <div className={experiencestyle.education_text}>
                  <h6>04/2022-10/2022</h6>
                  <h4>Matrix Training Center</h4>
                  <h5>Front-End Developer</h5>
              </div>

            </div>
          </div>

        </div>

        <div className={experiencestyle.exp_skills}>
          <h1>Skills</h1>
          <div className={experiencestyle.skills_common}>
             <Carousel />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience