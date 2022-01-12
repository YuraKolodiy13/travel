import React from "react";
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Homepage from "./Homepage/Homepage";
import Hotel from "./Hotel/Hotel";

const App = () => {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/hotel/:countryCode/:hotelName/q=:id" element={<Hotel/>}/>
      </Routes>

    </div>
  );
};

export default App;
