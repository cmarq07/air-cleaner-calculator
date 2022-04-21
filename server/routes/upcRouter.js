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
    console.log("RESPONSE ", response);
    res.send(response.items[0].brand); // note-- info about the response is in an array called items.
    
    } catch(e) {
        console.log("error:",e)
    }


});

export default router;
