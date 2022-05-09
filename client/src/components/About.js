import '../styles/styles.css';
import React from 'react'
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
import iSchool from '../images/iSchool.png'
import LinkedIn from '../images/linkedIn.png'

window.scrollTo(0, 0)

const LinkedInLogoSize = 20

const teamMembers = [
    {
        "name": "Bijou",
        "title": "UX Designer",
        "fullName": "Bijou Kim",
        "linkedIn": "https://www.linkedin.com/in/bijou-kim-535182188/",
        "image": Bijou
    },

    {
        "name": "Christian",
        "title": "Software Developer",
        "fullName": "Christian Calloway",
        "linkedIn": "https://www.linkedin.com/in/chrcalloway/",
        "image": Christian
    },

    {
        "name": "Gulsima",
        "title": "Visual Designer",
        "fullName": "Gulsima Young",
        "linkedIn": "https://www.linkedin.com/in/gulsimayoung/",
        "image": Gulsima
    },

    {
        "name": "Jeanne",
        "title": "Project Manager",
        "fullName": "Jeanne Choi",
        "linkedIn": "https://www.linkedin.com/in/jeanne-choi--/",
        "image": Jeanne
    },

    {
        "name": "Misty",
        "title": "Web Developer",
        "fullName": "Misty Becker",
        "linkedIn": "https://www.linkedin.com/in/misty-becker-b443201ba/",
        "image": Misty
    },

    {
        "name": "Natt",
        "title": "Database / Data Pipeline Manager",
        "fullName": "Natt Sakulborrirug",
        "linkedIn": "https://www.linkedin.com/in/natthapat-sakulborrirug/",
        "image": Natt
    },

    {
        "name": "Stanley",
        "title": "Software Developer",
        "fullName": "Stanley Susanto",
        "linkedIn": "https://www.linkedin.com/in/stanleysusanto/",
        "image": Stanley
    },

    {
        "name": "Thomas",
        "title": "User Researcher / Designer",
        "fullName": "Thomas Wilson",
        "linkedIn": "https://www.linkedin.com/in/thomas-j-wilson/",
        "image": Thomas
    },
]

const teamMemberDivs = teamMembers.map((member) => {
    const linkedInLogoAlt = `LinkedInLogo that leads to ${member.fullName}'s LinkedIn`
    return (
        <div className="teamCard">
            <div className="teamCard imageBox">
                <img src={member.image} style={{ width: 75, height: 75 }} alt={member.fullName} />
            </div>
            <div className="teamCard textBox">
                <div className="teamCard textBox name">
                    <a href={member.linkedIn} className='teamLinkedInLink' target="_blank" rel="noreferrer">
                        {member.fullName}
                    </a>

                    <a href={member.linkedIn} className='teamLinkedInLink' target="_blank" rel="noreferrer">
                        <img src={LinkedIn} style={{ height: LinkedInLogoSize, width: LinkedInLogoSize }} alt={linkedInLogoAlt}/>
                    </a>
                </div>

                <p className="is-size-7">{member.title}</p>
            </div>
        </div>
    )
})

const column1 = teamMemberDivs.slice(0, 4)
const column2 = teamMemberDivs.slice(4, 8)


export function About() {

    return (
        <div>
            <div style={{ backgroundColor: '#f8f8f8' }}>
                {/* The gradient section */}
                <div className="is-flex p-5 is-flex-direction-column is-justify-content-space-between is-align-items-center" style={{ background: "linear-gradient(#C9E8F5, #F5F7F8)" }}>
                    <h1 className="title has-text-centered is-size-3">About</h1>
                    <div style={{ width: 256, height: 256 }}>
                        <figure className='is-flex image is-square'>
                            <img src={PACGraphic} alt='Portable air cleaner graphic' />
                        </figure>
                    </div>
                    <p className="has-text-centered has-text-weight-semibold">
                        The Clean Air Tool is a solution to help people to achieve healthy air quality in their indoor spaces.
                    </p>
                </div>

                {/* The content section */}
                <div className='p-4 about-2'>
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

                    <div className='columns is-mobile is-centered about-button-div'>
                        <Link to="/calculator">
                            <button className="button is-medium my-6 about-button">Find or Test an Air Cleaner</button>
                        </Link>
                    </div>
                </div>

                {/* The team section */}
                <div className='p-4 about-4'>
                    <h1 className='title is-size-4 has-text-centered'>Meet the Team</h1>
                    <p className="has-text-centered p-3">
                        We are Informatics students at the University of Washington who have worked on the Clean Air Tool for our Capstone project. Our vibrant team of designers, developers, and researchers has loved working together to learn about air quality and create a tool that can be used to enhance the health and wellbeing of those around us.
                    </p>

                    <br />

                    <div className="columns is-mobile is-centered is-three-quarters">
                        {/* First Column */}
                        <div className="column">
                            {column1}
                        </div>

                        {/* Second Column */}
                        <div className="column">
                            {column2}
                        </div>
                    </div>
                </div>

                <br />

                {/* The current state section */}
                <div className='current-state p-4'>
                    <h1 className='title is-size-4'>Current State of the Project</h1>
                    <p>
                        As of May 2021, the project has completed developing a full working product. Major updates include new research, design, and the orgranziation of opportunities and next steps for new teams. <a href='https://github.com/cmarq07/air-cleaner-calculator/blob/master/README.md' target='_blank' rel='noreferrer'>Take a look at our documentation here</a>.
                    </p>
                </div>
            </div>

            
        </div>
    );
}

export default About;


