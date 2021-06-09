const person = {
    name: "Geert",
    age: 31,
    evaluations: [7, 10, 9],
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);
console.log(person.evaluations);



const myArray = ["groen", "blauw", "rood"];
console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[myArray.length - 1]);
myArray.push("geel");
console.log(myArray);
myArray.push(5);
console.log(myArray);
myArray.push({ greeting: "Hi ik ben een object" });
console.log(myArray);
console.log(myArray[myArray.length - 1].greeting);


console.log("Naam kattensoort 3:", catBreeds[2].name);
console.log("Energylevel kattensoort 1:", catBreeds[0].energy_level);
console.log("Eerste temperament kat 2:", catBreeds[1].temperament[0]);
const lengthTemperamentsCatThree = catBreeds[2].temperament.length;
console.log(
    "Laatste temperament kat 3:",
    catBreeds[2].temperament[lengthTemperamentsCatThree - 1]
);
console.log("Favo voedsel van kat 3:", catBreeds[2].food.favourite_food)