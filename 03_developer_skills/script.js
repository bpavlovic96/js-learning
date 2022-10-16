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

console.log(smash(['hello', 'world', 'this', 'is', 'great']));

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, 5, 1, -10];
const temps = temperatures1.concat(temperatures2);

const calcTempAmplitude = (temps) => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (max < temps[i]) {
      max = temps[i];
    }
    if (min > temps[i]) {
      min = temps[i];
    }
  }
  return max - min;
};

const amplitude = calcTempAmplitude(temps);

console.log(amplitude);*/

const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
