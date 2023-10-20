//Built in

const fs = require("fs");
const { text } = require("stream/consumers");

const f = fs.readFile("test.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log("ERROR", err);
    return;
  }
  console.log("Data downloaded");

  //   ONLY LETTERS COUNTER
  let textArr = data.split("");
  let onlyLetters = [];
  textArr.map((letter) => {
    if (letter == " ") {
    } else {
      onlyLetters.push(letter);
    }
  });
  console.log("ONLY LETTERS NUMBER", onlyLetters.length);

  //   ALL WORDS COUNTER
  let words = data.split(" ");
  console.log("ALL WORDS NUMBER", words.length);

  // ONLY LETTERS COUNTER (METHOD 2)
  //   const letterCount = words.reduce((prev, curr) => {
  //     prev.length + curr.length;
  //   });
  //   console.log("ONLY LETTERS NUMBER", letterCount);
});
