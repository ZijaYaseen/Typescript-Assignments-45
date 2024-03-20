/* Assignment 45;
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer 
and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required 
information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to 
make sure all the information was stored correctly.
*/

// Allow arbitrary key-value pairs

function myCar (manufacturer:string, modelName:string,...otherInfo:any[]){
    let car : any = {manufacturer,modelName};
    otherInfo.forEach(([key,value]) => {
     car[key] = value;
    });
     return car;
}

console.log(myCar('Toyota', 'Camry', ['color', 'red'], ['year', 2023]));



