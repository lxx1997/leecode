// /**
//  * @param {string[]} array
//  * @return {string[]}
//  */
var findLongestSubarray = function(array) {
  const checkNum = (str) => {
    str = +str
    return !isNaN(str) && typeof str === "number"
  }
  const numHash = new Map(), strHash = new Map()
  for(let i = 0; i < array.length; i++) {
    let str = array.slice(0, i + 1).join(",")
    let beforeStr = array.slice(0, i).join(",")
    let isNum = checkNum(array[i])
    if(isNum) {
      numHash.set(str, (numHash.get(beforeStr) || 0) + 1 )
      strHash.set(str, (strHash.get(beforeStr) || 0) )
    } else {
      strHash.set(str, (strHash.get(beforeStr) || 0) + 1 )
      numHash.set(str, (numHash.get(beforeStr) || 0) )
    }
  }
  let maxLen = 0, maxArr = ""
  const checkEqual = (str1, str2) => {
    let str = strHash.get(str1) - (strHash.get(str2) || 0)
    let num = numHash.get(str1) - (numHash.get(str2) || 0)
    return str === num
  }
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      let allStr = array.slice(0, j + 1).join(",")
      let str = array.slice(i, j + 1).join(",")
      let beforetr = array.slice(0, i).join(",")
      if(checkEqual(allStr, beforetr)) {
        let length = j - i + 1
        if(maxLen < length) {
          maxLen = length
          maxArr = str
        }
      }
    }
  }
  return maxArr.split(",").filter(item => item)
};

/**
 * @param {string[]} array
 * @return {string[]}
 */
// // 也是用前缀和的方法
//  var findLongestSubarray = function(array) {
//   const checkNum = (str) => {
//     str = +str
//     return !isNaN(str) && typeof str === "number"
//   }
//   let num = 0, max = 0, maxArr = []
//   let hash = new Map()
//   hash.set(0, -1)
//   for(let i = 0; i < array.length; i++) {
//     if(checkNum(array[i])) {
//       num++
//     } else {
//       num--
//     }
//     if(hash.has(num)) {
//       let length = i - hash.get(num)
//       if(length > max) {
//         max = length
//         maxArr = array.slice(hash.get(num) + 1, i + 1)
//       }
//     } else {
//       hash.set(num, i)
//     }
//   }
//   return maxArr
// };

console.log(findLongestSubarray(["A","1","B","C","D","2","3","4","E","5","F","G","6","7","H","I","J","K","L","M"]), ["A","1","B","C","D","2","3","4","E","5","F","G","6","7"])
console.log(findLongestSubarray(["A","A"]), [])
console.log(findLongestSubarray(["42","10","O","t","y","p","g","B","96","H","5","v","P","52","25","96","b","L","Y","z","d","52","3","v","71","J","A","0","v","51","E","k","H","96","21","W","59","I","V","s","59","w","X","33","29","H","32","51","f","i","58","56","66","90","F","10","93","53","85","28","78","d","67","81","T","K","S","l","L","Z","j","5","R","b","44","R","h","B","30","63","z","75","60","m","61","a","5","S","Z","D","2","A","W","k","84","44","96","96","y","M"]), ["52","3","v","71","J","A","0","v","51","E","k","H","96","21","W","59","I","V","s","59","w","X","33","29","H","32","51","f","i","58","56","66","90","F","10","93","53","85","28","78","d","67","81","T","K","S","l","L","Z","j","5","R","b","44","R","h","B","30","63","z","75","60","m","61","a","5"])