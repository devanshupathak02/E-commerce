import React from 'react'
import './NewLetter.css'
export const NewLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET Exclusive Offers On Your E-mail</h1>
        <p>Subscribe to our news-letter and stay updated</p>
        <div>
            <input type="email"placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>

    </div>
  )
}
export default NewLetter