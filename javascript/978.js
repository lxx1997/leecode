// 978. 最长湍流子数组
// 当 A 的子数组 arr[i], arr[i+1], ..., arr[j] 满足下列条件时，我们称其为湍流子数组：
// 若 i <= k < j，当 k 为奇数时， arr[k] > arr[k+1]，且当 k 为偶数时，arr[k] < arr[k+1]；
// 或 若 i <= k < j，当 k 为偶数时，arr[k] > arr[k+1] ，且当 k 为奇数时， arr[k] < arr[k+1]。
// 也就是说，如果比较符号在子数组中的每个相邻元素对之间翻转，则该子数组是湍流子数组。
// 返回 A 的最大湍流子数组的长度。

var maxTurbulenceSize = function(arr) {
  let length = arr.length
  if(length <= 1) return length
  if(length === 2) return arr[1] === arr[0] ? 1 : 2
  let first = [], maxFirst = 0, second = [], maxSecond = 0
  for(let i = 0; i < length - 1; i++) {
    if(arr[i] < arr[i+1]) {
      if(i%2 === 0) {
        first.push(arr[i])
        second.length > 0 && second.push(arr[i]) && (maxSecond = Math.max(maxSecond, second.length)) && (second = [])
      } else {
        second.push(arr[i])
        first.length > 0 && first.push(arr[i]) && (maxFirst = Math.max(maxFirst, first.length)) && (first = [])
      }
    } else if (arr[i] > arr[i + 1]) {
      if(i%2 == 0) {
        second.push(arr[i])
        first.length > 0 && first.push(arr[i]) && (maxFirst = Math.max(maxFirst, first.length)) && (first = [])
      } else {
        first.push(arr[i])
        second.length > 0 && second.push(arr[i]) && (maxSecond = Math.max(maxSecond, second.length)) && (second = [])
      }
    } else {
      first.push(arr[i]) && (maxFirst = Math.max(maxFirst, first.length)) && (first = [])
      && second.push(arr[i]) && (maxSecond = Math.max(maxSecond, second.length)) && (second = [])
    }
    console.log(second, first, 'second', 'first', i)
  }
  first.length > 0 && first.push(arr[length -1])
  second.length > 0 && second.push(arr[length -1])
  maxFirst = Math.max(maxFirst, first.length)
  maxSecond = Math.max(maxSecond, second.length)
  return Math.max(maxFirst, maxSecond)
};


console.log(maxTurbulenceSize([100,100,100]))