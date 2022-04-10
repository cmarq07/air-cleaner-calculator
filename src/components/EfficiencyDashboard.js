import '../styles/styles.css';
import { Link } from 'react-router-dom';
import Slider from './EfficiencyDashboard/slider-arrow.png';

export function EfficiencyDashboard({ prevStep, nextStep, handleChange, values }) {

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    let calculation = 0;
    let box_description;

    if (values.unit == "Meters") {
        calculation = ((138 / 0.58 / (values.roomWidth * values.roomLength + values.floorArea * values.ceilingHeight)) * values.numOwned) + 1
    } else {
        calculation = ((138 * 60 / (values.roomWidth * values.roomLength + values.floorArea * values.ceilingHeight)) * values.numOwned) + 1
    }
    
    console.log(calculation);

    if (0 < calculation.toFixed(2) <= 1.0) {
        box_description = "one";
    } else if (1.0 < calculation.toFixed(2) <= 2.0) {
        box_description = "two";
    } else if (2.0 < calculation.toFixed(2) <= 3.0) {
        box_description = "three";
    } else if (3.0 < calculation.toFixed(2) <= 4.0) {
        box_description = "four";
    }
    
    return (
        <>
            <section class="hero is-medium px-3">
                <div class="hero-body">
                    <div class="container has-text-centered">

                        <h1 class="title is-3">Your Results</h1>
                        <h1 class="subtitle is-5">How well does your current air cleaner work for your space?</h1>

                        <div class="has-text-left">
                            <h1 class="title is-5 mt-5 mb-3">Your Air Cleaner is:</h1>
                        </div>

                        <nav class="columns is-mobile is-2-mobile">
                            <div class="column">
                                <span class="title is-size-1">{calculation.toFixed(2)}</span>
                                <button class="button is-danger is-medium p-6"><b>NOT <br /> MEETING <br /> GUIDELINES</b></button>
                            </div> 
                            <div class="column">
                                <span className='mr-4'>
                                    <span class="title is-size-3">{calculation.toFixed(2)}</span>
                                    <span class="is-size"> / 4 Air changes an hour</span>
                                </span>
                                
                                <img src={Slider} />
                            </div>
                        </nav>

                        <div class="box block">
                            <p>{box_description}</p>
                            <br />
                            <p>If you'd like to see a list of our recommended air cleaners for your room, please click the button below.</p>
                        </div>

                        <div style={{display: "flex", flexDirection:"column", padding: 1, justifyContent:"space-evenly"}}>
                        <button onClick={Continue} className="button is-info m-1">View Air Cleaner Recommendations</button>
                        <button onClick={Continue} className="button is-info m-1">View Your Completed Form</button>
                        <button onClick={Continue} className="button is-info m-1">Share Your Test Results to Your Email</button>
                            
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default EfficiencyDashboard;