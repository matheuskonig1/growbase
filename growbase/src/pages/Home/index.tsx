import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Heroes } from '../../components/Heroes/Heroes';
import { Cards } from '../../components/Cards/Cards';
import { Pricing } from '../../components/Pricing/Pricing';
import { Footer } from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Navbar/>
          <Heroes/>
          <Cards/>
          <Pricing/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default Home;
