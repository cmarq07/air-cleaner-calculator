import express from 'express';
import fetch from 'node-fetch';
var router = express.Router();

//test
//var UPC_CODE = "689122018928";

router.get('/', function(req, res, next) {
    res.json({ message: "Hello from server!" });
});

router.get("/fetch", async (req, res) => {
    var query = req.query.upc;
    try {
        console.log("/fetch endpoint is called");
        const url = `https://api.upcitemdb.com/prod/trial/lookup?upc=${query}`;
        const options = { //get methods dont need headers
            "method": "GET"
        }
        const response = await fetch(url, options)
        .then(res => res.json())
        .catch(e => {
            console.error("error: ", e);
        });
        
        if (response.code === "OK") {
            console.log("RESPONSE ", response, "UPC: ", query);
            res.send({lowest_price: response.items[0].lowest_recorded_price,
                highest_price: response.items[0].highest_recorded_price,
                images: response.items[0].images,
                offers: response.items[0].offers}); 
        } else {
            res.send({lowest_price: 0,
                highest_price: 0,
                images: [],
                offers: []}); 
        }
    
    } catch(e) {
        console.log("error:",e)
    }

    /*   res.send({lowest_price: response.items[0].lowest_recorded_price,
    highest_price: response.items[0].highest_recorded_price,
    images: response.items[0].images,
    offers: response.items[0].offers});*/

});

export default router;
