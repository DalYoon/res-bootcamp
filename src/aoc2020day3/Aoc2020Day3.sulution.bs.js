// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Belt_Option = require("rescript/lib/js/belt_Option.js");

var q1Input = Fs.readFileSync("src/aoc2020day3/Q_1.input.txt", "utf8");

var q2Input = Fs.readFileSync("src/aoc2020day3/Q_2.input.txt", "utf8");

console.log(q1Input);

console.log(q2Input);

console.log(Belt_Option.getWithDefault("A", "B"));

exports.q1Input = q1Input;
exports.q2Input = q2Input;
/* q1Input Not a pure module */
