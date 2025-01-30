import React from 'react'
import './CSS/Loginsignup.css'
export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-field">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Your email' />
        <input type="password" placeholder='Your Name' />
        </div>
        <button>Continue</button>
        <p className='liginsignup-login'>Already have an account?<span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By clicking you agree to our term and condiction</p>
        </div>
      </div>
    </div>
  )
}
export default LoginSignup