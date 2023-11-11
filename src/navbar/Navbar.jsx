import React, { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
function Navbar({seb}){
    const [num]=useState(0);
    const [navs,setNavs]=useState(false);
        
    
  const open=()=>{
   setNavs(true);
  
  }    
  const close=()=>{
    setNavs(false);
  }
    
return (
  <div>
    {navs ? (
      <div className="menu-nav">
        <div className="menu">
          <div className="logins">
            <Link className="a" to="/Login">
              <i class="fa-solid fa-user"></i>
            </Link>
            <Link className="a" to="/Sss">
              <p>Giris</p>
            </Link>
          </div>
        </div>
        <div className="menu-s">
          <div className="sss">
            <Link className="a" to="/Sss">
              SSS
            </Link>
          </div>
          <div className="buttons">
            <Link className="a" to="/Urun">
              Hemen Al
            </Link>
          </div>
        </div>
        <div className="nav">
          <div className="mb-navs">
            <label onClick={close} className="burgers" for="burger">
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </div>
    ) : (
      <div className="header">
        <div className="logo">
          <div className="logos">
            <div></div>
          </div>
          <div className="text">
            <Link className="a" to="/">
              TrackMate
            </Link>
          </div>
        </div>
        <div className="nav">
          <div className="">
            <Link className="a sss colors" to="/Sss">
              SSS
            </Link>
          </div>
          <div className="login">
            <div>
              <Link className="a" to="/Login">
                <i class="fa-solid fa-user"></i>
              </Link>
            </div>
            <Link className="a" to="/Login">
              <p className="colors">Giris</p>
            </Link>
          </div>
          <div className="shop">
            <Link onClick={seb} className="a" to="/">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
            <p>{num}</p>
          </div>
          <div className="mb-nav">
            <label class="burger" for="burger">
              <input onClick={open} type="checkbox" id="burger" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="button">
            <Link className="a" to="/Urun">
              Hemen Al
            </Link>
          </div>
        </div>
      </div>
    )}
  </div>
);
}
export default Navbar;