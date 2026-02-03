import React from 'react';
import './styles/hero.css';
import { useState } from "react";
// import bgImage from './img/bg_hero.png';
import Logo from './img/frog.png'

export const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
  
    <section className="hero_bg">
      <header className={`header ${open ? "open" : ""}`}>
        <div className="container_header header_container">

          <button
            className="header_btn"
            onClick={() => setOpen(!open)}
          >
            <span></span><span></span><span></span>
          </button>
          <div className="inv"><span></span></div>
                <nav className="menu">
                  <ul className="menu_list">
                    <li className="menu_items">
                        <a className="menu_link" href="#Master">Master</a>
                    </li>
                    <li className="menu_items">
                        <a className="menu_link" href="#Services">Services</a>
                    </li>
                    <li className="menu_items">
                        <a className="menu_link" href="#Product">Product</a>
                    </li>
                    <li className="menu_items">
                        <a className="menu_link" href="#Contacts">Contacts</a>
                    </li>
                  </ul>
                </nav>
          <a id="top_lig" href="#bot_lig" className="logo">
            <img  className="logo_img" src={Logo} alt="Логотип" />
          </a>
        </div>
      </header>


      <div id="top_moment" className="hero__content">
        <h1>Frog Cult</h1>
      </div>
    </section>

  );
};



        // <nav className="hero__nav">
        //   <a href="#Master">Master</a>
        //   <a href="#Services">Services</a>
        //   <a href="#Product">Product</a>
        //   <a href="#Contacts">Contacts</a>
        // </nav>