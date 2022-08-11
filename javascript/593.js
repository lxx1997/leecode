/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    return checkTrangle(p1,p2,p3) && checkTrangle(p4,p2,p3), checkTrangle(p1,p2,p4)
};

function checkTrangle(p1, p2, p3) {
    let a = Math.pow(p2[0] - p1[0], 2) +  Math.pow(p2[1] - p1[1], 2)
    let b = Math.pow(p3[0] - p1[0], 2) +  Math.pow(p3[1] - p1[1], 2)
    let c = Math.pow(p2[0] - p3[0], 2) +  Math.pow(p2[1] - p3[1], 2)
    if(a === 0 || b === 0 || c === 0) return false
    let max= Math.max(a,b,c)
    if(max === c) {
        return a === b && a + b === c
    }
    if(max === b) {
        return a === c && a + c === b
    }
    if(max === a) {
        return c === b && c + b === a
    }
    return false
}

console.log(validSquare([0,0],[1,1],[1,0],[0,1]), true)