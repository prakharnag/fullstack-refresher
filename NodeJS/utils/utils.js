export const sendJSONResponse = (res, status, payload) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.statusCode = status;
    res.end(JSON.stringify(payload));
}


export const getDataByPathParams = (data, locationType, locationName) => {
     return data.filter((destination) => {
        return destination[locationType].toLowerCase() === locationName.toLowerCase();
     })
}

// export const getDataByQueryParams = (data, locationType, locationName) => {
//     return data.filter((destination) => {
//         return((destination.is_open_to_public === true) && (destination[locationType].toLowerCase() === locationName.toLowerCase()));
//     }
// )}

export const getDataByQueryParams = (data, queryObj) => {
    const { continent, country, is_open_to_public } = queryObj;

    if (continent) {
        data = data.filter(destination => 
            destination.continent.toLowerCase() === continent.toLowerCase()
        )
    }

    if (country) {
        data = data.filter(destination => 
        destination.country.toLowerCase() === country.toLowerCase()
        )
    }

    if (is_open_to_public) {
        data = data.filter(destination => 
           destination.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase())
        )
    }

    return data;
}