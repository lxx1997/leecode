/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs = pairs.sort((a, b) => a[1] - b[1])
    let max = 0
    for(let i = 0; i < pairs.length - 1; i++) {
        let p = pairs[i][1]
        let length = 1
        let j = i + 1
        while(j < pairs.length) {
            if(p < pairs[j][0]) {
                length++
                p = pairs[j][1]
            }
        }
        max = Math.max(max, length)
    }
    return max
};