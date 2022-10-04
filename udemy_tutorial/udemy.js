/*
// values and variables

let js = 'amazing';

let firstName = "Jonas";
console.log(firstName);

// assignment values and variables

let country = 'Croatia';
let continent = 'Europe';
let population = 4000000;

console.log(country, continent, population);

// data types

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof 23);

javascriptIsFun = 'YES';
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);

console.log(typeof null);

// assignment data types
let isIsLand = country;
let language = "";
console.log(typeof isIsLand)


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

const job;


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means to to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// assignment operators

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; 
x--;
console.log(x);

// comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5; // x = y = 10
console.log(x,y);
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


// coding challenge #1

const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1991;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// coding challenge #2

const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


if(markHigherBMI = true) {
    let alertBMI = alert(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
    alertBMI = alert(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
} 

console.log(alertBMI);

// type conversion and coercion

// conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// coercion

console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old'); // same

// + = strings, -, *, /, >, < = numbers

console.log('23' - '10' - 3); // automatic coercion
console.log('23' * '2'); // automatic coercion 

let n = '1' + 1; // to string
n = n - 1 // to number
console.log(n); // result number

// lecture type conversion and coercion

'9' - '5'; // 4
'19' - '13' + '17'; // result 617
'19' - '13' + 17; // result 617
'123' < 57; // true
5 + 6 + '4' + 9 - 4 - 2

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}

let height = 0;
if(height) {
    console.log('YAY! Defined!')
} else {
    console.log('Height is undefined');
}

const age = '18';
if(age === 18) console.log('You just became an adult! (strict)'); 
if(age == 18) console.log('You just became an adult! (loose)'); 

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 23 === 23 -> TRUE because of Number above
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if(favourite !== 23) console.log('Why not the 23?');

// lecture equality operators

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if(numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1!');
} else {
    console.log('No borders!');
}*/

// logical operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = true; // C

console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}




