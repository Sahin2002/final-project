import React from "react";
import "./smartsaat.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import beyaz from "../image/white.webp";
import siyah from "../image/black.webp";
import mavi from "../image/blue.webp";
import mor from "../image/mor.webp";
import turkaz from "../image/mavi.webp";
import Sebet from "../sebet/Sebet";
import { useState } from "react";

function Smartsaat() {
  const [name] = useState("0.4 TrackMate XE");
  const [seb, setSeb] = useState(false);
  const [sent] = useState(850.0);
  const [img, setImg] = useState(beyaz);
  const [color, setColor] = useState("beyaz");
  const [deyer, setDeyer] = useState(1);
  const dey = (event) => {
    setDeyer(event.target.value);
    console.log(event.target.value * sent);
  };
  
  const [uruns, setUruns] = useState([]);
 
 
  const urun = (event) => {
    setColor(event.target.className);
    setImg(event.target.id);
  };
  
  const open = () => {
    setSeb(true);
  };
  const close = () => {
    setSeb(false);
  };
  const siparis=()=>{
   const newProduct = {
     ad: name,
     qiymet: sent,
     rengi: color,
     resim: img,
     sayi: deyer,
   };

   setUruns((prevUruns) => [...prevUruns, newProduct]);  
   console.log(uruns)
    
  }

  return (
    <div className="urun">
      <Navbar seb={open} />
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
          <h1>{name}</h1>
          <span>Ürün Kodu: 0001</span>
          <h3>{sent}₺</h3>
          <div className="colors">
            <span>reng:{color}</span>
            <div className="color">
              <div onClick={urun} className="beyaz" id={beyaz}></div>
              <div onClick={urun} className="siyah" id={siyah}></div>
              <div onClick={urun} className="mavi" id={mavi}></div>
              <div onClick={urun} className="mor" id={mor}>
                
              </div>
              <div onClick={urun} className="turkaz" id={turkaz}></div>
            </div>
            <div className="number">
              <span>Adet</span>
              <input onClick={dey} type="number" placeholder="1"  min={1} name="" id="" />
              <div className="button">
                <button onClick={siparis}>Sebet ekle</button>
              </div>
            </div>
          </div>
          <div className="about">
            <div>
              <span>Urun Bilgisi</span>
              <div>
                <p>
                  Bu, bir ürün ayrıntısı. Burası, ürününüz ile ilgili boyut,
                  malzeme, bakım ve temizlik talimatları gibi daha fazla ayrıntı
                  eklemenin yanı sıra bu ürünün neden özel bir ürün olduğunu ve
                  müşterilerinizin ondan nasıl faydalanabileceklerini yazmak
                  için harika bir yer.
                </p>
              </div>
            </div>
            <div>
              <span>ÜRÜN VE PARA İADE POLİTİKASI</span>
              <div>
                <p>
                  LBu, bir Ürün ve Para İadesi Politikası. Burası,
                  müşterilerinizin aldıkları ürünlerden memnun kalmamaları
                  durumunda ne yapmaları gerektiğini anlatmak için harika bir
                  yer. Güven yaratmak ve müşterileri rahatça alışveriş
                  yapabileceklerine ikna etmek için net bir iade veya değişim
                  politikanızın olması gerekir.
                </p>
              </div>
            </div>
            <div>
              <span>GÖNDERİM BİLGİSİ</span>
              <div>
                <p>
                  Bu, bir gönderim bilgisi. Burası, gönderim yöntemleri,
                  paketleme ve ücretleriniz hakkında daha fazla bilgi vermek
                  için harika bir yer. Güven oluşturmak ve müşterilerinizi
                  sizden rahatça alışveriş yapabileceklerine ikna etmek için
                  gönderim politikanız hakkında net bilgi vermeniz gereklidir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {seb ? <Sebet seb={close} nev={uruns} /> : null}
    </div>
  );
}
export default Smartsaat;
