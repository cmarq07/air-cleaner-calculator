import '../App.css';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Scroll from 'react-scroll';
import RoomDimensions from './FormTwo/room-dimensions.png';
import EstimatedArea from './FormTwo/est-area.png';
import Restaurant from './FormTwo/restaurant.png';
import CoffeeShop from './FormTwo/coffee-shop.png';
import SmallCafe from './FormTwo/small-cafe.png';

export default function FormTwo() {
    let helpToggle = false
    let helpDivPage = 1

    // Function to handle unit parsing
    function setUnits(unitName) {
        document.getElementById("dimensionsSection").style.display = "block"
        let variableTextTags = [...document.getElementsByClassName("variableInput")]
        // Setting all texts with unit name to the passed value
        variableTextTags.forEach(textTag => {
           textTag.innerText = unitName
        })

        // Setting any numeric units to the equivalent value in the passed value
        if(unitName === "Meters") {
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
        if(helpToggle) {
            helpDiv.style.display = "block"
        } else {
            helpDiv.style.display = "none"
        }
        

    }

    function changePageCounter(flip) {
        if(flip === "Left") {
            helpDivPage--
            if(helpDivPage < 1) {
                helpDivPage = 1
            }
        } else {
            helpDivPage++;
            if(helpDivPage > 4) {
                helpDivPage = 4
            }
        }

        changeHelpDivContent()
    }

    function changeHelpDivContent() {
        if(helpDivPage === 1) {
            document.getElementById("backPageButton").classList = "has-text-grey-light p-1 mr-2 is-unselectable"
            document.getElementById("nextPageButton").classList = "has-text-black p-3 is-clickable is-unselectable"
        } else if (helpDivPage > 1 && helpDivPage < 4) {
            document.getElementById("backPageButton").classList = "has-text-black p-3 is-clickable is-unselectable"
            document.getElementById("nextPageButton").classList = "has-text-black p-3 is-clickable is-unselectable"
        } else {
            document.getElementById("backPageButton").classList = "has-text-black p-3 is-clickable is-unselectable"
            document.getElementById("nextPageButton").classList = "has-text-grey-light p-1 mr-2 is-unselectable"
        }

        if(helpDivPage === 1) {
            document.getElementById("helpDivContent1").style.display = "block"
            document.getElementById("helpDivContent2").style.display = "none"
            document.getElementById("helpDivContent3").style.display = "none"
            document.getElementById("helpDivContent4").style.display = "none"
        } else if(helpDivPage === 2) {
            document.getElementById("helpDivContent1").style.display = "none"
            document.getElementById("helpDivContent2").style.display = "block"
            document.getElementById("helpDivContent3").style.display = "none"
            document.getElementById("helpDivContent4").style.display = "none"
        } else if(helpDivPage === 3) {
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
        var scroll = Scroll.animateScroll
        scroll.scrollTo("#helpDiv", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        })
    }

    function submitFormData() {
        
    }

    // Return form two page
    return (

        // Overall div element
        <div className="p-6">
            {/* Page Info */}
           <div>
               <h1 className="title is-1 has-text-centered">Test Your Portable Air Cleaner</h1>
               <progress className="progress is-info" value="33" max="100" />
               <Link to='../formone'>
                   {"< Back"}
               </Link>
               <h2 className="has-text-centered"><strong>Step 1</strong> of 3 | ROOM DIMENSIONS</h2>
           </div>

           {/* Prompt */}
           <div className="card p-4">
               <p><strong>What are your room dimensions?</strong></p>
               <p>Please enter your room width and length, or overall square footage. The average ceiling height is 8-10 feet.</p>
               <div className="mt-3">
                    <div style={{display:"flex", alignItems:"center"}} className="help-div is-clickable has-text-grey is-underlined" onClick={toggleDropdown}>
                        <Icon icon="eva:question-mark-circle-outline" style={{fontSize: '2rem'}}/>
                        <span className="ml-1">I need help</span>
                    </div>

                    {/* "Help" Popup */}
                    <div id="helpDiv" style={{display:"none"}} className="card p-4">
                        {/* "Help" Content" */}
                        <div id="helpDivContent1">
                            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                <Icon className='has-text-grey' icon="eva:question-mark-circle-outline" style={{fontSize: '4rem'}}/>
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
                                <br/>
                                <div className="has-text-centered">
                                    <p>Small Cafe: <strong>518 Sq. Ft. (48.12 Sq. m.)</strong></p>
                                    <img src={SmallCafe} alt="Diagram of a small cafe"></img>
                                    <p className="has-text-grey is-italic">Source: Room Sketcher</p>
                                </div>
                            </div>
                        </div>
                        <div id="helpDivContent2" style={{display:"none"}}>
                            <div className="has-text-centered">
                                <p>Small Cafe: <strong>518 Sq. Ft. (48.12 Sq. m.)</strong></p>
                                <img src={SmallCafe} alt="Diagram of a small cafe"></img>
                                <p className="has-text-grey is-italic">Source: Room Sketcher</p>
                            </div>
                        </div>
                        <div id="helpDivContent3" style={{display:"none"}}>
                            <div className="has-text-centered">
                                <p>Coffee Shop: <strong>1081 Sq. Ft. (100.42 Sq. m.)</strong></p>
                                <img src={CoffeeShop} alt="Diagram of a coffee shop"></img>
                                <p className="has-text-grey is-italic">Source: Room Sketcher</p>
                            </div>
                        </div>
                        <div id="helpDivContent4" style={{display:"none"}}>
                            <div className="has-text-centered">
                                <p>Restaurant: <strong>2167 Sq. Ft. (201.32 Sq. m.)</strong></p>
                                <img src={Restaurant} alt="Diagram of a restaurant"></img>
                                <p className="has-text-grey is-italic">Source: Room Sketcher</p>
                            </div>
                        </div>
                        <div id="helpDivNavigation" className="has-text-centered m-6 is-size-4 has-text-weight-bold">
                            <span title="Back" id="backPageButton" className="has-text-grey-light p-1 mr-2" style={{cursor:"default"}} onClick={e => changePageCounter("Left")}>{"<"}</span>
                            <span title="Next" id="nextPageButton" className="has-text-black p-3 is-clickable" onClick={e => changePageCounter("Right")}>{">"}</span>
                        </div>
                    </div>
               </div>
               <form className="mt-4">
                   {/* Units Section */}
                   <div>
                    <p className="mb-2">Select Units</p>
                    <input id="feetRadio" className="mr-2" type="radio" value="Feet" name="unitsGroup" onClick={e => setUnits(e.target.value)} />
                    <label>Feet</label>
                    <br />
                    <input id="metersRadio" className="mr-2" type="radio" value="Meters" name="unitsGroup" onClick={e => setUnits(e.target.value)}/>
                    <label>Meters</label>
                   </div>

                   <hr/>
                   {/* Dimensions Section */}
                   <div id="dimensionsSection" style={{ display : "none"}}>
                    <p className="mb-2">Room Width</p>
                    <span>
                        <input className="mr-2" type="number" id="roomWidthInput" />
                        <span className="variableInput">Feet</span>
                    </span>
                    <p className="mt-1 has-text-grey" id="measurementTip">Enter a number value: e.g., <strong className="has-text-grey" id="unitExample">15</strong></p>
                    <br />
                    <p className="mb-2">Room Length</p>
                    <span className="mt-3">
                        <input className="mr-2" type="number" id="roomLengthInput" />
                        <span className="variableInput">Feet</span>
                    </span>
                    <p className="title is-4 has-text-centered mt-6">OR</p>
                    <p>Square Footage</p>
                    <span className="mt-3">
                        <input className="mr-2" type="number" id="squareFootageInput" />
                        <span className="variableInput">Feet</span>
                    </span>

                    <hr />
                    <p>Ceiling Height<span className="has-text-danger-dark">*</span></p>
                    <span className="mt-3">
                        <input className="mr-2" type="number" id="squareFootageInput" />
                        <span className="variableInput">Feet</span>
                    </span>
                    <p className="mt-1 has-text-grey">The average ceiling height is <span id="unitCeiling">8-10 </span> <span className="variableInput">feet</span></p>
                   </div>
               </form>
           </div>
           <div className="has-text-centered">
            <Link onClick={submitFormData} to='../formthree' className="button is-primary mt-6 has-text-centered">Next Page</Link>
           </div>
           
        </div>
    )
}