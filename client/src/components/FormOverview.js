// Import Styles
import '../styles/styles.css';

// Import Libraries
import React from 'react'

// Import Assets
import PACGraphic from '../images/Air Cleaner Illustration.png'
import { Icon } from '@iconify/react';
import Popup from 'reactjs-popup';


window.scrollTo(0, 0)

export default function FormTwo({ prevStep, nextStep, handleChange, values }) {
    
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    console.log("floor area: ", values.floorArea);
    // Return form overview page
    return (
        // Overall div element
        <div className="form-container">
            <div className="p-6">
                {/* Page Info */}
                <div>
                    <h1 className="title is-1 has-text-centered">{values.calculatorType} Your Portable Air Cleaner</h1>
                    <progress className="progress is-info" value="100" max="100" />
                    <button className="backButton" onClick={Previous}>
                        {"← Back"}
                    </button>
                    <h2 className="has-text-centered"><strong>Step 2</strong> of {values.stepCount} | OVERVIEW</h2>
                </div>

                {/* Content */}
                <div className="card p-4 has-text-centered">
                    <div className='columns is-mobile is-centered'>
                        <img src={PACGraphic} alt='Portable air cleaner graphic' className='image is-128x128' />
                    </div>
                    <p className='is-size-4 has-text-centered has-text-info-dark is-size-3-mobile'>To maintain clean air in your space, the air in your space needs to be replaced at least <strong className='has-text-info-dark'>4</strong> times an hour.</p>
                    <br/>
                    <br/>
                    <p className='has-text-grey is-size-4 is-size-5-mobile'>The air cleaners presented in the next page are the most efficient and suitable to your given space dimensions.</p>
                    <br/>
                    <Popup
                        trigger={open => (
                        <span className="ml-1 has-text-grey is-underlined">

                            <Icon icon="ant-design:info-circle-twotone" style={{ fontSize: '2rem' }} /><br/>
                                More info</span>
                            
                        )}
                        position="top center"
                        closeOnDocumentClick>
                        <span> 
                            The value above refers to <b>Air Changes per Hour</b> (ACH), the number of times that the total air volume in a room or space is completely removed and replaced in an hour.
                            <br/>

                        </span>
                    </Popup>
                    
           
                
                </div>

                <div className="has-text-centered">
                    <button onClick={Continue} className="button is-info mt-6 has-text-centered">View my Results!</button>
                </div>
            </div>
        </div>
    )
}