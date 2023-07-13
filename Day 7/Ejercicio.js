//1
function full_name(){
    return console.log('Mi nombre es Brayan Bernal')
}
full_name()
//2
function full_name_para(firstName, lastName){
    let full=firstName+" "+lastName
    return full
}
console.log(full_name_para('Brayan', 'Bernal'))
//3
function addTwoNumbers(one, two){
    let sum=one+two
    return sum
}

console.log(addTwoNumbers(5,4561))
//4
const convert = (celcius) => (celcius *9/5) +32
console.log(convert(21))
//13

let weight=10
let height=10
let resultado;
function index_BMI(weight, height){
    let bmi=0;
    bmi=weight/height**2
    return parseFloat(bmi)
}

resultado=index_BMI(weight, height)

if (resultado<18.5){
    console.log('Underweight')
}else if(resultado>=18.5 && resultado<=24.9){
    console.log('Normal')
}else if(resultado>=25 && resultado<=29.9){
    console.log('Overweight')
}else if(resultado>=30){
    console.log('Obese')
}
console.log(resultado)

//
function printArray(arr){
    arr.sort()
    arr.forEach(element => {
        console.log(element)
    });
}

let countries=['Colobmia','Ecuador', 'Brasil', 'Argentina']
printArray(countries)

function showDateTime(){
    const now = new Date()
    const year = now.getFullYear() // return year
    const month = now.getMonth() + 1 // return month(0 - 11)
    const date = now.getDate() // return date (1 - 31)
    const hours = now.getHours() // return number (0 - 23)
    const minutes = now.getMinutes() // return number (0 -59)
    
    console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
    
}
showDateTime()

//II. 5 Declare a function name swapValues. This function swaps value of x to y.
const swapValues= (a, b) => {
    console.log('X => ', b); console.log('Y=> ', a)
}
swapValues(5, 2)

//II. 6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr){
    let reverArray=[]
    for (let i=0; i<arr.length; i++){
        reverArray.unshift(arr[i])
    }   
    return reverArray
}

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

//II. 7
function capitalizeArray(arr){
    let capitalizedarray=[]
    arr.forEach(element =>{
        capitalizedarray.push(element.toUpperCase())
    });
    return capitalizedarray
}

let carList=['Jabon', 'aceite', 'Carne']
console.log(capitalizeArray(countries))
//II. 8
function addItem(item){
    carList.push(item)
    return carList;
}
addItem('huevos'); addItem('Salsa')
console.log(carList)

function removeItem(index){
    if (index<carList.length){
        carList.splice(index, 1)
    }
    return carList
}
removeItem(2)
console.log(carList)

function sum(){
    let suma=0;
    for (let i=0; i<arguments.length; i++){
        suma += arguments[i]
    }
    return suma    
}
console.log(sum(1,2,23,4,5,4,45,4,4))

function numRandom(cantidad){
    let randos=[], number
    for (let i=0; i<cantidad; i++){
        number=Math.floor(Math.random() * 20) +1
        while (randos.includes(number)){
            number=Math.floor(Math.random() * 20) +1
        }
        randos.push(number)        
    }
    return randos
}
console.log(numRandom(5))


function generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 5) {
      const randomNum = Math.floor(Math.random() * 10);
      
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    
    return numbers;
  }
  
const randomNumbers = generateRandomNumbers();
console.log(randomNumbers);

function modifyArray (arreglo){
    if (arreglo.length<5){
        return console.log('Item no found')
    }else arreglo[4]=arreglo[4].toUpperCase()

    return console.log(arreglo)
}
modifyArray(countries)
modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'])
modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM'])
console.log(carList)
// III. 8 -  Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffle(arreglo){
    let number=Math.floor(Math.random() * arreglo.length), revuelto=Array(arreglo.length-1)
    for (let i=0; i<arreglo.length; i++){
        while (revuelto[number]!==undefined){
            number=Math.floor(Math.random() * arreglo.length)
        }
        revuelto[number]=arreglo[i]
    }
    return revuelto
}

console.log(shuffle(carList))
