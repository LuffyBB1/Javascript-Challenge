/*
Autor: Brayan Bernal
Curso: 30 Days of Javascript
Tema: Day 4 - Conditionals
Date: 27/06/2023
*/ 
/** 
if
if else
if else if else
switch
ternary operator
*/ 
let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}

let condition=true
// syntax
if (condition) {
    // this part of code runs for truthy condition
  } else {
    // this part of code runs for false condition
  }

let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number

let Raining = true
if (Raining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.

Raining = false
if (Raining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// No need for a rain coat.

// syntax
if (condition) {
    // code
} else if (condition) {
  // code
} else {
   //  code

}

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}


// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}

let caseValue=1
switch(caseValue){
    case 1:
      // code
      break
    case 2:
     // codea
     break
    case 3:
     // code
     break
    default:
     // code
  }

// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}


// --------------------- Exercises: Level 1 - 1---------------------
let age=prompt('Enter your age')
if (age>=18){
    console.log('You\'r enough to drive')
}else {
    console.log(`You need ${18-age} years to drive`)
}
//2
let my_age=25
if (age>my_age){
    console.log(`You\'r ${age-my_age} years older than me`)
}else if(age<my_age){
    console.log(`You\'r ${my_age-age} years younger than me`)
}else {
    console.log('We are the same age')
}
//3
let b=3
let c=4
b>c
    ? console.log('b is bigger than c')
    : console.log('c is bigger than b')

if (b>c){
    console.log('b is bigger than c')
}else {
    console.log('c is bigger than b')
}
//4
if (age%2==0){
    console.log(age, 'Is even number')
}else {
    console.log(age, 'Is a odd number')
}

//--------------------- Exercises level 2 ---------------------------
//1
let score=prompt('Enter your grade')

function assignGrade(score) {
    if (score >= 80 && score <= 100) {
      return 'A';
    } else if (score >= 70 && score <= 89) {
      return 'B';
    } else if (score >= 60 && score <= 69) {
      return 'C';
    } else if (score >= 50 && score <= 59) {
      return 'D';
    } else if (score >= 0 && score <= 49) {
      return 'F';
    } else {
      return 'Invalid score';
    }
  }

let grade=assignGrade(score)
console.log('Your grade is', grade)
//2
let month=prompt('Enter month')
if (month=='september' || month=='october' || month=='november'){
    console.log('Is Autumn')
}else if(month=='december' || month=='january ' || month=='february'){
    console.log('Is Winter')
}else if(month=='march' || month=='april' || month=='may'){
    console.log('Is Spring')
}else {
    console.log('Is Summer')
}
//3
if (day=='sunday' || day=='saturday'){
    console.log(day, 'is a weekend')
}else {
    console.log(day, 'is a working day')
}
