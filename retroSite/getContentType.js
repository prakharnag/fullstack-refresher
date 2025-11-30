export function getContentType(ext){
    
    const types = {
        ".js":"text/javascript",
        ".css":"text/css",
        ".json":"application/json",
        ".png":"image/css",
        ".jpeg":"image/jpeg",
        ".svg":"image/svg+xml",
        ".gif":"text/gif"
    }

    return types[ext.toLowerCase()] || "text/html";
}