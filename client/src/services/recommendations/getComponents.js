export default function getComponents(data, isMobile) {


    let airCleanerComponents = data.map((airCleaner) => {
        let airCleanerAlt = "image of " + airCleaner.name
        let searchQuery = ""
        let nameForQuery = airCleaner.name.split(" ")

        for (let i = 0; i < nameForQuery.length; i++) {
            searchQuery += nameForQuery[i];
            if (i+1 != nameForQuery.length) {
                searchQuery += "+"
            }
        }

        let googleShoppingUrl = "https://www.google.com/search?tbm=shop&q="+searchQuery;


        return (
            <div className='box airCleanerCard' key={airCleaner.id}>
                {/* Air Cleaner Image */}
                <div className='is-align-self-center'>
                    <img src={airCleaner.image} alt={airCleanerAlt ? airCleanerAlt : "No Image"}></img>
                </div>

                {/* Air Cleaner Text */}
                <div className='m-2 cardText'>
                    <strong>{airCleaner.name}</strong>
                    <h2>You'd need <strong className='has-text-info-dark'>{airCleaner.num_needed}</strong> of these.</h2>
                    {/*<strong className='has-text-info-dark'>{airCleaner.annual_kwh} kW/h</strong>*/}
                    <span>{airCleaner.cadr} CADR</span>
                </div>

                {/* Compare Button */}
                <div className='shopButtons'>
                <a href={airCleaner.link} target="_blank"><button className='button is-info'>Store Info</button></a>
                <a href={googleShoppingUrl} target="_blank"><button className='button is-info'>Search Stores</button></a>
                </div>
            </div>
            )
        }
    );

    return airCleanerComponents.slice(0, 10)
}