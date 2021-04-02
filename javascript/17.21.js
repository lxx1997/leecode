// 面试题 17.21. 直方图的水量
// 给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。

/**
 * @param {number[]} height
 * @return {number}
 */
// hash表
var trap = function(height) {
  let length = height.length, total = 0
  let leftMax = [], rightMax = [height[0]]
  leftMax[length-1] = height[length - 1]
  for(let i = 1; i < length; i++) {
    rightMax[i] = Math.max(rightMax[i- 1], height[i])
  }
  for(let i = length - 2; i > 0; i--) {
    leftMax[i] = Math.max(leftMax[i + 1], height[i])
    total += (Math.min(leftMax[i], rightMax[i]) - height[i])
  }
  return total
};
// 双指针
var trap = function(height, length = height.length) {
  let left = 0, right = length - 1, total = 0
  let leftMax = height[left], rightMax = height[right]
  while(left < right) {
    if(height[left] > leftMax) leftMax = height[left]
    if(height[right] > rightMax) rightMax = height[right]
    if(leftMax > rightMax) {
      total += (rightMax - height[right--])
    } else {
      total += (leftMax - height[left++])
    }
  }
  return total
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]), 6)
console.log(trap([0,1,0,5,1,0,6,3,2,1,2,1]), 11)