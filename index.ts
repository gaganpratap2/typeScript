console.log("HELLO WORLD");


// let myName: string = "HuXn WebDev";
// myName = "Another Name";
// console.log(myName);

// let favNumber: number = 7;
// favNumber += 2;
// console.log(favNumber);

// let tsHard: boolean = false;
// console.log(tsHard);

// let tech = "TypeScript";
// console.log(tech, favNumber, tsHard);

// let color: any = "crimson";
// color = 20;
// color = true;
// color();
// color.toUpperCase();
// console.log(color);

// Regular Func
function addOne(num: number) {
  return num + 1;
}

const result = addOne(3);
console.log(result);

// Arrow Func Annotations
const double = (x: number, y: number) => x * y;
const res = double(2, 10);
console.log(res);

// Also notice, TypeScript will gives you warning if you provide more or less arguments then you specifiy in your parameters area.

// double(2, 10, 20); // 👈 Warning


function greet(person: string = "Anonymous") {
  return `Hello ${person}`;
}

const res1 = greet();
console.log(res1);


// Regular Function
function double1(x: number): number {
  return x * x;
}

const res2 = double1(2);
console.log(res2);

// Using Arrow Functions
const double2 = (x: number): number => x * x;
const res3 = double2(2);
console.log(res3);


function printMessage(message: string): void {
  console.log(`This is my message: ${message}`);
  // ERROR 👇
  // return message;
}

printMessage("Hello How Are You?");


// 1.
function throwError(msg: string): never {
  throw new Error(msg);
}

// 2.
function infiniteLoop(): never {
  while (true) {}
}

// 3.
let x: never;

function neverReturns(): never {
  while (true) {}
}

x = neverReturns();



// -------------------------
const nums: number[] = [1, 2, 3, 4, 5];
console.log(nums);

const str: string[] = ["one", "two", "three"];
console.log(str);
// -------------------------

// -------------------------
const items: string[] = [];
items.push("Remote");
items.push("Keyboard");
// items.push(21); // NO nO
console.log(items);

const numList: number[] = [];
numList.push(20);
numList.push(2000);
numList.push(-1);
// numList.push("Hello") // ERROR
console.log(numList);
// -------------------------


const items: Array<string> = [];
// const items: string[] = [];

const items2: Array<number> = [];
// const items2: numbers[] = []


const singleDi: number[] = [1, 2, 3, 4, 5];
const multiDi: number[][] = [[1, 2, 3, 4, 5]];
const triple: number[][][] = [[[1, 2, 3, 4, 5]]];

console.log(singleDi);
console.log(multiDi);
console.log(triple);



// type variableName (annotations/types) = {property:value}

// -------------------------
// Define a person object
const person: { firstName: string; lastName: string; age: number } = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Access and log properties
console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
// -------------------------

// -------------------------
// Using objects as function return value
function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Alex",
    age: 19,
    location: "USA",
  };
}

const res = printUser();
console.log(res);

function printUserName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

printUserName({ firstName: "HuXn", lastName: "WebDev" });
// -------------------------



type User = {
  name: string;
  age?: number;
  location: string;
};

const user: User = {
  name: "HuXn",
  age: 20,
  location: "Arabic",
};

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);




// Original interface
interface Car {
  brand: string;
  start(): void;
}

// Declaration merging (interface extension)
interface Car {
  model: string;
  stop(): void;
}

// Usage of the extended interface
const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  start() {
    console.log("Car started");
  },
  stop() {
    console.log("Car stopped");
  },
};

// ------------------------------------
interface User {
  firstName: string;
  lastName: string;
  age: number;
}

interface User {
  printUserInfo(
    firstName: string,
    lastName: string,
    age: number
  ): string | number;
}

const huxn: User = {
  firstName: "HuXn",
  lastName: "WebDev",
  age: 18,
  printUserInfo(firstName, lastName, age) {
    return `Name: (${firstName} ${lastName}) Age: (${age})`;
  },
};

console.log(huxn.printUserInfo("HuXn", "WebDev", 18));



// Interface #5 (Extending Interface)
interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenra extends MovieDetails {
  genra: string;
}

const movie1: MovieGenra = {
  name: "John Wick",
  ratings: 7,
  printMovieInfo(name: string, price: number, ratings: number) {
    return `Name: ${name}, Price: ${price}, Ratings: ${ratings}`;
  },
  genra: "Action",
};

const res = movie1.printMovieInfo("John Wick", 100, 8);
console.log(res);




// ------------- Without Generics -------------
// function printNumber(item: number, defaultValue: number): [number, number] {
//   return [item, defaultValue];
// }

// function printString(item: string, defaultValue: string): [string, string] {
//   return [item, defaultValue];
// }

// function printBoolean(
//   item: boolean,
//   defaultValue: boolean
// ): [boolean, boolean] {
//   return [item, defaultValue];
// }

