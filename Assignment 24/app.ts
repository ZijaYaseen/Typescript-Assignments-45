/* Assignment 24;
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

//Tests for equality and inequality with strings:
let fruit1 = "Apple";
let fruit2 = "Banana";
console.log("Tests for equality and inequality with strings:");
console.log(fruit1 == fruit2);  //is fruit1 is equal to fruit2?  //false
console.log(fruit1 != fruit2);    //is fruits1 is not equal to fruit2? //true

//Tests using the lower case function:
let myName = "Zija Yaseen";
console.log("\nTests using the lower case function:");
console.log(myName.toLowerCase() == "zija yaseen");  //true
console.log(myName.toLowerCase() == "Zija Yaseen");  //false
console.log(myName == "Zija Yaseen".toLowerCase());  // false

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let nmb = 10;
console.log("\nNumerical tests:");
console.log(nmb == 10); //true
console.log(nmb === 15); //false
console.log(nmb != 20); //true
console.log(nmb != 10); //false
console.log(nmb > 9);  //true
console.log(nmb > 15); //false
console.log(nmb > 10); //false
console.log(nmb < 20); //true
console.log(nmb < 8); //false
console.log(nmb < 10); //false
console.log(nmb <= 10); //true
console.log(nmb <= 2); //false
console.log(nmb >= 9); //true
console.log(nmb >= 11); //false

//Tests using "and" and "or" operators:    && and , || or;
/* LOGICAL OPERATORS:  
Logical operators are used to combine multiple conditions in one.

&& : when all conditions are true so it shows true but if any one condition is wrong it shows false.
|| : when any one condition is true in all conditions , it shows true.
*/

let b = 4;
console.log("\nTests using 'and' and 'or' operators:")
console.log( b != 4 && b > 3 ); // false
console.log( b < 5  && b > 3 ); // true
console.log( b >= 10 || b < 3 ); //false
console.log( b <= 10 || b > 10); //true
console.log(!( b > 10)); //its called opposite condition bcz it shows answers in oppsite.(true)
console.log(!( b < 10)); //false

//Test whether an item is in a array:
let stationary : string [] = ['Pencil', 'Eraser', 'Ink Pen', 'Sharpner', 'Scale'];
console.log("\nTest whether an item is in a array:");
console.log(stationary.includes("Eraser")); // true
console.log(stationary.indexOf('Pencil') !==-1); //true

//Test whether an item is not in a array:
console.log("\nTest whether an item is not in a array:");
console.log(stationary.includes("Marker")); //false
console.log(stationary.indexOf("Ink pen remover") !==-1); //false