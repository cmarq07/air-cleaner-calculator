import { Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import FormLanding from './components/FormLanding.js';
import FormTwo from "./components/FormTwo.js";
import FormFour from "./components/FormFour.js"

export function RouteUrl() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formlanding" element={<FormLanding />} />
            <Route path="/formtwo" element={<FormTwo />} />
            <Route path="/formfour" element={<FormFour />} />
        </Routes>
    );
}

export default RouteUrl;