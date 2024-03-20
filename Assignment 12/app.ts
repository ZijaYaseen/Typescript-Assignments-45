/*Assignment 12:

Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a 
message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
*/

let names = ["Zija", "Shizra", "Zabrina"];

//for...in loop:
for(let i = 0; i < names.length; i++){
console.log(`Hello ${names[i]}, How are you today?`);
}

//for...of loop:
for(let name of names){
   console.log(`Hello ${name}, How are you today?`);
}

//forEach:
names.forEach(name => console.log(`Hello ${name}, How are you today?`));
