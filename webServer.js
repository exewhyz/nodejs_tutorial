//to create a server- we use http module
import http from "http";

//sending a plain text response to the user

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end('Hello from Node');
// });

// sending a html response to the user

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello using h1</h1>");
});

// sending a json response to the user

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.end(JSON.stringify({"name": "ABC"}));
// });

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});



// working of the above code

// http.createServer(handlerFunction(takes request and response to handle all the things){
//     setting header so that browser can detect it is an success request or not,

//     setting content type to text/plain; so that browser can understand the response type,

//     sending response back to the client
// })

// when the server is created and listening at port 3000 for requests successfully it will console log Server Started.
