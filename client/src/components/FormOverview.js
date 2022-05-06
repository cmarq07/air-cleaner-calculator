// Import Styles
import '../styles/styles.css';

// Import Libraries
import React, { useState, useEffect } from 'react'

// Import Assets
import PACGraphic from '../images/Air Cleaner Illustration.png'

export default function FormTwo({ prevStep, nextStep, handleChange, values }) {
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    console.log("floor area: ", values.floorArea);
    // Return form overview page
    return (
        // Overall div element
        <div className="p-6">
            {/* Page Info */}
            <div>
                <h1 className="title is-1 has-text-centered">{values.calculatorType} Your Portable Air Cleaner</h1>
                <progress className="progress is-info" value="100" max="100" />
                <button onClick={Previous}>
                    {"< Back"}
                </button>
                <h2 className="has-text-centered"><strong>Step 2</strong> of {values.stepCount} | OVERVIEW</h2>
            </div>

            {/* Content */}
            <div className="card p-4">
                <div className='columns is-mobile is-centered'>
                    <img src={PACGraphic} alt='Portable air cleaner graphic' className='image is-128x128'/>
                </div>
                <p className='is-size-4 has-text-centered has-text-info-dark is-size-3-mobile'>To maintain clean air in your space, you need to maintain an ACH value of <strong className='has-text-info-dark'>4 or more</strong>.</p>
                <br></br>
                <p className='has-text-centered has-text-grey is-size-4 is-size-5-mobile'>The air cleaners presented in the next page are the most efficient for your space's dimensions.</p>
            </div>
            <div className="has-text-centered">
                <button onClick={Continue} className="button is-info mt-6 has-text-centered">View my Results!</button>
            </div>
        </div>
    )
}