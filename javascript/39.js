// 39. 组合总和
// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的数字可以无限制重复被选取。
// 说明：
// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。 
var combinationSum = function(candidates, target) {
  let dis = (total,arr, index, group = []) => {
    for(let i = index; i < candidates.length; i++) {
      if(total + candidates[i] < target) {
        dis(total + candidates[i], [...arr, candidates[i]], i, group)
      } else if (total + candidates[i] === target) {
          let newarr = [...arr, candidates[i]]
        if(!group.some(item => isEquire(item, newarr))) {
            group.push(newarr)
        }
        dis(total, [...arr], i + 1, group)
      }
    }
  }
  function isEquire(arr1, arr2) {
      return arr1.toString() === arr2.toString()
  }
  let group = []
  for(let i = 0; i < candidates.length; i++) {
    if(candidates[i] === target) {
      group.push([candidates[i]])
    } else {
      dis(candidates[i], [candidates[i]], i, group)
    }
  }
  return group
};

console.log(combinationSum([2,7,6,3,5,1],9))
console.log(combinationSum([2,3,6,7],7))