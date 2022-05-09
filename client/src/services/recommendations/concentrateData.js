export default function concentrate(data, values) {
    // Get the user's room dimensions
    let roomDimensions = values.floorArea * values.ceilingHeight;
    
    console.log("room volume equals ", roomDimensions)
    // note: if we can make the floorArea prop automatically be whatever roomWidth * roomHeight are (if they're provided), we wouldn't need the if checks.
    //old: let roomDimensions = values.roomWidth * values.roomLength * values.ceilingHeight + values.floorArea

    // A counter to use as temporary keys/ids for the array
    let counter = 0

    let airCleaners = [];

    // The data with filtered fields to use for the components
    if (values.unit === "Feet") {
        airCleaners = data.map((airCleaner) => {
            // The ACH value of the cleaner given its Smoke CADR and the user's room dimensions
            let achValue = (((airCleaner.cadr) * 60 / roomDimensions) * 1) + 1


            // Count that tallies the number of air cleaners required to get a user's space to an ACH value of 4 or above
            let count = 1

            // Tallies the number of cleaners until it gets to an ACH of 4
            while (achValue < 4) {
                count++

                achValue = (((airCleaner.cadr) * 60 / roomDimensions) * count) + 1
            }
            counter++

            // Return the data
            return ({
                "id": counter,
                "name": airCleaner.name,
                "cadr": airCleaner.cadr,
                "ach": achValue,
                "num_needed": count,
                "link": airCleaner.link,
                "image": airCleaner.image
            })
        
        })
    }

    if (values.unit === "Meters") {
        airCleaners = data.map((airCleaner) => {
            // The ACH value of the cleaner given its Smoke CADR and the user's room dimensions
            let achValue = (((airCleaner.cadr) / 0.58 / roomDimensions) * 1) + 1

            // Count that tallies the number of air cleaners required to get a user's space to an ACH value of 4 or above
            let count = 1

            // Tallies the number of cleaners until it gets to an ACH of 4
            while (achValue < 4) {
                count++

                achValue = (((airCleaner.cadr) / 0.58 / roomDimensions) * count) + 1 
            }
            counter++
            
            // Return the data
            return ({
                "id": counter,
                "name": airCleaner.name,
                "cadr": airCleaner.cadr,
                "ach": achValue,
                "num_needed": count,
                "link": airCleaner.link,
                "image": airCleaner.image
            })
            
        })
    }

    // filter out aircleaners that require user to buy more than 5 ?
    let filteredAirCleaners = airCleaners.filter(airCleaner => airCleaner.num_needed <= 5)


    return filteredAirCleaners;
}