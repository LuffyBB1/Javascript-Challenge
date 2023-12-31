/*
Autor: Brayan Bernal
Curso: 30 Days of Javascript
Tema: Day 2 - Data Types
Date: 09/06/2023
*/ 

/*Primitive Data Types
Primitive data types in JavaScript include:

Numbers - Integers, floats
Strings - Any data under single quote, double quote or backtick quote
Booleans - true or false value
Null - empty value or no value
Undefined - a declared variable without a value
Symbol - A unique value that can be generated by Symbol constructor
Non-primitive data types in JavaScript includes:

Objects
Arrays*/
let word='JavaScript'
word[0]='a'

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

//Non-primitive data types in JavaScript includes:
// 1. Objects
// 2. Arrays

let nums = [1, 2, 3]
console.log(nums) //[1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]


/*Math Object
In JavaScript the Math Object provides a lots of methods to work with numbers.*/
const PI = Math.PI
console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding
console.log(Math.round(PI))                // 3 to round values to the nearest number
console.log(Math.round(9.81))              // 10
console.log(Math.floor(PI))                // 3 rounding down
console.log(Math.ceil(PI))                 // 4 rounding up
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10
const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10
//Square root
console.log(Math.sqrt(100))     // 10
console.log(Math.sqrt(2))       // 1.4142135623730951
// Power
console.log(Math.pow(3, 2))     // 9
console.log(Math.E)             // 2.718
// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046
// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046
// Trigonometry
Math.sin(0)
Math.sin(60)
Math.cos(0)
Math.cos(60)


let randomNum = Math.random()    // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11  // generates 0 to 10.99

console.log(numBtnZeroAndTen)  

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10

let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`
let age = 25

let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5 string addition

console.log(personInfoOne)

/* Long Literal Strings
A string could be a single character or paragraph or a page. If the string length is too big it 
does not fit in one line. We can use the backslash character (\) 
at the end of each line to indicate that the string will continue on the next line. Example:*/

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)


/*Escape Sequences in Strings
In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")*/
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')



console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

console.log(firstName.length)

firstName=firstName.toLocaleUpperCase()
console.log(firstName)
console.log(firstName.substring(2,6))

let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

console.log(typeof(string.split()))


console.log(string)
console.log(string.trim(' '))

console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python
console.log(country.replace('Fin', 'Noman'))       // Nomanland
console.log(firstName.charAt(5))

let string2 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string2.lastIndexOf('love'))       // 67
console.log(string2.lastIndexOf('you'))        // 63
console.log(string2.lastIndexOf('JavaScript')) // 38

console.log(string2.indexOf('D'))          // -1
console.log(string2.indexOf('Days'))       // -1
console.log(string2.indexOf('days'))       // -1
console.log(string2.indexOf('a'))          // 8
console.log(string2.indexOf('JavaScript')) // 7
console.log(string2.indexOf('Script'))     //11
console.log(string2.indexOf('script'))     // -1

let search_me = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(search_me.search('love'))          // 2
console.log(search_me.search(/javascript/gi))  // 7

var cadena = "La casa es grande.";
var subcadena = "casa";
var expresionRegular = /casa/g;

console.log(cadena.indexOf(subcadena));  // Salida: 3
console.log(cadena.search(expresionRegular));  // Salida: 3
console.log(typeof string.split())