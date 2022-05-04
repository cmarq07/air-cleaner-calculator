// Import Libraries
import React from 'react';
import { Routes, Route } from "react-router-dom";

// Import Component Pages
import Home from './components/Home.js';
import FormLanding from './components/FormLanding.js';
import Calculator from './components/Calculator.js';
import Resources from './components/Resources.js';
import About from './components/About.js';


export default function RouteUrl(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/formlanding" element={<FormLanding />} />
            <Route path="/calculator" element={<Calculator airCleaners={props.data}/>} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}