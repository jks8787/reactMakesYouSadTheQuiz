#! /usr/bin/env node

var shell = require('shelljs');

console.log("-----------------Checking out master branch-----------------");
shell.exec('git checkout master');

console.log("-----------------Running the build-----------------");
shell.exec('npm run build');

console.log("-----------------Checking out github pages-----------------");
shell.exec('git checkout gh-pages');

console.log("-----------------Committing the build-----------------");
shell.exec("git add -A . && git commit -m 'gh-pages update app'");

console.log("-----------------Committing the build-----------------");
//shell.exec('git push origin master');

console.log("-----------------Returning to master branch-----------------");
shell.exec('git checkout master');

console.log("-----------------Deploy Complete!-----------------");
