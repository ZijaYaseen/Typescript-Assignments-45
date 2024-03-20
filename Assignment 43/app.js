/* Assignment 43;
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of
magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
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
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("The great " + magicians[i]);
    }
    return (greatMagicians);
}
console.log(make_great(magicianNames));
var greatMagicians = make_great(magicianNames);
show_magicians(magicianNames);
show_magicians(magicianNames);
