import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Coins from './Components/Coins';
import Exchanges from './Components/Exchanges';
import Footer from './Components/Footer';
// import Nomatch from './Components/Nomatch';
import CoinDetail from './Components/CoinDetail';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/Coins/:id" element={<CoinDetail />} />
        {/* <Route path="*" element={<Nomatch />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}
