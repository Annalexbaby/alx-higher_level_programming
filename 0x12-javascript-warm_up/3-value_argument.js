#!/usr/bin/node
const argv = require('process').argv;
let a = 0;

argv.forEach((value) => {
  if (a === 2) {
    console.log(value);
  }
  a++;
});

if (a === 2) {
  console.log('No argument');
}
