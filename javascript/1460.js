/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let targetHash = {}, arrHash = {}
    for(let i = 0; i < target.length; i++) {
        let t = target[i], a = arr[i]
        if(!targetHash[t]) targetHash[t] = 0
        if(!arrHash[a]) arrHash[a] = 0
        targetHash[t]++
        arrHash[a]++
    }

    return Object.keys(targetHash).some(item => targetHash[item] !== arrHash[item])
};

// 简化后版本
var canBeEqual = function(target, arr) {
    let targetHash = {}
    for(let i = 0; i < target.length; i++) {
        targetHash[target[i]] = (targetHash[target[i]] || 0) + 1
        targetHash[arr[i]] = (targetHash[arr[i]] || 0) - 1
    }

    return Object.values(targetHash).every(item => item === 0)
};