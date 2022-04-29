export default function getComponents(data, isMobile) {
    // Air Cleaner Alt Text
    let airCleanerAlt

    let airCleanerComponents = data.map((airCleaner) => {
        if (isMobile) {
            return (
                <div className='box mb-3 p-3 is-flex is-flex-direction-row is-justify-content-space-between' key={airCleaner.id}>
                    {/* Air Cleaner Image */}
                    <div className='image is-128x128 has-background-white-ter is-align-self-center imageItem'>
                        <img src={airCleaner.image} alt={airCleanerAlt ? airCleanerAlt : "No Image"} className='image is-128x128'></img>
                    </div>

                    {/* Air Cleaner Text */}
                    <div className='m-2 s-justify-content-flex-start is-flex-grow-1'>
                        <h1>{airCleaner.name}</h1>
                        <h2>You'd need <strong className='has-text-info-dark'>{airCleaner.num_needed}</strong> of these.</h2>
                        <br />
                        {/*<strong className='has-text-info-dark'>{airCleaner.annual_kwh} kW/h</strong>*/}
                        <br />
                        <span>{airCleaner.cadr} CADR</span>
                    </div>

                    {/* Compare Button */}
                    <div className='is-align-self-flex-end'>
                    <a href={airCleaner.link}><button className='button is-info'>Store Info</button></a>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='box m-3 p-3 is-flex is-flex-direction-row is-justify-content-space-between' key={airCleaner.id}>
                    {/* Air Cleaner Image */}
                    <div className='image is-128x128 has-background-white-ter is-align-self-center imageItem'>
                        <img src={airCleaner.image}  alt={airCleanerAlt ? airCleanerAlt : "No Image"} className='image is-128x128'></img>
                    </div>

                    {/* Air Cleaner Text */}
                    <div className='m-2 s-justify-content-flex-start is-flex-grow-1'>
                        <h1>{airCleaner.name}</h1>
                        <h2 className='has-text-info-dark'>Smoke CADR of {airCleaner.cadr}</h2>
                        <br />
                        <p>You would need of {airCleaner.num_needed} these to clean your entire space</p>
                        {/*<span>Annual energy usage: <strong>{airCleaner.annual_kwh} kW/h</strong></span>*/}
                        <br />
                    </div>

                    {/* Compare Button */}
                    <div className='is-align-self-flex-end'>
                        <a href={airCleaner.link}><button className='button is-info'>Store Info</button></a>
                    </div>
                </div>
            )
        }
    })

    return airCleanerComponents.slice(0, 10)
}