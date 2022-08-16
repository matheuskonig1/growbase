import React from 'react';
import { Navbar } from './components/Navbar/Navbar'
import { Heroes } from './components/Heroes/Heroes'
import { Cards } from './components/Cards/Cards'
import { Pricing } from './components/Pricing/Pricing'
import { Footer } from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Heroes/>
      <Cards/>
      <Pricing/>
      <Footer/>
    </>
  );
}

export default App;
