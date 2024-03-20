/* Assignment 41;
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name
of each magician in the array.
*/
var magicianNames = ["Dynamo", "Presto", "Zoltar", "Merlin", "Wizardo"];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
    ;
}
show_magicians(magicianNames);
