import React, { useState } from "react";
import './Home.css';
import '../fonts/font.css'
import background from'../image/trackmate.webp';
import Navbar from "../navbar/Navbar";

function Home(){
    const [seb,SetSeb]=useState(false);
    const  opes=()=>{
        SetSeb(true)
        console.log(seb)
    }
    const close=()=>{
        SetSeb(false);
    }
    return (
      <div className="home">
        <Navbar seb={opes} />
        <div className="section-1">
          <div>
            <h3>Günlük Rutininizi Yaratın</h3>
            <h1>0.4 TrackMate XE</h1>
            <h3>Her adımınızda sizi motive eden sağlık takip cihazı</h3>
            <div className="button">
              <button>Hemen Al</button>
            </div>
          </div>
          <div className="image">
            <img src={background} alt="" />
          </div>
        </div>
        { seb ?(<div className="sebet">
          <div className="text">
            <div onClick={close} className="close"></div>
            <div>
              <h3>Alışveriş Sepeti</h3>
            </div>
          </div>
          <div className="seb">sebet bos</div>
        </div>):null}
      </div>
    );
}
export default Home;