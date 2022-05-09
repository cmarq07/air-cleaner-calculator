// Import Styles
import '../styles/styles.css';

// Import Libraries
import React, { useState, useEffect } from 'react'

// Import Services
// import filterData from '../services/recommendations/filterData';
import getComponents from '../services/recommendations/getComponents';
import sortData from '../services/recommendations/sortData';
import concentrate from '../services/recommendations/concentrateData';
import 'reactjs-popup/dist/index.css';

import PopupRecommendations from './PopupRecommendations';



// const filterTypes = [
//     {
//         "name": "Filter by Number of Cleaners",
//         "value": "num_needed"
//     },
//     {
//         "name": "Filter by kW/h",
//         "value": "annual_kwh"
//     },
//     {
//         "name": "Filter by CADR",
//         "value": "cadr"
//     },
// ]

export function Recommendations({ values, airCleaners, prevStep }) {
    window.scrollTo(0, 0)

    // const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768)
    const [components, setComponents] = useState([])

    // Rembembers the previous page
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    // const handleChange = (event) => {
    //     let newData = sortData(airCleaners, values, event.value)
    //     console.log(`sorting by ${event.value}`, newData)
    //     setComponents(getComponents(newData, window.innerWidth < 768))
    // }

    /*async function getImages(queryImg) {
        const Access_Key = 'hMxoXWq9kuzH-g7QZj9ni78x34PD3YntgxIzMSjsip0'
        let response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${queryImg}&client_id=${Access_Key}`)
        let images = await response.json()

        console.log(images)
    }*/

    useEffect(() => {

        // Sets event listener for resizing the page
        window.addEventListener("resize", () => {
            // setIsMobileView(window.innerWidth < 768)
            let newData = concentrate(airCleaners, values)
            setComponents(getComponents(newData, window.innerWidth < 768))
        });

        // Set the data and get the components
        let sortedData = sortData(airCleaners, values)
        console.log("Sorted data:", sortedData)
        setComponents(getComponents(sortedData, window.innerWidth < 768))
    }, [airCleaners, values])

    if (components.length === 0) {
        setComponents(
            <h1 className='title is-3 mt-6 has-text-centered has-text-info'>No Results Available</h1>
        )
    }

    return (
        <div style={{ backgroundColor: '#f8f8f8' }}>
            <PopupRecommendations />

            <div className='p-6'>
                {/* Back Button */}
                <button className="backButton" onClick={Previous}>
                    {"← Back"}
                </button>
                <br />

                {/* Content */}
                <div>
                    <h1 className="title is-2 has-text-centered">Recommendations</h1>
                    <h1 className="subtitle is-3 has-text-info has-text-centered">We've hand picked these items for you!</h1>

                    {/* <div>
                        <Select
                            options={filterTypes}
                            getOptionLabel={(filterType) => filterType.name}
                            getOptionValues={(filterType) => filterType.value}
                            defaultValue={{
                                "name": "Filter by Number of Cleaners",
                                "value": "num_cleaners"
                            }}
                            onChange={event => handleChange(event)}
                        />
                    </div> */}

                    {components ? components : <h1>No Results</h1>}
                </div>
            </div>
        </div>
    );
}


export default Recommendations;