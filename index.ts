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