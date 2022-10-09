'use strict';

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
}

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

const dolphinsAverage = (96+108+89)/3
console.log(dolphinsAverage);
const koalasAverage = (88+91+110)/3
console.log(koalasAverage);
let minimumScore = 100;

if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log('Koalas win!');
}  else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log("It's a tie");    
}  else if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100)  {
    console.log('Dolphins win!');
}  else {
    console.log('No one wins the trophy!');
}

const day = 'sunday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}

const age = 23;
age >= 18 ? console.log('I like to drink wine') : 
console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
} 
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'} `);

// coding challenge #4

const billValue = 275;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
console.log(tip); 

console.log(`The bill was ${billValue}, the tip was ${tip} and the total value ${billValue + tip}.`);

'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;

if(hasDriversLicense) console.log('I can drive!');

// const interface = 'Audio'; // reserved word "interface"
// const private = 534; // reserved word "private"

'use strict';

const logger = () => {
    console.log('My name is Jonas');
}

// calling / running / invoking function
// logger();
'use strict';


const fruitProcessor = (apples, oranges) => {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// or without defining a variable
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor (2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);

// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = (birthYear) => {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);


// Simple arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 -age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
} 

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// function inside a function

const cutFruitPieces = (fruit) => {
    return fruit * 4;
}

const fruitProcessor = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 -age;
    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    // return `${firstName} retires in ${retirement} years.`;
    
} 

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(85, 54, 41);

let scoreDolphins2 = calcAverage(85, 54, 41);
let scoreKoalas2 = calcAverage(23, 34, 27);


const checkWinner = (scoreDolphins2, scoreKoalas2) => {
    if (scoreDolphins2 >= scoreKoalas2 * 2) {
        console.log(`Dolphins win (${scoreDolphins2} vs. ${scoreKoalas2})`);
    } else if (scoreKoalas2 >= scoreDolphins2 * 2) {
        console.log(`Koalas win (${scoreKoalas2} vs. ${scoreDolphins2})`);
    } else {
        console.log('Draw.');
    }
}

console.log(44+23+71, 85+54+41);

console.log(checkWinner(scoreDolphins2, scoreKoalas2));

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years1 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];
// add elements
const newLength = friends.push ('Jay');
console.log(newLength);
console.log(friends);

friends.unshift('John');
console.log(friends);

// remove elements
friends.pop(); // last element of the array
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

const calcTip = (bill) => {
    if(bill >= 50 && bill <= 300) {
        console.log(`Tip is ${bill * 0.15}`); 
        return bill * 0.15
    } else {
        console.log(`Tip is ${bill * 0.2}`);
        return bill * 0.2
    } 
}

const bills = [125, 555, 44];
const tips = [calcTip([bills[0]]), calcTip([bills[1]]), calcTip([bills[2]])];
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log(total);
console.log(tips);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonassschmedtman';
console.log(jonas);

// challenge

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`)

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`);
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.calcAge());
jonas.getSummary();


// console.log(jonas['calcAge'](jonas.birthYear));

// challenge getSummary
// "Jonas is a 46-year old teacher and he has a/no driver's license"

// coding challenge 3

const objMark = {
    name: 'Mark',
    surname: 'Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = (this.weight/(this.height **2)).toFixed(2);
        return this.BMI
    }
}

const objJohn = {
    name: 'John',
    surname: 'Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = (this.weight/(this.height **2)).toFixed(2);
        return this.BMI
    }
}

const isMark = objMark.calcBMI() > objJohn.calcBMI()

console.log(`${isMark ? objMark.name + ' ' + objMark.surname : objJohn.name + ' ' + objJohn.surname}'s BMI (${isMark ? objMark.BMI : objJohn.BMI}) is higher than ${!isMark ? objMark.name + ' ' + objMark.surname : objJohn.name + ' ' + objJohn.surname}'s (${!isMark ? objMark.BMI : objJohn.BMI})!`);


// console.log('Lifting weights repetition 1');

// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'], true];

const types = [];
for(let i = 0; i < jonas.length; i++) {
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    // filling types arary
    // types[i] = typeof jonas[i]; 
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const age = [];

for(let i = 0; i < years.length; i++) {
    // age[i] = 2037 - years[i];
    // or
    age.push(2037 - years[i]);
}

console.log(age);

// continue and break statements

console.log('--- ONLY STRINGS ---');
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WHEN NUMBER ---');
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}

// loop backwards

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'], true];

for(let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for(let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-------Starting exercise ${exercise}`);
    for(let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while(rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`)
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
    if(bill >= 50 && bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.2
    } 
}

for (let billIndex = 0; billIndex < bills.length - 1; billIndex++) {
    tips.push(calcTip(bills[billIndex])); 
    totals.push(tips[billIndex] + bills[billIndex]);
} 
console.log(tips);
console.log(totals);

const calcAverage = (arr) => {
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    return arrSum / arr.length 
}

console.log(calcAverage(bills));




