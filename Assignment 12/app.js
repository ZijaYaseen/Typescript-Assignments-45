/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a
message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
*/
var names = ["Zija", "Shizra", "Zabrina"];
//for...in loop:
for (var i = 0; i < names.length; i++) {
    console.log("Hello ".concat(names[i], ", How are you today?"));
}
//for...of loop:
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello ".concat(name_1, ", How are you today?"));
}
//forEach:
names.forEach(function (name) { return console.log("Hello ".concat(name, ", How are you today?")); });
