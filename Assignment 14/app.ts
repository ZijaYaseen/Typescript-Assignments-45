/* Assignment 14:

Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes 
at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/


let guestsName : string[] = ["Zabrina", "Musfirah", "Subhan bhai", "Musab"];

//for..in loop;
for(let i = 0; i < guestsName.length; i++){
    console.log(`Dear ${guestsName[i]}, would you like to join me for dinner?`);
}

//for..of loop;
for(let name of guestsName){
    console.log(`Dear ${name}, would you like to join me for dinner?`);
} 

//forEach;
guestsName.forEach(names =>console.log(`Dear ${names}, would you like to join me for dinner?`));