import '../styles/styles.css';
import React, { useEffect } from 'react'

window.scrollTo(0, 0)

export function FormOne({ prevStep, nextStep, handleChange, values }) {

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    useEffect(() => {

    }, [])


    return (
        <div className="form-container">
            <div className="p-6">
                <div>
                    <h1 className="title is-1 has-text-centered">{values.calculatorType} Portable Air Cleaner</h1>
                    <progress className="progress is-info" value="0" max="100" />
                    <button className="backButton" onClick={Previous}>
                        {"← Back"}
                    </button>
                    <h2 className="has-text-centered"><strong>Step 1</strong> of {values.stepCount} | Room Dimensions</h2>
                </div>

                <div class="container has-text-centered">
                    <div class="box p-6">
                        <h4 class="subtitle is-4">Do you know your indoor space dimensions?</h4>
                        <div class="form-button-container">
                            <div class="wrapper">
                                <button onClick={handleChange('knowRoom')} className="button is-medium is-info" id="yesKnow-btn" value="yesKnow">Yes, I know my dimensions</button>
                                <button onClick={handleChange('knowRoom')} className="button is-medium is-info" id="noKnow-btn" value="noKnow">No, I don't know my dimensions</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormOne;