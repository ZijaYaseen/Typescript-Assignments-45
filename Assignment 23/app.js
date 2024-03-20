/* Assignment 23;
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
var myName = "Zija";
//Result 1;
console.log("Is myName == 'Zija'? I predict True.");
console.log(myName == "Zija"); // is myName equals to Zija?  // true
//Result 2;
console.log("Is myName === 'Zija'? I predict True.");
console.log(myName === "Zija"); // is myName equals to Zija? and type checking (is myName variable is string type)? // true
//Result 3;
console.log("Is myName != 'Shizra'? I predict True.");
console.log(myName != 'Shizra'); // is myName not equals to Shizra ? //true
//Result 4;
console.log("Is myName != 'Alina'? I predict True.");
console.log(myName != 'Alina'); // is myName greater than Alina? // true.   (Alphabetical order);
//Result 5;
console.log("Is myName <= Zija? I predict True. ");
console.log(myName <= "Zija"); /*/ is myName equals or less than Zija? // true
                                ( if any one condition is true then answer is true)*/
//Result 6;
console.log("Is myName == 'Alina'? I predict False.");
console.log(myName == "Alina"); // is myName equals to Alina?  // false
//Result 7;
console.log("Is myName === 'Alina'? I predict False.");
console.log(myName === 'Alina'); // is myName equals to Alina? and type checking (is myName variable is string type)? // false
//Result 8;
console.log("Is myName != 'Zija'? I predict False.");
console.log(myName != 'Zija'); // is myName not equals to Zija? //False
//Result 9;
console.log("Is myName <= 'Shizra ? I predict False.");
console.log(myName <= 'Shizra'); // is myName less than Shizra? // false.   
//Result 10;
console.log("Is myName <= Alina? I predict False. ");
console.log(myName <= "Alina"); /*/ is myName equals or less than Alina? // false
                                ( if any one condition is true then answer is true)*/
