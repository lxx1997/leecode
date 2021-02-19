// 11. 盛最多水的容器

// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水
var maxArea = function(height) {
  let length = height.length
  let max = 0
  let right = length - 1, left = 0
  while(left < length) {
    if(height[left] <= height[right]) {
      max = Math.max(max, height[left] * (right - left))
      left++
    } else {
      while(height[left] > height[right]) {
        max = Math.max(max, height[right] * (right - left))
        right--
      }
      max = Math.max(max, height[left] * (right - left))
      left++
    }
  }
  return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))