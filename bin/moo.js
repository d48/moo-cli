#! /usr/bin/env node
var args = process.argv;
var message = args[2];
var exec = require('child_process').exec;
var output = function (error, stdout, stderr) {
  console.log(stdout);
};

console.log(args);

exec("cowsay 'moo'", output);
