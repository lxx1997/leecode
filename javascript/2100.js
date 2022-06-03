/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
/**
 * left 递减数列
 * right 递增数列
 */
var goodDaysToRobBank = function(security, time) {
    let arr = []
    for (let i = time; i < security.length - time; i++) {
        if (leftDown(security, i - time, i) && rightUp(security, i + 1, i + 1 + time)) {
            arr.push(i)
        }
    }
    return arr
};

function leftDown(arr, start, end) {
    let min = arr[start]
    for (let i = start; i < end; i++) {
        if (min <= arr[i]) {
            min = arr[i]
        } else {
            return false
        }
    }
    return true
}

function rightUp(arr, start, end) {
    let max = arr[start]
    for (let i = start; i < end; i++) {
        if (min >= arr[i]) {
            min = arr[i]
        } else {
            return false
        }
    }
    return true
}