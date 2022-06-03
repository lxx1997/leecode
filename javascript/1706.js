/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    let bools = grid[0].length,
        result = new Array(bools).fill(-1)
    for (let i = 0; i < bools; i++) {
        let index = i,
            deep = 0
        while (deep < grid.length) {
            let row = grid[deep]
                // 向右
            if (row[index] === 1) {
                if (index === bools - 1) {
                    break;
                }
                if (row[index] === -1) {
                    break;
                }
                index++
                if (row[index] === 1) {
                    if (deep === grid.length - 1) {
                        result[i] = index
                    } else {
                        deep++
                    }
                }
                // 向左
            } else if (row[index] === -1) {
                if (index === 0) {
                    break;
                }
                index--
                if (row[index] === 1) {
                    break
                }
                if (deep === grid.length - 1) {
                    result[i] = index
                } else {
                    deep++
                }
            }
        }
    }
    return result
};