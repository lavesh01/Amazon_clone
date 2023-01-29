import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import Checkout from "./Checkout/Checkout"
import Header from "./Header/Header";
import Home from "./Home/Home";
import React from 'react';

const App = () => (
  <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
  </Router>
);


export default App;
