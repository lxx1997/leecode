/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
 var constructArray = function(n, k) {
  let index = k + 1
  let arr = [], i = 1
  while(i < index - i + 1) {
    arr.push(i, index - i + 1)
    i++
  }
  if(i === index - i + 1) {
      arr.push(i)
  }
  while(index < n) {
    index++
    arr.push(index)
  }
  return arr
};