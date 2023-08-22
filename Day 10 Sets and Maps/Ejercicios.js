
const countries_data = require('../Data/countries_data');
const countriesMap = new Map()
function mostSpoken(countries, number){
    let cantLenguajes= new Map();
    for (country of countries){
        country.languages.forEach(lengu => {
            if (cantLenguajes.has(lengu)){
                cantLenguajes.set(lengu, (cantLenguajes.get(lengu)+1))
            }else cantLenguajes.set(lengu, 1)
        }); 
    }
    let cont=0;
    cantLenguajes = new Map([...cantLenguajes.entries()].sort()); 
    cantSort = new Map([...cantLenguajes].sort((a, b) => b[1] - a[1]));

    for (let kii of cantSort){
        if (cont <number){
            console.log(kii)
        } 
        cont++
    }
}

mostSpoken(countries_data, 10)
console.log('\b')
mostSpoken(countries_data, 3)
