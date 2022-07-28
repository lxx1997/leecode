/**
 * @param {number} n
 * @return {number}
 */
 var consecutiveNumbersSum = function(n) {
    let res = 0;
    for (let i = 1; n > 0; n -= i++)
        res += (n % i == 0);
    return res;
};

console.log(coWWWnsecutiveNumbersSum(5), 2)
console.log(consecutiveNumbersSum(6), 2)
console.log(consecutiveNumbersSum(2), 1)
console.log(consecutiveNumbersSum(9), 3)
console.log(consecutiveNumbersSum(15), 4)
console.log(consecutiveNumbersSum(12), 2)
console.log(consecutiveNumbersSum(3453535), 8)
console.log(consecutiveNumbersSum(42), 4)
console.time("abc")

console.log(consecutiveNumbersSum(350811108), 4)
console.timeEnd("abc")
console.time("abc")

console.log(consecutiveNumbersSum(131924136), 4)
console.timeEnd("abc")