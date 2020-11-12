// 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

// 必须原地修改，只允许使用额外常数空间。

// 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

// 通过次数104,544提交次数296,467

var nextPermutation = function(nums) {
  function getAllNum(nums) {
    var newNums = []
    for(let i = 0; i < nums.length; i++) {
      let newNum = [...nums]
      newNum[i] = newNum.splice(0, 1, newNum[i])[0]
      for(let j = 1; j < newNum.length; j++) {
        let num = [...newNum]
        num[1] = num.splice(j, 1, num[1])[0]
        newNums = JSON.parse(JSON.stringify([...newNums, num]))
      }
    }
    return newNums
  }
  let next = ''
  let newN = getAllNum(nums).sort((a,b) => parseInt(a.join('') - parseInt(b.join(''))))
    .map((item, index) => {
      if(item.join('') === nums.join('')) {
        next = index
      }
      return item
    })
    if(next === newN.length - 1) {
      return nums.reverse()
    } else{
      return newN[next + 1]
    }
};
nums = [1,2,3]
console.log(nextPermutation(nums))

// function getAllNum(nums) {
//   var newNums = []
//   for(let i = 0; i < nums.length; i++) {
//     let newNum = [...nums]
//     newNum[i] = newNum.splice(0, 1, newNum[i])[0]
//     console.log(newNum)
//     for(let j = 1; j < newNum.length; j++) {
//       let num = [...newNum]
//       num[1] = num.splice(j, 1, num[1])[0]
//       newNums = JSON.parse(JSON.stringify([...newNums, num]))
//     }
//   }
//   return newNums
// }
// nums = [1,3,2]
// console.log(getAllNum(nums))