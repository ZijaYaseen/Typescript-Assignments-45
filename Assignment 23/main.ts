/*/COMPARISON OPERATORS :
Comparison operators are used to assigning the value in variables.

EXAMPLE 1:*/

let u = 10;
console.log(u);  // 10;  simple;

//CONDITIONS:
console.log( u == 10); // is u equals to 10?  // true
console.log( u === 10); // is u equals to 10? and type checking (is u variable is number type)? // true
console.log( u != 10);  // is u not equal to 10? //false.
console.log( u != 15); // is u not equals to 15? //true
console.log( u > 10); // is u greater than 10? // false.
console.log( u > 5);  // is u greater than 5? // true
console.log( u < 10); // is u less than 10? // false
console.log( u < 15);  // is u less than 15? // true.
console.log( u >= 10); /*/ is u equals or greater than 10? true
                        ( if any one condition is true then answer is true)*/
console.log( u <= 15)   ; // true   

/* LOGICAL OPERATORS:  
Logical operators are used to combine multiple conditions in one.

&& : when all conditions are true so it shows true but if any one condition is wrong it shows false.
|| : when any one condition is true in all conditions , it shows true.

EXAMPLES: */

let b = 4;
console.log( b != 4 && b > 3 ); // false
console.log( b < 5  && b > 3 ); // true
console.log( b >= 10 || b < 3 ); //false
console.log(!( b > 10)); //its called opposite condition bcz it shows answers in oppsite.(true)
console.log(!( b < 10)); //false