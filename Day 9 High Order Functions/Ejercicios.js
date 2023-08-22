let aleatorios=[]
for (let i=0; i<10; i++){
    aleatorios.push((Math.floor(Math.random() * 26) +1))
}

console.log(aleatorios)

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','peru']
for (let countri in countries){
    console.log(countries [countri].length)
}


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook', 'Book']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

function callback(item){
    return console.log(item)
}
numbers.forEach((item) => {
    console.log(item)
})

names.forEach(nombre => console.log(nombre))

products.forEach(callback)
countries.forEach(callback)

function upper(item){
    return item.toUpperCase()
}

const mayus=countries.map(upper)
console.log(mayus)

const other_mayus=names.map((nombre) => nombre.toUpperCase())
console.log(other_mayus)

const length_countries=countries.map((pais) => {
    return pais.length
})
console.log(length_countries)

const square=numbers.map(numero => numero**2)
console.log(square)

const countriesContainingLand = countries.filter((country) =>
  country.toLowerCase().includes('land')
)
console.log(countriesContainingLand)

const countriesSix=countries.filter((pais) =>{
    return pais.length===6
})
console.log(countriesSix)

const countriesSixOrMore=countries.filter((pais) =>{
    return pais.length>=6
})
console.log(countriesSixOrMore)

const prices=products.map((price) =>{
    if (price.price>=0){
        return price.price 
    }
} )
console.log('Precios: ', prices)
console.log(typeof(products[0].price))

const validPrices = prices.filter(price => typeof price === 'number');
console.log('Precios válidos: ', validPrices);

const totalPrice = products.reduce((sum, product) => {
    if (typeof product.price === 'number' && product.price >= 0) {
      return sum + product.price;
    } else {
      return sum;
    }
  }, 0);
  

console.log('Suma total de precios:', totalPrice);

const countries_data = require('../Data/countries_data');


const sort_population = countries_data.sort((a,b) =>  b.population - a.population)

const sort_name = countries_data.sort(function (a, b){
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
})

// Sort by capital
//const sortedByCapital = countries_data.slice().sort((a, b) => a.capital.localeCompare(b.capital));

//2


/*const sortedByName = countries_data.slice().sort((a, b) => a.name.localeCompare(b.name));
console.log('Sorted by Name:');
console.log(sortedByName);
*/

const languageStats = {};

// Contar los países que hablan cada idioma
for (const country of countries_data) {
    for (const language of country.languages) {
        if (languageStats[language]) {
            languageStats[language] += 1;
        } else {
            languageStats[language] = 1;
        }
    }
}


const languageStats_other = countries_data.reduce((stats, country) => {
    country.languages.forEach(language => {
        if (stats[language]) {
            stats[language].count++;
        } else {
            stats[language] = { count: 1 };
        }
    });
    return stats;
}, {});


function mostPopulatedCountries(data, imp){

    const population = data.map(function(country) {
        return {Country: country.name, population:country.population}
    })

    population.sort((a,b) => {
        if (a.population > b.population) return -1
        if (a.population < b.population) return 1
        return 0
    })

    for (let i=0; i<imp; i++){
        console.log(population[i])
    }
}

mostPopulatedCountries(countries_data, 10)

