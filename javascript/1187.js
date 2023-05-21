/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
  let times = -1
  for(let i = 1; i < arr1.length; i++) {
    let compare = arr1[i - 1]
    let min = Infinity
    for(let j = 0; j < arr2.length; j++) {
      if(arr2[j] > compare) {
        min = Math.min(arr2[j], min)
      }
    }
    if(min !== Infinity) {
      if(!(arr[i] > compare && arr[i] <= min)) {
        times++
      }
    } else {
      if(arr[i] > compare) {
        return times
      } else {
        return -1
      }
    }
  }
  return times
};