import '../styles/styles.css';
import React, { useState, useEffect } from 'react'


export function FormOne({ prevStep, nextStep, handleChange, values }) {


    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div style={{ backgroundColor: '#f8f8f8' }}>
            <div className="p-6">
                <div>
                    <h1 className="title is-1 has-text-centered">{values.calculatorType} Portable Air Cleaner</h1>
                    <progress className="progress is-info" value="0" max="100" />
                    <button onClick={Previous}>
                        {"< Back"}
                    </button>
                    <h2 className="has-text-centered"><strong>Step 1</strong> of {values.stepCount} | Room Dimensions</h2>
                </div>

                <div class="container has-text-centered">

                    <div class="box p-6">
                        <h4 class="subtitle is-4">Do you know your indoor space dimensions?</h4>
                        <div class="buttons are-medium is-centered">
                            <button onClick={Continue} onMouseEnter={handleChange('knowRoom')} className="button is-info" id="yesKnow-btn" value="yesKnow">Yes, I know my dimensions</button>
                            <button onClick={Continue} onMouseEnter={handleChange('knowRoom')} className="button is-info" id="noKnow-btn" value="noKnow">No, I don't know my dimensions</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormOne;