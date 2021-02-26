// 70. 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。
var climbStairs = function(n) {
  let nums = new Array(n + 1)
  nums[0] = nums[1] = 1
  for(let i = 2;i <= n; i++) {
    nums[i] = nums[i-1] + nums[i - 2]
  }
  return nums[n]
};

console.log(climbStairs(2), 2)
console.log(climbStairs(3), 3)
console.log(climbStairs(1), 1)