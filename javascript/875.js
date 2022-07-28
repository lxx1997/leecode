/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

function judge(piles, h, s) {
    let total = 0
    for(let i = 0; i < piles.length; i++) {
        total += Math.ceil(piles[i] / s)
    }
    return total <= h
}
var minEatingSpeed = function(piles, h) {
    let min = 1, max = 1
    for(let i = 0; i < piles.length; i++) {
        max = Math.max(piles[i], max)
    }
    let k = max
    while(min < max) {
        let speed = Math.floor((max - min) / 2) + min
        if(judge(piles, h, speed)) {
            k = speed
            max = speed
        } else {
            min = speed + 1
        }
    }
    return k
};

console.log(minEatingSpeed([30,11,23,4,20], 5))