/* Assignment 14:

Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes
at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
var guestsName = ["Zabrina", "Musfirah", "Subhan bhai", "Musab"];
//for..in loop;
for (var i = 0; i < guestsName.length; i++) {
    console.log("Dear ".concat(guestsName[i], ", would you like to join me for dinner?"));
}
//for..of loop;
for (var _i = 0, guestsName_1 = guestsName; _i < guestsName_1.length; _i++) {
    var name_1 = guestsName_1[_i];
    console.log("Dear ".concat(name_1, ", would you like to join me for dinner?"));
}
//forEach;
guestsName.forEach(function (names) { return console.log("Dear ".concat(names, ", would you like to join me for dinner?")); });
