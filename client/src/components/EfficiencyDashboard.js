import '../styles/styles.css';
import React, { useEffect } from 'react'
import PopupEfficiency from './PopupEfficiency';

window.scrollTo(0, 0)

export function EfficiencyDashboard({ prevStep, nextStep, skipStep, handleChange, values }) {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const ContinueToRec = e => {
        e.preventDefault();
        skipStep();
    }

    let calculation = 0.00;
    let not_or_yes = "";
    let guidelines_level1 = "";
    let guidelines_button = "";
    let ach_notes1 = "";
    let ach_notes2 = "";
    let ach_notes3 = "";
    let icon_top = "";
    let extra_description = "";

    let roomVolume= 0;
    if (values.roomWidth !== 0 && values.roomLength !== 0) {
        let floorArea = values.roomWidth * values.roomLength;
        roomVolume = floorArea * values.ceilingHeight;

    } else if (values.floorArea !== 0) {
        roomVolume = values.floorArea * values.ceilingHeight;
    }

    if (values.unit === "Meters") {
        calculation = ((values.cadr / 0.58 / (roomVolume)) * values.numOwned) + 1
    } else {
        calculation = ((values.cadr * 60 / (roomVolume)) * values.numOwned) + 1
    }
    
    console.log(calculation);

    if (calculation <= 1.5) {
        icon_top = "fa-solid fa-circle-exclamation"
        guidelines_level1 = "Not Quite Yet";
        guidelines_button = "has-text-danger has-text-weight-bold"
        not_or_yes = "not"
        extra_description = "You should purchase additional air cleaners."
    } else if (calculation >= 1.5 && calculation.toFixed(2) <= 3.00) {
        icon_top = "fa-solid fa-square"
        guidelines_level1 = "Needs Improvement";
        guidelines_button = "has-text-warning has-text-weight-bold"
        not_or_yes = "not"
        extra_description = "You should purchase additional air cleaners."
    } else if (calculation >= 3.00 && calculation.toFixed(2) <= 4.00) {
        icon_top = "fa-solid fa-leaf"
        guidelines_level1 = "Good!";
        guidelines_button = "has-text-success has-text-weight-bold"
        not_or_yes = ""
        ach_notes1 = "It is producing "
        ach_notes2 = calculation.toFixed(2)
        ach_notes3 = "ACH."
        extra_description = "Your space has good air quality, but it can be improved to an enhanced ACH."
    } else if (calculation >= 4.00) {
        icon_top = "fa-solid fa-leaf"
        guidelines_level1 = "Great!";
        guidelines_button = "has-text-success has-text-weight-bold"
        not_or_yes = ""
        ach_notes1 = "It is producing "
        ach_notes2 = calculation.toFixed(2)
        ach_notes3 = "ACH."
        extra_description = "Your space has clean air!"
    }

    useEffect(() => {
        
    }, [])
    
    return (
        <div style={{ backgroundColor: '#f8f8f8' }}>
            <PopupEfficiency/>
            <section class="hero is-medium px-3">
                <div class="hero-body">
                    <div class="container has-text-centered">

                        <span class="title is-size-3">Results</span> <br /><br />
                        <p>Test Your Portable Air Cleaner</p> <br />

                        <div class="box block">
                            <p class={guidelines_button}> <i class={icon_top}></i> {guidelines_level1}</p>
                            <hr />
                            <p>Your air cleaner is <span class={guidelines_button}>{not_or_yes}</span> meeting recommended guidelines. <br/>{ach_notes1} 
                                <span class={guidelines_button}>{ach_notes2}</span> {ach_notes3} </p>
                            <br />
                            <p>{extra_description}</p>
                            <br /><br />
                            <p class="has-text-grey is-size-7">What does this mean?</p>
                        </div>

                        <div style={{display: "flex", flexDirection:"column", padding: 1, justifyContent:"space-evenly"}}>
                        <button onClick={ContinueToRec} className="button is-info m-1">View Air Cleaner Recommendations</button>
                        <br/><br/><br/>
                        <p className="has-text-grey is-size-7"><i class="fa-solid fa-envelope"></i> Share your test results to your email</p>
                        <br/>
                        {/* <a href={Continue}><p className="has-text-grey is-size-7 is-underlined">View Your Completed Form</p></a> */}
                        <button onClick={Continue} className="button is-white is-size-7 is-underlined">View Your Completed Form</button>
                            
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default EfficiencyDashboard;