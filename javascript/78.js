// 78. 子集
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

var subsets = function(nums) {
  let children = [[]]
  let length = nums.length
  for(let i = 0; i < length; i++) {
    let arr = [[nums[i]]]
    for(let j = i + 1; j < length; j++) {
      let arr1 = JSON.parse(JSON.stringify(arr))
      arr = arr.concat(arr1.map(item => {
        item.push(nums[j])
        return item
      }))
    }
    children = children.concat(arr)
  }
  return children
};

subsets([0])
subsets([1,2,3])
