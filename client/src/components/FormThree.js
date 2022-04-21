import '../styles/styles.css';
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


export function FormThree() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-3">Test Your Portable Air Cleaner</h1>
                        <progress className="progress is-info" value="66" max="100"></progress>
                        <h2 classNameName='has-text-centered'><strong>Step 2 </strong>of 3 | VENTILATION</h2>
                        <div className="box p-6">
                            <h4 className="subtitle is-4"> <strong>How is the air quality in your space? </strong></h4>
                            <h5>Please try your best to estimate: <br /> If you have an existing HVAC system please select either decent or great.</h5>
                            <br />
                            <div className="control radio-list">
                                <label className="radio"> 
                                    <input type="radio" value="Poor" name="Poor" /> Poor
                                </label>
                                <br />
                                <label className="radio">
                                    <input type="radio" value="Decent" name="Decent" /> Decent
                                </label>
                                <br />
                                <label className="radio"> 
                                    <input type="radio" value="Great" name="Great" /> Great
                                </label>
                            </div>
                            <div className="has-text-centered">
            <Link to='../formfour' className="button is-info mt-6 has-text-centered">Next Page</Link>
           </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FormThree;