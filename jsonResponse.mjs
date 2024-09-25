import { createServer } from "node:http";

const user = { name: "Paolo", age: 25 };
const server = createServer((request, response) => {
  console.log("Request received");

  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(user));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost: 3000");
});
