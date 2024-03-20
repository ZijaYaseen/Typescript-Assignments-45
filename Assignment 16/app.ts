/*Assignment 16;

More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
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

console.log("Great news! I found a bigger dinner table");

//Add one new guest in the beginning;
guestsName.unshift("Khazina");

//Add one new guest in the mid;
guestsName.splice(guestsName.length / 2,0, "Hamis");

//Add one new guest in the end;
guestsName.push("Laraib");

//guestsName.push("Laraib");

for(let i = 0; i < guestsName.length; i++){
    console.log(`Dear ${guestsName[i]}, would you like to join me for dinner?`);
}



