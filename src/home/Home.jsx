import React, { useState } from "react";
import './Home.css';
import '../fonts/font.css'
import Trackmate from'../image/track.webp';
import icon from'../image/section-2-icon.png';
import smart from'../image/smart.png';
import smarts from'../image/section-3-smartsaat.png';
import messeger from"../image/messeger.png";
import goz from'../image/goz.png';
import smartsaat from'../image/section-4.png';
import section5icon from'../image/section-5. icons.png';
import section6 from'../image/section-6-saat.png';
import pil from'../image/pil.png';
import kablosuz from'../image/kablusuz0sarj.png';
import bluetooh from'../image/bluetoh.png';
import su from'../image/su.png';
import Navbar from "../navbar/Navbar";
import Sebet from "../sebet/Sebet";
function Home(){
    const [seb,SetSeb]=useState(false);
    const  open=()=>{
        SetSeb(true)
        console.log(seb)
    }
    const close=()=>{
        SetSeb(false);
    }
    return (
      <div className="home">
        <Navbar seb={open} />
        <div className="section-1">
          <div className="text">
            <span>Günlük Rutininizi Yaratın</span>
            <h1>0.4 TrackMate XE</h1>
            <span>Her adımınızda sizi motive eden sağlık takip cihazı</span>
            <div className="button">
              <button>Hemen Al</button>
            </div>
          </div>
          <div className="imagess">
            <img src={Trackmate} alt="" />
          </div>
        </div>
        <div className="section-2">
          <div className="image1">
            <div className="text">
              <div className="icons">
                <img src={icon} alt="" />
                <span>EGZERSİZ TAKİBİ</span>
              </div>
              <div>
                <h1>Doğru Egzersiz İstatistikleriyle Rutininizi Ayarlayın</h1>
                <p>
                  Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.
                  İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni
                  Düzenle”ye tek tıklayın veya buraya çift tıklayın.
                </p>
              </div>
            </div>
          </div>
          <div className="image2">
            <div className="section2-image">
              <img src={smart} alt="smart" />
            </div>
          </div>
        </div>
        <div className="section-3">
          <div className="left">
            <img src={smarts} alt="smarts" />
          </div>
          <div className="right">
            <div>
              <img src={messeger} alt="messger" />
              <span>BİLDİRİM SİSTEMİ</span>
            </div>
            <div>
              <h1>Programa Uymanız için Hatırlatmalar</h1>
              <p>
                Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.
                İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni
                Düzenle”ye tek tıklayın veya buraya çift tıklayın.
              </p>
            </div>
          </div>
        </div>
        <div className="section-4">
          <div>
            <img src={goz} alt="goz" />
            <h1>Tarzınıza Uygun Kayış Seçenekleri</h1>
            <p>
              Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.
              İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni
              Düzenle”ye tek tıklayın veya buraya çift tıklayın.
            </p>
          </div>
          <div>
            <img src={smartsaat} alt="saat" />
          </div>
          <div className="button">
            <button>Hemen Al</button>
          </div>
        </div>
        <div className="section-5">
          <div>
            <img src={section5icon} alt="" />
            <span>UYARI SİSTEMİ</span>
          </div>
          <div>
            <h1>Bedeniniz Size Rehberlik Etsin</h1>
            <p>
              Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.
              İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni
              Düzenle”ye tek tıklayın veya buraya çift tıklayın.
            </p>
          </div>
        </div>
        <div className="section-6">
          <h1>0.4 TrackMate XE Teknik Özellikler</h1>
          <img src={section6} alt="" />
          <div className="section-6-main">
            <div className="div">
              <div>
                <img src={pil} alt="" />
                <span>20 Saat Pil Ömrü</span>
              </div>
              <p>Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.</p>
            </div>
            <div className="div">
              <div>
                <img src={bluetooh} alt="" />
                <span>Bluetooth Bağlantısı</span>
              </div>
              <p>Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.</p>
            </div>
            <div className="div">
              <div>
                <img src={kablosuz} alt="" />
                <span>Kablosuz Şarj</span>
              </div>
              <p>Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.</p>
            </div>
            <div className="div">
              <div>
                <img src={su} alt="" />
                <span>Suya Dayanıklılık</span>
              </div>
              <p>Bu, bir paragraf. Kendi metninizi eklemek için tıklayın.</p>
            </div>
          </div>
          <div className="button">
            <button>Hemen Al</button>
          </div>
        </div>
        <div className="section-7">
          <div></div>
          <div></div>
        </div>
        {seb ? <Sebet seb={close} /> : null}
      </div>
    );
}
export default Home;