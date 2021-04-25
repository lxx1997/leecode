// 75. 颜色分类
// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色

var sortColors = function(nums) {
  let hash = [0, 0, 0]
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) hash[0]++
    if(nums[i] === 1) hash[1]++
    if(nums[i] === 2) hash[2]++
  }
  let k = 0
  while(hash[0]-- >= 0) {
    nums[k++] = 0
  }
  while(hash[1]-- >= 0) {
    nums[k++] = 0
  }
  while(hash[2]-- >= 0) {
    nums[k++] = 0
  }
};