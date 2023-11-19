import React from "react";
import './sebet.css';
function Sebet({seb,nev}){
    console.log(seb)
console.log(nev.rengi)    
  
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
            {nev.map((item, index) => (
              <div className="urunler" key={index}>
                
                  <img src={item.resim} alt="" />
                
                <div className="urun-about">
                  <span>{item.ad}</span>
                  <span>{item.qiymet}</span>
                  <span>{item.sayi}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

}
export default Sebet;