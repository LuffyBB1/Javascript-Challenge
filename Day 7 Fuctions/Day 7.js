/*
Autor: Brayan Bernal
Curso: 30 Days of Javascript
Tema: Day 7 - Functions
Date: 11/07/2023
*/ 

/**
 * A function can be declared or created in couple of ways:

Declaration function
Expression function
Anonymous function
Arrow function
 */

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i=0, len, text="";
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }
console.log(text)

while (i <= 5) {
    console.log(i)
    i++
  }
  
/**
 * //declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName() // calling function by its name and with parentheses
 */

let num_one=2, num_t=6;
function square(){
  let num_tre;
  num_tre=num_one**num_t
  return num_tre
}
console.log(square())

// function without parameter
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}
addTwoNumbers() // a function has to be called by its name to be executed 

function printFullName (){
  let firstName = 'Asabeneh'
  let lastName = 'Yetayeh'
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}
console.log(printFullName())

/**
 * // function with one parameter
function functionName(parm1) {
  //code goes her
}
functionName(parm1) // during calling or invoking one argument needed
 */

function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(50))

// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //calling a function
console.log(sumArrayValues(numbers));

// Let us access the arguments object
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function declaration

const suma_All = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(suma_All(1, 2, 3, 4)) // 10
console.log(suma_All(10, 20, 13, 40, 10))  // 93
console.log(suma_All(15, 20, 30, 25, 10, 33, 40))  // 173

const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}

// Function expression
const cuadrado = function(n) {
  return n * n
}

console.log(cuadrado(2)) // -> 4

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)

const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

const FullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(FullName('Asabeneh', 'Yetayeh'))

function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' // the value has to be changed to string first
  return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon