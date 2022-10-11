// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(1950));


/* training
const smash = (words) => {
  let sent = '';
  for (let i = 0; i < words.length; i++) {
    sent += words[i].toString();
    if (words.indexOf(words[i]) < words.length - 1) {
      sent += ' ';
    }
  }
  return sent;
};

console.log(smash(['hello', 'world', 'this', 'is', 'great']));/*
