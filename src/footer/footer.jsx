import React from'react';
import './footer.css';
import visa from"../image/visa.png";
import umion from "../image/uniomn pay.png";
import jsc from "../image/jcb.png";
import amercan from "../image/american.png";
import master from "../image/master.png";
import discoven from "../image/discover.png";
import paypal from "../image/paypal.png";
import disner from "../image/dinersclub.png";
import { Link } from 'react-router-dom';
function Footer(){
 return (
   <div className="footer">
     <div className='first'>
       <ul>
         <li>
           <Link
             className="linki"
             to="https://www.instagram.com/_sahin_d/?next=%2F"
           >
             Instagram
           </Link>
         </li>
         <li>
           <Link to="https://www.facebook.com/" className="linki">
             Facebook
           </Link>
         </li>
         <li>
           <Link to="https://twitter.com/" className="linki">
             Twitter
           </Link>
         </li>
         <li>
           <Link to="https://www.tiktok.com/" className="linki">
             Tiktok
           </Link>
         </li>
         <li>
           <Link to="https://www.youtube.com/" className="linki">
             Youtube
           </Link>
         </li>
       </ul>
       <ul>
         <li>Şart ve Koşullar</li>
         <li>Gönderim Politikası</li>
         <li>Gizlilik Politikası</li>
         <li>Çerez Politikası</li>
       </ul>
     </div>
     <div className='border'></div>
     <div className='last'>
       <p>© 2035, TrackMate.</p>
       <div>
         <img src={visa} alt="visa" />
         <img src={master} alt="master" />
         <img src={umion} alt="uniomn" />
         <img src={jsc} alt="jcb" />
         <img src={amercan} alt="american" />
         <img src={discoven} alt="discover" />
         <img src={disner} alt="dinersclub" />
         <img src={paypal} alt="paypal" />
       </div>
     </div>
   </div>
 );
}
export default Footer;