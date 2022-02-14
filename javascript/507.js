/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num === 1) return false
    sum = 1
    let d = 2
    while(d * d <= num) {
        if(num % d === 0) {
            sum += d
            if(d * d < num) {
                sum += num / d
            }
        }
        d++
    }
    return sum === num
};