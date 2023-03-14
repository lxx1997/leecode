/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
// 前缀和，如果求出的值的范围内包含拥有相同的余数，则可以去最后的一个余数
var minSubarray = function(nums, p) {
  let total = nums.reduce((total, item) => total = (total + item) % p, 0) // 求余的原因是为了避免求得的和的长度超过了32位，无法正常获取值
  if(total === 0) return 0
  let reduce = total % p
  let t = 0, index = new Map();
  if(nums.some(item => item % p === reduce)) return 1
  let min = nums.length
  for(let i = 0; i < nums.length; i++) {
    let redu = t % p
    index.set(redu, i) // 使用map 设置当前余数的最近的一个位置
    t = (t + nums[i]) % p
    // (t - reduce) % p = redu % p =>
    // (t - reduce + p) % p = redu % p 负数进行取余时，余数为负数，因此计算 时需要加上 p
    if(index.has((t - reduce + p) % p )) { // 判断当前的和的余数是否与存在于map中， +p 的原因是为了避免 - reduce 后得到负数
      min = Math.min(min, i - index.get((t - reduce + p) % p) + 1) // 如果当前求得的余数正好存在map 对象里面
    }
  }
  return min === nums.length ? -1 : min
};

// var minSubarray = function(nums, p) {
//   let x = 0;
//   for (const num of nums) {
//       x = (x + num) % p;
//   }
//   if (x === 0) {
//       return 0;
//   }
//   console.log(x)
//   const index = new Map();
//   let y = 0, res = nums.length;
//   for (let i = 0; i < nums.length; i++) {
//       index.set(y, i); // f[i] mod p = y，因此哈希表记录 y 对应的下标为 i
//       y = (y + nums[i]) % p;
//       console.log((y + p) % p - x)
//       if (index.has((y - x + p) % p)) {
//           res = Math.min(res, i - index.get((y - x + p) % p) + 1);
//       }
//   }
//   return res === nums.length ? -1 : res;
// };


// console.log(minSubarray([3,1,4,2], 6), "1")
// console.log(minSubarray([6,3,5,2], 9), "2")
// console.log(minSubarray([1,2,3], 3), "0")
// console.log(minSubarray([4,4,2], 7), "-1")
console.log(minSubarray([26,19,11,14,18,4,7,1,30,23,19,8,10,6,26,3], 26), "3")
