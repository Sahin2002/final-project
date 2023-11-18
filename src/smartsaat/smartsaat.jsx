import React from "react";
import "./smartsaat.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import beyaz from "../image/white.webp";
import siyah from'../image/black.webp';
import mavi from'../image/blue.webp';
import mor from'../image/mor.webp';
import turkaz from "../image/mavi.webp";
import { useState } from "react";
function Smartsaat() {
  const [sent , setSent]=useState(850.00);
  const [img,setImg]=useState(beyaz);
  const [color,setColor]=useState("beyaz");
  const  dey=(event)=>{
    console.log(event.target.value*sent)
  }
  const urun=(event)=>{
    setColor(event.target.className)
    setImg(event.target.id)
  }
  
  return (
    <div className="urun">
      <Navbar />
      <div className="divs">
        <div className="left">
          <img src={img} alt="" />
          <p>
            Bu, bir ürün açıklaması. Burası, ürününüz ile ilgili boyut, malzeme,
            bakım ve temizlik talimatları gibi daha fazla ayrıntı eklemek için
            harika bir yer.
          </p>
        </div>
        <div className="right">
          <h1>0.4 TrackMate XE</h1>
          <span>Ürün Kodu: 0001</span>
          <h3>{sent}₺</h3>
          <div className="colors">
            <span>reng:{color}</span>
            <div className="color">
              <div onClick={urun} className="beyaz" id={beyaz}></div>
              <div onClick={urun} className="siyah" id={siyah}></div>
              <div onClick={urun} className="mavi" id={mavi}></div>
              <div onClick={urun} className="mor" id={mor}> </div>
              <div onClick={urun} className="turkaz" id={turkaz}></div>
            </div>
            <div className="number">
              <span>Adet</span>
              <input onClick={dey} type="number" min={1} name="" id="" />
              <div className="button">
                <button>Sebet ekle</button>
              </div>
            </div>
          </div>
          <div className="about">
            <div>
              <span>Urun Bilgisi</span>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus quis odio perferendis error! Accusantium necessitatibus
                  corrupti tempore expedita, nihil voluptatem, natus fugiat,
                  possimus minus non dolorem cupiditate error earum odit.
                </p>
              </div>
            </div>
            <div>
              <span>Urun Bilgisi</span>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus quis odio perferendis error! Accusantium necessitatibus
                  corrupti tempore expedita, nihil voluptatem, natus fugiat,
                  possimus minus non dolorem cupiditate error earum odit.
                </p>
              </div>
            </div>
            <div>
              <span>Urun Bilgisi</span>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus quis odio perferendis error! Accusantium necessitatibus
                  corrupti tempore expedita, nihil voluptatem, natus fugiat,
                  possimus minus non dolorem cupiditate error earum odit.
                </p>
              </div>
            </div>
          </div>
          <div className="sosyal-media"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Smartsaat;
