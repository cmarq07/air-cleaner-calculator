import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Routes from './Routes.js';

export default function App() {

  const [airCleanerList, setAirCleanerList] = useState([])

  const getData = async () => {
    let response = await fetch("https://data.energystar.gov/resource/jmck-i55n.json")
    let airCleaners = await response.json()

    setAirCleanerList(airCleaners)
  }

  useEffect(() => {
    getData()
  }, [])
  
  console.log(airCleanerList)
  return (
    <Router>
      <Header />
      <Routes data={airCleanerList} />
      <Footer />
    </Router>
  );

}