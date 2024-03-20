/* Assignment 11:
Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each 
element in the list, one at a time.*/

let names = ["Zija", "Shizra", "Zabrina"];

//By simple method:
console.log(names);

//By using for...in loop method: 
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

//By using for...of loop method: 
for(let name of names){
    console.log(name);
}

//By using forEach method:
names.forEach(name => console.log(name));
