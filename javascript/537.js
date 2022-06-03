/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    let num1Array = num1.split("+"),
        a1 = Number(num1Array[0]),
        b1 = Number(num1Array[1].substring(0, num1Array[1].length - 1))
    let num2Array = num2.split("+"),
        a2 = Number(num2Array[0]),
        b2 = Number(num2Array[1].substring(0, num2Array[1].length - 1))
    let s1 = a1 * a2 - b1 * b2,
        s2 = a1 * b2 + a2 * b1
    return `${s1}+${s2}i`
};