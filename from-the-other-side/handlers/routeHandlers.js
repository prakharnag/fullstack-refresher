// handleGet
import { getData } from '../utils/getData.js';
import { sendResponse } from '../utils/sendResponse.js';
import { parseJSONBody } from '../utils/parseJSONBody.js';
import { addNewSighting } from '../utils/addNewSighting.js';
import { sanitizeInput } from '../utils/sanitizeInput.js';
import { sightingEvents } from '../events/sightingEvents.js';
import { stories } from '../data/stories.js';

export async function handleGET (res){
   const data = await getData();
   const result = JSON.stringify(data);
   sendResponse(res, 200, 'appilcation/json', result);
}
/*
Challenge:
1. Export a function called handleGet(). 
2. It should:
   - use getData() to get the data
   - stringify that data
   - use sendResponse() to serve it
   
Open the browser and load the sightings page to see if it works.
*/

// handlePost

// parseJSONBody() will collect and parse the incoming JSON
// santizeData() 
// addNewSighting() will do the donkey work of adding the data to our dataset
// sendResponse()

/*
Challenge:
  1. Create and export a function called handlePost().
  2. For now, that function can just log 'POST request received'.
*/

export async function handlePOST (req, res){
    
    try{
        const parsedBody = await parseJSONBody(req)
        const sanitizedBody = sanitizeInput(parsedBody);
        await addNewSighting(sanitizedBody);
        sightingEvents.emit('sighting-added', sanitizedBody);
        sendResponse(res, 201, 'application/json', JSON.stringify(sanitizedBody));
    }catch(err){
        sendResponse (res, 400, 'application/json', JSON.stringify({error: err}));
    }
    
}


/*
Challenge 1:
  1. Set Content-Type, Cache-Control, and Connection headers
*/

export async function handleNews(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');


  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * stories.length)
    let randomStory = stories[randomIndex];

    res.write(
        `data:${JSON.stringify({event: "news-update", story: randomStory})}\n\n`
    )
  }, 3000)
}

/*
Challenge 2:
  1. Use res.write() to send an object to the frontend. 

  The object should include:
    - an event property with a descriptive name.
    - a story chosen at random from the stories array.

  Remember, the object is contained in a string which starts with 'data: '. 
  What do you need at the end of the string to signal the end of a message block?

*/


