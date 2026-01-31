import React from 'react'
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import './components/styles/bg_osnova.css';
import bgImage from "./components/img/bg.png";
import { Master } from './components/Master';
import { Product } from './components/Product';
import { Footer } from './components/Footer';
import bgFooter from './components/img/bg_footer.png';
export const Home = () => {
  return (
    <div>
      <Hero/>

      <div
        className="bg_fon"
        style={{ 
          backgroundImage: `url(${bgImage})`
        }}
        >
        

        <Master/>

        <Services/>

        <Product/>

        

      
      </div>
      <div className="bg_foot"
      style={{
        backgroundImage : `url(${bgFooter})`
      }}>
      <Footer/>
      </div>
    </div>
  )
}
