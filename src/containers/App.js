import React from "react";
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Homepage from "./Homepage/Homepage";
import Hotel from "./Hotel/Hotel";
import Header from "../components/Header/Header";

const App = () => {

  return (
    <div className='App'>
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/hotel/:countryCode/:hotelName/q=:id" element={<Hotel/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
