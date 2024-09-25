let a: number = 10;

if (a <= 50) a+= 10;

// data types
let sales: number = 105_456_465;
let course: string = "Hello";
let is_published: boolean = true;
let any; // any type can be assigned to any data type

function render (document: any){ // to overrcome the implicit any type error we can use document: any , also can be changed in tsconfig.json
    console.log(document);
}

// Array

let fruits: string[] = ['apple', 'banana', 'mango'];
let numbers: number[] = [1, 2, 3, 4, 5];
let mixed: (string | number)[] = ['apple', 1, 'banana', 2];
let anyArray: any[] = ['apple', 1, 'banana', 2];

let numberss: number[] =[];
numbers[0] = 1;
numberss.forEach(n => n.toFixed(2)); // toFixed is a number method

// tuple
// A tuple is a fixed-length array where the elements have fixed types
let person: [string, number] = ['John', 25];
// person = [25, 'John']; // error because the order is different
person[0].toUpperCase(); // works because the first element is a string
person[1].toFixed(2); // works because the second element is a number

// Enum
// Enum is a way to store a set of constants
const enum Color { // Pascal case and by default starts from 0
    Red = 1,
    Green,
    Blue
} // Red = 1, Green = 2, Blue = 3

// adding const before enum will make the code more optimized

// Return type

function add (a: number, b: number): number {
    return a + b;
} // return type is number

// Void

function log(message: string): void {
    console.log(message);
} // void means it doesn't return anything

//noImplicitReturns: true, // to make sure that all the return types are covered

function income(gdp) : number{ // return type is number and the parameter is any
    let x = 0; // noUnsedLocals: true, // to make sure that all the variables are used
    if ( gdp > 1000){
        return 1;
    }
    return 0;
}


function incomeMain(gdp : number, intrest = 2022) : number{ // return type is number and the parameter is any
    // let x = 0; // noUnsedLocals: true, // to make sure that all the variables are used
    if ( (intrest || 2022) > 1000){
        return 1;
    }
    return 0;
}

incomeMain(1000);

// object

//invalid typescript code
// let user = { id: 1, name: 'John' };
// user.age = 25; // error because user is not defined with age

//valid typescript code
let user: {name?: string, age: number} = {
    age: 25
};

user.name = 'John';