import React from 'react'
import contactstyle from './contact.module.css'
import { useState } from 'react';
// import Mapmodal from './mapModal';

function Contact() {
  // const [mapopenModal, setMapopenModal] = useState(false)

  return (
   
    <div id='contact'  className={contactstyle.contact_common}>
      <div className={contactstyle.contact_container}>
        <div className={contactstyle.contact_line}>
          <div className={contactstyle.circle}></div>
          <div className={contactstyle.circle}></div>
          <h2>CONTACT</h2>
          <div className={contactstyle.line}></div>
        </div>

        <div className={contactstyle.contactcallsend}>
          <div className={contactstyle.call}>
              {/* <h3 className={contactstyle.shy}>DON'T BE SHY!</h3> */}
              <p className={contactstyle.shyp}>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              
              <div className={contactstyle.contacticons}>
                  <ul>
                      <li>
                      <a className={contactstyle.icna}> 
                      <span className={contactstyle.iconss}><ion-icon name="map"></ion-icon></span>
                      </a>
                      
                      <p className={contactstyle.contactp}>
                          <span>ADDRESS POINT</span>
                          Bahruz Nuriyev str, Baku, Azerbaijan
                      </p>
                      </li>

                      <li>
                          <a className={contactstyle.icna} href='mailto:hasanovaturkan2104@mail.ru'> 
                          <span className={contactstyle.iconss}><ion-icon name="mail-open"></ion-icon></span>
                          </a>
                          <p className={contactstyle.contactp}>
                              <span>MAIL ME</span>
                              devturkanhasanova21@mail.ru
                          </p>
                      </li>

                      <li>
                      <a className={contactstyle.icna} href='tel: 077 300 63 01'> <span className={contactstyle.iconss}><ion-icon name="call"></ion-icon></span></a>
                          <p className={contactstyle.contactp}>
                              <span>CALL ME</span>
                              +994 77 300 63 01
                          </p>
                      </li>
                  </ul>

                  {/* {mapopenModal && <Mapmodal closeModal={setMapopenModal} />} */}
              </div>
          
              <div className={contactstyle.lasticon}>
                  <ul>
                      <li className={contactstyle.gli}><a target='_blank' className='icna2' href='https://github.com/DevTurkan'><ion-icon name="logo-github"></ion-icon></a></li>
                      <li className={contactstyle.gli}><a target='_blank' className='icna2' href='https://www.linkedin.com/in/turkanhasanova/'><ion-icon name="logo-linkedin"></ion-icon></a></li>
                      <li className={contactstyle.gli}><a target='_blank' className='icna2' href='https://www.instagram.com/_h.turkan_/'><ion-icon name="logo-instagram"></ion-icon></a></li>
                  </ul>
              </div>
          </div>


          <div className={contactstyle.sendme}>
          <form className={contactstyle.contactformm}>
                            <div className={contactstyle.namemail}>
                                <input type="text" className={contactstyle.name} placeholder='YOUR NAME'/>
                                <input type="email" className={contactstyle.mail} placeholder='YOUR EMAIL' />
                            </div>

                            <div>
                                <input type="text" className={contactstyle.subj} placeholder='YOUR SUBJECT'/>
                            </div>

                            <div>
                               <textarea className={contactstyle.message} placeholder='YOUR MESSAGE'></textarea>
                            </div>

                            <button type='button'>
                              <span>Send message</span>

                              <span class="button_iconn"><ion-icon name="send"></ion-icon></span>
                            
                            </button>
                        </form>
          </div>
        </div>

        <div className={contactstyle.author}>
            <p>Made by Turkan Hasanova</p>
        </div>

      </div>
    </div>
  )
}

export default Contact