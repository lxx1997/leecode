// 403. 青蛙过河
// 一只青蛙想要过河。 假定河流被等分为若干个单元格，并且在每一个单元格内都有可能放有一块石子（也有可能没有）。 青蛙可以跳上石子，但是不可以跳入水中。

// 给你石子的位置列表 stones（用单元格序号 升序 表示）， 请判定青蛙能否成功过河（即能否在最后一步跳至最后一块石子上）。

// 开始时， 青蛙默认已站在第一块石子上，并可以假定它第一步只能跳跃一个单位（即只能从单元格 1 跳至单元格 2 ）。

// 如果青蛙上一步跳跃了 k 个单位，那么它接下来的跳跃距离只能选择为 k - 1、k 或 k + 1 个单位。 另请注意，青蛙只能向前方（终点的方向）跳跃。
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones,i = 1, step = 1, preStep = stones[1]) {
  if(i === 1) {
    if(stones[1] - stones[0] !== 1) return false
  }
  for(i += 1; i < stones.length; i++) {
    let nextStep = stones[i] - preStep
    if(i === stones.length - 1 && nextStep < step - 1) {
      return false
    }
    if(i === stones.length - 1 && nextStep <= step + 1) {
      return true
    }
    if(i === stones.length - 1 && nextStep > step + 1) {
      return false
    }
    if(nextStep >= step - 1 && nextStep <= step +1) {
      if(canCross(stones, i, nextStep, stones[i])) {
        return true
      }
    }
  }
  return false
};
console.log(canCross([0,1,3,5,6,8,12,17]), true)
console.log(canCross([0,1,2,3,4,8,9,11]), true)
console.log(canCross([0,1,3,6,10,15,16,21]), true)