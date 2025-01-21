import React, { useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.jpeg';
import cart_icon from '../Assets/cart_icon.jpeg';
import { Link, } from 'react-router-dom';


const Navbar = () => {
    const [menu,setmenu]=useState()
    return(
        
        <div className="navbar">
            <div className="nav_logo">
                <img src={logo} alt="logo" />
                <p>Shoppers</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration : 'none',color:'inherit'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration : 'none',color:'inherit'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("women")}}><Link style={{textDecoration : 'none',color:'inherit'}} to='/womens'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration : 'none',color:'inherit'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
               <Link to='/login'><button>Login</button></Link> 
                <div className="nav-bar-counter">0</div>
                <Link to='/cart'><img src={cart_icon} alt="cart icon" /></Link>
                
            </div>
        </div>
    )
}
export default Navbar
