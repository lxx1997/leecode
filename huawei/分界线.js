const split = (str1, str2) => {
  str1 = str1.replace(/ /g, "")
  str2 = str2.replace(/ /g, "")
  let hash = {}
  for(let i = 0; i < str1.length; i++) {
    if(!hash[str1[i]]) {
      hash[str1[i]] = 1
    } else {
      hash[str1[i]]++
    }
    if(!hash[str2[i]]) {
      hash[str2[i]] = -1
    } else {
      hash[str2[i]]--
    }
  }
  return Object.values(hash).every(item => item === 0)
}

console.log(split("zxcbnmv asdfghjkl qwertyuiop", "zcxvbmn fdajgkhl rueiwoqpty"))