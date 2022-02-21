/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    let arr = [],
        maxArr = [],
        minArr = []
    for (let i = 0; i < matrix.length; i++) {
        let min = matrix[i][0]
        for (let j = 0; j < matrix[i].length; j++) {
            let item = matrix[i][j]
            if (!maxArr[j]) {
                maxArr[j] = item
            } else {
                maxArr[j] = Math.max(maxArr[j], item)
            }
            min = Math.min(min, item)
        }
        minArr[i] = min
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let item = matrix[i][j]
            if (item === maxArr[j] && item === minArr[i]) {
                arr.push(item)
            }
        }
    }
    return arr
};