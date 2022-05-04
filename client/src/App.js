import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Routes from './Routes.js';

import * as d3 from 'd3';
import PACdata from './data/air_cleaner_list.csv';

export default function App() {

  const [airCleanerList, setAirCleanerList] = useState([])
  // test below!
  const [data, setData] = React.useState(null);


  /*
  const getData = async () => {
    let response = await fetch("https://data.energystar.gov/resource/jmck-i55n.json")
    let airCleaners = await response.json()

    setAirCleanerList(airCleaners)
  }*/

  const getData = async () => {
    const result = await d3.csv(PACdata, (d) => {
      return {
          name: d['Name'],
          cadr: +d['CADR (smoke)'],
          price: d['Price (USD)'] === '' ? -1 : +d['Price (USD)'],
          noise: d['Noise Rating (db)'] === '' ? -1 : +d['Noise Rating (db)'],
          power: d['Power (W)'] === '' ? -1 : +d['Power (W)'],
          size: d['Size (in)'],
          link: d['Link'],
          image: d['Image Link']
        }
    });
    
  setAirCleanerList(result);

  }


  useEffect(() => {
    getData()
  }, [])

  // whenever the state values in [] change, this hook runs! if [] is empty, it runs immediately!
  /*
  useEffect(() => {
    fetch("/upc/fetch")
      .then((res) => res.json())
      .then((data) => setData(data));
      console.log(data);
  }, []);*/
  
  return (
    <Router>
      <Header />
      <Routes data={airCleanerList} />
      <Footer />
    </Router>
  );

}