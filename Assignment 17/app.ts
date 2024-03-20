/* 
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/


let guestsName : string[] = ["Zabrina", "Musfirah", "Subhan bhai", "Musab"];

for(let i = 0; i < guestsName.length; i++){
    console.log(`Dear ${guestsName[i]}, would you like to join me for dinner?`);
}

let guestCantMakeIt : string = "Musab";
console.log(`${guestCantMakeIt} cant't make it to the dinner.`)

//guestsName.pop();          
//guestsName.push("Sabeen");
guestsName[3] = "Shizra"   // simple method

for(let i = 0; i < guestsName.length; i++){
    console.log(`Dear ${guestsName[i]}, would you like to join me for dinner?`);
}

console.log("Great news! I found a bigger dinner table!");

//Add one new guest in the beginning;
guestsName.unshift("Khazina");

//Add one new guest in the mid;
guestsName.splice(guestsName.length /2,0, "Hamis");

//Add one new guest in the end;
guestsName.push("Laraib");

for(let i = 0; i < guestsName.length; i++){
    console.log(`Dear ${guestsName[i]}, would you like to join me for dinner?`);
}

console.log(`Unfortunately, I can only invite two people for dinner.`);

for (let i = 2; i < 7; i++){
let popedName = guestsName.pop();
console.log(`Sorry, ${popedName} I can't invite you to dinner. `)
}

for(let i = 0; i < guestsName.length; i++){
    console.log(`Dear ${guestsName[i]}, you'r still invited to dinner.`);
}

guestsName.splice(0, 2);

console.log(guestsName);