// // Example usage
// const num = printNumber(42, 0);
// console.log(num); // Outputs: [42, 0]

// const str = printString("hello", "world");
// console.log(str); // Outputs: ['hello', 'world']

// const bool = printBoolean(true, false);
// console.log(bool); // Outputs: [true, false]
// -----------------------------------

// --------------- Using Generics ---------------
function uniqueDataTypeFunc<Type>(
  item: Type,
  defaultValue: Type
): [Type, Type] {
  return [item, defaultValue];
}

// Example usage
const num = uniqueDataTypeFunc<number>(42, 0);
console.log(num); // Outputs: [42, 0]

const str = uniqueDataTypeFunc<string>("hello", "world");
console.log(str); // Outputs: ['hello', 'world']

// Example usage with a custom type
interface Dog {
  name: string;
  breed: string;
}

const dogPair = uniqueDataTypeFunc<Dog>(
  { name: "Buddy", breed: "Labrador" },
  { name: "Default", breed: "Unknown" }
);

console.log(dogPair); // Outputs: [{ name: 'Buddy', breed: 'Labrador' }, { name: 'Default', breed: 'Unknown' }]




// Function Signature:

// function getRandomKeyValuePair<T>(obj: { [key: string]: T }): { key: string; value: T } { ... }
// The function is named getRandomKeyValuePair.
// It is a generic function denoted by <T>, meaning it can work with different types specified when calling the function.
// Parameters:

// obj: { [key: string]: T }: The function takes an object (obj) with keys of type string and values of type T.
// This is a common pattern in TypeScript to represent a dictionary-like object where keys are strings and values can be of any type (T).
// Function Body:

// const keys = Object.keys(obj);: Gets an array of keys from the input object using Object.keys.
// const randKey = keys[Math.floor(Math.random() * keys.length)];: Randomly selects a key from the array of keys using a random index.
// return { key: randKey, value: obj[randKey] };: Returns an object with two properties — key (the randomly chosen key) and value (the corresponding value from the input object).
// Return Type:

// : { key: string; value: T }: The function returns an object with a fixed structure — a key property of type string and a value property of type T.

// Generic function to get a random key-value pair from an object
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}

// Example usage with strings
const stringObject = { a: "apple", b: "banana", c: "cherry" };
const randomStringPair = getRandomKeyValuePair<string>(stringObject);
console.log(randomStringPair); // Outputs: { key: 'a', value: 'apple' } (random)

// Example usage with numbers
const numberObject = { one: 1, two: 2, three: 3, four: 4 };
const randomNumberPair = getRandomKeyValuePair<number>(numberObject);
console.log(randomNumberPair); // Outputs: { key: 'two', value: 2 } (random)

// Inferring type
const inferredStringPair = getRandomKeyValuePair(stringObject);
console.log(inferredStringPair); // Outputs: { key: 'b', value: 'banana' } (random)

const inferredNumberPair = getRandomKeyValuePair(numberObject);
console.log(inferredNumberPair); // Outputs: { key: 'three', value: 3 } (random)
// ------------------------------------------------

// ------------------------------------------------
// Generic function to filter an array based on a condition
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

// Example usage with an array of numbers
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers); // Outputs: [2, 4, 6, 8, 10]

// Example usage with an array of strings
const stringArray = ["apple", "banana", "cherry", "date"];
const shortWords = filterArray<string>(stringArray, (word) => word.length < 6);
console.log(shortWords); // Outputs: ["apple", "date"]

// Example usage with an array of objects
interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];

const redFruits = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "Red"
);
console.log(redFruits); // Outputs: [{ name: 'Apple', color: 'Red' }, { name: 'Cherry', color: 'Red' }]
// ------------------------------------------------




// --------------------------
// Generic function to reverse the order of two values
function reversePair<T, U>(value1: T, value2: U): [U, T] {
  return [value2, value1];
}

// Example usage
const reversedPair = reversePair("Hello", 42);
console.log(reversedPair); // Outputs: [42, "Hello"]
// --------------------------

// --------------------------
// Generic function to combine two values into an array
function combineValues<T, U>(value1: T, value2: U): [T, U] {
  return [value1, value2];
}

// Example usage
const combinedStringAndNumber = combineValues("Hello", 42);
console.log(combinedStringAndNumber); // Outputs: ["Hello", 42]

const combinedBooleanAndArray = combineValues(true, [1, 2, 3]);
console.log(combinedBooleanAndArray); // Outputs: [true, [1, 2, 3]]
// --------------------------



// Type constraint using the 'extends' keyword
interface Identifiable {
  id: number;
}

// Generic function with a type constraint
function mergeObjects<T extends Identifiable, U extends Record<string, any>>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}

// Example usage
const object1 = { id: 1, name: "Object 1" };
const object2 = { id: 2, description: "Object 2" };

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);
// Outputs: { id: 1, name: 'Object 1', description: 'Object 2' }




