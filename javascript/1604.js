/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
 var canFormArray = function(arr, pieces) {
  for(let i = 0; i < pieces.length; i++) {
    let item = pieces[i]
    let ite = item[0], l = item.length
    let index = arr.indexOf(ite)
    if(index === -1) {
      return false
    }
    for(let j = 1; j < l; j++) {
      if(item[j] !== arr[index + j]) {
        return false
      }
    }
  }
  return true
};