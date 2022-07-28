/**
 * @param {string} s
 * @return {number}
 */
 var minFlipsMonoIncr = function(s) {
    let one = 0, zero = 0, min = s.length
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "0") zero++
    }
    for(let i = 0; i < s.length; i++) {
        min = Math.min(one + zero, min)
        if(s[i] === "0") zero--
        if(s[i] === "1") one++
    }
    min = Math.min(one + zero, min)
    return min
};
console.log(minFlipsMonoIncr("00110"), 1)
console.log(minFlipsMonoIncr("11011"), 1)
console.log(minFlipsMonoIncr("010110"), 2)
console.log(minFlipsMonoIncr("00011000"), 2)
console.log(minFlipsMonoIncr("001110100101010101010000101010010101111110101001111011100100"), 24)