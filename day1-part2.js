// Advent of Code Day 1 (Part 2): Trebuchet?!
// https://adventofcode.com/2023/day/1

const fs = require("fs");

function parseString(line) {
  const digitWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let result = "";

  for (let i = 0; i < line.length; i++) {
    for (let j = digitWords.length; j > 0; j--) {
      const digitWord = digitWords[j - 1];
      const substr = line.substr(i, digitWord.length);

      if (substr.toLowerCase() === digitWord) {
        if (digitWord === "oneight") {
          result += "18";
          i += 7;
        } else {
          result += j - 1;
        }
        break;
      }
    }

    if (!isNaN(line.charAt(i))) {
      result += line.charAt(i);
    }
  }

  return result;
}

fs.readFile("day1-part1-input.txt", function (err, data) {
  if (err) throw err;
  const array = data.toString().split("\n");

  let total = 0;
  for (let i in array) {
    const line = array[i];
    const parsedValue = parseString(line);

    if (parsedValue.length > 0) {
      const firstValue = parsedValue[0];
      const lastValue = parsedValue[parsedValue.length - 1];
      const valuesToString = `${firstValue}${lastValue}`;
      const value = Number(valuesToString);
      total += value;
    }
  }

  console.log("Total sum is " + total);
});
