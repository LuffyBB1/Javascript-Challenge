//Nivel 1. 1
let first_name='Brayan'
let last_name='Bernal'
let country='Colombia'
let age=25
let is_married=false
let year=2023

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

//2
let check='10'
check==10
? console.log('Son iguales')
: console.log('No son iguales')
//3
let numero=10
console.log(numero==parseInt('9.8'))
//4 - I truthy
let diez=10
let nombre='algo no vacio es truthy'
let verdad=true
// II falsy
let sin_definir=undefined
let nan=NaN
let vacio=''
console.log(nan, sin_definir)

//5
4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true compare values
4 === 4 //true compare values and data type
4 != 4 //false compare values
4 !== 4 //true compare values and data type
4 != '4' //false compare value 
4 == '4' //true compare values
4 === '4' //false compare values and data type

//6
let python='Python'.length;
let jargon='Jargon'.length;
const length1 = python.length;
const length2 = jargon.length;
const falsyComparison = length1 === length2;
console.log(falsyComparison); // false

//7
const fecha=new Date();
let year_=fecha.getFullYear();
let mes=parseInt(fecha.getMonth())
console.log(mes)
let dia=fecha.getDay()
let hora=fecha.getHours()
let minuto=fecha.getMinutes()
console.log(hora)
let segundos_desde=fecha.getTime()
console.log(segundos_desde)

//------------------------------- Ejercicios nivel 2 ---------------------------
/*let base=prompt('Ingrese la base base')
let altura=prompt('Ingrese la altura')
console.log('El área es', base*altura)*/

//2
/*
let side_a=prompt('Enter side a')
let side_b=prompt('Enter side b')
let side_c=prompt('Enter side c')
let sum=side_a+side_b+side_c
console.log('The perimeter of the triangle is', sum)*/

//3
/*
let length_rec=prompt('Enter length')
let width=prompt('Enter width')
let area=length_rec * width
let perimeter=2*(length_rec+width)
*/
//4
/*
let radius=prompt('Enter radius')
const pi=Math.PI
console.log(pi)
let area_circle=pi*(radius**2)
let circunference=2*pi*radius
console.log('Circunference:', circunference)
console.log('Area circle:',area_circle)*/

//5