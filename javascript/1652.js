/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
 var decrypt = function(code, k) {
  if(k === 0) return code.map(item => 0)
  const code1 = [...code], length = code.length
  if(k > 0) {
    return code1.map((item, index) => {
      let total = 0
      for(let i = index + 1; i <= k+index; i++) {
        total += code[i % length]
      }
      return total
    })
  }
  if(k < 0) {
    return code1.map((item, index) => {
      let total = 0
      for(let i = index - 1; i >= index + k; i--) {
        total += code[(length + i) % length]
      }
      return total
    })
  }
};