function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)


const mysplit='Mínimo producto viable, en el menor tiempo posible'
const subjectWords = mysplit.split(' ')
const spam=[]
subjectWords.forEach(word => {
    
});
console.log(mysplit.split(' '))


