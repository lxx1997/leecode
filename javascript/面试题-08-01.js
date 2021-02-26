// 面试题 08.01. 三步问题
// 三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。
var waysToStep = function(n) {
  let nums = new Array(n + 2).fill(1)
  nums[2] = 2
  for(let i = 3;i <= n; i++) {
    nums[i] = (nums[i-1] + nums[i-2] + nums[i - 3]) % 1000000007
  }
  return nums[n] % 1000000007
};

console.log(waysToStep(3), 4)
console.log(waysToStep(5), 13)