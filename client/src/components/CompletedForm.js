import '../styles/styles.css';
import React from 'react'

window.scrollTo(0, 0)

export function CompletedForm({ prevStep, nextStep, handleChange, values }) {

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    let step_one = "";

    if (values.knowRoom) {
        step_one = "Yes, I know my dimensions"
    } else {
        step_one = "No, I don't know my dimensions"
    }

    return (
        <div id="form-container">
            <section class="hero is-medium px-3">
                <div class="hero-body">
                    <button className="backButton" onClick={Previous}>
                        {"← Back"}
                    </button>
                    <div class="container has-text-centered">
                        <span class="title is-size-3">Your Form</span> <br /><br />
                        <p>Test Your Portable Air Cleaner</p> <br />

                        <div class="box block" style={{ textAlign: 'left' }}>
                            <h1 class="title is-6">Step 1</h1>
                            <p class="has-text-weight-bold">{step_one}</p>
                            <br />
                            <h1 class="title is-6">Step 2 | Room Dimensions</h1>
                            <p>Select Units: <span class="has-text-weight-bold">{values.unit}</span></p>
                            <p>Room Width: <span class="has-text-weight-bold">{values.roomWidth}</span></p>
                            <p>Room Length: <span class="has-text-weight-bold">{values.roomLength}</span></p>
                            <p>Square Footage: <span class="has-text-weight-bold">{values.floorArea}</span></p>
                            <p>Ceiling Height:<span class="has-text-weight-bold">{values.ceilingHeight}</span> </p>
                            <br />
                            <h1 class="title is-6">Step 3 | Air Cleaner Details</h1>
                            <p>Air Cleaner Model Name: <span class="has-text-weight-bold">{values.modelName}</span></p>
                            <p>Number of Air Cleaners in this Space: <span class="has-text-weight-bold">{values.numOwned}</span></p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default CompletedForm;