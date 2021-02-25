// 703. 数据流中的第 K 大元素
// 设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

// 请实现 KthLargest 类：

// KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
// int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  if(nums.length <= k) {
    this.list = nums.sort((a,b) => a- b)
  } else {
    nums = nums.sort((a,b) => a- b)
    this.list = nums.slice(nums.length - k,nums.length)
  }
  this.k = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  let list = this.list
  if(list.length < this.k) {
    list.push(val)
    list = list.sort((a,b) => a- b)
  } else {
    if(val > list[this.k - 1]) {
      list.shift()
      list.push(val)
    } else if(val > list[0]) {
      list.shift()
      for(let i = 0; i < this.k - 1; i++) {
        if(val < list[i]) {
          list.splice(i, 0, val)
          break
        }
      }
    }
  }
  this.list = list
  return list[0]
};

const k = new KthLargest(3, [4,5,8,2])
console.log(k.add(4))
console.log(k.add(5))
console.log(k.add(10))
console.log(k.add(9))
console.log(k.add(4))
