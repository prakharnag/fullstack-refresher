import http from "node:http";
import { getDataFromDB } from './database/db.js';
import { sendJSONResponse, getDataByPathParams, getDataByQueryParams } from './utils/utils.js';
const PORT = 8000;

const server = http.createServer(async (req,res) => {

    const destinations = await getDataFromDB();

    const URLObj = new URL(req.url, `http://${req.headers.host}`);

    const queryObj = Object.fromEntries(URLObj.searchParams);

    //console.log(URLObj);
    //console.log(queryObj);

    if(URLObj.pathname === "/api" && req.method === "GET"){
        
        let filteredData = getDataByQueryParams(destinations, queryObj); 

        console.log("filteredData: ", filteredData);
        
        return sendJSONResponse(res, 200, filteredData);
           

    } else if(req.url.startsWith("/api/continent/") && req.method === "GET"){
        
        const continent = req.url.split('/').pop();
        const filteredData = getDataByPathParams(destinations, 'continent', continent)
       sendJSONResponse(res, 200, filteredData);

    } else if(req.url.startsWith("/api/country/") && req.method === "GET"){
        
        const country = req.url.split('/').pop();
        const filteredData = getDataByPathParams(destinations, 'country', country)
       sendJSONResponse(res, 200, filteredData);

    }else{
       
        sendJSONResponse(res, 404,({error: "not found", message:"The requested route does not exist"}));
    }

  
});

server.listen(PORT, () => console.log(`Server is listening to port:  ${PORT}`));