import { Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import FormLanding from './components/FormLanding.js';

export function RouteUrl() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formlanding" element={<FormLanding />} />
        </Routes>
    );
}

export default RouteUrl;