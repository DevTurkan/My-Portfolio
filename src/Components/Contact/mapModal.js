import mapstyle from './mapModal.module.css';

import Aos from 'aos'
import { useEffect } from 'react';

const Mapmodal = ({closeModal}) =>{

    useEffect(() => {
        Aos.init({duration: 1000, delay: 200 })
    }, [])
     

    return(
        <>
<div className={mapstyle.full}>
    <div data-aos="zoom-in" className={mapstyle.box}>
    <button className={mapstyle.close} onClick={() => closeModal(false)}><ion-icon name="close-circle-outline"></ion-icon></button>

        <div className={mapstyle.btnbox}>
            <div className={mapstyle.mapp}>
                            
                {/* <div className='iframediv'> */}
                    <iframe width="700" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=b%C9%99hruz%20nuriyev%2021%20bak%C4%B1&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                {/* </div>                                */}
                           
            </div>
        </div>
    </div>
</div>

        </>
    )
}

export default Mapmodal