import '../styles/styles.css';
import Slider from './EfficiencyDashboard/slider-arrow.png';

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
    let box_description = 0;
    let guidelines_level1 = "";
    let guidelines_button = "";

    if (values.unit === "Meters") {
        calculation = ((138 / 0.58 / (values.roomWidth * values.roomLength + values.floorArea * values.ceilingHeight)) * values.numOwned) + 1
    } else {
        calculation = ((138 * 60 / (values.roomWidth * values.roomLength + values.floorArea * values.ceilingHeight)) * values.numOwned) + 1
    }
    
    console.log(calculation);

    if (calculation <= 1.00) {
        box_description = "one";
        guidelines_level1 = "Not";
        guidelines_button = "button is-danger is-medium p-6"
    } else if (calculation > 1.00 && calculation.toFixed(2) <= 2.00) {
        box_description = "two";
        guidelines_level1 = "Almost";
        guidelines_button = "button is-warning is-medium p-6"
    } else if (calculation > 2.00 && calculation.toFixed(2) <= 3.00) {
        box_description = "three";
        guidelines_level1 = "";
        guidelines_button = "button is-success is-medium p-6"
    } else if (calculation > 3.00 && calculation.toFixed(2) <= 4.00) {
        box_description = "four";
        guidelines_level1 = "Perfectly";
        guidelines_button = "button is-info is-medium p-6"
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
                                <button class={guidelines_button}><b>{guidelines_level1} <br /> Meeting <br /> Guidelines</b></button>
                            </div> 
                            <div class="column">
                                <span className='mr-4'>
                                    <span class="title is-size-3">{calculation.toFixed(2)}</span>
                                    <span class="is-size"> / 4 Air changes an hour</span>
                                </span>
                                
                                <img src={Slider} alt='Air changes slider'/>
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