import React from 'react'
import './styles/services.css';

import Hud_tatoo from './img/hud_tatoo2.png';
import Sket_tatoo from './img/sketch_tatoo2.png';
import Corec_tatoo from './img/corec_tatoo2.png';
import Cover_tatoo from './img/perec_tatoo2.png';
import Vrem_tatoo from './img/vrem_tatoo2.png';
import Pirs_tatoo from './img/pirs_tatoo2.png';

export const Services = () => {
  return (
    <section  className="services">  {/* исправить этот блок (должно быть section) и разобраться с тем как закрепить заголовки */}

        <div>
            <p id="Services" className="zag">Services</p>
        </div>
        <div className="container conteiner_cards">

            <div className="card">
                <div className="card_top">
                    <img src={Hud_tatoo} alt="Художественное тату" className="card_hud" />
                    <p className="text_card">Artistic <br/>tattoo</p>
                </div>
            </div>

            <div className="card">
                <div className="card_top">
                    <img src={Sket_tatoo} alt="Разработка эскиза" className="card_hud" />
                    <p className="text_card">Sketch <br/>development</p>
                </div>
            </div>

            <div className="card">
                <div className="card_top">
                    <img src={Corec_tatoo} alt="Коррекция тату" className="card_hud" />
                    <p className="text_card">Tattoo <br/>correction</p>
                </div>
            </div>

            <div className="card">
                <div className="card_top">
                    <img src={Cover_tatoo} alt="Перекрытие" className="card_hud" />
                    <p className="text_card">Cover Up</p>
                </div>
            </div>

            <div className="card">
                <div className="card_top">
                    <img src={Vrem_tatoo} alt="Временные татуировки" className="card_hud" />
                    <p className="text_card">Temporary <br/>tattoos</p>
                </div>
            </div>

            <div className="card">
                <div className="card_top">
                    <img src={Pirs_tatoo} alt="Пирсинг" className="card_hud" />
                    <p className="text_card">Piercing</p>
                </div>
            </div>

                    

        </div>


    </section>
  )
}
