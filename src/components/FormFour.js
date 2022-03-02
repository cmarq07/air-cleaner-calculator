import '../App.css';
import { Link } from 'react-router-dom';

export function FormFour() {
    return (
        <div className="p-6">
           <div>
               <h1 className="title is-1 has-text-centered">Test Your Portable Air Cleaner</h1>
               <progress className="progress is-info" value="100" max="100" />
               <Link to='../formthree'>
                   {"< Back"}
               </Link>
               <h2 className="has-text-centered"><strong>Step 3</strong> of 3 | CADR</h2>
           </div>

           <div className="card p-4">
               <p><strong>Tell us about your air cleaner.</strong></p>
               <p>Air Cleaner Model Name</p>
               <p>Number of Air Cleaners in this Space</p>
               <span>
                    <input className="mr-2" type="number" id="numAirCleanerInput" />
                    <span className="variableInput"></span>

                </span>
            </div>
        
            <div class="buttons is-centered">
                <button class="button is-primary mt-6 has-text-centered">See Results</button>
            </div>
        </div>
    )
}

export default FormFour;