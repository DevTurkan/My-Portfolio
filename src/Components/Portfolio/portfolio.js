import React, { useEffect } from 'react'
import portfstyle from './portfolio.module.css'
import img1 from '../../images/todo3.png'

import Aos from 'aos'


function Portfolio() {
  useEffect(() => {
    Aos.init({duration: 1000, delay: 200 })
  }, [])
 

  return (
    <div id='portfolio'  className={portfstyle.portf_common}>
    <div className={portfstyle.portf_container}>
      <div className={portfstyle.portf_line}>
        <div className={portfstyle.circle}></div>
        <div className={portfstyle.circle}></div>
        <h2>PORTFOLIO</h2>
        <div className={portfstyle.line}></div>
      </div>

      <div className={portfstyle.full_portf_div}>
        <div className={portfstyle.portf_div}>

        <div data-aos="zoom-in" className={portfstyle.card}>
            <div className={portfstyle.headline}></div>
            <div className={portfstyle.cardTop6}>
                {/* <img src={img1} width='500px'/> */}
            </div>
            <div className={portfstyle.cardBottom}>
              <div className={portfstyle.cardText}>
            
                <h3 class="cardTitle">MovieBox</h3>
                <h4 class="cardInfo">Language: React, TypeScript, HTML, SCSS</h4>
                <div className={portfstyle.cardHoverText}>
                  <p>
                  Website built using fake REST API. 
                  </p>
                  <p>Preview:&nbsp;<a target="_blank" href="https://github.com/DevTurkan/Movie-Ecommerce-React-Project-with-FakeApi">Movie-Ecommerce</a></p>
                </div>
              </div>
            </div>
        </div>





        <div data-aos="zoom-in" className={portfstyle.card}>
            <div className={portfstyle.headline}></div>
            <div className={portfstyle.cardTop5}>
                {/* <img src={img1} width='500px'/> */}
            </div>
            <div className={portfstyle.cardBottom}>
              <div className={portfstyle.cardText}>
            
                <h3 class="cardTitle">E-Commerce</h3>
                <h4 class="cardInfo">Language:  React, HTML, CSS, SCSS</h4>
                <div className={portfstyle.cardHoverText}>
                  <p>
                  Website built using fake REST API. 
                  </p>
                  <p>Preview:&nbsp;<a target="_blank" href="https://github.com/DevTurkan/Ecommerce-React-Project-with-FakeApi">eTrade-Ecommerce</a></p>
                </div>
              </div>
            </div>
        </div>
          
        </div>


        <div className={portfstyle.portf_div}>

          <div data-aos="zoom-in" className={portfstyle.card}>
            <div className={portfstyle.headline}></div>
            <div className={portfstyle.cardTop2}>
                {/* <img src={img1} width='500px'/> */}
            </div>
            <div className={portfstyle.cardBottom}>
              <div className={portfstyle.cardText}>
            
                <h3 class="cardTitle">Clock</h3>
                <h4 class="cardInfo">Language:  HTML, CSS, Javascript</h4>
                <div className={portfstyle.cardHoverText}>
                  <p>
                  Just click on the link below to know the current time.
                  </p>
                  <p>Preview:&nbsp;<a target="_blank" href="https://current-clock.netlify.app/"> Current time</a></p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" className={portfstyle.card}>
            <div className={portfstyle.headline}></div>
            <div className={portfstyle.cardTop3}>
                {/* <img src={img1} width='500px'/> */}
            </div>
            <div className={portfstyle.cardBottom}>
              <div className={portfstyle.cardText}>
            
                <h3 class="cardTitle">Calculator</h3>
                <h4 class="cardInfo">Language:  HTML, CSS, Javascript</h4>
                <div className={portfstyle.cardHoverText}>
                  <p>
                    Just click on the link below to calculate.
                  </p>
                  <p>Preview:&nbsp;<a target="_blank" href="https://calculator-system.netlify.app/">Calculate</a></p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className={portfstyle.portf_div}>
          <div data-aos="zoom-in" className={portfstyle.card}>
            <div className={portfstyle.headline}></div>
            <div className={portfstyle.cardTop4}>
                {/* <img src={img1} width='500px'/> */}
            </div>
            <div className={portfstyle.cardBottom}>
              <div className={portfstyle.cardText}>
            
                <h3 class="cardTitle">Word Game</h3>
                <h4 class="cardInfo">Language:  HTML, CSS, Javascript</h4>
                <div className={portfstyle.cardHoverText}>
                  <p>
                  Just click on the link below to start game.
                  {/* Just click on the link below to convert metric/imperial unit. */}
                  </p>
                  <p>Preview:&nbsp;<a target="_blank" href="https://scrambled-word-game.netlify.app/">Word game</a></p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" className={portfstyle.card}>
            <div className={portfstyle.headline}></div>
            <div className={portfstyle.cardTop}>
                {/* <img src={img1} width='500px'/> */}
            </div>
            <div className={portfstyle.cardBottom}>
              <div className={portfstyle.cardText}>
            
                <h3 class="cardTitle">Todo List</h3>
                <h4 class="cardInfo">Language:  HTML, CSS, Javascript</h4>
                <div className={portfstyle.cardHoverText}>
                  <p>
                    Todo list is a list of tasks you need to complete or things that you want to do. This means you don’t waste time on tasks that don’t require your immediate attention. Your list will help you stay focused on the tasks that are the most important.
                  </p>
                  <p>Preview:&nbsp;<a target="_blank" href="https://tasklist-todolist-app.netlify.app/"> Create to do list</a></p>
                </div>
              </div>
            </div>
          </div>

      </div>

    </div>
  </div>
  )
}

export default Portfolio