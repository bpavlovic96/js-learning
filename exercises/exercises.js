// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php


/**
 * Exercise 17  
 * 
 * Write a JavaScript function to  get 
 * the number of occurrences of each letter in specified string. */

 const getNumberOfEachLetter = (str,letter) => {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === letter){
            count++;
        }
    }
    return count;
}


console.log(getNumberOfEachLetter("abcdddddd","d")); // 6


/**
 * Nađi sve parne brojeve iz polja brojeva
 */

const getAllEvenNumbersFromArray = (array) => {
    let even = [];
    for(const num of array){
        if(num % 2 === 0) even.push(num);    
    }
    return even;
}

console.log(getAllEvenNumbersFromArray([1,2,3,4,5,6])); // => [2,4,6]

/**
 * Funkcija prima string, a vraća broj samoglasnika iz stringa
 */

const vowelCount = (str) => {
    let vowel = ["a", "e", "i", "o", "u"];
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowel.includes(str[i])){
            count++;
        }
    } return count;
}

console.log(vowelCount("abcdeiou"));

/**
 * Generiraj polje od 1 do 50 i vrati polje brojeva
 *  koji su djeljivi s 3.
 */

const fieldGenerator = () => {
    let field = [];
    for(let i = 1; i <= 50; i++){
        if(i % 3 === 0) field.push(i);        
    } return field;
}

console.log(fieldGenerator());

/**
 * Given an integer n, return a string array answer (1-indexed) where:
 *  Prvo generiraj polje od 1 do 15, a onda vrati ["1","2","Fizz","4","Buzz"].....
     "FizzBuzz" ako je broj djeljiv s 3 i 5.
     "Fizz" ako je broj djeljiv s 3.
     "Buzz" ako je broj djeljiv s 5.
     i (as a string) if none of the above conditions are true.
 */



const fizzBuzz = () => {
    let field = [];
    for(let i = 1; i <= 15; i++){
        if(i % 3 === 0 && i % 5 === 0) field.push("FizzBuzz");
        else if(i % 3 === 0) field.push("Fizz");
        else if(i % 5 === 0) field.push("Buzz");
        else field.push(i);
       }
        return field;
}

console.log(fizzBuzz());
// ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

/**
 *  Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
 */

const findLongestWordInString = (str) => {
    const words = str.split(" "); // ["Hello,", "i","am","Bruno"]
    console.log(words)
        let maxLength = 0;
        let maxIndex = 0;
        for(let i = 0; i < words.length; i++){
                if(words[i].length > maxLength ){
                maxIndex = i;
                maxLength = words[i].length}
        }
        return words[maxIndex];
}

console.log(findLongestWordInString("Hello, I am Bruno")) // => "Hello,"


/**
 * Write a JavaScript function to extract unique characters from a string.
 */

const extractCharFromString = (str) => {
    let uniqString = "";
    for(let i = 0; i < str.length; i++){
        if(uniqString.indexOf(str[i]) === -1)  {
            uniqString += str[i];
        } 
    }
    return uniqString;
}

console.log(extractCharFromString("stringsatd"));

/**
 * ""
 * "s"
 * "st"
 * "str"
 * ....
 * ""
 */

/**
 * Funkcija koja provjerava je li prvi i zadnji znak stringa jednak (funkcija prima string), vraća true ako je, inače vraća false.
 */
const testStr = "aaabbvbab"

// const isFirstLastCharEqual = (str) => {
//     let firstChar = str[0];
//     let lastChar = str[str.length - 1];
//     if(firstChar === lastChar) return true; 
//     return false;
// }

const isFirstLastCharEqual = (str) => {
       return str[0] === str[str.length-1];
    }


console.log(isFirstLastCharEqual(testStr)) // => true


/**
 * Funkcija koja prima broj(number) i potenciju(number), a vraća broj na potenciju
 */


const potenciranje = (broj, potencija) => {
    return broj ** potencija;
}

console.log(potenciranje(2,2));

/**
 * Write a JavaScript program to converts a specified number to an array of digits 240 => [2,4,0]
 */

const numSplit = (number) => {
    let array = []
    let numString = String(number);
    for(let num = 0; num < numString.length; num++){
        array.push(numString[num]);
         
    } return array.map((i) => parseInt(i));
}

console.log(numSplit(240));

const numSplitV2 = (number) => [...`${number}`].map(i => parseInt(i));

console.log(numSplitV2(240));

/**
 * Napiši funkciju koja prima start i end broj,a za rezultat vraća [start .... end]
 */

const rangeBetween = (start, end) => {
    let rangeList = []
    let newStart = start;
    let newEnd = end;
    if(start > end){
        newStart = end;
        newEnd = start;
    } 
    for(let i = newStart; i <= newEnd; i++){
        rangeList.push(i);
        
    } return rangeList;
}

console.log(rangeBetween(1,5));
