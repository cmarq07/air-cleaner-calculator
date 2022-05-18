import '../styles/styles.css';
import React, { useEffect } from 'react'
import Parser from 'html-react-parser';
import Popup from 'reactjs-popup';


window.scrollTo(0, 0)

export function FormThree({ prevStep, nextStep, handleChange, airCleaners, values, props }) {

    console.log(" modelName " + values.modelName);
    console.log(" numOwned " + values.numOwned);

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    useEffect(() => {

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
        <div className="form-container">
            <div className="p-6">
                <div>
                    <h1 className="title is-1 has-text-centered">{values.calculatorType} Portable Air Cleaner</h1>
                    <progress className="progress is-info" value="100" max="100" />
                    <button className="backButton" onClick={Previous}>
                        {"← Back"}
                    </button>
                    <h2 className="has-text-centered"><strong>Step 2</strong> of {values.stepCount} | CADR</h2>
                </div>

                <div className="card p-4">
                    <p><strong>Tell us about your air cleaner.</strong></p>
                    <div class="field">
                        <p>Air cleaner model name</p>
                        <div class="control">
                            <div class="select">
                                <select id="airCleanerDropdown" onChange={handleChange('cadr')}>
                                    <option>Select model name...</option>
                                    {
                                        airCleaners.map((airCleaner) => (
                                            <option value={airCleaner.cadr}>{airCleaner.name}</option>
                                        ))
                                    }
                                </select>

                            </div>
                        </div>
                    </div>

                    <p className="title is-4 has-text-centered mt-6">OR (If model is not in list)</p>

                    <div class="field">
                        <p>CADR value (smoke) of your air cleaner<span className="has-text-danger-dark">*</span>                    
                            <Popup
                            trigger={open => (
                                <span class="icon"><i class="fa-solid fa-circle-info"></i></span>
                            )}
                            position="top center"
                            closeOnDocumentClick>
                            <span> 
                                <b>Clean air delivery rate</b> (CADR) is the rate an air cleaner delivers purified air to a space, in cubic ft per minute. 
                                <br/>
                                <br />
                                Normally found on a sticker on the back of your air cleaner.
                            </span>
                        </Popup>
                    </p>
                        <div class="control">
                            <input className="input" type="number" id="cadr" placeholder="Enter CADR of Air Cleaner" value={values.cadr} onChange={handleChange('cadr')} />
                        </div>
                    </div>

                    <hr />


                    <div class="field">
                        <p>Number of air cleaners in this space<span className="has-text-danger-dark">*</span></p>
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
    </div>
    )
}

export default FormThree;