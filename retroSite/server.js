import http from "node:http";
import path from "node:path";
import fs from "node:fs/promises";
import { serveStatic } from "./serveStatic.js";
import { getContentType } from "./getContentType.js";
const PORT = 8000;

const __dirname = import.meta.dirname;


//const relPath = path.join('public', 'index.html');
// fs.readFileSync - it is synchronuse code that means it blocks the code and cause performance issues  
// const content = fs.readFileSync(pathToResource, 'utf-8');

//

const server = http.createServer(async (req, res) => {
    // writeHead and setHeader, both are used to set the headers, but writeHead takes
    // multiple headers as an object, whereas setHeader is used to set a single header at a time.
    //writeHead also takes priority over setHeader if both are used. It will not cause any error
    //but it could lead to unexpected behavior. For more control it is good to use setHeader.
    //res.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Methods":"POST"});
    
    //await serveStatic(req, res, __dirname);
   
//     fs.readFile(pathToResource,'utf-8', (err, content) => {
//     if (err){
//         console.error('Error reading file:', err);
//         return;
//     }
//     else{
//         res.setHeader("Content-Type", "text/html");
//         res.statusCode = 200;
//         res.end(content);
//     }  
// })   
    const publicDir = path.join(__dirname, 'public');
    const pathToResource = path.join(
        publicDir,
        req.url === '/' ? 'index.html' : req.url);
    
    const content = await fs.readFile(pathToResource)

    const ext = path.extname(pathToResource);
    const contentType = getContentType(ext);

    res.setHeader("Content-Type", contentType);
    res.statusCode = 200;
    res.end(content);
})

server.listen(PORT, () => console.log(`Server is listening to port:  ${PORT}`));


//Callback Hell - when we have multiple nested callbacks which makes the code hard to read and maintain.