/**
 * @param {number[][]} mat
 * @return {number}
 */
 var numSpecial = function(mat) {
    let special = 0
    for(let i = 0; i < mat.length; i++) {
        let row = mat[i]
        let index = row.indexOf(1)
        if(index > -1) {
            if(row.lastIndexOf(1) === index && mat.every((item, j) => j === i || item[index] === 0)) {
                special++
            }
        }
    }
    return special
};