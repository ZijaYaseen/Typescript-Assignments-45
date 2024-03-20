/* Assignment 42;
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies
the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list
has actually been modified.
*/
var magicianNames = ["Dynamo", "Presto", "Zoltar", "Merlin", "Wizardo"];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
    ;
}
//show_magicians(magicianNames);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The great " + magicians[i];
    }
}
make_great(magicianNames);
//show_magicians(magicianNames)
