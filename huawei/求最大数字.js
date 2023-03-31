const maxNumber = (str) => {
  let hash = new Map()
  let newStr = ""
  for(let i = 0; i < str.length; i++) {
    if(hash.has(str[i])) {
      if(hash.get(str[i]) === 2) {
        let newStr1 = ""
        for(let i = 0; i < newStr.length; i++) {
          if(newStr[i] === str[i] && i < newStr.length) {
            if(+newStr[i+1] <= newStr[i]) {
              newStr1 += newStr[i]
            } else {
              newStr1 += newStr.substring(i + 1) 
              break;
            }
          } else {
            newStr1 += newStr[i]
          }
        }
        if(newStr1.length < newStr.length) {
          newStr = newStr1 + str[i]
        }
      } else {
        hash.set(str[i], hash.get(str[i]) + 1)
        newStr += str[i]
      }
    } else {
      hash.set(str[i], 1)
      newStr += str[i]
    }
  }
 
  return newStr
}
console.log(maxNumber("34533"))
console.log(maxNumber("3445343"))
console.log(maxNumber("453433"))