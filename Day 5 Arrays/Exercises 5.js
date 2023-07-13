//Exercise: Level 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

let empy_array=[]
console.log(Array.isArray(empy_array))
let bigger_array=[0,1,2,3,4,5,6,7,8,9]
let length_bigger=bigger_array.length //10
let last_item=length_bigger-1
console.log(bigger_array[0],bigger_array[last_item])

//#Source https://bit.ly/2neWfJ2 
const median = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };
  console.log(median([5, 6, 50, 1, -5]));
  console.log(median(webTechs));

const firstTerm = webTechs[0];
const lastTerm = webTechs[webTechs.length - 1];
const middleTerm1 = webTechs[Math.floor(webTechs.length / 2) - 1];
const middleTerm2 = webTechs[Math.floor(webTechs.length / 2)];
  
console.log('Primer término:', firstTerm);
console.log('Último término:', lastTerm);
console.log('Término intermedio 1:', middleTerm1);
console.log('Término intermedio:', middleTerm2);

const mixed_array=[[1,2,3],'Hola',12,firstTerm,1,3,6,4,'XD']
console.log(mixed_array.length)

const itCompanies=['Facebook','Oracle','Google','Apple', 'IMB', 'Microsoft', 'Amazon']
console.log(itCompanies)
console.log(`The number of companies are: ${itCompanies.length}`)
console.log(itCompanies[0],itCompanies[[Math.floor(itCompanies.length / 2) - 1]], itCompanies[itCompanies.length-1])

console.log(itCompanies[0].toUpperCase())
const sentence = `${itCompanies.slice(0, -1).join(', ')}, and ${itCompanies.slice(-1)} are big IT companies.`;
console.log(sentence);
console.log(itCompanies);
const buscar='Facebook'
itCompanies.indexOf(buscar) !==-1 ? console.log(buscar) : console.log('La compañía no está')

let pattern=/o/gi
let new_array=[]
console.log(new_array.length)
let long=''
for (let i=0; i<itCompanies.length; i++){
    long=itCompanies[i].match(pattern)
    if (long!=null && long.length>1){
        new_array.push(itCompanies[i])
    }   
}
console.log(new_array)
itCompanies.sort()
console.log(itCompanies)
itCompanies.reverse()
console.log(itCompanies)

console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(-3))
console.log(itCompanies.slice(Math.floor(itCompanies.length/2),Math.floor(itCompanies.length/2)+1))

itCompanies.shift()
console.log(itCompanies)
itCompanies.pop()
console.log(itCompanies)

const middleIndex = Math.floor(itCompanies.length / 2);

if (itCompanies.length % 2 === 1) {
  // Remove one middle element for odd-length array
  itCompanies.splice(middleIndex, 1);
} else {
  // Remove two middle elements for even-length array
  itCompanies.splice(middleIndex - 1, 2);
}

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words=[]
const patron = /\b\w+\b/g;
words=text.match(patron)
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (shoppingCart.indexOf('Meat')===-1){
    shoppingCart.unshift('Meat')
}

if (shoppingCart.indexOf('Sugar')===-1){
    shoppingCart.push('Sugar')
}

shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea')

console.log(shoppingCart)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)





const countries_list = require('./Countries');
const webTechs_ex = require('./webTechs');

console.log(countries_list);
console.log(webTechs_ex);
