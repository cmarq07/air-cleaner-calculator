import '../styles/styles.css';
import React, { useEffect } from 'react'

export function FormLanding({ nextStep, handleChange, values }) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section class="hero is-medium" style={{ backgroundColor: '#f8f8f8' }}>
                <div class="hero-body">
                    <div class="container has-text-centered">

                        <h1 class="title is-3">Find or Test an Air Cleaner</h1>
                        <div class="box p-6">
                            <h4 class="subtitle is-4">What would you like to do?</h4>
                            <div className='buttonsBox'>
                                <button onClick={handleChange('calculatorType')} className="button is-info" id="find-btn" value="Find a">Find a suitable air cleaner</button>
                                <button onClick={handleChange('calculatorType')} className="button is-info" id="test-btn" value="Test your">Test your air cleaner's efficiency</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default FormLanding;
