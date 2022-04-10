// Import Styles
import '../styles/styles.css';

// Import Libraries
import React, { useState, useEffect } from 'react'

// Import Assets
import Logo from './Header/Logo.png'

export function Recommendations(props, { prevStep, handleChange }) {

    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768)
    const [filterSetting, setFilterSetting] = useState("")

    const updateDisplay = () => {
        setIsMobileView(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateDisplay);
        return () => window.removeEventListener("resize", updateDisplay);
    });

    // Rembembers the previous page
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    // Get props values
    let values = props.values

    // Get the user's room dimensions
    let roomDimensions = values.roomWidth * values.roomLength * values.ceilingHeight + values.floorArea
    console.log("Room Dimensions: ", roomDimensions)

    // Get the air cleaners list for further usage
    let airCleaners = props.airCleaners

    // A filtered and specific array of air cleaners for the user
    let airCleanerData = []
    let counter = 0

    airCleaners.forEach((airCleaner) => {
        let achValue = (((airCleaner.smoke_free_clean_air_delivery_1) * 60 / roomDimensions) * 1) + 1

        let count = 1

        while (achValue < 4) {
            count++

            achValue = (((airCleaner.smoke_free_clean_air_delivery_1) * 60 / roomDimensions) * count) + 1
        }

        airCleanerData.push({
            "id": counter,
            "name": airCleaner.brand_name + " " + airCleaner.model_name,
            "cadr": Number(airCleaner.smoke_free_clean_air_delivery_1).toFixed(1),
            "ach": achValue,
            "annual_kwh": Number(airCleaner.annual_energy_use_kwh_year).toFixed(1),
            "filter_type": airCleaner.filter_1_type,
            "num_needed": count
        })

        counter++
    })

    let airCleanersFiltered = airCleanerData.filter(airCleaner => airCleaner.ach >= 4).sort(function (cleaner1, cleaner2) {
        if (cleaner1.num_needed > cleaner2.num_needed) {
            return 1
        } else if (cleaner1.num_needed < cleaner2.num_needed) {
            return -1
        } else {
            return 0
        }

    })

    console.log(airCleanersFiltered)

    // Air Cleaner Alt Text
    let airCleanerAlt

    let airCleanerComponents = airCleanersFiltered.map((airCleaner) => {
        if(isMobileView) {
            return (
                <div className='box mb-3 p-3 is-flex is-flex-direction-row is-justify-content-space-between' key={airCleaner.id}>
                    {/* Air Cleaner Image */}
                    <div className='image is-128x128 has-background-white-ter is-align-self-center imageItem'>
                        <img alt={airCleanerAlt ? airCleanerAlt : "No Image"} className='image is-128x128'></img>
                    </div>
    
                    {/* Air Cleaner Text */}
                    <div className='m-2 s-justify-content-flex-start is-flex-grow-1'>
                        <h1>{airCleaner.name}</h1>
                        <h2>You'd need <strong className='has-text-info-dark'>{airCleaner.num_needed}</strong> of these.</h2>
                        <br />
                        <strong className='has-text-info-dark'>{airCleaner.annual_kwh} kW/h</strong>
                        <br />
                        <span>{airCleaner.cadr} CADR</span>
                    </div>
    
                    {/* Compare Button */}
                    <div className='is-align-self-flex-end'>
                        <button className='button is-info'>Compare (+)</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='box m-3 p-3 is-flex is-flex-direction-row is-justify-content-space-between' key={airCleaner.id}>
                    {/* Air Cleaner Image */}
                    <div className='image is-128x128 has-background-white-ter is-align-self-center imageItem'>
                        <img alt={airCleanerAlt ? airCleanerAlt : "No Image"} className='image is-128x128'></img>
                    </div>
    
                    {/* Air Cleaner Text */}
                    <div className='m-2 s-justify-content-flex-start is-flex-grow-1'>
                        <h1>{airCleaner.name}</h1>
                        <h2 className='has-text-info-dark'>Smoke CADR of {airCleaner.cadr}</h2>
                        <br />
                        <p>You would need of {airCleaner.num_needed} these to clean your entire space</p>
                        <span>Annual energy usage: <strong>{airCleaner.annual_kwh} kW/h</strong></span>
                        <br />
                        <span>Filter type: <strong>{airCleaner.filter_type}</strong></span>
                    </div>
    
                    {/* Compare Button */}
                    <div className='is-align-self-flex-end'>
                        <button className='button is-info'>Compare (+)</button>
                    </div>
                </div>
            )
        }
        
    })

    if (isMobileView) {
        return (
            // Overall div container
            <div className='p-2'>
                {/* Back Button */}
                <button onClick={Previous}>
                    {"< Back"}
                </button>
                <br />
                <br />

                {/* Content */}
                <div>
                    <h1 className="title is-4">Recommendations</h1>
                    <h1 className="subtitle is-5 has-text-info">We've hand picked these items for you!</h1>

                    {airCleanerComponents}
                </div>
            </div>
        );
    } else {
        return (
            // Overall div container
            <div className='p-6'>
                {/* Back Button */}
                <button onClick={Previous}>
                    {"< Back"}
                </button>
                <br />

                {/* Content */}
                <div>
                    <h1 className="title is-2 has-text-centered">Recommendations</h1>
                    <h1 className="subtitle is-3 has-text-info has-text-centered">We've hand picked these items for you!</h1>

                    {airCleanerComponents}
                </div>
            </div>
        );
    }
}

export default Recommendations;