#! /usr/bin/env node
var args = process.argv;
var message = args[2];
var exec = require('child_process').exec;
var output = function (error, stdout, stderr) {
  console.log(stdout);
  copy(stdout);
  console.log('\n' + 'This has been copied to your clipboard');
};
require('copy-paste').global();

exec("cowsay " + (message || 'moo'), output);
