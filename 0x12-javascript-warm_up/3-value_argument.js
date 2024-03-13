#!/usr/bin/node
const argv = require('process').argv;
let myvar = 0;

argv.forEach((value) => {
  if (myvar === 2) {
    console.log(value);
  }
  myvar++;
});

if (myvar === 2) {
  console.log('No argument');
}
