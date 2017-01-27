#! /usr/bin/env node

require('copy-paste').global();

var message = process.argv[2]
  , exec = require('child_process').exec
  , output = function (error, stdout, stderr) {
    copy(stdout);

    console.log(stdout);
    console.log('\n' + 'This has been copied to your clipboard');
  };

exec("cowsay " + (message || 'moo'), output);
