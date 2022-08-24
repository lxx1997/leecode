/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let index = {}
    for(let i = 0; i < groupSizes.length; i++) {
        let item = groupSizes[i]
        if(!index[item]) index[item] = []
        index[item].push(i)
    }
    let arr = []
    Object.keys(index).map(item => {
        while(index[item].length) {
            arr.push(index[item].splice(0, item))
        }
    })
    return arr
};

console.log(groupThePeople([3,3,3,3,3,1,3]))
console.log(groupThePeople([2,1,3,3,3,2]))