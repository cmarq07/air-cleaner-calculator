// Import Services
import concentrate from './concentrateData'

export default function sortData(data, values, sortType = "num_needed", order = "desc") {
    // Returns concentrated data for usage
    var airCleaners = concentrate(data, values)

    // Sort the data
    var sortedCleaners = airCleaners.sort((cleanerA, cleanerB) => cleanerA[sortType] - cleanerB[sortType])
    console.log(sortedCleaners);
    //console.log("RESULT", airCleaners)
    
    /*async function getUPCData(upc) {
        let response = await fetch(`/upc/fetch?upc=${upc}`);
        let responseJson = await response.json();
        return responseJson;
    }

    // only do a few calls at a time to avoid exceeding api limit!
    async function getLowestPrices() {
        for (let i = 0; i < 5; i++) {
            const newData = await getUPCData(sortedCleaners[i].upc);
            console.log("NEW DATA:",newData);
            sortedCleaners[i].lowest_price = newData.lowest_price;
            sortedCleaners[i].highest_price = newData.highest_price;
            sortedCleaners[i].images = newData.images;
            sortedCleaners[i].offers = newData.offers;
            console.log("result", sortedCleaners[i]);

        }   

    }


    getLowestPrices();
*/
    // Return the data
    if(order === "ascending" || order === "asc") {
        return sortedCleaners
    } else {
        return sortedCleaners.reverse()
    }
    
}