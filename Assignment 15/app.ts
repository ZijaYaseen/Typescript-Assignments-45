/* Assignment 15;
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
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
