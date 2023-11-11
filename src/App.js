import React from 'react';
import './App.css';
import './fonts/font.css';
import Home from'./home/Home';
import Sss from'./sss/Sss';
import Login from './login/Login';
import{Routes,Route} from'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Sss" element={<Sss />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
