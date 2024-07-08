import React from 'react';
import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AddToDoPge from './components/AddToDoPge';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/HomePage"element={<HomePage/>}/> 
          <Route path="/AddToDoPge" element={<AddToDoPge/>} />
          </Routes>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
