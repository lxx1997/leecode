/**
 * 
 * @param {*} arr 
 * @returns 
 * @description:
 * 思路相当简单
 * 首先计算出给定数组的和，以及对给定数组按照从大到小的顺序排列
 * 然后从数组最大的数到数组和开始进行求余计算，如果求余为零，说明可以分成n个等和子集
 * 接下来使用一个数组来缓存已组合过的数字，然后从数组的开头和结尾进行数组组合，排除掉已经组合过的数字
 * 第一个满足的就是最小和，如果都不满足，就是数组的和
 */

const minSum = (arr) => {
  let total = arr.reduce((total, item) => total += item, 0)
  arr = arr.sort((a, b) => b - a)
  for(let i = arr[0]; i < total; i++) {
    if(total % i === 0) {
      let hasChooseArr = new Array(arr.length).fill(0)
      for(let j = 0; j < arr.length; j++) {
        hasChooseArr[j] = 1
        if(arr[j] !== i) {
          let reset = i - arr[j]
          for(let k = j+1; k < arr.length && reset > 0; k--) {
            if(!hasChooseArr[k] && arr[k] <= reset) {
              reset -= arr[k]
              hasChooseArr[k] = 1
            }
          }
        }
      }
      if(hasChooseArr.every(item => item)) {
        return i
      }
    }
  }
  return total
}


function canPartitionKSubsets(nums, k){

  // 备忘录
  let memo = new Map()


  // 回溯算法核心函数，遍历子集问题的回溯树
  // k: 拆分捅的个数， bucket: 当前捅的和, nums: 数组内容, start: 开始， used， target: 每个捅的和
  const backtrack = (k, bucket, nums, start, used, target) => {

      // base case
      if (k == 0) {
          // 所有桶都被装满了，而且 nums 一定全部用完了
          return true;
      }

      // base case，超过目标和，停止向下遍历
      if (bucket == target) {
          // 装满了当前桶，递归穷举下一个桶的选择
          // 让下一个桶从 nums[0] 开始选数字
          let res = backtrack(k - 1, 0, nums, 0, used, target);
          // 缓存结果
          memo.set(used, res)
          return res;
      }

      if (memo.has(used)) {
          // 避免冗余计算
          return memo.get(used);
      }

      // 回溯算法标准框架
      for (let i = start; i < nums.length; i++) {
          // 剪枝
          if (((used >> i) & 1) == 1) { // 判断第 i 位是否是 1
              // nums[i] 已经被装入别的桶中
              continue;
          }
          if (nums[i] + bucket > target) {
              continue;
          }
          // 做选择
          used |= 1 << i; // 将第 i 位置为 1
          bucket += nums[i];

          // 递归穷举下一个数字是否装入当前桶
          if (backtrack(k, bucket, nums, i + 1, used, target)) {
              return true;
          }

          // 撤销选择
          used ^= 1 << i; // 使用异或运算将第 i 位恢复 0
          bucket -= nums[i];
      }
      return false;
  }

  // -----------------开始主函数-------------
  // 排除一些基本情况
  if (k > nums.length) return false;
  let sum = 0;
  for (let v of nums) sum += v;
  if (sum % k != 0) return false;

  let used = 0; // 使用位图技巧
  let target = sum / k;
  // k 号桶初始什么都没装，从 nums[0] 开始做选择
  return backtrack(k, 0, nums, 0, used, target);

};
console.log(minSum([4,3,2,3,5,2,1]))