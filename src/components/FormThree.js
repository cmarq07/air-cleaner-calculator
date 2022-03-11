import '../App.css';
import {Link} from 'react-router-dom'


export function FormThree() {
    return (
        <>
            <section class="hero is-medium">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title is-3">Test Your Portable Air Cleaner</h1>
                        <progress class="progress is-info" value="66" max="100"></progress>
                        <h2 className='has-text-centered'><strong>Step 2 </strong>of 3 | VENTILATION</h2>
                        <div class="box p-6">
                            <h4 class="subtitle is-4"> <strong>How is the air quality in your space? </strong></h4>
                            <h5>Please try your best to estimate: <br /> If you have an existing HVAC system please select either decent or great.</h5>
                            <br />
                            <div class="control radio-list">
                                <label class="radio"> 
                                    <input type="radio" value="Poor" name="Poor" /> Poor
                                </label>
                                <br />
                                <label class="radio">
                                    <input type="radio" value="Decent" name="Decent" /> Decent
                                </label>
                                <br />
                                <label class="radio"> 
                                    <input type="radio" value="Great" name="Great" /> Great
                                </label>
                            </div>
                            <div className="has-text-centered">
            <Link to='../formfour' className="button is-info mt-6 has-text-centered">Next Page</Link>
           </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FormThree;