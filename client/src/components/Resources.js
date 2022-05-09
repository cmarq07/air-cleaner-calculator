import '../styles/styles.css';
import React from 'react'

export function Resources() {
    window.scrollTo(0, 0)
    
    return (
        <>
        <div className="container static-page">
            <div className="content">
                <h1 className="title">Resources</h1>
                <p>Here are a list of helpful resources of different topics regarding indoor air quality.</p>
                <div>
                    <b>MAINTENANCE/CARE AIR CLEANER</b>
                    <ul>
                        <li>
                            <a href="https://www.ehs.washington.edu/system/files/resources/air-purifier-focus-sheet.pdf">Air Purifier Focus Sheet</a>
                        </li>

                        <li>
                            <a href="https://myhomeclimate.com/blogs/knowledge-centre/how-to-clean-and-maintain-your-portable-air-conditioner">Clean and Maintain a Portable Air Cleaner</a>
                        </li>

                        <li>
                            <a href="https://www.sylvane.com/air-purifier-maintenance.html">Air Purifier Maintenance</a>
                        </li>
                    </ul>
                   
                    <b>IMPORTANCE OF AIR QUALITY</b>
                    <ul>
                        <li>
                            <a href="https://www.niehs.nih.gov/research/programs/geh/geh_newsletter/2014/4/articles/air_pollution_accounts_for_1_in_8_deaths_worldwide_according_to_new_who_estimates.cfm">NIH Study</a>
                        </li>
                    </ul>

                    <b>COVID SPECIFIC GUIDELINES ON INDOOR SPACE AIR QUALITY</b>
                    <ul>
                        <li>
                            <a href="https://schools.forhealth.org/risk-reduction-strategies-for-reopening-schools/healthy-buildings/">Healthy Building Guidelines (from Harvard T.H Chan School of Public Health)</a>
                        </li>
                        <li>
                            <a href="https://theconversation.com/how-to-use-ventilation-and-air-filtration-to-prevent-the-spread-of-coronavirus-indoors-143732">Prevent COVID spread indoors with air filtration and ventilation (from The Conversation)</a>
                        </li>
                        <li>
                            <a href="https://www.wired.com/story/the-teeny-tiny-scientific-screwup-that-helped-covid-kill/">The 60-Year-Old Scientific Screwup That Helped Covid Kill (from Wired)</a>
                        </li>
                    </ul>
                    
                    <b>AIRBORNE TRANSMISSIONS</b>
                    <ul>
                        <li>
                            <a href="https://www.science.org/doi/10.1126/science.abg2025">A paradigm shift to combat indoor respiratory infection</a>
                        </li>
                    </ul>
                    


                    <b>BEST AIR FILTRATION PRACTICES INDOORS</b>
                    <ul>

                        <li>
                            <a href="https://www.epa.gov/indoor-air-quality-iaq">EPA's indoor air quality guides</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Resources;


