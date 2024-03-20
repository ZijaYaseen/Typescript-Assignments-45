/* Assignment 13:

Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores
several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
//Array of favourite modes of transportation;
var transportation = ["Honda motorcycle", "Tesla car", "Bianchi bicycle", "Mercedes",];
//Print statements about each item;
//for..in loop;
for (var i = 0; i < transportation.length; i++) {
    console.log("\"I would like to own a ".concat(transportation[i], ".\"")); //   \" "\   for quotation mark.
}
//for..of loop;
for (var _i = 0, transportation_1 = transportation; _i < transportation_1.length; _i++) {
    var name_1 = transportation_1[_i];
    console.log("\"I would like to own a ".concat(name_1, ".\"")); //   \" "\   for quotation mark.
}
//forEach;
transportation.forEach(function (transportation) { return console.log("\"I would like to own a ".concat(transportation, ".\"")); });
