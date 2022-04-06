import '../styles/styles.css';
import { Link } from 'react-router-dom';
import Slider from './EfficiencyDashboard/slider-arrow.png';

export function EfficiencyDashboard() {
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

                                <button class="button is-danger is-medium p-6"><b>NOT <br /> MEETING <br /> GUIDELINES</b></button>
                            </div>
                            <div class="column">
                                <span className='mr-4'>
                                    <span class="title is-size-3">1.8</span>
                                    <span class="is-size"> / 4 Air changes an hour</span>
                                </span>
                                
                                <img src={Slider} />
                            </div>
                        </nav>

                        <div class="box block">
                            <p>Your room is currently not meeting an ideal level of air changes per hour based on recommended guidelines.</p>
                            <br />
                            <p>If you'd like to see a list of our recommended air cleaners for your room, please click the button below.</p>
                        </div>

                        <div style={{display: "flex", flexDirection:"column", padding: 1, justifyContent:"space-evenly"}}>
                        <Link to="/" class="button is-info m-1">View Air Cleaner Recommendations</Link>
                        <Link to="/" class="button is-info m-1">View Your Completed Form</Link>
                        <Link to="/" class="button is-info m-1">Share Your Test Results to Your Email</Link>
                            
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default EfficiencyDashboard;