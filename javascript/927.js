/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var threeEqualParts = function(arr) {
  let i = -1, j = -1
  let oneNum = arr.filter(i => i === 1).length
  if(!oneNum) return [0, arr.length - 1]
  if(oneNum % 3 !== 0) return [i, j]
  let first = -1, second = -1, third = -1, num = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 1) {
      num++
      if(first === -1) {
        first = i
      } else if(second === -1 && num === oneNum / 3 + 1) {
        second = i
      } else if(third === -1 && num === oneNum / 3 * 2 +1) {
        third = i
      }
    }
  }
  let thirdStr = arr.slice(third).join("")
  let secondStr = arr.slice(second, third).join("")
  let firstStr = arr.slice(first, second).join("")
  if(firstStr.includes(thirdStr) && secondStr.includes(thirdStr)) {
    i = first + thirdStr.length - 1
    j = second + thirdStr.length
  }
  return [i, j]
};
