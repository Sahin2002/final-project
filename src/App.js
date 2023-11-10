import React from 'react';
import './App.css';
import Home from'./home/Home';
import Sss from'./sss/Sss';
import{Routes,Route} from'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Sss" element={<Sss />}></Route>
      </Routes>
    </div>
  );
}

export default App;
