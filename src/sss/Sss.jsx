import React,{useState} from "react";
import './sss.css';
import Navbar from "../navbar/Navbar";
import Sebet from "../sebet/Sebet";
function Sss(){
   const [seb, SetSeb] = useState(false);
   const open = () => {
     SetSeb(true);
     console.log(seb);
   };
   const close = () => {
     SetSeb(false);
   };
  
    
    return (
      <div className="SSS">
        <Navbar seb={open}/>
        <div>SSS</div>
        {seb ? <Sebet seb={close} /> : null}
      </div>
    );
}
export default Sss;