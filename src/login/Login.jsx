import React from "react";
import './login.css';
import { Link } from "react-router-dom";
function Login(){
    return (
      <div className="main">
        <div className="con">
          <Link to="/">
            <div className="close">
              <span></span>
              <span></span>
            </div>
          </Link>
        </div>

        <div className="demo">
          <h1>Demo Modu</h1>
          <p>Bu şablonu özelleştirmek için düzenlemeye başlayın.</p>
          <Link to='/'>
            <button>Tamam</button>
          </Link>
        </div>
      </div>
    );
}
export default Login;