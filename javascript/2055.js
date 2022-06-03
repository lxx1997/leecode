/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function(s, queries) {
    let arr = new Array(queries.length).fill(0)
    let hash = {},
        leftHash = {},
        num = 0
    hash[-1] = 0, leftHash[-1] = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "*") {
            num++
            hash[i] = hash[i - 1]
            leftHash[i] = leftHash[i - 1]
        } else {
            hash[i] = hash[i - 1] + num
            leftHash[i] = leftHash[i - 1] + num
            for (let j = i - 1; j >= i - num; j--) {
                hash[j] = hash[i]
            }
            num = 0
        }
    }
    console.log(hash)
    for (let i = 0; i < queries.length; i++) {
        let l1 = queries[i][0],
            l2 = queries[i][1],
            left, right
        if (s[l1] === "*") {
            left = hash[l1]
        } else {
            left = leftHash[l1]
        }
        if (s[l2] === "*") {
            right = leftHash[l2]
        } else {
            right = hash[l2]
        }
        arr[i] = right - left
    }
    return arr
};
platesBetweenCandles("***|**|*****|**||**|*", [
    [1, 17],
    [4, 5],
    [14, 17],
    [5, 11],
    [15, 16]
])