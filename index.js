// Common js syntax, don't use it
// const emoji = require('node-emoji');

// This is a node process. This doesn't need to be installed
import { argv } from 'node:process';
// ES6 syntax
import emoji from 'node-emoji';

// Condition 1: if we find the emoji
if (argv[2] && emoji.find(argv[2]).length) {
  console.log(emoji.get(argv[2]));
} else if (argv[2]) {
  // Condition 2: if an argument is passed
  console.log(`emoji ${argv[2]} couldn't be found`);
} else {
  // Default value
  console.log(emoji.random().emoji);
}
