/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var prevPermOpt1 = function(arr) {
  let l = arr.length
  for(let i = l - 2; i >= 0; i--) {
    if(arr[i] > arr[i + 1]) {
      let j = l - 1
      while(arr[j] >= arr[i] || arr[j] === arr[j - 1]) {
        j--
      }
      [arr[i], arr[j]] = [arr[j], arr[i]]
      break;
    }
  }
  return arr
};
