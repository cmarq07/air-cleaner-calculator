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
        <div id="landingPage">
            <section className="introSection">
                
                <div className="landingMessage">
                    <h1>
                        We help you find suitable air cleaners to improve the air quality for you and your indoor space.
                    </h1>
                    <Link to="/calculator"> 
                        <button className="button is-medium mt-6 mb-3 about-button">Get Started!</button>
                    </Link>
                    <Link to="/about">
                        <p className="subtitle"> Learn More</p>
                    </Link>

                </div>
                <img className="peopleGraphic" src={PeopleGraphic} alt='A graphic of different people' />
            </section>

            <section>
                <div id="landing3">
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

                    <img src={LivingRoomGraphic} alt='A graphic of different people' />
                </div>
            </section>




            <section className="featuresSection">
                <div className='featuresTitleBox'>
                    <h2 className="title">Features</h2>
                </div>
                <div className="featuresBox">
                    <div className="featureItem">
                        <div className='featureImgBox'>
                            <img src={Find} className="featureImg" alt='A graphic of a magnifying glass' />
                        </div>
                        <div className='featureTextBox'>
                            <p className='featureText'>Get help finding a new air cleaner</p>
                        </div>
                    </div>

                    <div className="featureItem">
                        <div className='featureImgBox'>
                            <img src={Test} className="featureImg" alt='A graphic of a checkmark' />
                        </div>
                        <div className='featureTextBox'>
                            <p className='featureText'>Test the efficiency of your existing air cleaner</p>
                        </div>
                    </div>

                    <div className="featureItem">
                        <div className='featureImgBox'>
                            <img src={List} className="featureImg" alt='A graphic of a listboard' />
                        </div>
                        <div className='featureTextBox'>
                            <p className='featureText oneWord'>View your personalized recommendations</p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="hero is-medium has-text-centered">
                <div className="hero-body" id="landing2">
                    <h1 style={{ marginBottom: '20px' }}>Find or Test an Air Cleaner</h1>
                    <h2>Find a suitable portable air cleaner or test your existing device. </h2>
                    <Link to="/calculator">
                            <button className="button is-large my-6 about-button">Get Started!</button>
                        </Link>
                    <img src={PACGraphic} alt='Portable air cleaner graphic' />
                </div>
            </section>

        </div>
    );
}

export default Home;


