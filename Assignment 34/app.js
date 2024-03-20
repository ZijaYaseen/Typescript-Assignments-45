/* Assignment 34;
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
*/
var favoritePizza = ["Fajita", "Cheese", "Pepperoni"];
for (var _i = 0, favoritePizza_1 = favoritePizza; _i < favoritePizza_1.length; _i++) {
    var names = favoritePizza_1[_i];
    console.log(names);
}
for (var _a = 0, favoritePizza_2 = favoritePizza; _a < favoritePizza_2.length; _a++) {
    var names = favoritePizza_2[_a];
    console.log("I like ".concat(names, " pizza"));
}
console.log("I really love pizza!");
