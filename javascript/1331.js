/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let arrSort = Array.from(new Set(arr)).sort((a, b) => a - b)
    return arr.map(item => arrSort.indexOf(item) + 1)
};
console.log(arrayRankTransform([-50,-3,44,-37,46,13]), [1,3,5,2,6,4])