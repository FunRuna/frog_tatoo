import React from 'react'
import './styles/footer.css';
import './styles/zag.css';
import Logo from './img/frog.png';
import Tg from './img/tg_logo.png';
import Inst from './img/inst_logo.png';
import Wat from './img/wat_logo.png';
export const Footer = () => {
  return (
    <footer id="Contacts" className="footer">
        <div>
            <p className="zag">Contacts</p>
        </div>
        <div className="container">
            <div className="footer_rov">
            <nav className="footer_nav">
                <div className="footer_nav_col">
                    <p className="footer_button">Telephone: <a href="tel:+79000000000" className="footer_nav-link">+9-(999)-999-99-99</a></p>
                    <p className="footer_button">Mail: <a href="mailto:Super_Puper@gmail.com" className="footer_nav-link">Super_Puper@gmail.com</a></p>
                    <p className="footer_button">Address: <a href="https://maps.app.goo.gl/zKvZGZtgz4c3TcTD8" className="footer_nav-link">Moscow, Derzhinskaya 43</a></p>
                    <p className="footer_button">Social networks: <a href="https://web.telegram.org/a/" className="footer_nav-link_logo"><img src={Tg} alt="Телега" className="social_logo" /></a>
                                                                  <a href="https://www.instagram.com/" className="footer_nav-link_logo"><img src={Inst} alt="Инстаграмм" className="social_logo" /></a>
                                                                  <a href="https://www.whatsapp.com/?lang=ru" className="footer_nav-link_logo"><img src={Wat} alt="Ватсап" className="social_logo" /></a></p>
                </div>
            </nav>

            <nav className="footer_nav-mob">
                <div className="footer_nav_col">
                    <p className="footer_button">Telephone<a href="tel:+99999999999" className="footer_nav-link"><br />+9-(999)-999-99-99</a></p>
                    <p className="footer_button">Mail<a href="#!" className="footer_nav-link"><br />Super_Puper@gmail.com</a></p>
                    <p className="footer_button">Address<a href="https://maps.app.goo.gl/zKvZGZtgz4c3TcTD8" className="footer_nav-link"><br />Moscow, Derzhinskaya 43</a></p>
                    <p className="footer_button">Social networks:<br /> <a href="https://web.telegram.org/a/" className="footer_nav-link_logo"><img src={Tg} alt="Телега" className="social_logo" /></a>
                                                                        <a href="https://www.instagram.com/" className="footer_nav-link_logo"><img src={Inst} alt="Инстаграмм" className="social_logo" /></a>
                                                                        <a href="https://www.whatsapp.com/?lang=ru" className="footer_nav-link_logo"><img src={Wat} alt="Ватсап" className="social_logo" /></a></p>
                </div>
            </nav>
            
            <div className="logo_footer">
            <a href="#top_lig"><img id="bot_lig" src={Logo} alt="Логотип" className="ligus"/></a>
            </div>
            </div>
        </div>
    </footer>
  )
}
