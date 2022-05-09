import '../styles/styles.css';
import React from 'react'
import { Link } from 'react-router-dom';
import PeopleGraphic from '../images/people_graphic.svg'
import LivingRoomGraphic from '../images/person_working_air_cleaner 1.png'
import PACGraphic from '../images/Air Cleaner Illustration.png'
import Find from '../images/find.png'
import Test from '../images/test.png'
import List from '../images/list.png'


window.scrollTo(0, 0)

export function Home() {
    
    return (
        <>
        <section className="hero is-large">
            <div className="hero-body" id="landing">
                <div id="landing-message">
                    <h1 className="title">
                    Clean Air Tool
                    </h1>
<<<<<<< HEAD
                    <h2>
                        We help you find suitable air cleaners to improve the air quality for you and your indoor space.
                    </h2>
                    <Link to="/calculator">
                        <button className="button is-large my-6">Get Started!</button>
                    </Link>
                    <Link to="/calculator">
                        <p className="subtitle"> Learn More</p>
                    </Link>
                    
                </div>
                <div className="images">
                    <img className="first" src={PACGraphic} alt='A graphic of air cleaners'/>
                    <img className="second" src={PeopleGraphic} alt='A graphic of different people'/>
=======
                    <Link to="/about" className="subtitle">Learn More</Link>
>>>>>>> 12d3f15aa8975b8bd157e173274ee81e7c3d8640
                </div>
            </div>
        </section>

        <section className="hero is-medium">
            <div className="hero-body" id="landing3">
                <div id="landing3-message">
                    <h2 className="title">
                    The Problem
                    </h2>
                    <h3>
                    The airborne transmission of viruses such as COVID-19 along with the rise in 
                    smoke-spreading wildfires and other pollutants demonstrate the necessity of 
                    safe air quality in indoor spaces. From grocery store to home office, we help users to find a clean air solution! 
                    </h3>

                </div>

                    <img src={LivingRoomGraphic} alt='A graphic of different people'/>
            </div>
        </section>




        <section className="hero is-medium">
            <div className="hero-body" id="landing4">
                <div id="landing4-message">
                    <h2 className="title">Features</h2>
                </div> 
                <div className="feature">
                    <div className="find feature">
                        <img src={Find} alt='A graphic of a magnifying glass'/>
                        <p>Get help finding a new air cleaner</p>
                    </div>
                    <div className="test feature">
                        <img src={Test} alt='A graphic of a checkmark'/>
                        <p>Test the efficiency of your existing air cleaner</p>
                    </div>
                    <div className="list feature">
                        <img src={List} alt='A graphic of a listboard'/>
                        <p>View personalized recommendations </p>
                    </div>
                
                </div>

                    
            </div>
        </section>



        <section className="hero is-medium has-text-centered">
            <div className="hero-body" id="landing2">
            <h2>Find a suitable portable air cleaner or test your existing device. </h2>
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


