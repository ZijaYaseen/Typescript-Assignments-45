/* Assignment 13:

Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores 
several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/

//Array of favourite modes of transportation;
let transportation : string[] = ["Honda motorcycle", "Tesla car", "Bianchi bicycle", "Mercedes", ];

//Print statements about each item;
//for..in loop;
for(let i = 0; i < transportation.length; i++){
    console.log(`\"I would like to own a ${transportation[i]}.\"`) ;     //   \" "\   for quotation mark.
}

//for..of loop;
for(let name of transportation){
    console.log(`\"I would like to own a ${name}.\"`) ;     //   \" "\   for quotation mark.
}

//forEach;
transportation.forEach(transportation => console.log(`\"I would like to own a ${transportation}.\"`) );