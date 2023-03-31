const func = (str) => {
  const hash = new Array(str.length).fill(0)
  for(let i = 0; i < str.length; i++) {
    if(str[i] === "M") {
      if(i > 0) {
        if(str[i + 1] !== "I" && str[i-1] !== 'I') {
          return -1
        } else if(str[i + 1] === "I") {
          if(!hash[i+1]) {
            hash[i+1] = 1
          }
        } else {
          if(!hash[i-1]) {
            hash[i-1] = 1
          }
        }
      } else {
        if(str[i + 1] !== "I") {
          return -1
        } else {
          hash[i + 1] = 1
        }
      }
    }
  }
  return hash.filter(i => i).length
}

console.log(func("IMIMMIMMI", 3))
console.log(func("MIIM", 2))