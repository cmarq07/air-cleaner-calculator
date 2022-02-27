import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Routes from './Routes.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
