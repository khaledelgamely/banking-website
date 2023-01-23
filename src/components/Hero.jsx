import React from 'react'
import { discount, robot, arrowUp } from '../assets'
import "../styles/hero.css"

const Hero = () => (

  <section id='home' className="hero">
    <div className="heroDetails">
      <div className="heroDiscount">

        <img src={discount} alt = ""/>
        <p className="prg">

          <span className='text-white'>20% </span>
          Discount For {" "}
          <span className='text-white'>1 Month </span>
          Account

        </p>
      </div>
      <div className="heroGeneration">
        <div className="kkk">
          <h1 className='text-white'>The Next <br className='hidden' />
            <h1 className='text-gradient'>Generation</h1>
          </h1>
          <div className="getStarted text-gradient">
            <p className=''><span>GET</span> <img src={arrowUp} alt="" /></p>
            <span>STARTED</span>
          </div>
        </div>
        <h1 className='text-white '>
          Payment Method
        </h1>
        <p className="heroParagraph">
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.
        </p>
      </div>
    </div>
    <div className="heroImg">
      <img src={robot} alt="" />
    </div>

  </section>
)


export default Hero