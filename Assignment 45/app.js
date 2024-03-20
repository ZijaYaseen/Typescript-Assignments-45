/* Assignment 45;
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer
and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required
information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to
make sure all the information was stored correctly.
*/
// Allow arbitrary key-value pairs
function myCar(manufacturer, modelName) {
    var otherInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherInfo[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, modelName: modelName };
    otherInfo.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
console.log(myCar('Toyota', 'Camry', ['color', 'red'], ['year', 2023]));
//console.log(myCar("Toyota","Camry",["color","red"],["year",2024]));
/*function createCar(manufacturer: string, modelName: string, ...extras: any[]) {
    let car: any = { manufacturer, modelName };
    extras.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}

// Example usage
const myCar = createCar('Toyota', 'Camry', ['color', 'red'], ['year', 2023]);
console.log(myCar);*/
