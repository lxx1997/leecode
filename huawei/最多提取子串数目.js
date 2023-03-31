const maxChildreNum = (str1, str2) => {
  let number = 0
  const dfs = (str,nexTsT, l) => {
    for(let i = l; i  < str1.length; i++) {
      if(str1[i] === nexTsT) {
        const s = str + nexTsT
        if(s === str2) {
          number++
        } else {
          dfs(s, str2[s.length], i)
        }
      }
    }
  }
  for(let i = 0; i < str1.length; i++) {
    if(str1[i] === str2[0]) {
      dfs(str2[0], str2[1], i)
    }
  }
  return number
} 

console.log(maxChildreNum("badc", "bac"), 1)
console.log(maxChildreNum("badcc", "bac"), 2)
console.log(maxChildreNum("baadcc", "bac"), 4)