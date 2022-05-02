// Import Libraries
import React from 'react';
import { Routes, Route } from "react-router-dom";

// Import Component Pages
import Home from './components/Home.js';
import FormLanding from './components/FormLanding.js';
import Calculator from './components/Calculator.js';


export default function RouteUrl(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formlanding" element={<FormLanding />} />
            <Route path="/calculator" element={<Calculator airCleaners={props.data}/>} />
        </Routes>
    );
}