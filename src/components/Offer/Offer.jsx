import React from 'react'
import './Offer.css'
import exclucive from '../Assets/exclusive.png'
export const Offer = () => {
  return (
    <div className='offers'>
        <div className="offer-left">
            <h1>EXCLUSIVE</h1>
            <h1>offers for you!</h1>
            <p>ONLY ON BEST SELLER PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclucive} alt="" />
        </div>

    </div>
  )
}
