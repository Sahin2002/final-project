import React, { useState } from "react";
import "./sss.css";
import Navbar from "../navbar/Navbar";
import Sebet from "../sebet/Sebet";
import Icon from'../image/img.webp';
function Sss() {
  const [gen, SetGen] = useState(false);
  const [seb, SetSeb] = useState(false);
  const open = () => {
    SetSeb(true);
    console.log(seb);
  };
  const close = () => {
    SetSeb(false);
  };
  const opens = () => {
    SetGen(true);
    console.log(seb);
  };
  const closes = () => {
    SetGen(false);
  };

  return (
    <div className="SSS">
      <Navbar seb={open} />
      <div className="sss-menu">
        <h1>SSS</h1>       
        
        <div className="list">
          <ul className="menu ul">
            <li onClick={closes}>SSS'lerin Ayarlanması</li>
            <li onClick={opens}>Genel</li>
          </ul>
          <div className="list-menu">
            {gen ? (
              <div>
                <div className="page-1">
                  <div className="text">
                    <h3>SSS Bölümü ne işe yarar?</h3>
                    <div>
                      <span></span>
                    </div>
                  </div>
                  <div className="div">
                    <p>
                      SSS bölümü, "Gönderim bölgeleriniz nelerdir?", "Çalışma
                      saatleriniz nelerdir?" veya "Nasıl hizmet randevusu
                      alabilirim?" gibi, işletmenizle ilgili yaygın olarak
                      sorulan sorulara cevap vermek için kullanılabilir.
                      SSS'lar, ziyaretçilerinizin sitenizde kolayca gezinmesine
                      yardım eder ve hatta sitenizin SEO'sunu geliştirebilir.
                    </p>

                    <img className="img" src={Icon} alt="" />
                    <ul className="ul">
                      <li>
                        <i class="fa-brands fa-facebook"></i>
                      </li>
                      <li>
                        <i class="fa-brands fa-x-twitter"></i>
                      </li>
                      <li>
                        <i class="fa-brands fa-linkedin"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-link"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="page-1">
                  <div className="text">
                    <h3>Yeni bir soru ve cevap nasıl eklenir?</h3>
                    <div>
                      <span></span>
                    </div>
                  </div>
                  <div className="div">
                    <p>Yeni bir SSS eklemek için şu adımları izleyin:</p>
                    <ol>
                      <li>SSS'ları Yönet' düğmesine tıklayın.</li>
                      <li>
                        Sitenizin kontrol panelinden 'Yeni Ekle' düğmesine
                        tıklayın ve ardından 'Soru ve cevap' seçeneğini seçin.
                      </li>
                      <li>
                        Yeni eklenen her soru ve cevap, bir kategoriye
                        atanmalıdır.
                      </li>
                      <li>Kaydedin ve yayınlayın.</li>
                    </ol>
                    <p>
                      İstediğiniz her zaman SSS'larınızı düzenleyebilir,
                      sıralarını değiştirebilir ve başka kategoriler
                      seçebilirsiniz.
                    </p>
                    <ul className="ul">
                      <li>
                        <i class="fa-brands fa-facebook"></i>
                      </li>
                      <li>
                        <i class="fa-brands fa-x-twitter"></i>
                      </li>
                      <li>
                        <i class="fa-brands fa-linkedin"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-link"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="page-1">
                  <div className="text">
                    <h3>
                      SSS'larıma bir görüntü, video veya gif yerleştirebilir
                      miyim?
                    </h3>
                    <div>
                      <span></span>
                    </div>
                  </div>
                  <div className="div">
                    <p>Evet. Medya eklemek için şu adımları izleyin:</p>
                    <ol>
                      <li>Uygulamanın Ayarlar bölümüne girin</li>
                      <li>'SSS'ları Yönet' düğmesine tıklayın</li>
                      <li>
                        Medya eklemek istediğiniz soruyu oluşturun veya mevcut
                        sorular arasından seçin
                      </li>
                      <li>
                        Cevabınızı düzenlerken video, görüntü veya gif'in
                        üzerine tıklayın
                      </li>
                      <li>Kütüphanenizden medya ekleyin ve kaydedin</li>
                    </ol>
                    <ul className="ul">
                      <li>
                        <i class="fa-brands fa-facebook"></i>
                      </li>
                      <li>
                        <i class="fa-brands fa-x-twitter"></i>
                      </li>
                      <li>
                        <i class="fa-brands fa-linkedin"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-link"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="page-1">
                  <div className="text">
                    <h3>"SSS" başlığını nasıl düzenler veya kaldırırım?</h3>
                    <div>
                      <span></span>
                    </div>
                  </div>
                  <div className="div">
                    <p>
                      Başlığı, uygulamadaki Ayarlar sekmesinden
                      düzenleyebilirsiniz. Başlığı göstermek istemiyorsanız
                      'Gösterilecek Bilgiler' altından başlığı devre dışı
                      bırakın.
                    </p>
                    <ul className="ul">
                      <li>
                        <i class="fa-brands fa-facebook"></i>
                      </li>
                      <li>
                        <i class="fa-brands fa-x-twitter"></i>
                      </li>
                      <li>
                        <i class="fa-brands fa-linkedin"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-link"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {seb ? <Sebet seb={close} /> : null}
    </div>
  );
}
export default Sss;
