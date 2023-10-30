const fs = require("fs");
const path = require("path");

const readFile = (fileName) => {
  const users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/") + fileName, {
      encoding: "utf-8",
    })
  );
  return users;
};

module.exports = { readFile };
