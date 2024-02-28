const fs = require("fs");

const a = fs.createReadStream("./hello.txt", "utf-8");

a.close();

a.on("open", function () {
  console.log("File Opened");
});

a.on("close", function () {
  console.log("File Closed");
});
