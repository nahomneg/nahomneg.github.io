const http = require('http');

const helloWorld= function(req, res) {
    res.writeHead(200);
    res.end("Hello World!");
}

const fs= require("fs");

let page1BufferfileBuffer = '';
fs.readFile("./index.html", function(err, buffer) {
    const server= http.createServer(readIndexAndServe);
    fileBuffer = buffer;
    server.listen(3434, "localhost", function() {
        console.log("Server is running on http://localhost:3434");
    });

});



const readIndexAndServe= function(req, res) {
    if (req.method === 'POST'){
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end("{'message' : 'Hello World!'}");
        return;
    }
    switch(req.url) {
        case "/index":
            res.setHeader("Content-Type", "text/html");
            let indexStatus;
            let indexBuffer;
            fs.readFile("./index.html",
                function(err, buffer) {
                    if (err) {
                        indexStatus= 404;
                        indexBuffer= "File not Found";
                    } else {
                        indexStatus= 200;
                        indexBuffer= buffer;
                    }
                    res.writeHead(indexStatus);
                    res.end(indexBuffer);
                });
            break;
        case "/page1":
            res.setHeader("Content-Type", "text/html");
            let page1Status;
            let page1Buffer;
            fs.readFile("./page1.html",
                function(err, buffer) {
                    if (err) {
                        page1Status= 404;
                        page1Buffer= "File not Found";
                    } else {
                        page1Status= 200;
                        page1Buffer= buffer;
                    }
                    res.writeHead(page1Status);
                    res.end(page1Buffer);
                });
            break;
        case "/page2":
            res.setHeader("Content-Type", "text/html");
            let page2Status;
            let page2Buffer;
            fs.readFile("./page2.html",
                function(err, buffer) {
                    if (err) {
                        page2Status= 404;
                        page2Buffer= "File not Found";
                    } else {
                        page2Status= 200;
                        page2Buffer= buffer;
                    }
                    res.writeHead(page2Status);
                    res.end(page2Buffer);
                });
            break;
    }
}




