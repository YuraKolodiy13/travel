import React from "react";
import {Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Homepage from "./containers/Homepage/Homepage";
import Hotel from "./containers/Hotel/Hotel";
import Tour from "./containers/Tour/Tour";
import Catalog from "./containers/Catalog/Catalog";
import './assets/styles/globals.scss'

const App = () => {

  return (
    <div className='App'>
      <div className="container">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/hotel/:countryCode/:hotelName" element={<Hotel/>}/>
          <Route path="/hotel/:countryCode/:hotelName/q=:id" element={<Tour/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
