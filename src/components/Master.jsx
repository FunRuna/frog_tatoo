import React from 'react'
import './styles/master.css';
import './styles/zag.css';
import Gleb from './img/gleb_orich.png';
export const Master = () => {
  return (
    <section id="Master" className="bloc_master">
    <p  className="zag">Master</p>
    <div className="master">
        
        <h1 className="name">Gleb</h1>
        <b className="text_zbs">IMMERSE YOURSELF IN ART</b>
        <b className="text_zbs2">Sometimes you have to look deeper to find<br></br>
                                beauty in the darkness  And maybe then we <br></br>
                                will become who we are meant to be.</b>
        <img 
        src={Gleb}
        alt="Мастер"
        className="gleb_orich_photo">
        </img>
        <h1 className="last_name">Orich</h1>
    
    </div>
    </section>

  )
}
