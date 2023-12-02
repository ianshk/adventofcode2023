// Advent of Code Day 2: Cube Conundrum
// https://adventofcode.com/2023/day/2

const fs = require("fs");

const target = { red: 12, green: 13, blue: 14 };

fs.readFile("day2-part1-input.txt", (err, data) => {
  if (err) throw err;

  const games = data.toString().split("\n");
  let sum = 0;

  function isColorLimitExceeded(color, value, target) {
    return target[color] && +value > target[color];
  }

  function processSets(sets) {
    for (const set of sets) {
      for (const bag of set) {
        const [, count, color] = bag.match(/(\d+) (\w+)/);
        if (isColorLimitExceeded(color, count, target)) {
          return true;
        }
      }
    }
    return false;
  }

  function grabBag(game) {
    const [, rawSets] = game.split(":");
    const sets = rawSets.split(";").map((set) => set.split(","));
    const impossible = processSets(sets);

    if (!impossible) {
      const id = games.indexOf(game) + 1;
      sum += id;
    }
  }

  for (const game of games) {
    grabBag(game);
  }

  console.log("Sum is: " + sum);
});
