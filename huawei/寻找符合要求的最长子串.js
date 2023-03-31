const maxLengthString = (str, s) => {
  let max = 0
  let left = 0; right = 0, hash = new Map()
  while(left <= right && right < str.length) {
    if(str[right] !== s) {
      if(hash.has(str[right])) {
        let num = hash.get(str[right])
        if(num === 2) {
          max = Math.max(max, right - left + 1)
          while(left < right) {
            if(str[left] === str[right]) {
              hash.set(str[left], hash.get(str[left]) - 1)
              left++
              break;
            } else {
              hash.set(str[left], hash.get(str[left]) - 1)
              left++
            }
          }
        } else {
          hash.set(str[right], num + 1)
        }
      } else {
        hash.set(str[right], 1)
      }
      right++
    } else {
      max = Math.max(max, right - left)
      right++
      left = right
      hash = new Map()
    }
  }
  return max = Math.max(max, right - left)
}

console.log(maxLengthString("abcd324234dhfgh123", "d"))