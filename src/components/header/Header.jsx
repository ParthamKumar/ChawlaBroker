import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/logosticker.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello This is <strong>National Trader</strong></h5>
        <h1>Chawla Broker</h1>
        <h5 className='text-light'>Cultivating Connections, Nourishing Nations </h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        {/* <a href="#contact" className='scroll__down'> Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header
