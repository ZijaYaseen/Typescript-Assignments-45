/* Assignment 43;
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of 
magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/

let magicianNames : string[] = ["Dynamo", "Presto", "Zoltar", "Merlin", "Wizardo"];

function show_magicians (magicians : string[]){
    for(let i = 0; i < magicians.length; i++){
        console.log(magicians[i])};
}

//show_magicians(magicianNames);

function make_great(magicians : string[]){
    let greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++){
        greatMagicians.push("The great " + magicians[i]);
    } return(greatMagicians);
}

let greatMagicians = make_great(magicianNames.slice());
show_magicians(magicianNames);
show_magicians(magicianNames);