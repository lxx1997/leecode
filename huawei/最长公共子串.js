/**
 * 
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 * @description: 如果要输出最终的公告子串1内容， hash 内存储的改为 字符串即可
 */
const maxChildLength = (str1, str2) => {
  const hash = new Array(str1.length + 1).fill(0).map(item => new Array(str2.length + 1).fill(0))
  let max = 0
  for(let i = 0; i < str1.length; i++) {
    for(let j = 0; j < str2.length; j++) {
      if(str1[i] === str2[j]) {
        hash[i + 1][j + 1] = hash[i][j] + 1
      } else {
        hash[i + 1][j + 1]
      }
      if(max < hash[i+1][j+1]) {
        max = hash[i+1][j+1]
      }
    }
  }
  return max
}

console.log(maxChildLength("blues", "cblues"))