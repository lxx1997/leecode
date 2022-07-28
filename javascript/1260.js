/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let arr = grid.flat(Infinity)
    let index = arr.length - k % arr.length
    let newArr = arr.slice(index).concat(arr.slice(0, index))
    let length = grid[0].length, ngrid = []
    for(let i = 0; i < newArr.length; i += length) {
        ngrid.push(newArr.slice(i, i + length))
    }
    return ngrid
};

shiftGrid(grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1)