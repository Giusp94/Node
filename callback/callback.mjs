import * as fs from "node:fs";
import { Buffer } from "node:buffer";

const data = new Uint8Array(Buffer.from("Hello World!"));
fs.writeFile("file-1.txt", data, (err) => {
  if (err) {
    throw err;
  }
  console.log("The file has been saved!");
});
