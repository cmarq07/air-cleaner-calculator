import '../styles/styles.css';
import React, { useState, useEffect } from 'react'


export function FormThree({ prevStep, nextStep, handleChange, values, props }) {

    console.log(" modelName " + values.modelName);
    console.log(" numOwned " + values.numOwned);

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

    function checkValues() {
        if (values.cadr <= 0 || values.numOwned <= 0) {
            document.getElementById("error-message").innerText = "Fill out the required fields to continue!"
            document.getElementById("error-message").style.display = "block"
        } else {
            document.getElementById("error-message").style.display = "none"
            nextStep();
        }
    }


    return (
        <div className="p-6">
            <div>
                <h1 className="title is-1 has-text-centered">{values.calculatorType} Portable Air Cleaner</h1>
                <progress className="progress is-info" value="100" max="100" />
                <button onClick={Previous}>
                    {"< Back"}
                </button>
                <h2 className="has-text-centered"><strong>Step 2</strong> of {values.stepCount} | CADR</h2>
            </div>

            <div className="card p-4">
                <p><strong>Tell us about your air cleaner.</strong></p>
                <div class="field">
                    <p>Air Cleaner Model Name</p>
                    <div class="control">
                        <div class="select"> 
                            <select onChange={handleChange('modelName')}>
                                <option value="DEFAULT">Select Model Name...</option>
                                <option>Levoit Vital 100 True HEPA Air Purifier	</option>
                                <option>Whirlpool® WPT80 Whispure™ Large Tower Air Purifier	</option>
                                <option>Oransi OV200 Air Purifier	</option>
                                <option>Coway Airmega 150	</option>
                                <option>BioGS 2.0 Ultra Quiet Air Purifier SPA- 550A	</option>
                                <option>Honeywell True HEPA Large Room Air Purifier With Allergen Remover	</option>
                                <option>MinusA2 Ultra Quiet Air Purifier SPA-780	</option>
                                <option>MinusA2 Ultra Quiet Air Purifier SPA- 700	</option>
                                <option>Coway Airmega AP-1512HH	</option>
                                <option>LV-H134 Tower Pro True HEPA Air Purifier	</option>
                            </select>
                        </div>
                    </div>
                </div>

                <p className="title is-4 has-text-centered mt-6">OR (If model is not in list)</p>

                <div class="field">
                    <p>CADR Value of Your Air Cleaner<span className="has-text-danger-dark">*</span></p>
                    <div class="control">
                        <input className="input" type="number" id="cadr" placeholder="Enter CADR of Air Cleaner" value={values.cadr} onChange={handleChange('cadr')} />
                    </div>
                </div>

                <hr />


                <div class="field">
                    <p>Number of Air Cleaners in this Space<span className="has-text-danger-dark">*</span></p>
                    <div class="control">
                        <input className="input" type="number" id="numOwnedInput" placeholder="Enter Number of Air Cleaners" value={values.numOwned} onChange={handleChange('numOwned')} />
                    </div>
                </div>
            </div>
            <div className="notification is-danger" id="error-message">
            </div>

            <div className="has-text-centered">
                <button onClick={checkValues} className="button is-info mt-6 has-text-centered">View Results</button>
            </div>
        </div>
    )
}

export default FormThree;