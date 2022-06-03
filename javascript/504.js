/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) return "0"
    let pos = num > 0,
        base7 = ""
    num = Math.abs(num)
    while (num >= 7) {
        base7 = num % 7 + base7
        num = (num - num % 7) / 7
    }
    if (num === 0) {
        base7 = 1 + base7
    } else {
        base7 = num + base7
    }
    return pos ? base7 : "-" + base7
};