export default function concentrate(data, values) {
    // Get the user's room dimensions
    let roomDimensions = values.roomWidth * values.roomLength * values.ceilingHeight + values.floorArea

    // A counter to use as temporary keys/ids for the array
    let counter = 0

    // The data with filtered fields to use for the components
    let airCleaners = data.map((airCleaner) => {
        // The ACH value of the cleaner given its Smoke CADR and the user's room dimensions
        let achValue = (((airCleaner.smoke_free_clean_air_delivery_1) * 60 / roomDimensions) * 1) + 1

        // Count that tallies the number of air cleaners required to get a user's space to an ACH value of 4 or above
        let count = 0

        // Tallies the number of cleaners until it gets to an ACH of 4
        while (achValue < 4) {
            count++

            achValue = (((airCleaner.smoke_free_clean_air_delivery_1) * 60 / roomDimensions) * count) + 1
        }

        // Increase the counter for the key/ids
        counter++

        // Return the data
        return ({
            "id": counter,
            "name": airCleaner.brand_name + " " + airCleaner.model_name,
            "cadr": Number(airCleaner.smoke_free_clean_air_delivery_1).toFixed(1),
            "ach": achValue,
            "annual_kwh": Number(airCleaner.annual_energy_use_kwh_year).toFixed(1),
            "filter_type": airCleaner.filter_1_type,
            "num_needed": count
        })
    })
    
    return airCleaners
}