import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Routes from './Routes.js';

export default function App() {

  const [airCleanerList, setAirCleanerList] = useState([])
  // test below!
  const [data, setData] = React.useState(null);


  const getData = async () => {
    let response = await fetch("https://data.energystar.gov/resource/jmck-i55n.json")
    let airCleaners = await response.json()

    setAirCleanerList(airCleaners)
  }

  useEffect(() => {
    getData()
  }, [])

  // whenever the state values in [] change, this hook runs! if [] is empty, it runs immediately!
  // idea: pass in UPCs as a query here?
  useEffect(() => {
    fetch("/upc/fetch")
      .then((res) => res.json())
      .then((data) => setData(data));
      console.log(data);
  }, []);
  
  return (
    <Router>
      <Header />
      <Routes data={airCleanerList} />
      <Footer />
    </Router>
  );

}