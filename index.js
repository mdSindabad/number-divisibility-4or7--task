const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

const checkDivisibility = (arr) => {
    const newArr = arr.map(num => {
        if (num % 4 === 0) {
            if (num % 7 === 0) {
                return { number: num, results: 'divisible by 4 & 7' }
            } else {
                return { number: num, results: 'divisible by 4' }
            }
        } else if (num % 7 === 0) {
            return { number: num, results: 'divisible by 7' }
        } else {
            return { number: num, results: 'not divisible by 4 or 7' }
        }
    })
    return newArr;
}
const results = checkDivisibility(numbers)
console.log(results);
