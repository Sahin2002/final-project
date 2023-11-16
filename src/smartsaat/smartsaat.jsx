import React from "react";
import "./smartsaat.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import white from "../image/white.webp";

function smartsaat() {
  return (
    <div className="urun">
      <Navbar />
      <div className="divs">
        <div>
          <img src={white} alt="" />
          <p>
            Bu, bir ürün açıklaması. Burası, ürününüz ile ilgili boyut, malzeme,
            bakım ve temizlik talimatları gibi daha fazla ayrıntı eklemek için
            harika bir yer.
          </p>
        </div>
        <div>
          <h1>0.4 TrackMate XE</h1>
          <span>Ürün Kodu: 0001</span>
          <h3>850,00₺</h3>
          <div className="colors">
            <span>reng:</span>
            <div className="color">

            </div>
            <div className="number">
                <span>Adet</span>
                <input type="number" name="" id="" />
                <div className="button">
                    <button>Sebet ekle</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default smartsaat;
