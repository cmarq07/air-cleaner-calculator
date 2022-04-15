import '../styles/styles.css';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PeopleGraphic from '../images/people_graphic.svg'
import PACGraphic from '../images/Air Cleaner Illustration.png'

export function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
        <section className="hero is-medium">
            <div className="hero-body" id="landing">
                <div id="landing-message">
                    <h1 className="title">
                    A clean air tool to help protect <br/> 
                    you, your business, and your <br/> customers.
                    </h1>
                    <p className="subtitle">Learn More</p>
                </div>

                    <img src={PeopleGraphic} alt='A graphic of different people'/>
            </div>
        </section>

        <section className="hero is-medium has-text-centered">
            <div className="hero-body" id="landing2">
            <h2>Find a Suitable Air Cleaner or <br/> Test Your Existing One</h2>
            <Link to="/calculator">
                <button className="button is-large my-6">Get Started!</button>
            </Link>
            <img src={PACGraphic} alt='Portable air cleaner graphic'/>
            </div>
        </section>
        </>
    );
}

export default Home;


