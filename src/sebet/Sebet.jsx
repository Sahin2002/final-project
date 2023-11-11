import React from "react";
import './sebet.css';
function Sebet({seb}){
    console.log(seb)
    
    return (
      <div>
        
          <div className="sebet">
            <div className="text">
              <div onClick={seb} className="close"></div>
              <div>
                <h3>Alışveriş Sepeti</h3>
              </div>
            </div>
            <div className="seb">sebet bos</div>
          </div>
        
      </div>
    );

}
export default Sebet;