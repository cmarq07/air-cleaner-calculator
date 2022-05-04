// Import Libraries
import React from 'react';
import { Routes, Route } from "react-router-dom";

// Import Component Pages
import Home from './components/Home.js';
import FormLanding from './components/FormLanding.js';
import Calculator from './components/Calculator.js';
import Resources from './components/Resources.js';
<<<<<<< HEAD
import CompletedForm from './components/CompletedForm';
=======
import About from './components/About.js';
>>>>>>> b6d7787fb649be5e7ca5af25d9ae7e355860b29c


export default function RouteUrl(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/formlanding" element={<FormLanding />} />
            <Route path="/calculator" element={<Calculator airCleaners={props.data}/>} />
<<<<<<< HEAD
            <Route path="/completeform" element={<CompletedForm/>} />
=======
            <Route path="/about" element={<About />} />
>>>>>>> b6d7787fb649be5e7ca5af25d9ae7e355860b29c
        </Routes>
    );
}