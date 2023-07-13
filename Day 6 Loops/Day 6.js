/*
Autor: Brayan Bernal
Curso: 30 Days of Javascript
Tema: Day 6 - Loops
Date: 10/07/2023
*/ 

// For loop structure
//for(initialization, condition, increment/decrement){
    // code goes here
 // }

for(let i = 0; i <= 5; i++){
    console.log(i)
  }
// 0 1 2 3 4 5

for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5

let j = 0
do {
  console.log(j)
  j++
} while (j <= 5)

// 0 1 2 3 4 5

const newArra = []
for(const country of countries){
  newArra.push(country.toUpperCase())
}
console.log(newArra)

for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }
  
  // 0 1 2

for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }
  
  // 0 1 2 4 5