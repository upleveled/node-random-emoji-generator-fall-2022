// Common js syntax, don't use it
// const emoji = require('node-emoji');

// This is a node process. This doesn't need to be installed
import { argv } from 'node:process';
// ES6 syntax
import emoji from 'node-emoji';

// condition 1: if we find the emoji
if (argv[2] && emoji.find(argv[2])) {
  console.log(emoji.get(argv[2]));
  // condition 2: if an argument is passed
} else if (argv[2]) {
  console.log(`emoji ${argv[2]} couldn't be found`);
  // default value
} else {
  console.log(emoji.random().emoji);
}
