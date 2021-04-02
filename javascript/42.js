// 42. 接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// var trap = function(height) {
//   let l_max = [height[0]]
//   let r_max = []
//   for(let i = 1; i < height.length; i++) {
//     l_max[i] = Math.max(height[i], l_max[i-1])
//   }
//   r_max[height.length - 1] = height[height.length - 1]
//   for(let i = height.length - 2; i >= 0; i--) {
//     r_max[i] = Math.max(height[i],r_max[i+1])
//   }
//   return l_max.reduce((total, item, index) => {
//     total += (Math.min(item, r_max[index]) - height[index])
//     return total
//   }, 0) || 0
// };

// var trap = function(height) {
//   let max = 0, total = 0, left = 0, right = height.length - 1
//   let l_max = height[left], r_max = height[right]
//   for(let i = 1; i < height.length; i++) {
//     max = height[max] > height[i] ? max : i
//   }
//   while(left < max) {
//     if(l_max < height[left]) l_max = height[left]
//     else total += (l_max - height[left])
//     left++
//   }
//   while(max < right) {
//     if(r_max < height[right]) r_max = height[right]
//     else total += (r_max - height[right])
//     right--
//   }
//   return total
// }

var trap = function(height) {
  let total = 0, left = 0, right = height.length - 1
  let l_max = height[left], r_max = height[right]
  while(left < right) {
    if(l_max <= r_max) {
      l_max < height[left] ? 
        (l_max = height[left])
        : (total += (l_max-height[left]))
      left++
    }
    if(l_max > r_max) {
      r_max < height[right] ? 
        (r_max = height[right])
        : (total += (r_max-height[right]))
      right--
    }
  }
  return total
}
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([]))