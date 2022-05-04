import '../styles/styles.css';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PopupEfficiency from './PopupEfficiency';


export function EfficiencyDashboard({ prevStep, nextStep, handleChange, values }) {

    /*const Previous = e => {
        e.preventDefault();
        prevStep();
    }*/

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    let calculation = 0.00;
    let guidelines_level1 = "";
    let guidelines_button = "";

    if (values.unit === "Meters") {
        calculation = ((138 / 0.58 / (values.roomWidth * values.roomLength + values.floorArea * values.ceilingHeight)) * values.numOwned) + 1
    } else {
        calculation = ((138 * 60 / (values.roomWidth * values.roomLength + values.floorArea * values.ceilingHeight)) * values.numOwned) + 1
    }
    
    console.log(calculation);

    if (calculation <= 1.00) {
        guidelines_level1 = "Not Quite Yet";
        guidelines_button = "has-text-danger has-text-weight-bold"
    } else if (calculation > 1.00 && calculation.toFixed(2) <= 2.00) {
        guidelines_level1 = "Needs Improvement";
        guidelines_button = "has-text-warning has-text-weight-bold"
    } else if (calculation > 2.00 && calculation.toFixed(2) <= 3.00) {
        guidelines_level1 = "Great!";
        guidelines_button = "has-text-success has-text-weight-bold"
    } else if (calculation > 3.00 && calculation.toFixed(2) <= 4.00) {
        guidelines_level1 = "Great!";
        guidelines_button = "has-text-success has-text-weight-bold"
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
            <PopupEfficiency/>
            <section class="hero is-medium px-3">
                <div class="hero-body">
                    <div class="container has-text-centered">

                        <span class="title is-size-3">Results</span> <br /><br />
                        <p>Test Your Portable Air Cleaner</p> <br />

                        {/* <div class="has-text-left">
                            <h1 class="title is-5 mt-5 mb-3">Your Air Cleaner is:</h1>
                        </div>

                        <nav class="columns is-mobile is-2-mobile">
                            <div class="column">
                                <span class="title is-size-1">{calculation.toFixed(2)}</span>
                                <button class={guidelines_button}><b>{guidelines_level1} <br /> Meeting <br /> Guidelines</b></button>
                            </div> 
                            <div class="column">
                                <span className='mr-4'>
                                    <span class="title is-size-3">{calculation.toFixed(2)}</span>
                                    <span class="is-size"> / 4 Air changes an hour</span>
                                </span>
                                
                            </div>
                        </nav> 

                        <div class="box block">
                            <p>{box_description}</p>
                            <br />
                            <p>If you'd like to seev a list of our recommended air cleaners for your room, please click the button below.</p>
                        </div> */}

                        <div class="box block">
                            <p class={guidelines_button}>{guidelines_level1}</p>
                            <hr />
                            <p>Your air cleaner is <span class={guidelines_button}>not</span> meeting recommended guidelines.</p>
                            <br />
                            <p>You should purchase additional air cleaners.</p>
                            <br /><br />
                            <p class="has-text-grey is-size-7">What does this mean?</p>
                        </div>

                        <div style={{display: "flex", flexDirection:"column", padding: 1, justifyContent:"space-evenly"}}>
                        <button onClick={Continue} className="button is-info m-1">View Air Cleaner Recommendations</button>
                        <br/><br/><br/>
                        <Link to="/completeform"><p className="has-text-grey is-size-7">Share your test results to your email</p></Link>
                        <br/>
                        {/* <a href={Continue}><p className="has-text-grey is-size-7 is-underlined">View Your Completed Form</p></a> */}
                        <button onClick={Continue} className="button is-grey is-size-7 is-underlined">View Your Completed Form</button>
                            
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default EfficiencyDashboard;