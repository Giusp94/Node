import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("Request received");

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<html><body><h1>Response end</h1></body></html>");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost: 3000");
});
