// 995. K 连续位的最小翻转次数
// 在仅包含 0 和 1 的数组 A 中，一次 K 位翻转包括选择一个长度为 K 的（连续）子数组，同时将子数组中的每个 0 更改为 1，而每个 1 更改为 0。
// 返回所需的 K 位翻转的最小次数，以便数组没有值为 0 的元素。如果不可能，返回 -1。

// var minKBitFlips = function(A, K) {
//   const length = A.length
//   let j = 0
//   let flipMap = new Array(length).fill(0)
//   for(let i = 0; i < length - K + 1; i++) {
//     let index = i
//     while(index < i + K) {
//       flipMap[index]++
//       index++
//     }
//     if(flipMap[i] % 2 === A[i]) {
//       j++
//     }
//   }
//   return j
// };

var minKBitFlips = function(A, K) {
  const length = A.length;
  let diff = new Array(length + 1).fill(0) // 差分数组
  let ans = 0 // 次数
  let turn = 0 // 翻转次数
  for(let i = 0; i < length; i++) {
    turn += diff[i]
    if((A[i] + turn) % 2 === 0) {
      if(i + K > length) {
        return -1
      } 
      ++ans
      ++turn
      --diff[i + K]
    } 
  }
  return ans;
};
/**
 * 执行结果解析
 * i = 0
 *      turn + diff[i] = 0, ans = 0, a[i] = 0  -> (a[i] + turn) % 2 === 0 -> turn = 1 ans = 1 diff[3] = -1
 * 
 * i = 1
 *      turn + diff[i] = 1, ans = 1 a[i] = 0 ` -> (a[i] + turn) % 2 === 1
 * 
 * i = 2
 *      turn  + diff[i] = 1, ans = 1 a[i] = 0 ` -> (a[i] + turn) % 2 === 1
 * 
 * i = 3  diff[i] = -1
 *      turn + diff[i] = 0, ans = 0, a[i] = 0  -> (a[i] + turn) % 2 === 1
 * 
 * ...... 依次类推
 */

console.log(minKBitFlips([0,0,0,1,0,1,1,0], 3))