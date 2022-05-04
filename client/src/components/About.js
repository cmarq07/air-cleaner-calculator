import '../styles/styles.css';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// Import Assets
import PACGraphic from '../images/Air Cleaner Illustration.png'
import Bijou from '../images/People/bijou.png'
import Christian from '../images/People/christian.png'
import Gulsima from '../images/People/gulsima.png'
import Jeanne from '../images/People/jeanne.png'
import Misty from '../images/People/misty.png'
import Natt from '../images/People/natt.png'
import Stanley from '../images/People/stanley.png'
import Thomas from '../images/People/thomas.png'


export function About() {
    window.scrollTo(0, 0)

    return (
        <div>
            {/* The gradient section */}
            <div className="is-flex p-5 is-flex-direction-column is-justify-content-space-between is-align-items-center" style={{ background: "linear-gradient(#9AD7F1, white)" }}>
                <h1 className="title has-text-centered is-size-3">About</h1>
                <div style={{ width: 256, height: 256 }}>
                    <figure className='is-flex image is-square'>
                        <img src={PACGraphic} alt='Portable air cleaner graphic' />
                    </figure>
                </div>
                <p className="has-text-centered">
                    The Clean Air Tool is a solution to help people to achieve healthy air quality in their indoor spaces.
                </p>
            </div>

            {/* The content section */}
            <div className='p-4'>
                <h1 className='title is-size-4'>Overview</h1>
                <p>
                    At first, our project focused on helping small businesses owners to maintain safe air quality in order to operational during the COVID-19 pandemic. Since then, we have expanded the versatility of our product so the Clean Air Tool can be used in any indoor space, from a bedroom to an office building.
                </p>

                <br />

                <p>
                    The Clean Air Tool helps to tackle:
                </p>

                <ul style={{ paddingLeft: 25, listStyleType: "disc" }}>
                    <li>Airborne contaminants including viruses and diseases</li>
                    <li>Air pollution due to smoke and wildfires</li>
                    <li>Issues related to allergens and mold</li>
                    <li>Poor indoor ventilation</li>
                </ul>

                <br />

                <h1 className='title is-size-4'>Product Goals</h1>
                <p>
                    We hope to educate our audience on the importance of clean air quality through this tool, and make finding or testing an air cleaner a process that is simple and accessible.
                </p>
                <br />
                <p>
                    By filling out a 3 step quiz, you can find a suitable air cleaner for your indoor space or test the efficiency of an existing one!
                </p>

                <div className='columns is-mobile is-centered'>
                    <Link to="/calculator">
                        <button className="button is-large my-6 darkButton">Find or Test an Air Cleaner</button>
                    </Link>
                </div>
            </div>

            {/* The team section */}
            <div className='p-4'>
                <h1 className='title is-size-3 has-text-centered'>Meet the Team</h1>
                <p className="has-text-centered">
                    We are Informatics students at the University of Washington who have worked on the Clean Air Tool for our Capstone project. Our vibrant team of designers, developers, and researchers has loved working together to learn about air quality and create a tool that can be used to enhance the health and wellbeing of those around us.
                </p>

                <br />

                <div className="columns is-mobile is-centered is-three-quarters">
                    {/* First Column */}
                    <div className="column">
                        <div className="teamCard">
                            <div className="teamCard imageBox">
                                <img src={Jeanne} style={{ width: 75, height: 75 }} />
                            </div>
                            <div className="teamCard textBox">
                                <h1 className="title is-size-6 has-text-info-dark" style={{ margin: 0 }}>Jeanne Choi</h1>
                                <p className="is-size-7">Project Manager</p>
                            </div>
                        </div>
                        <div className="teamCard">
                            <div className="teamCard imageBox">
                                <img src={Thomas} style={{ width: 75, height: 75 }} />
                            </div>
                            <div className="teamCard textBox">
                                <h1 className="title is-size-6 has-text-info-dark" style={{ margin: 0 }}>Thomas Wilson</h1>
                                <p className="is-size-7">User Researcher / Designer</p>
                            </div>
                        </div>
                        <div className="teamCard">
                            <div className="teamCard imageBox">
                                <img src={Christian} style={{ width: 75, height: 75 }} />
                            </div>
                            <div className="teamCard textBox">
                                <h1 className="title is-size-6 has-text-info-dark" style={{ margin: 0 }}>Christian Calloway</h1>
                                <p className="is-size-7">Software Developer</p>
                            </div>
                        </div>
                        <div className="teamCard">
                            <div className="teamCard imageBox">
                                <img src={Stanley} style={{ width: 75, height: 75 }} />
                            </div>
                            <div className="teamCard textBox">
                                <h1 className="title is-size-6 has-text-info-dark" style={{ margin: 0 }}>Stanley Susanto</h1>
                                <p className="is-size-7">Software Developer</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div class="column">
                        <div className="teamCard">
                            <div className="teamCard imageBox">
                                <img src={Misty} style={{ width: 75, height: 75 }} />
                            </div>
                            <div className="teamCard textBox">
                                <h1 className="title is-size-6 has-text-info-dark" style={{ margin: 0 }}>Misty Becker</h1>
                                <p className="is-size-7">Web Developer</p>
                            </div>
                        </div>

                        <div className="teamCard">
                            <div className="teamCard imageBox">
                                <img src={Bijou} style={{ width: 75, height: 75 }} />
                            </div>
                            <div className="teamCard textBox">
                                <h1 className="title is-size-6 has-text-info-dark" style={{ margin: 0 }}>Bijou Kim</h1>
                                <p className="is-size-7">UX Designer</p>
                            </div>
                        </div>

                        <div className="teamCard">
                            <div className="teamCard imageBox">
                                <img src={Gulsima} style={{ width: 75, height: 75 }} />
                            </div>
                            <div className="teamCard textBox">
                                <h1 className="title is-size-6 has-text-info-dark" style={{ margin: 0 }}>Gulsima Young</h1>
                                <p className="is-size-7">Visual Designer</p>
                            </div>
                        </div>

                        <div className="teamCard">
                            <div className="teamCard imageBox">
                                <img src={Natt} style={{ width: 75, height: 75 }} />
                            </div>
                            <div className="teamCard textBox">
                                <h1 className="title is-size-6 has-text-info-dark" style={{ margin: 0 }}>Natt Sakulborrirug</h1>
                                <p className="is-size-7">Database / Data Pipeline Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            {/* The current state section */}
            <div className='p-4'>
                <h1 className='title is-size-4'>Current State of the Project</h1>
                <p>
                    Write current state here
                </p>
            </div>
        </div>
    );
}

export default About;


