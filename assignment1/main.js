const fs = require("fs");

const addText = (text) => {
  let readFile = fs.readFileSync("test.txt", "utf8");
  console.log("BEFORE CHANGE:", readFile);
  const f = fs.appendFile("test.txt", `${text} ${new Date()}`, (err) => {
    if (err) {
      console.log("ERROR!", err);
    } else {
      readFile = fs.readFileSync("test.txt", "utf8");
      console.log("Your Text Added:", readFile);
    }
  });
};
addText("Your message");
