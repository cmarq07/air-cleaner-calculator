// Import Services
import concentrate from './concentrateData'

export default function sortData(data, values, sortType = "num_needed", order = "desc") {
    // Returns concentrated data for usage
    var airCleaners = concentrate(data, values)

    // Sort the data
    var sortedCleaners = airCleaners.sort((cleanerA, cleanerB) => cleanerA[sortType] - cleanerB[sortType])

    // Return the data
    if(order === "ascending" || order === "asc") {
        return sortedCleaners
    } else {
        return sortedCleaners.reverse()
    }
}