import React,{useState} from "react";
import './sebet.css';
function Sebet({seb,nev,sel}){


    console.log(seb)
console.log()    

    return (
      <div>
        <div className="sebet">
          <div className="text">
            <div onClick={seb} className="close"></div>
            <div>
              <h3>Alışveriş Sepeti</h3>
            </div>
          </div>
          <div className="seb">
            {nev.map((item) => (
              <div className="urunler">
                <img src={item.resim} alt="" />

                <div className="urun-about">
                  <span>{item.ad}</span>
                  <span>{item.qiymet}</span>
                  <span>{item.sayi}</span>
                </div>
                <div className="cl">
                  <i onClick={sel} class="fa-solid fa-x"></i>
                </div>
              </div>
            ))}
            <div className="fiyat">
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    );

}
export default Sebet;