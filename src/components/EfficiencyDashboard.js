import '../App.css';
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
                                <h1 class="title is-3 is-pulled-left mb-0">1.8</h1>
                                <span class="is-size-6">/ 4 Air changes an hour</span>
                                <img src={Slider} />
                            </div>
                        </nav>

                        <div class="box block">
                            <p>Your room is currently not meeting an ideal level of air changes per hour based on recommended guidelines.</p>
                            <br />
                            <p>If you'd like to see a list of our recommended air cleaners for your room, please click the button below.</p>
                        </div>

                        <button class="button is-primary mt-4 mb-4">View Air Cleaner Recommendations</button>

                        <button class="button is-primary is-light mb-5">View Your Completed Form</button>
                        <a href="#"><h5 class="title is-6">Share your test results to your email</h5></a>


                    </div>
                </div>
            </section>

        </>
    );
}

export default EfficiencyDashboard;