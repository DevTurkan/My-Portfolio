import React, { useState, useEffect } from 'react'
import scrlstyle from './scrolltotop.module.css'

 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp, faAngleUp, faCaretUp } from '@fortawesome/free-solid-svg-icons'

function ScrollToTop() {

    const [showScrollButton, setScrollButton] = useState(false)

    useEffect(() => {

        window.addEventListener('scroll', () => {

            if (window.scrollY > 300) {
                setScrollButton(true)
            }
            else {
                setScrollButton(false)
            }
        })

      

     

    }, []);

   const scrolup = () =>{
            window.scrollTo({
                top:0,
                behavior: "smooth"
            })
        }

    return (
        <div>
            {
                showScrollButton && <button className={scrlstyle.top} onClick={scrolup} ><FontAwesomeIcon icon={faCaretUp} /></button>
            }

        </div>
    )


}

export default ScrollToTop
