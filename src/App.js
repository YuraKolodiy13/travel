import React from "react";
import {Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Homepage from "./containers/Homepage/Homepage";
import Tour from "./containers/Tour/Tour";
import Catalog from "./containers/Catalog/Catalog";
import './assets/styles/globals.scss'
import Tours from "./containers/Tours/Tours";

const App = () => {



  return (
    <div className='App'>
      <div className="header-container">
        <Header/>
      </div>
      <div className="main-container">
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/hotel/:hotelName" element={<Tour/>}/>
            <Route path="/hotel/:hotelName/q=:id" element={<Tour/>}/>
            <Route path="/tours/:country" element={<Tours/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
