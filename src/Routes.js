import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import FormLanding from './components/FormLanding.js';
import FormTwo from './components/FormTwo.js';
import FormThree from './components/FormThree.js';
import FormFour from './components/FormFour.js';
import EfficiencyDashboard from './components/EfficiencyDashboard.js';
import Calculator from './components/Calculator.js';


export default function RouteUrl(props) {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formlanding" element={<FormLanding />} />
            <Route path="/formtwo" element={<FormTwo />} />
            <Route path="/formthree" element={<FormThree />} />
            <Route path="/formfour" element={<FormFour />} />
            <Route path="/efficiencydashboard" element={<EfficiencyDashboard />} />
            <Route path="/calculator" element={<Calculator />} />
        </Routes>
    );
}