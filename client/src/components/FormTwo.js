// Import Styles
import '../styles/styles.css';

// Import Libraries
import React, { useEffect } from 'react'

import { Icon } from '@iconify/react';

// Import Assets
import RoomDimensions from '../images/RoomSizeReferences/room-dimensions.png';
import EstimatedArea from '../images/RoomSizeReferences/est-area.png';
import Restaurant from '../images/RoomSizeReferences/restaurant.png';
import CoffeeShop from '../images/RoomSizeReferences/coffee-shop.png';
import SmallCafe from '../images/RoomSizeReferences/small-cafe.png';

window.scrollTo(0, 0)

export default function FormTwo({ prevStep, nextStep, handleChange, values }) {

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    function checkValues() {
        if ((values.unit === "Feet" && values.floorArea > 3000) || (values.unit === "Meters" && values.floorArea > 277)) {
            document.getElementById("error-message").innerHTML = "<strong>Error:</strong> This tool is not recommended for rooms greater than 3000 sq.ft or 277 sq.m"
            document.getElementById("error-message").style.display = "block"
        } else if (values.roomWidth * values.roomLength === 0 && values.floorArea === 0) {
            document.getElementById("error-message").innerText = "Fill out the required fields to continue!"
            document.getElementById("error-message").style.display = "block"
        } else {
            document.getElementById("error-message").style.display = "none"
            nextStep();
        }
    }

    let helpToggle = false
    let helpDivPage = 1

    // Function to handle unit parsing
    function setUnitText(unitName) {
        values.unit = unitName;
        document.getElementById("dimensionsSection").style.display = "block"
        let variableTextTags = [...document.getElementsByClassName("variableInput")]
        // Setting all texts with unit name to the passed value
        variableTextTags.forEach(textTag => {
            textTag.innerText = unitName
        })

        // Setting any numeric units to the equivalent value in the passed value
        if (unitName === "Meters") {
            document.getElementById("unitExample").innerText = "5"
            document.getElementById("unitCeiling").innerText = "2.4 - 3.0"
        } else {
            document.getElementById("unitExample").innerText = "15"
            document.getElementById("unitCeiling").innerText = "8 - 10"
        }

    }

    function toggleDropdown() {
        helpToggle = !helpToggle
        var helpDiv = document.getElementById("helpDiv")
        if (helpToggle) {
            helpDiv.style.display = "block"
        } else {
            helpDiv.style.display = "none"
        }


    }

    function changePageCounter(flip) {
        if (flip === "Left") {
            helpDivPage--
            if (helpDivPage < 1) {
                helpDivPage = 1
            }
        } else {
            helpDivPage++;
            if (helpDivPage > 4) {
                helpDivPage = 4
            }
        }

        changeHelpDivContent()
    }

    function changeHelpDivContent() {
        if (helpDivPage === 1) {
            document.getElementById("backPageButton").classList = "has-text-grey-light p-1 mr-2 is-unselectable"
            document.getElementById("nextPageButton").classList = "has-text-black p-3 is-clickable is-unselectable"
        } else if (helpDivPage > 1 && helpDivPage < 4) {
            document.getElementById("backPageButton").classList = "has-text-black p-3 is-clickable is-unselectable"
            document.getElementById("nextPageButton").classList = "has-text-black p-3 is-clickable is-unselectable"
        } else {
            document.getElementById("backPageButton").classList = "has-text-black p-3 is-clickable is-unselectable"
            document.getElementById("nextPageButton").classList = "has-text-grey-light p-1 mr-2 is-unselectable"
        }

        if (helpDivPage === 1) {
            document.getElementById("helpDivContent1").style.display = "block"
            document.getElementById("helpDivContent2").style.display = "none"
            document.getElementById("helpDivContent3").style.display = "none"
            document.getElementById("helpDivContent4").style.display = "none"
        } else if (helpDivPage === 2) {
            document.getElementById("helpDivContent1").style.display = "none"
            document.getElementById("helpDivContent2").style.display = "block"
            document.getElementById("helpDivContent3").style.display = "none"
            document.getElementById("helpDivContent4").style.display = "none"
        } else if (helpDivPage === 3) {
            document.getElementById("helpDivContent1").style.display = "none"
            document.getElementById("helpDivContent2").style.display = "none"
            document.getElementById("helpDivContent3").style.display = "block"
            document.getElementById("helpDivContent4").style.display = "none"
        } else {
            document.getElementById("helpDivContent1").style.display = "none"
            document.getElementById("helpDivContent2").style.display = "none"
            document.getElementById("helpDivContent3").style.display = "none"
            document.getElementById("helpDivContent4").style.display = "block"
        }
    }


    useEffect(() => {
        // function to remember the unit selection if user goes back
        const reloadUnitSelection = () => {
            var radios = document.getElementsByName("unitsGroup");
            var val = values.unit;
            console.log("form type:" + values.calculatorType);
            for (let i = 0; i < radios.length; i++) {
                if (radios[i].value === val) {
                    radios[i].checked = true;
                    setUnitText(val);
                }
            }
        }
        reloadUnitSelection();
    });


 
    // Return form two page
    return (
        // Overall div element
        <div className="form-container">
            <div className="p-6">
                {/* Page Info */}
                <div>
                    <h1 className="title is-1 has-text-centered">{values.calculatorType} Portable Air Cleaner</h1>
                    <progress className="progress is-info" value="50" max="100" />
                    <button className="backButton" onClick={Previous}>
                        {"??? Back"}
                    </button>
                    <h2 className="has-text-centered"><strong>Step 1</strong> of {values.stepCount} | ROOM DIMENSIONS</h2>
                </div>

                {/* Prompt */}
                <div className="card p-5">
                    <p><strong>What are your room dimensions?</strong></p>
                    <p>Please enter your room width and length, or overall square footage. The average ceiling height is 8-10 feet.</p>
                    <div className="mt-3">
                        <div style={{ display: "flex", alignItems: "center" }} className="help-div is-clickable has-text-grey is-underlined" onClick={toggleDropdown}>
                            <Icon icon="eva:question-mark-circle-outline" style={{ fontSize: '2rem' }} />
                            <span className="ml-1">I need help</span>
                        </div>

                        {/* "Help" Popup */}
                        <div id="helpDiv" style={{ display: "none" }} className="card p-4">
                            {/* "Help" Content" */}
                            <div id="helpDivContent1">
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <Icon className='has-text-grey' icon="eva:question-mark-circle-outline" style={{ fontSize: '4rem' }} />
                                    <h2 className="title is-4 has-text-info-dark">How do I measure my space?</h2>
                                </div>

                                <div className="mt-3">
                                    <h3 className="title is-5">Measuring Room Dimensions</h3>
                                    <p>Refer to this diagram for corresponding measurements. In addition the average ceiling height is 8-10 feet (2.4 ~ 3 meters).</p>
                                    <div className="has-text-centered">
                                        <img src={RoomDimensions} alt="An example diagram of a room"></img>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <h3 className="title is-5">Estimating Room Area</h3>
                                    <p>The following visualizations are here for your reference to esimate the area of your indoor space.</p>
                                    <br />
                                    <div className="has-text-centered">
                                        <p>{"Two & a half 2-car garages:"} <strong>1000 Sq. Ft (92.90 Sq. m.)</strong></p>
                                        <img src={EstimatedArea} alt="Diagram of two and a half 2-car garages"></img>
                                        <p className="has-text-grey is-italic">Source: The Living Room</p>
                                    </div>
                                    <br />
                                    <p>Refer to the following  indoor layouts to compare the size of your space:</p>
                                    <br />
                                    <div className="has-text-centered">
                                        <p>Small Cafe: <strong>518 Sq. Ft. (48.12 Sq. m.)</strong></p>
                                        <img src={SmallCafe} alt="Diagram of a small cafe"></img>
                                        <p className="has-text-grey is-italic">Source: Room Sketcher</p>
                                    </div>
                                </div>
                            </div>
                            <div id="helpDivContent2" style={{ display: "none" }}>
                                <div className="has-text-centered">
                                    <p>Small Cafe: <strong>518 Sq. Ft. (48.12 Sq. m.)</strong></p>
                                    <img src={SmallCafe} alt="Diagram of a small cafe"></img>
                                    <p className="has-text-grey is-italic">Source: Room Sketcher</p>
                                </div>
                            </div>
                            <div id="helpDivContent3" style={{ display: "none" }}>
                                <div className="has-text-centered">
                                    <p>Coffee Shop: <strong>1081 Sq. Ft. (100.42 Sq. m.)</strong></p>
                                    <img src={CoffeeShop} alt="Diagram of a coffee shop"></img>
                                    <p className="has-text-grey is-italic">Source: Room Sketcher</p>
                                </div>
                            </div>
                            <div id="helpDivContent4" style={{ display: "none" }}>
                                <div className="has-text-centered">
                                    <p>Restaurant: <strong>2167 Sq. Ft. (201.32 Sq. m.)</strong></p>
                                    <img src={Restaurant} alt="Diagram of a restaurant"></img>
                                    <p className="has-text-grey is-italic">Source: Room Sketcher</p>
                                </div>
                            </div>
                            <div id="helpDivNavigation" className="has-text-centered m-6 is-size-4 has-text-weight-bold">
                                <span title="Back" id="backPageButton" className="has-text-grey-light p-1 mr-2" style={{ cursor: "default" }} onClick={e => changePageCounter("Left")}>{"<"}</span>
                                <span title="Next" id="nextPageButton" className="has-text-black p-3 is-clickable" onClick={e => changePageCounter("Right")}>{">"}</span>
                            </div>
                        </div>
                    
                    
                    </div>
                        <form className="mt-4">
                        {/* Units Section */}
                        <div>
                            <p className="mb-2">Select Units</p>
                            <input id="feetRadio" className="mr-2" type="radio" value="Feet" name="unitsGroup" onClick={
                                e => setUnitText(e.target.value)} onChange={handleChange('unit')} />
                            <label>Feet</label>
                            <br />
                            <input id="metersRadio" className="mr-2" type="radio" value="Meters" name="unitsGroup" onClick={e => setUnitText(e.target.value)} onChange={handleChange('unit')} />
                            <label>Meters</label>
                        </div>

                        <hr />
                        {/* Dimensions Section */}
                        <div id="dimensionsSection" style={{ display: "none" }}>
                            <p className="mb-2">Room Width</p>
                            <span>
                                <input className="mr-2" type="number" id="roomWidthInput" value={values.roomWidth} onChange={handleChange('roomWidth')} />
                                <span className="variableInput">Feet</span>
                            </span>
                            <p className="mt-1 has-text-grey" id="measurementTip">Enter a number value: e.g., <strong className="has-text-grey" id="unitExample">15</strong></p>
                            <br />
                            <p className="mb-2">Room Length</p>
                            <span className="mt-3">
                                <input className="mr-2" type="number" id="roomLengthInput" value={values.roomLength} onChange={handleChange('roomLength')} />
                                <span className="variableInput">Feet</span>
                            </span>
                            <br/><br/>
                            <p>Square Footage<span className="has-text-danger-dark">*</span></p>
                            <span className="mt-3">
                                <input className="mr-2" type="number" id="squareFootageInput" value={values.floorArea} onChange={handleChange('floorArea')} />
                                <span className="variableInput">Feet</span>
                            </span>

                            <hr />
                            <p>Ceiling Height<span className="has-text-danger-dark">*</span></p>
                            <span className="mt-3">
                                <input className="mr-2" type="number" id="ceilingHeightInput" value={values.ceilingHeight} onChange={handleChange('ceilingHeight')}
                                />
                                <span className="variableInput">Feet</span>
                            </span>
                            <p className="mt-1 has-text-grey">The average ceiling height is <span id="unitCeiling">8-10 </span> <span className="variableInput">feet</span></p>
                        </div>
                    </form>
                </div>
                <div className="notification is-danger" id="error-message"> </div>

                <div className="has-text-centered">
                    <button onClick={checkValues} className="button is-info mt-6 has-text-centered">Next Page</button>
                </div>

            </div>

        </div>
    )


}