import '../styles/styles.css';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export function FormLanding({ nextStep, handleChange, values }) {
    window.scrollTo(0, 0)

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    useEffect(() => {
        
    }, [])

    return (
        <>
            <section class="hero is-medium" style={{ backgroundColor: '#f8f8f8' }}>
                <div class="hero-body">
                    <div class="container has-text-centered">

                        <h1 class="title is-3">Find or Test an Air Cleaner</h1>
                        <div class="box p-6">
                            <h4 class="subtitle is-4">What would you like to do?</h4>
                            <div class="buttons are-medium is-centered">
                                <button onClick={Continue} onMouseEnter={handleChange('calculatorType')} className="button is-info" id="find-btn" value="Find a">Find a portable air cleaner</button>
                                <button onClick={Continue} onMouseEnter={handleChange('calculatorType')} className="button is-info" id="test-btn" value="Test Your">Test a portable air cleaner</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default FormLanding;
