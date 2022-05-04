// Import Services
import concentrate from './concentrateData'

export default function filterData(data) {
    // Returns concentrated data for usage
    const airCleaners = concentrate(data)

    // Sort the data by the given parameter
    return airCleaners
}