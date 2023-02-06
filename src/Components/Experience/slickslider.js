import React from 'react'
import slickstyle from './slickslider.module.css'
import htmlimg from '../../images/html.png'
import cssimg from '../../images/css.png'
import jsimg from '../../images/js.png'
import reactimg from '../../images/react.png'
import bootsimg from '../../images/bootstrap.png'
import githubimg from '../../images/github.png'

import './slider.css'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slickData from '../../Data/slickData'
function Carousel() {
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
    // -------------

    responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 1000,
          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 1000,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 1000,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
}
  return (
    <div className={slickstyle.content}>
    <Slider {...sliderSettings}>

        {
            slickData.map(item => {
                return(
                    <div className={slickstyle.childd}>
                        <div className={slickstyle.child_text}>
                            <img src={require(`../../images/${item.image}`)} />
                            <h5>{item.title}</h5>
                        </div>
                        <div className={slickstyle.front}><h1>{item.percent}</h1></div>
                    </div>  
                )
            })
        }
        
                                       
    </Slider>

</div>

  );
}

export default Carousel