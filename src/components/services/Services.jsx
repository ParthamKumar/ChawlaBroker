import React from 'react'
import './services.css'
import {BsCheck2Circle} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What We Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Customization</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Provides the product according to your choice</p>
            </li>

            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Let's you updated with <strong>Market Rates</strong></p>
            </li>


            {/* <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>We are <strong>Buyer</strong> of </h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Rice </p>
            </li>

            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Raw Husk</p>
            </li>

            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Wheat</p>
            </li>


            {/* <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>We are <strong>Seller</strong> of </h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Rice </p>
            </li>

            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Husk</p>
            </li>

            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Paddy</p>
            </li>

            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Wheat</p>
            </li>

            {/* <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* ///////////////////////////////////////////////////////////////////////////////// */}
        
        {/* ///////////////////////////////////////////////////////////////////////// */}
        
        {/* ///////////////////////////////////////////////////////////////////////// */}
      </div>
    </section>
  )
}

export default Services
