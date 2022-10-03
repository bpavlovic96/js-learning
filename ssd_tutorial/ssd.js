let todo1 = "Get groceries";
let todo2 = "Wash car";
let todo3 = "Make dinner";

let todos = ['Get groceries', 'Wash car', 'Make dinner'];
todos.push('Do laundry');

todos.forEach(function (todoTitle) {
        let element = document.createElement("div");
        element.innerText = todoTitle;
        document.body.appendChild(element);
});


function toUpper (stringsArray) {
    let result = [];

    stringsArray.forEach(function (str) {
        result.push(str.toUpperCase());

    });

    console.log(result);
}

toUpper(['hello', 'world']);


// Exercise 2
// Write a function arrayDouble that takes an array and console.logs a new array with every value repeated twice.

// Example: arrayDouble(['bark', 'meow']); will console.log(['bark', 'bark', 'meow', 'meow'])

function arrayDouble (stringsArr) {
    let result = [];
    
    stringsArr.forEach(function (str) {
        result.push(str);
        result.push(str);
    }); 
    console.log(result);
}

arrayDouble (['cat', 'mouse']);

// Exercise 3
// Write a function arraySum that takes an array of numbers and console.logs the sum of the numbers. (Hint: create a variable and increase its value like this):

// function arraySum (numbSum) {
//     let result = 0;
//     numbSum.forEach(function (num) {
//     result = result + num;
//     });
//     console.log(result);
// }

// arraySum([1, 5, 8]);

let helloW = () => {
    console.log("Hello World");
}

helloW();

//

let numSquare = (num) => {
    return num*num;
}

console.log(numSquare(2));

//

let csToFhr = (num) => {
    return (num*9/5) + 32;
}

console.log(csToFhr(30));

//

let rectangleArea = (a, b) => {
    return `The area of a given rectangle is ${a * b}`;
}

console.log(rectangleArea(3, 5));

//

let circleArea = (circleRadius) => { 
    return `The perimeter of a given circle is ${2*Math.PI*circleRadius}`;
}

console.log(circleArea(2));

//

let reverseNum = (num) => {
    let reverse = 0;
    while (num != 0) {
        reverse = reverse * 10;
        reverse = reverse + num%10;
        num = Math.trunc(num/10);
    }
    return reverse;
}


console.log(reverseNum(24));

//

let countVowel = (str) => {
    let count = 0;
    let arr = str.toLowerCase().split("");
    let vowels = ["a", "e", "i", "o", "u"];
    console.log(arr);

    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(arr[i])) {
            count++;
        };
    } return count;
}

console.log(countVowel("mother"));

//

let tellFortune = (nrCh, prNm, geoLoc, jobTit) => {
    return `You will be a ${jobTit} in ${geoLoc}, and married to ${prNm} with ${nrCh} kids.`;
}

console.log(tellFortune(0, "Antonia", "Kutina", "developer"));

//

let calculateDogAge = (dogAge) => {
    return `Your doggie is ${dogAge * 7} years old in dog years`;
} 

console.log(calculateDogAge(5));

//

let calculateSupply = (age, amountPerDay) => {
    let maxAge = 100;
    return `You will need ${(amountPerDay*365)*(maxAge-age)} to last until the ripe old age of ${maxAge}`;
}

console.log(calculateSupply(20, 5));

//

let printNumbers = () => {
    for(i = 1; i <= 10; i++){
        console.log(i);
    } 
}

printNumbers();

//

let printEven = (num) => {
    for(let i = 0; i < num.length; i++) {
        if(num[i]%2==0)
            console.log(num[i]);
    } 
}

 let num = [20, 19, 18];

 printEven(num);

 //

 let printEvens = (nums) => {
    let even = [];
    for(i = 0; i < num.length; i++) {
        if(nums[i]%2==0) {
            even.push(nums[i]);
        }
    } console.log(even);
 }

let nums = [1, 2, 3];

printEvens(nums);

//

let occurence = (numArrays) => {
    let numCont = [];
    for(i = 0; i < numArrays.length; i++) {
        if(numCont.indexOf(numArrays[i]) === -1) {
            numCont.push(numArrays[i]);
        }
    } return numCont;
} 

let numArrays = [2, 4, 6, 2, 6, 7, 2];

console.log(occurence(numArrays));

//

let delElement = (givenArray, helperArray) => {
    for(let i = 0; i < givenArray.length; i++) {
        if(givenArray[i] === helperArray) {
        givenArray.splice(i, 1);
        }
    } return givenArray;
}

let givenArray = [2, 4, 6, 9];
console.log(delElement(givenArray, 9));

//

let printPattern = (range) => {
    for(i = 0; i <= range; i++) {
        let nr = "";
        for(let j = 1; j <= i; j++) {
            nr += j + " ";
        } console.log(nr);
    } 
}

printPattern(7);

//

const digitsCount = (n) => {
    let count = 0;
    let number = n;
    while (number >= 1) {
        number /= 10;
        ++count;
    } return count;
} 


console.log(digitsCount(5255));

//

const digitsSum = (nmbr) => {
    let sum = 0;
    let number = nmbr;
    while (number > 0) {
        sum += number%10;
        number = Math.floor(number / 10);
    } return sum;
} 

console.log(digitsSum(124));

//

const reverseString = (str) => {
    let newString = "";
    for(let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    } return newString;
}

console.log(reverseString("Tin"));

//

const digitsOddSum = (nmbr) => {
    let sum = 0;
    let number = nmbr;
    while (number > 0) {
        if(Math.floor(number %2 === 1)) {
        sum += number%10;
    }
        number = Math.floor(number / 10);
    
    } return sum;
} 

console.log(digitsOddSum(124356));


 












