import React from "react";
import './sebet.css';
function Sebet({seb,nev}){
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
            <div className="seb">
             <div>
                
             </div>
            </div>
          </div>
        
      </div>
    );

}
export default Sebet;