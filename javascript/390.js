/**
 * @param {number} n
 * @return {number}
 */
// 时间过长
// var lastRemaining = function(n) {
//     let arr = new Array(n).fill(0)
//     arr = arr.map((item, index) => index + 1)
//     let left = true
//     while(arr.length !== 1) {
//         let odd = arr.length % 2 === 0
//         arr = arr.filter((item, index) => {
//             if(left || !odd) return index % 2 !== 0
//             if(odd) return index % 2 === 0
//         })
//         left = !left
//     }
//     return arr[0]
// };
// 根据等差数列
var lastRemaining = function(n) {
    let ak = 1
    let k = 0, cn = n, step = 1
    while(cn > 1) {
        if(k % 2 === 0) {
            ak += step
        } else {
            // 这一步 如果剩余的数组数目为偶数，则进行右删除后其实和之前一步的中位树一样
            ak = (cn % 2 === 0) ? ak : ak + step
        }
        k++
        cn = cn >> 1
        step = step <<= 1
    }
    return ak
};
console.log(lastRemaining(9), 6)
console.log(lastRemaining(1), 1)
console.time("123123")
console.log(lastRemaining(1000000), 259446)
console.timeEnd("123123")