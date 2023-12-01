// Advent of Code Day 1: Trebuchet?!
// https://adventofcode.com/2023/day/1

const fs = require("fs");

fs.readFile("day1-part1-input.txt", function (err, data) {
  if (err) throw err;
  const array = data.toString().split("\n");

  let total = 0;
  for (i in array) {
    const line = array[i];

    const extracted = line.match(/\d+/g);
    const joined = extracted.join("");

    const firstValue = joined[0];
    const lastValue = joined[joined.length - 1];
    const valuesToString = `${firstValue}${lastValue}`;
    const value = Number(valuesToString);
    total += value;
  }
  console.log("Total sum is " + total);
});