// ------------- Without Generics -------------
// function printNumber(item: number, defaultValue: number): [number, number] {
//   return [item, defaultValue];
// }

// function printString(item: string, defaultValue: string): [string, string] {
//   return [item, defaultValue];
// }

// function printBoolean(
//   item: boolean,
//   defaultValue: boolean
// ): [boolean, boolean] {
//   return [item, defaultValue];
// }

// // Example usage
// const num = printNumber(42, 0);
// console.log(num); // Outputs: [42, 0]

// const str = printString("hello", "world");
// console.log(str); // Outputs: ['hello', 'world']

// const bool = printBoolean(true, false);
// console.log(bool); // Outputs: [true, false]
// -----------------------------------

// --------------- Using Generics ---------------
function uniqueDataTypeFunc<Type>(
  item: Type,
  defaultValue: Type
): [Type, Type] {
  return [item, defaultValue];
}

// Example usage
const num = uniqueDataTypeFunc<number>(42, 0);
console.log(num); // Outputs: [42, 0]

const str = uniqueDataTypeFunc<string>("hello", "world");
console.log(str); // Outputs: ['hello', 'world']

// Example usage with a custom type
interface Dog {
  name: string;
  breed: string;
}

const dogPair = uniqueDataTypeFunc<Dog>(
  { name: "Buddy", breed: "Labrador" },
  { name: "Default", breed: "Unknown" }
);

console.log(dogPair); // Outputs: [{ name: 'Buddy', breed: 'Labrador' }, { name: 'Default', breed: 'Unknown' }]



// Function Signature:

// function getRandomKeyValuePair<T>(obj: { [key: string]: T }): { key: string; value: T } { ... }
// The function is named getRandomKeyValuePair.
// It is a generic function denoted by <T>, meaning it can work with different types specified when calling the function.
// Parameters:

// obj: { [key: string]: T }: The function takes an object (obj) with keys of type string and values of type T.
// This is a common pattern in TypeScript to represent a dictionary-like object where keys are strings and values can be of any type (T).
// Function Body:

// const keys = Object.keys(obj);: Gets an array of keys from the input object using Object.keys.
// const randKey = keys[Math.floor(Math.random() * keys.length)];: Randomly selects a key from the array of keys using a random index.
// return { key: randKey, value: obj[randKey] };: Returns an object with two properties — key (the randomly chosen key) and value (the corresponding value from the input object).
// Return Type:

// : { key: string; value: T }: The function returns an object with a fixed structure — a key property of type string and a value property of type T.

// Generic function to get a random key-value pair from an object
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}

// Example usage with strings
const stringObject = { a: "apple", b: "banana", c: "cherry" };
const randomStringPair = getRandomKeyValuePair<string>(stringObject);
console.log(randomStringPair); // Outputs: { key: 'a', value: 'apple' } (random)

// Example usage with numbers
const numberObject = { one: 1, two: 2, three: 3, four: 4 };
const randomNumberPair = getRandomKeyValuePair<number>(numberObject);
console.log(randomNumberPair); // Outputs: { key: 'two', value: 2 } (random)

// Inferring type
const inferredStringPair = getRandomKeyValuePair(stringObject);
console.log(inferredStringPair); // Outputs: { key: 'b', value: 'banana' } (random)

const inferredNumberPair = getRandomKeyValuePair(numberObject);
console.log(inferredNumberPair); // Outputs: { key: 'three', value: 3 } (random)
// ------------------------------------------------

// ------------------------------------------------
// Generic function to filter an array based on a condition
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

// Example usage with an array of numbers
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers); // Outputs: [2, 4, 6, 8, 10]

// Example usage with an array of strings
const stringArray = ["apple", "banana", "cherry", "date"];
const shortWords = filterArray<string>(stringArray, (word) => word.length < 6);
console.log(shortWords); // Outputs: ["apple", "date"]

// Example usage with an array of objects
interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];

const redFruits = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "Red"
);
console.log(redFruits); // Outputs: [{ name: 'Apple', color: 'Red' }, { name: 'Cherry', color: 'Red' }]
// ------------------------------------------------





// --------------------------
// Generic function to reverse the order of two values
function reversePair<T, U>(value1: T, value2: U): [U, T] {
  return [value2, value1];
}

// Example usage
const reversedPair = reversePair("Hello", 42);
console.log(reversedPair); // Outputs: [42, "Hello"]
// --------------------------

// --------------------------
// Generic function to combine two values into an array
function combineValues<T, U>(value1: T, value2: U): [T, U] {
  return [value1, value2];
}

// Example usage
const combinedStringAndNumber = combineValues("Hello", 42);
console.log(combinedStringAndNumber); // Outputs: ["Hello", 42]

const combinedBooleanAndArray = combineValues(true, [1, 2, 3]);
console.log(combinedBooleanAndArray); // Outputs: [true, [1, 2, 3]]
// --------------------------
