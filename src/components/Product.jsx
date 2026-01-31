import React from 'react'
import './styles/zag.css';
import './styles/product.css';
import Paint from './img/kras.png';
import Mash from './img/mash.png';
import Rasx from './img/rasx.png';
import Uxod from './img/uhod.png';
import Pedal from './img/pedal.png';
import Nabor from './img/nabor.png';
import Stan from './img/stan.png';
import Kolpak from './img/kolpak.png';
export const Product = () => {
  return (
    <section  className="product">
        <div>
        <p id="Product" className="zag">Product</p>
        </div>
        <div className="container container_cards">

            <div className="card_tovar">
                <div className="card_tov">
                    <img src={Paint} alt="Краски" className="tovar" />
                    <p className="name_product">Paints</p>
                </div>
            </div>
            <div className="card_tovar">
                <div className="card_tov">
                    <img src={Mash} alt="Машинка" className="tovar" />
                    <p className="name_product">Machines</p>
                </div>
            </div>
            <div className="card_tovar">
                <div className="card_tov">
                    <img src={Rasx} alt="Расходники" className="tovar" />
                    <p className="name_product">Cartridges</p>
                </div>
            </div>
            <div className="card_tovar">
                <div className="card_tov">
                    <img src={Uxod} alt="Уход" className="tovar" />
                    <p className="name_product">Aftercare</p>
                </div>
            </div>
            <div className="card_tovar">
                <div className="card_tov">
                    <img src={Pedal} alt="Педали" className="tovar" />
                    <p className="name_product">Pedals</p>
                </div>
            </div>
            <div className="card_tovar">
                <div className="card_tov">
                    <img src={Nabor} alt="Наборы" className="tovar" />
                    <p className="name_product">Kits</p>
                </div>
            </div>
            <div className="card_tovar">
                <div className="card_tov">
                    <img src={Stan} alt="Блок Питания" className="tovar" />
                    <p className="name_product">Power supplies</p>
                </div>
            </div>
            <div className="card_tovar">
                <div className="card_tov">
                    <img src={Kolpak} alt="Колпак" className="tovar" />
                    <p className="name_product">Cartridge Grips</p>
                </div>
            </div>
        </div>
    </section>
  )
}
