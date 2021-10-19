// Write your code below this line.
// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// For example:

// luckyNumbers(2)
// // returns (3, 7)
// luckyNumbers(6)
// // returns (1, 7, 9, 6, 5, 2)

function findLuckyNumbers(num) {
    possibleNumbers = [1,2,3,4,5,6,7,8,9,10];
    randomNumArray = [];
    for(let i = 0; i < num; i++) {
      let randomNum = Math.floor(Math.random() * possibleNumbers.length);
      randomNumArray.push(possibleNumbers[randomNum]);
      possibleNumbers.splice(randomNum,1);
    }
    return randomNumArray;
  }
  
  let luckyNumbers = findLuckyNumbers(10);
  console.log(luckyNumbers);