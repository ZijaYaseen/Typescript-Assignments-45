/*Assignment 03:

Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase.*/
//Variable;
var person_name = "Zija Yaseen";
//LowerCase;
console.log(person_name.toLowerCase()); // zija yaseen
//UpperCase;
console.log(person_name.toUpperCase()); // ZIJA YASEEN
//TitleCase;
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase()); // Zija Yaseen
