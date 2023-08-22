/*
Autor: Brayan Bernal
Curso: 30 - Days of Javascript
Tema: Day 10 - Sets and Maps
Date: 15/08/2023
*/ 



const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)

  for (const language of setOfLanguages) {
    console.log(language)
  }


  // Create Variables
const a = "a";
const b = "b";
const c = "c";

// Create a Set
const letters = new Set();

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);


const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies)

console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set

companies.add(['as', 'bvs']); companies.add(['as', 'bvss']); 
console.log(companies)

const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)

/// Union of SET 

let a_a = [1, 2, 3, 4, 5]
let b_b = [3, 4, 5, 6]
let c_c = [...a_a, ...b_b]

let A = new Set(a_a)
let B = new Set(b_b)
let C = new Set(c_c)

console.log(C)

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);


// Sorting Maps


// Initializing and inserting values into Map
let map1 = new Map([
    [4, 2],
    [2, 3],
]);
 
// Inserting new element into map using set() method
map1.set(3, 10);
console.log("Our map :");
console.log(map1);
 
// Adding the sorting logic
map1 = new Map([...map1.entries()].sort());
 
// Separately printing only keys
for (let [key, value] of map1) {
    console.log(key, " ");
}


// Another Method


let map2 = new Map([
    [4, 2],
    [2, 3],
]);
 
// Inserting new element into map using set() method
map2.set(3, 10);
console.log("Our map :");
console.log(map2);
 
// Adding the custom sorting logic to sort
// by decreasing values of keys
map2 = new Map([...map2.entries()].sort((a, b) => b[0] - a[0]));
 
// Separately printing only keys
for (let [key, value] of map2) {
    console.log(key, " ");
}