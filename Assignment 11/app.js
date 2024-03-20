/* Assignment 11:
Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each
element in the list, one at a time.*/
var names = ["Zija", "Shizra", "Zabrina", "Khazina"];
//By simple method:
console.log(names);
//By using for...in loop method: // index
//for (let i = 0; i < names.length; i++){
//   console.log(names[i]);
//}
//By using for...of loop method: //value
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
//By using forEach method:
names.forEach(function (name) { return console.log(name); });
for (var i = 0; i < names.length; i++) {
    console.log(i);
}
