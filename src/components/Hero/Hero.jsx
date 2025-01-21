import React from 'react'
import './Hero.css'
import handicon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow_icon.png'
import hero from '../Assets/hero.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="Hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                <p>new</p>
                <img src={handicon} alt="hand_icon" />
                </div>
            </div>
            <p>Collections</p>
            <p>for everyone</p>
        
        <div className="hero-latest-button">
            <div>latest Collections
            <img src={arrow_icon} alt='arrow_icon'/>
            </div>
            </div>
            
            </div>
        <div className="hero-right">
            <img src={hero} alt="" />
        </div>
    </div>
  )
}
export default Hero
